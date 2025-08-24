// Performance monitoring utilities
export function trackPageView(pageName: string) {
  if (typeof window !== "undefined") {
    // Track page view
    console.log(`Page view: ${pageName}`);
    
    // You can integrate with analytics services here
    // Example: Google Analytics, PostHog, etc.
  }
}

export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    console.log(`Event: ${eventName}`, properties);
    
    // You can integrate with analytics services here
  }
}

export function trackError(error: Error, context?: string) {
  if (typeof window !== "undefined") {
    console.error(`Error tracked: ${error.message}`, { context, stack: error.stack });
    
    // You can integrate with error tracking services here
    // Example: Sentry, LogRocket, etc.
  }
}

export function trackPerformance(metric: string, value: number) {
  if (typeof window !== "undefined") {
    console.log(`Performance: ${metric} = ${value}ms`);
    
    // You can integrate with performance monitoring services here
  }
}

// Core Web Vitals tracking
export function trackCoreWebVitals() {
  if (typeof window !== "undefined" && "PerformanceObserver" in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            trackPerformance("LCP", entry.startTime);
          } else if (entry.entryType === "first-input") {
            const firstInputEntry = entry as PerformanceEntry & { processingStart: number };
            trackPerformance("FID", firstInputEntry.processingStart - entry.startTime);
          } else if (entry.entryType === "layout-shift") {
            const layoutShiftEntry = entry as PerformanceEntry & { value: number };
            trackPerformance("CLS", layoutShiftEntry.value);
          }
        }
      });

      observer.observe({ entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"] });
    } catch (error) {
      console.warn("PerformanceObserver not supported:", error);
    }
  }
}
