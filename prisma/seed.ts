import { PrismaClient, WorkflowType, RecipientType, UserRole } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const tenant = await prisma.tenant.upsert({
    where: { id: 'seed-tenant' },
    update: {},
    create: {
      id: 'seed-tenant',
      name: 'Employbridge Demo',
    },
  })

  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { role: UserRole.ADMIN },
    create: {
      tenantId: tenant.id,
      email: 'admin@example.com',
      displayName: 'Admin User',
      role: UserRole.ADMIN,
    },
  })

  const hrGroup = await prisma.recipient.upsert({
    where: { id: 'seed-recipient-hr' },
    update: {},
    create: {
      id: 'seed-recipient-hr',
      tenantId: tenant.id,
      displayName: 'HR Group',
      type: RecipientType.GROUP,
      email: 'hr@example.com',
      tags: { department: 'HR' },
    },
  })

  const missedPunchWorkflow = await prisma.workflow.upsert({
    where: { id: 'seed-wf-missed' },
    update: {},
    create: {
      id: 'seed-wf-missed',
      tenantId: tenant.id,
      name: 'Missed Punch Notification',
      type: WorkflowType.NOTIFY,
      params: {
        channels: ['email'],
        recipients: [hrGroup.id],
        template: 'Missed punch reported from kiosk',
      },
    },
  })

  const faqWorkflow = await prisma.workflow.upsert({
    where: { id: 'seed-wf-faq' },
    update: {},
    create: {
      id: 'seed-wf-faq',
      tenantId: tenant.id,
      name: 'FAQ Assistant',
      type: WorkflowType.FAQ,
      params: {
        url: 'https://assistant.example.com/faq?tenant=seed-tenant',
      },
    },
  })

  const kiosk = await prisma.kiosk.upsert({
    where: { id: 'seed-kiosk' },
    update: {},
    create: {
      id: 'seed-kiosk',
      tenantId: tenant.id,
      name: 'Front Lobby Kiosk',
      site: 'HQ',
      defaultLocale: 'en',
      theme: {
        primary: '#001166',
        secondary: '#9933EB',
        border: '#00EEBB',
      },
    },
  })

  const config = await prisma.config.upsert({
    where: { id: 'seed-config' },
    update: {},
    create: {
      id: 'seed-config',
      tenantId: tenant.id,
      name: 'Default Kiosk Layout',
      note: 'Seeded layout with sample tiles',
    },
  })

  await prisma.kiosk.update({
    where: { id: kiosk.id },
    data: { publishedConfigId: config.id },
  })

  const tilesData = [
    {
      id: 'seed-tile-missed',
      tenantId: tenant.id,
      order: 1,
      category: 'Timekeeping',
      icon: 'AlarmClock',
      labels: { en: 'Missed Punch', es: 'Fichaje Perdido' },
      workflowId: missedPunchWorkflow.id,
      configId: config.id,
    },
    {
      id: 'seed-tile-faq',
      tenantId: tenant.id,
      order: 2,
      category: 'Help',
      icon: 'HelpCircle',
      labels: { en: 'FAQ Assistant', es: 'Asistente de Preguntas' },
      workflowId: faqWorkflow.id,
      configId: config.id,
    },
  ]

  for (const t of tilesData) {
    await prisma.tile.upsert({
      where: { id: t.id },
      update: {},
      create: t,
    })
  }

  console.log('Seed completed')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


