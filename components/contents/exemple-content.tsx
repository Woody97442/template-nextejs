"use client";
import React, { useState, useTransition } from "react";

export default function ExempleContent() {
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return (
      <div className="text-center flex flex-col gap-4 justify-center items-center">
        <span>
          Chargement <span className="dot-anim fixed-width"></span>
        </span>
      </div>
    );
  }

  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8"></main>
  );
}
