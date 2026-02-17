"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type FAQItem = { q: string; a: string };

export default function WellnessLandingPage() {
  const brand = "Rakhshanda Abidi";

  // ✅ (5) Updated mobile number everywhere
  const whatsappNumber = "+91 7042221669";
  const whatsappLink =
    "https://wa.me/917042221669?text=Hi%20Rakhshanda%2C%20I%27d%20like%20to%20book%20a%201%3A1%20session.";

  const contactEmail = "rakhshanda.m.abidi@gmail.com";
  const instagramUrl =
    "https://www.instagram.com/rakhshanda_akashic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const faqs: FAQItem[] = useMemo(
    () => [
      {
        q: "Who is this work for?",
        a: "This work is for anyone who is open to self-reflection, emotional healing, and spiritual growth. It is especially supportive for women who feel stuck, overwhelmed, or disconnected from themselves and want to heal at a deeper level.",
      },
      {
        q: "Do I need to be spiritual to work with you?",
        a: "No. You only need to be open. Spirituality here is not about belief systems or rituals—it’s about awareness, presence, and inner truth. Everything is approached in a grounded, practical way.",
      },
      {
        q: "How many sessions will I need?",
        a: "Healing is not linear, and there is no fixed number. Some people experience powerful shifts in a few sessions, while others choose ongoing support for deeper layers. We move at a pace that feels safe and aligned for you.",
      },
      {
        q: "What happens in a session?",
        a: "Sessions are conversational, intuitive, and deeply reflective. Depending on your needs, we may work with emotional release, inner child healing, energetic awareness, ancestral insights, or guided reflection.",
      },
      {
        q: "Will this replace therapy or medical treatment?",
        a: "No. My work is complementary and does not replace medical or psychological care. This work can support your healing on an emotional and energetic level.",
      },
      {
        q: "What if I feel emotional during the session?",
        a: "That’s completely normal and welcome. Emotions are information. This is a safe space to feel without judgment, pressure, or the need to “be strong.”",
      },
      {
        q: "How do I prepare for a session?",
        a: "Come as you are. You don’t need to prepare anything. Just bring honesty, openness, and a willingness to look inward.",
      },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1A1A1A]">
      <BackgroundGlow />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#FAF7F2]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
<div className="relative h-10 w-10 overflow-hidden rounded-xl ring-1 ring-black/10">
  <Image
    src="/first.JPG"
    alt="Rakhshanda Abidi"
    fill
    className="object-cover"
  />
</div>
            <div className="leading-tight">
              {/* ✅ (2) Name in deep red */}
              <div className="text-sm font-semibold tracking-wide text-[#7A0C0C]">
                {brand}
              </div>

              {/* ✅ (1) Updated subtitle */}
              <div className="text-xs text-black/50">
                Akashic Channel and Conscious Living Coach
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <a href="#about" className="text-sm text-black/60 hover:text-black">
              About
            </a>
            <a href="#work" className="text-sm text-black/60 hover:text-black">
              How I Help
            </a>
            <a href="#faq" className="text-sm text-black/60 hover:text-black">
              FAQ
            </a>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-black/60 hover:text-black underline underline-offset-4"
            >
              Instagram
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-black/90"
            >
              WhatsApp to Book
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 sm:pt-20 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              {/* ✅ (3) Removed: Soul-level healing pill */}

              <h1 className="mt-2 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Reclaim the parts of you that were pushed away—{" "}
                <span className="text-black/55">and come home to yourself.</span>
              </h1>

              <p className="mt-4 max-w-xl text-base leading-relaxed text-black/60">
                Deep emotional and subconscious healing through Akashic Records,
                Shadow Work, EFT, and Ho’oponopono—helping you feel what’s ready
                to be released and integrated.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-black px-6 py-3 text-center text-sm font-semibold text-white hover:bg-black/90"
                >
                  WhatsApp to Book a 1:1 Session
                </a>
                <a
                  href="#work"
                  className="rounded-2xl border border-black/10 bg-black/5 px-6 py-3 text-center text-sm font-semibold text-black hover:bg-black/10"
                >
                  Explore how it works
                </a>
              </div>

              <div className="mt-3 text-xs text-black/50">
                Prefer email?{" "}
                <a
                  className="underline underline-offset-4 hover:text-black"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>{" "}
                • WhatsApp:{" "}
                <a
                  className="underline underline-offset-4 hover:text-black"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {whatsappNumber}
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <Pillar title="Clarity" desc="See patterns beneath the surface." />
                <Pillar title="Release" desc="Let go of stored emotions & beliefs." />
                <Pillar title="Alignment" desc="Return to intuition and self-trust." />
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6 ring-1 ring-black/5">
              <div className="rounded-2xl bg-gradient-to-b from-black/5 to-transparent p-5">
                {/* ✅ (4) Added image (public/second.jpg) */}
               <div className="relative mb-5 h-64 w-full overflow-hidden rounded-2xl border border-black/10 bg-black/5 sm:h-72">
  <Image
    src="/second.jpg"
    alt="Rakhshanda Abidi"
    fill
className="object-cover object-top"    
priority
  />
</div>


                <div className="text-sm font-semibold">
                  A safe space for transformation
                </div>
                <p className="mt-2 text-sm leading-relaxed text-black/60">
                  This is not about becoming someone new. This is about
                  reclaiming all parts of you—with compassion, truth, and
                  grounded spiritual insight.
                </p>

                <div className="mt-5 grid gap-3">
                  <Tag>Akashic Records</Tag>
                  <Tag>Shadow Work</Tag>
                  <Tag>Emotional Freedom Technique (EFT)</Tag>
                  <Tag>Ho’oponopono</Tag>
                </div>

                <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4">
                  <div className="text-xs font-semibold text-black/80">
                    Good to know
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-black/55">
                    This work is intended to support your personal growth and
                    emotional wellbeing. It’s not a substitute for medical or
                    mental health care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                About Me
              </h2>

              <p className="mt-4 text-black/60 leading-relaxed">
                I am a holistic practitioner and spiritual guide who supports
                deep emotional and soul-level healing by working with both the
                conscious and subconscious layers of being.
              </p>

              <p className="mt-4 text-black/60 leading-relaxed">
                At the heart of my work is the{" "}
                <span className="text-black font-medium">Akashic Records</span>,
                a field of consciousness that holds soul experiences, ancestral
                patterns, karmic themes, and energetic imprints that influence
                our present life. Through the Akashic Records, I help you gain
                clarity on recurring patterns, emotional blocks, relationship
                challenges, and life questions that often cannot be resolved
                through the mind alone.
              </p>

              <p className="mt-4 text-black/60 leading-relaxed">
                I integrate this work with{" "}
                <span className="text-black font-medium">Shadow Work</span>,
                gently guiding you to meet the parts of yourself that have been
                suppressed, rejected, or hidden in order to survive, belong, or
                be loved. These aspects are not flaws. They are often protectors
                formed in response to early conditioning, family dynamics, or
                past experiences. When brought into awareness, the shadow
                becomes a powerful source of healing, self-compassion, and inner
                freedom.
              </p>

              <p className="mt-4 text-black/60 leading-relaxed">
                To support emotional and energetic release, I also work with{" "}
                <span className="text-black font-medium">EFT</span> and{" "}
                <span className="text-black font-medium">Ho’oponopono</span>, a
                restorative practice that facilitates forgiveness,
                reconciliation, and energetic cleansing.
              </p>

              <p className="mt-4 text-black/60 leading-relaxed">
                Much of what we carry is inherited or absorbed through family
                systems, ancestral memory, and unconscious conditioning. My role
                is not to fix you, but to help you safely access what is ready to
                be seen, felt, and released so you can return to alignment with
                your authentic self.
              </p>

              <p className="mt-6 text-black/80 font-medium">
                This is not about becoming someone new. This is about reclaiming
                all parts of you.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              {/* ✅ (4) Added image (public/first.jpg) */}
              <div className="relative mb-5 h-44 w-full overflow-hidden rounded-2xl border border-black/10 bg-black/5 sm:h-52">
                <Image
                  src="/first.jpg"
                  alt="About image"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold">I work primarily with</h3>
              <p className="mt-2 text-sm text-black/60 leading-relaxed">
                Women who are self-aware yet feel stuck, overwhelmed, or
                disconnected despite having done significant inner work—women
                who sense a deeper calling for healing, clarity, and wholeness.
              </p>

              <div className="mt-6 grid gap-3">
                <InfoCard
                  title="Intuitive + Personalised"
                  desc="Each session meets you where you are. No one-size-fits-all healing."
                />
                <InfoCard
                  title="Compassionate + Grounded"
                  desc="A non-judgmental space where emotional healing and spiritual insight meet."
                />
                <InfoCard
                  title="Root-level work"
                  desc="We explore subconscious patterns—family conditioning, ancestral themes, energetic imprints."
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black/90"
                >
                  WhatsApp to Book
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-black/10 bg-black/5 px-5 py-3 text-center text-sm font-semibold text-black hover:bg-black/10"
                >
                  Ask a question
                </a>
              </div>

              <div className="mt-5 text-xs text-black/50">
                You can also follow on{" "}
                <a
                  className="underline underline-offset-4 hover:text-black"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How I Help */}
      <section id="work" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              How Will I Help You
            </h2>
            <p className="mt-4 text-black/60 leading-relaxed">
              I help you uncover the root causes of what you’re experiencing,
              rather than just managing the symptoms. Each session is intuitive
              and personalised. Your healing deserves to be treated that way.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              <h3 className="text-lg font-semibold">Together, we will</h3>
              <ul className="mt-4 space-y-3 text-sm text-black/60">
                <Bullet>
                  Identify emotional and energetic blocks that are keeping you
                  stuck
                </Bullet>
                <Bullet>
                  Explore family, childhood, and ancestral patterns influencing
                  your present life
                </Bullet>
                <Bullet>
                  Release suppressed emotions, trauma, and subconscious beliefs
                </Bullet>
                <Bullet>
                  Reconnect you with your intuition, inner strength, and clarity
                </Bullet>
                <Bullet>
                  Help you cultivate self-trust, emotional resilience, and inner
                  safety
                </Bullet>
                <Bullet>
                  Support you in creating alignment in relationships, purpose,
                  health, and abundance
                </Bullet>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              <h3 className="text-lg font-semibold">This work is for you if</h3>
              <ul className="mt-4 space-y-3 text-sm text-black/60">
                <Bullet>You feel emotionally drained or disconnected</Bullet>
                <Bullet>
                  You keep repeating the same patterns despite “knowing better”
                </Bullet>
                <Bullet>
                  You struggle with boundaries, self-worth, or relationships
                </Bullet>
                <Bullet>
                  You feel called to heal deeply, not just intellectually
                  understand
                </Bullet>
                <Bullet>
                  You want lasting transformation, not temporary relief
                </Bullet>
              </ul>

              <div className="mt-6 rounded-2xl border border-black/10 bg-white/70 p-4">
                <p className="text-sm text-black/70 leading-relaxed">
                  I walk beside you not to tell you who to become, but to help
                  you remember who you already are.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white/60 p-6">
            <h3 className="text-lg font-semibold">What happens in a session?</h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <Step
                n="01"
                title="Arrive as you are"
                desc="We start with what feels present—emotionally, mentally, and energetically."
              />
              <Step
                n="02"
                title="Explore the root"
                desc="Patterns, protectors, inner-child themes, ancestral influences—gently uncovered."
              />
              <Step
                n="03"
                title="Release + integrate"
                desc="EFT / reflection / energetic clearing—then practical integration for your life."
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((item, idx) => (
              <Accordion key={idx} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-black/10">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Contact
              </h2>
              <p className="mt-4 text-black/60 leading-relaxed">
                If you’re unsure where to start, send a message. You don’t need
                the perfect words—just what’s true for you.
              </p>

              <div className="mt-6 rounded-3xl border border-black/10 bg-white/60 p-6">
                <div className="text-sm font-semibold">Email</div>
                <a
                  className="mt-2 block text-sm text-black/60 underline underline-offset-4 hover:text-black"
                  href={`mailto:${contactEmail}`}
                >
                  {contactEmail}
                </a>

                <div className="mt-6 text-sm font-semibold">WhatsApp</div>
                <a
                  className="mt-2 inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-semibold text-white hover:bg-black/90"
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Message on WhatsApp
                </a>

                <div className="mt-3 text-xs text-black/50">
                  WhatsApp:{" "}
                  <a
                    className="underline underline-offset-4 hover:text-black"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {whatsappNumber}
                  </a>
                </div>

                <div className="mt-6 text-sm font-semibold">Instagram</div>
                <a
                  className="mt-2 inline-flex rounded-2xl border border-black/10 bg-black/5 px-5 py-3 text-sm font-semibold text-black hover:bg-black/10"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Instagram
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white/60 p-6">
              <div className="text-sm font-semibold">Quick message</div>
              <ContactForm to={contactEmail} />
            </div>
          </div>

          {/* Softer disclaimer at very bottom */}
          <div className="mt-12 border-t border-black/10 pt-6 text-xs text-black/50">
            <p>
              Note: This work is offered as supportive guidance for personal
              growth and wellbeing. If you are dealing with severe emotional
              distress or a clinical concern, please consider professional
              medical or mental health support.
            </p>
          </div>

          <footer className="mt-6 text-xs text-black/50">
            © {new Date().getFullYear()} {brand}. All rights reserved.
          </footer>
        </div>
      </section>
    </div>
  );
}

function BackgroundGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-black/5 blur-[140px]" />
      <div className="absolute right-[-10%] top-[25%] h-[560px] w-[560px] rounded-full bg-black/5 blur-[160px]" />
      <div className="absolute left-[-10%] bottom-[-10%] h-[560px] w-[560px] rounded-full bg-black/5 blur-[160px]" />
    </div>
  );
}

function Pillar({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-xs text-black/60">{desc}</div>
    </div>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 px-4 py-3 text-sm text-black/80">
      {children}
    </div>
  );
}

function InfoCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-black/60 leading-relaxed">{desc}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black/40" />
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function Step({ n, title, desc }: { n: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-black/5 p-4">
      <div className="text-xs font-semibold text-black/50">{n}</div>
      <div className="mt-1 text-sm font-semibold">{title}</div>
      <div className="mt-1 text-sm text-black/60 leading-relaxed">{desc}</div>
    </div>
  );
}

function Accordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={() => setOpen((v) => !v)}
      >
        <div className="text-sm font-semibold">{item.q}</div>
        <div className="text-black/60">{open ? "–" : "+"}</div>
      </button>
      {open && (
        <div className="px-5 pb-5 text-sm text-black/60 leading-relaxed">
          {item.a}
        </div>
      )}
    </div>
  );
}

function ContactForm({ to }: { to: string }) {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("I want to start sessions");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Inquiry: ${topic}`);
    const body = encodeURIComponent(
      `Name: ${name}\nTopic: ${topic}\n\nMessage:\n${message}\n`
    );
    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [to, name, topic, message]);

  return (
    <div className="mt-5 grid gap-3">
      <input
        className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-black/35 focus:border-black/20"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select
        className="w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none focus:border-black/20"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      >
        <option>I want to start sessions</option>
        <option>I have a question before booking</option>
        <option>I feel stuck in patterns</option>
        <option>Relationship / boundaries</option>
        <option>Emotional overwhelm</option>
      </select>
      <textarea
        className="min-h-[140px] w-full rounded-2xl border border-black/10 bg-white/70 px-4 py-3 text-sm outline-none placeholder:text-black/35 focus:border-black/20"
        placeholder="Write what you're feeling / what you want support with..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <a
        href={mailtoHref}
        className="rounded-2xl bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black/90"
      >
        Send Email
      </a>
    </div>
  );
}
