"use client";

import { cn } from "@/lib/cn";

export function BlobBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className="animate-float absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, #8BA888 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-float-reverse absolute top-1/3 -left-48 h-[400px] w-[400px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, #C4714A 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-pulse-glow absolute -bottom-20 right-1/4 h-[350px] w-[350px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #2C4A3E 0%, transparent 70%)",
        }}
      />
      <div
        className="animate-gradient absolute inset-0 opacity-[0.03]"
        style={{
          background:
            "linear-gradient(135deg, #8BA888, #C4714A, #2C4A3E, #8BA888)",
        }}
      />
    </div>
  );
}
