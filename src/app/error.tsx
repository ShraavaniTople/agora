"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Forward to your error tracking service (e.g. Sentry) once configured
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 text-center"
      style={{ background: "#080507" }}
    >
      <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#6321EE] mb-4">
        Something went wrong
      </p>
      <h1
        className="font-black text-white tracking-tight mb-4"
        style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
      >
        Unexpected error
      </h1>
      <p className="text-white/40 text-[15px] mb-10 max-w-sm leading-relaxed">
        An error occurred while loading this page. The issue has been logged.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl bg-[#6321EE] text-white text-[14px] font-semibold"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl text-white/60 text-[14px] font-semibold border border-white/10 hover:border-white/20"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
