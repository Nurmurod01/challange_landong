"use client";

export function DiamondBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="diamond-pattern">
        <div className="diamond diamond-1"></div>
        <div className="diamond diamond-2"></div>
        <div className="diamond diamond-3"></div>
        <div className="diamond diamond-4"></div>
        <div className="diamond diamond-5"></div>
        <div className="diamond diamond-6"></div>
      </div>
    </div>
  );
}
