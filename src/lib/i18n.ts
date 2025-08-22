import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      kioskTitle: "Employbridge Kiosk",
      admin: "Admin",
      search: "Search",
      language: "Language",
      tiles: {
        missedPunch: "Missed Punch",
        discussAssignment: "Discuss Assignment",
        nurseTriage: "Nurse Triage Number",
        benefits: "Benefits",
        newPaycard: "Need a new paycard",
        referral: "Submit a Referral",
        directDeposit: "Set up Direct Deposit",
        payStub: "Access my pay stub",
        textOut: "Text out line number",
        timeOff: "Request Time Off",
      },
    },
  },
  es: {
    translation: {
      kioskTitle: "Kiosco de Employbridge",
      admin: "Administración",
      search: "Buscar",
      language: "Idioma",
      tiles: {
        missedPunch: "Falta de marcación",
        discussAssignment: "Hablar de asignación",
        nurseTriage: "Número de clasificación de enfermería",
        benefits: "Beneficios",
        newPaycard: "Necesito una nueva tarjeta de pago",
        referral: "Enviar una referencia",
        directDeposit: "Configurar depósito directo",
        payStub: "Acceder a mi talón de pago",
        textOut: "Número de texto de salida",
        timeOff: "Solicitar tiempo libre",
      },
    },
  },
};

let initialized = false;

export function ensureI18n(locale: string = process.env.NEXT_PUBLIC_DEFAULT_LOCALE || "en") {
  if (initialized) return i18next;
  i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: locale,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
  initialized = true;
  return i18next;
}


