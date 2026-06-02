import { useEffect, useMemo, useRef } from "react";

const ELFSIGHT_SCRIPT_ID = "elfsight-platform-script";
const ELFSIGHT_SCRIPT_SRC = "https://apps.elfsight.com/p/platform.js";

function normalizeWidgetId(raw: string | undefined): string {
  if (!raw) return "";
  return raw.trim().replace(/^elfsight-app-/, "");
}

function loadElfsightPlatform(): Promise<void> {
  const existing = document.getElementById(ELFSIGHT_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing?.dataset.loaded === "true") {
    return Promise.resolve();
  }

  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Elfsight script failed to load")), {
        once: true,
      });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = ELFSIGHT_SCRIPT_ID;
    script.src = ELFSIGHT_SCRIPT_SRC;
    script.defer = true;
    script.async = true;
    script.addEventListener(
      "load",
      () => {
        script.dataset.loaded = "true";
        resolve();
      },
      { once: true },
    );
    script.addEventListener("error", () => reject(new Error("Elfsight script failed to load")), {
      once: true,
    });
    document.body.appendChild(script);
  });
}

export default function ElfsightGoogleReviews() {
  const widgetId = useMemo(
    () => normalizeWidgetId(import.meta.env.VITE_ELFSIGHT_WIDGET_ID),
    [],
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetId || !containerRef.current) return;

    let cancelled = false;

    loadElfsightPlatform()
      .then(() => {
        if (cancelled) return;
        // Re-scan the DOM so the widget mounts after client-side navigation.
        const eapps = (window as Window & { eapps?: { init?: () => void } }).eapps;
        eapps?.init?.();
      })
      .catch(() => {
        // Elfsight also auto-inits via platform.js; fail silently in production.
      });

    return () => {
      cancelled = true;
      document.getElementById(ELFSIGHT_SCRIPT_ID)?.remove();
    };
  }, [widgetId]);

  if (!widgetId) {
    if (import.meta.env.DEV) {
      return (
        <p className="text-center text-sm text-foreground/60">
          Set <code className="text-xs">VITE_ELFSIGHT_WIDGET_ID</code> in <code className="text-xs">.env</code>{" "}
          and restart the dev server.
        </p>
      );
    }
    return null;
  }

  return (
    <div className="mx-auto flex w-full max-w-[1100px] justify-center">
      <div ref={containerRef} className="w-full min-h-[280px]">
        <div className={`elfsight-app-${widgetId}`} data-elfsight-app-lazy />
      </div>
    </div>
  );
}
