"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { useLenis } from "@/app/providers";
import { startup } from "@/data/startup";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lenis = useLenis();
  const [prepared, setPrepared] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen) {
      dialog?.showModal();
      dialog?.querySelector("input")?.focus();
      lenis?.stop();
    } else {
      dialog?.close();
      lenis?.start();
    }
    return () => {
      lenis?.start();
    };
  }, [isOpen, lenis]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`AI project inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("description")}`,
    );
    window.location.href = `mailto:${startup.email}?subject=${subject}&body=${body}`;
    setPrepared(true);
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="inquiry-title"
      onCancel={onClose}
      onClose={() => {
        setPrepared(false);
        onClose();
      }}
      className="fixed inset-0 m-auto w-[calc(100%-2rem)] max-w-lg rounded-xl border border-brand-light-gray bg-brand-bg p-7 text-brand-black shadow-2xl backdrop:bg-black/60"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h2 id="inquiry-title" className="text-2xl font-semibold">
            Build with Ali Hamza AI
          </h2>
          <p className="mt-2 text-sm text-brand-muted">
            Tell us about the workflow you want to improve.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry"
          className="focus-ring rounded p-2"
        >
          <X size={20} />
        </button>
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
        <label className="flex flex-col gap-2 text-sm">
          Your name
          <input
            required
            name="name"
            autoComplete="name"
            className="focus-ring rounded-md border border-brand-light-gray bg-white p-3"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="focus-ring rounded-md border border-brand-light-gray bg-white p-3"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm">
          Your idea
          <textarea
            required
            minLength={10}
            name="description"
            rows={4}
            className="focus-ring rounded-md border border-brand-light-gray bg-white p-3"
          />
        </label>
        <p className="text-xs leading-relaxed text-brand-muted">
          This opens your email app with your inquiry filled in. Send the email there, or contact{" "}
          <a href={`mailto:${startup.email}`} className="underline">
            {startup.email}
          </a>{" "}
          directly.
        </p>
        <button
          type="submit"
          className="focus-ring flex items-center justify-center gap-3 rounded-md bg-brand-black p-3 text-sm text-white"
        >
          Prepare email <ArrowUpRight size={17} />
        </button>
        {prepared && (
          <p role="status" className="text-xs text-brand-muted">
            Your email draft is ready to open. Your inquiry has not been sent from this website.
          </p>
        )}
      </form>
    </dialog>
  );
}
