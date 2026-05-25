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

export function AdSenseConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [personalizedAds, setPersonalizedAds] = useState(true);

  useEffect(() => {
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
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-slate-950/45 px-4 py-5 backdrop-blur-sm sm:items-center">
      <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-950 shadow-2xl">
        <div className="flex gap-4 px-5 py-5 sm:px-7">
          <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
            !
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="text-base font-semibold sm:text-lg">
              Create a consent message for your sites
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              We use Google AdSense to show ads. You can choose whether we may
              use ad cookies and identifiers to support personalized ads on
              JharVision.
            </p>

            {showOptions ? (
              <div className="mt-5 rounded-md border border-slate-200 bg-slate-50 p-4">
                <label className="flex items-start gap-3 text-sm text-slate-700">
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
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <button
                  className="rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50"
                  onClick={() => setShowOptions(true)}
                  type="button"
                >
                  <span className="block h-20 rounded-md border border-slate-200 bg-slate-50 p-4">
                    <span className="mb-3 block h-3 w-24 rounded bg-slate-200" />
                    <span className="mb-2 block h-px bg-slate-300" />
                    <span className="mb-2 block h-px bg-slate-300" />
                    <span className="block h-px w-3/4 bg-slate-300" />
                  </span>
                  <span className="mt-3 block text-sm font-medium">
                    Manage options before choosing consent.
                  </span>
                </button>

                <button
                  className="rounded-lg border border-slate-200 bg-white p-4 text-left transition hover:border-blue-300 hover:bg-blue-50"
                  onClick={() => saveConsent("granted")}
                  type="button"
                >
                  <span className="flex h-20 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-3xl font-bold text-blue-600">
                    G
                  </span>
                  <span className="mt-3 block text-sm font-medium">
                    Consent to Google AdSense ads for this site.
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row sm:items-center sm:justify-end sm:px-7">
          <button
            className="rounded-md px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
            onClick={() => setIsVisible(false)}
            type="button"
          >
            Remind me later
          </button>
          <button
            className="rounded-md px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
            onClick={() => saveConsent("denied")}
            type="button"
          >
            Do not consent
          </button>
          <button
            className="rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            onClick={() =>
              saveConsent(personalizedAds ? "granted" : "denied")
            }
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
