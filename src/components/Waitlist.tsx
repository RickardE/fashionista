"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      className="scroll-mt-20 border-t border-line py-24 sm:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="mx-auto max-w-xl text-center">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-ink-faint">
              Join the waitlist
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance font-sans text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl">
              Be the first to try Fashionista.
            </h2>
          </Reveal>

          <div className="mt-10">
            <AnimatePresence mode="wait" initial={false}>
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-full border border-ink/20 bg-surface px-8 py-4 text-sm text-ink"
                >
                  You&apos;re on the list. We&apos;ll be in touch soon.
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center"
                >
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-full border border-line bg-surface px-6 py-4 text-sm text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none sm:w-80"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-medium text-paper transition-colors hover:bg-accent"
                  >
                    Join the waitlist
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-6 text-xs text-ink-faint">
            No spam. We&apos;ll only email you when Fashionista is ready.
          </p>
        </div>
      </div>
    </section>
  );
}
