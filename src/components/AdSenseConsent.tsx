"use client";

import { useEffect, useState } from "react";

type ConsentState = "granted" | "denied";

const ADSENSE_CLIENT = "ca-pub-3804157707008101";
const ADSENSE_SCRIPT_ID = "jharvision-adsense-script";
const CONSENT_STORAGE_KEY = "jharvision_ads_consent";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function updateGoogleConsent(consent: ConsentState) {
  const granted = consent === "granted" ? "granted" : "denied";

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };

  window.gtag("consent", "update", {
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    analytics_storage: "denied"
  });
}

function loadAdSense() {
  if (document.getElementById(ADSENSE_SCRIPT_ID)) {
    return;
  }

  const script = document.createElement("script");
  script.id = ADSENSE_SCRIPT_ID;
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
  document.head.appendChild(script);
}

function runWhenIdle(callback: () => void) {
  if ("requestIdleCallback" in window) {
    const idleId = window.requestIdleCallback(callback, { timeout: 2200 });

    return () => window.cancelIdleCallback(idleId);
  }

  const timeoutId = globalThis.setTimeout(callback, 900);

  return () => globalThis.clearTimeout(timeoutId);
}

export function AdSenseConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [personalizedAds, setPersonalizedAds] = useState(true);

  useEffect(() => {
    return runWhenIdle(() => {
      const savedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY) as
        | ConsentState
        | null;

      if (savedConsent) {
        updateGoogleConsent(savedConsent);

        if (savedConsent === "granted") {
          loadAdSense();
        }

        return;
      }

      setIsVisible(true);
    });
  }, []);

  function saveConsent(consent: ConsentState) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, consent);
    updateGoogleConsent(consent);
    setIsVisible(false);

    if (consent === "granted") {
      loadAdSense();
    }
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-950 shadow-[0_24px_70px_-28px_rgba(15,23,42,0.45)]">
        <div className="grid gap-4 px-4 py-4 sm:px-5 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="min-w-0">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                i
              </div>
              <div>
                <h2 className="text-sm font-semibold sm:text-base">
                  Ad privacy choices
                </h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                  JharVision uses Google AdSense to keep the site supported. You
                  can allow ad cookies for better ads, reject them, or manage
                  your choice anytime before continuing.
                </p>
              </div>
            </div>

            {showOptions ? (
              <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 sm:max-w-2xl">
                <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                  <input
                    checked={personalizedAds}
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                    onChange={(event) =>
                      setPersonalizedAds(event.target.checked)
                    }
                    type="checkbox"
                  />
                  <span>
                    Allow ad storage and personalized advertising signals for
                    Google AdSense.
                  </span>
                </label>
              </div>
            ) : (
              <p className="mt-3 text-xs leading-5 text-slate-500">
                This choice controls AdSense script loading on this browser.
              </p>
            )}
          </div>

          <div className="grid gap-2 sm:grid-cols-4 lg:min-w-[560px]">
            <button
              className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
              onClick={() => setIsVisible(false)}
              type="button"
            >
              Later
            </button>
            <button
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              onClick={() => setShowOptions((current) => !current)}
              type="button"
            >
              Options
            </button>
            <button
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              onClick={() => saveConsent("denied")}
              type="button"
            >
              Reject
            </button>
            <button
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              onClick={() =>
                saveConsent(personalizedAds ? "granted" : "denied")
              }
              type="button"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
