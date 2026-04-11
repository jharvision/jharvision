"use client";

import Link from "next/link";
import {
  AnimatePresence,
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion
} from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  JHARKHAND_FOUNDATION_LABEL,
  getJourneyBreakdown
} from "@/lib/journey";

const TIMELINE_DURATION_MS = 1800;
const LIVE_TIMER_DELAY_MS = 180;

function padTimeUnit(value: number) {
  return value.toString().padStart(2, "0");
}

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const timelineMilestones = useMemo(
    () => Array.from(new Set([2000, 2010, 2020, currentYear])),
    [currentYear]
  );

  const [timelineIndex, setTimelineIndex] = useState(0);
  const [showLiveTimer, setShowLiveTimer] = useState(prefersReducedMotion);
  const [journeyTime, setJourneyTime] = useState(() => getJourneyBreakdown(new Date()));

  const timelineFrameRef = useRef<number | null>(null);
  const liveTimerTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (prefersReducedMotion) {
      setTimelineIndex(timelineMilestones.length - 1);
      setShowLiveTimer(true);
      return;
    }

    const animationStart = performance.now();
    let lastStep = -1;

    const animateTimeline = (timestamp: number) => {
      const elapsed = timestamp - animationStart;
      const progress = Math.min(elapsed / TIMELINE_DURATION_MS, 1);
      const nextStep = Math.min(
        timelineMilestones.length - 1,
        Math.floor(progress * timelineMilestones.length)
      );

      if (nextStep !== lastStep) {
        lastStep = nextStep;
        setTimelineIndex(nextStep);
      }

      if (progress < 1) {
        timelineFrameRef.current = window.requestAnimationFrame(animateTimeline);
        return;
      }

      liveTimerTimeoutRef.current = window.setTimeout(() => {
        setShowLiveTimer(true);
      }, LIVE_TIMER_DELAY_MS);
    };

    timelineFrameRef.current = window.requestAnimationFrame(animateTimeline);

    return () => {
      if (timelineFrameRef.current) {
        window.cancelAnimationFrame(timelineFrameRef.current);
      }

      if (liveTimerTimeoutRef.current) {
        window.clearTimeout(liveTimerTimeoutRef.current);
      }
    };
  }, [prefersReducedMotion, timelineMilestones.length]);

  useEffect(() => {
    if (!showLiveTimer) {
      return;
    }

    const timerId = window.setInterval(() => {
      setJourneyTime(getJourneyBreakdown(new Date()));
    }, 1000);

    return () => window.clearInterval(timerId);
  }, [showLiveTimer]);

  const durationLabel = useMemo(
    () =>
      `${journeyTime.years} Years • ${journeyTime.months} Months • ${journeyTime.days} Days`,
    [journeyTime.days, journeyTime.months, journeyTime.years]
  );

  const clockLabel = useMemo(
    () =>
      `${padTimeUnit(journeyTime.hours)}:${padTimeUnit(journeyTime.minutes)}:${padTimeUnit(journeyTime.seconds)}`,
    [journeyTime.hours, journeyTime.minutes, journeyTime.seconds]
  );

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0B0B0B] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_20%),radial-gradient(circle_at_80%_20%,rgba(120,120,120,0.14),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(11,11,11,0)_36%,rgba(255,255,255,0.02))]" />
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255,255,255,0.24)_0.7px,transparent_0.7px)] [background-size:10px_10px]" />
          <m.div
            className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-[120px] sm:h-80 sm:w-80"
            animate={
              prefersReducedMotion
                ? undefined
                : { y: [0, -18, 0], scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }
            }
            transition={{
              duration: 7,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
          <m.div
            className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]"
            animate={
              prefersReducedMotion
                ? undefined
                : { x: [0, 18, 0], opacity: [0.08, 0.14, 0.08] }
            }
            transition={{
              duration: 9,
              repeat: prefersReducedMotion ? 0 : Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="relative px-4 pb-20 pt-28 sm:px-10 sm:pb-24 sm:pt-32">
          <div className="mx-auto flex min-h-[88svh] max-w-5xl flex-col items-center justify-center text-center">
            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#AAAAAA] shadow-[0_0_30px_rgba(255,255,255,0.06)] backdrop-blur"
            >
              Jharkhand • Since {JHARKHAND_FOUNDATION_LABEL}
            </m.div>

            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
              className="relative mt-8 w-full max-w-2xl"
            >
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-5 py-5 shadow-[0_0_50px_rgba(255,255,255,0.06)] backdrop-blur-sm sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#AAAAAA]">
                  Timeline
                </p>

                <div className="mt-4 min-h-[4.5rem] sm:min-h-[5.5rem]" aria-live="polite">
                  <AnimatePresence mode="wait">
                    {showLiveTimer ? (
                      <m.div
                        key="live-timer"
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -12, filter: "blur(10px)" }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="flex flex-col items-center gap-2"
                      >
                        <p className="text-lg font-semibold tracking-[-0.04em] text-white sm:text-2xl">
                          {durationLabel}
                        </p>
                        <p className="text-xl font-medium tracking-[0.22em] text-[#AAAAAA] sm:text-2xl">
                          {clockLabel}
                        </p>
                      </m.div>
                    ) : (
                      <m.div
                        key={`timeline-${timelineMilestones[timelineIndex]}`}
                        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -18, filter: "blur(10px)" }}
                        transition={{ duration: 0.24, ease: "easeOut" }}
                        className="relative flex items-center justify-center"
                      >
                        <span className="text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-6xl">
                          {timelineMilestones[timelineIndex]}
                        </span>
                        <m.span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 text-4xl font-semibold tracking-[-0.08em] text-white/10 sm:text-5xl lg:text-6xl"
                          animate={
                            prefersReducedMotion
                              ? undefined
                              : { x: [0, -1, 1, 0], opacity: [0.06, 0.14, 0.08, 0.06] }
                          }
                          transition={{
                            duration: 0.18,
                            repeat: prefersReducedMotion ? 0 : Infinity,
                            repeatDelay: 0.22,
                            ease: "linear"
                          }}
                        >
                          {timelineMilestones[timelineIndex]}
                        </m.span>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </m.div>

            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-10 max-w-4xl"
            >
              <div className="absolute inset-x-10 top-4 h-24 rounded-full bg-white/10 blur-[100px]" />
              <h1 className="relative text-3xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                Building Jharkhand&apos;s Tech Future
                <span className="block">Together 🚀</span>
              </h1>
            </m.div>

            <m.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
              className="mt-6 max-w-2xl text-base leading-8 text-[#AAAAAA] sm:text-lg"
            >
              An open-source platform where developers, students, and creators
              contribute, build, and grow together.
            </m.p>

            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
              className="mt-10 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:justify-center"
            >
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="/contribute"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_45px_rgba(255,255,255,0.18)] transition hover:shadow-[0_0_70px_rgba(255,255,255,0.26)] sm:w-auto"
                >
                  🚀 Start Contributing
                </Link>
              </m.div>

              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full sm:w-auto">
                <Link
                  href="#platform-overview"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_32px_rgba(255,255,255,0.05)] transition hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_0_48px_rgba(255,255,255,0.08)] sm:w-auto"
                >
                  👀 Explore Platform
                </Link>
              </m.div>
            </m.div>

            <m.p
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.42, ease: "easeOut" }}
              className="mt-8 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-[#AAAAAA] shadow-[0_0_24px_rgba(255,255,255,0.04)]"
            >
              Open-source • MIT Licensed • No fees • Real contributors
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
