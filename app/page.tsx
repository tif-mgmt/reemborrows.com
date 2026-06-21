import Image from "next/image";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Reem Borrows | Author of Unfollow the Leader | Human-Centred Leadership Strategist",
  description:
    "Reem Borrows is the author of Unfollow the Leader and founder of Dreem Coaching & Consulting. She helps leaders, teams and organisations align strategy, behaviour and culture through self-leadership, emotional intelligence and the Health, Head & Heart framework.",
};

const AUTHORITY = [
  {
    title: "Author of Unfollow the Leader",
    copy: "A practical guide to self-leadership, emotional intelligence and modern leadership.",
  },
  {
    title: "Founder of Dreem Coaching & Consulting",
    copy: "Partnering with individuals, teams and organisations to create meaningful, sustainable growth.",
  },
  {
    title: "25+ Years of Experience",
    copy: "Across corporate, government, community, sales, marketing, leadership and organisational development.",
  },
  {
    title: "Creator of Health, Head & Heart",
    copy: "A leadership framework for wellbeing, strategic clarity, emotional intelligence, trust and results.",
  },
];

const FRAMEWORK = [
  {
    label: "Health",
    copy: "Your energy, vitality, resilience, wellbeing and capacity to stay grounded under pressure.",
  },
  {
    label: "Head",
    copy: "Your clarity, strategy, decision-making, perspective and ability to think beyond ego.",
  },
  {
    label: "Heart",
    copy: "Your emotional intelligence, empathy, trust, courage and ability to create real connection.",
  },
];

const PATHWAYS = [
  {
    title: "For Individuals",
    copy: "Lead yourself, your career and your next chapter with more confidence, clarity and self-trust.",
    href: "/work-with-reem",
  },
  {
    title: "For Leaders",
    copy: "Develop the emotional intelligence, strategic thinking and grounded presence needed to lead under pressure.",
    href: "/work-with-reem",
  },
  {
    title: "For Businesses & Teams",
    copy: "Align strategy, behaviour and culture so people can perform without losing their humanity.",
    href: "/work-with-reem",
  },
];

export default function Home() {
  return (
    <main>
      {/* ---------- HERO ---------- */}
      <section className="relative section-pad pt-40 pb-20 overflow-hidden bg-creamlight">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 top-10 w-[560px] h-[560px] rounded-full bg-rose/20 blur-3xl"
        />
        <div className="grid lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Author · Strategist · Executive Coach · Keynote Speaker</p>

            <h1 className="font-display text-[12vw] leading-[0.95] md:text-[5rem] lg:text-[5.6rem] text-oceandark">
              Unfollow the Leader.
              <br />
              <span className="italic text-rosedeep">Lead from within.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-ink/70 font-light leading-relaxed">
              Most leadership advice teaches you how to be followed. Reem
              Borrows challenges something deeper: the beliefs, habits,
              emotional patterns and ego responses that shape how we lead
              ourselves, influence others and create culture under pressure.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link href="/unfollow-the-leader" className="btn-primary">
                Order the Book
              </Link>
              <Link href="/work-with-reem" className="btn-outline">
                Work With Reem
              </Link>
              <Link
                href="/speaking"
                className="text-sm tracking-wide underline decoration-rose underline-offset-4 hover:text-rosedeep transition-colors"
              >
                Book Reem to Speak →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end gap-6">
            <div className="relative w-48 sm:w-60 aspect-[3/4] rounded-sm overflow-hidden shadow-xl shrink-0">
              <Image
                src="/images/reem-portrait.png"
                alt="Reem Borrows, author and leadership strategist"
                fill
                sizes="240px"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative w-36 sm:w-44 aspect-[3/4] mt-10">
              <Image
                src="/images/unfollow-book-cover.png"
                alt="Unfollow the Leader, book by Reem Borrows"
                fill
                sizes="180px"
                className="object-contain drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- AUTHORITY STRIP ---------- */}
      <section className="bg-oceandark text-creamlight">
        <div className="section-pad py-12 grid sm:grid-cols-2 lg:grid-cols-4 hairline border-l border-creamlight/10">
          {AUTHORITY.map((a) => (
            <div key={a.title} className="border-r border-creamlight/10 px-6 py-2 first:pl-0">
              <h3 className="font-display text-lg mb-2 text-rose">{a.title}</h3>
              <p className="text-sm text-creamlight/65 leading-relaxed">{a.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- THE OLD RULES ARE FAILING ---------- */}
      <section className="section-pad py-28">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">The Problem</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-oceandark">
              The old rules of leadership are failing us.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/75 leading-relaxed">
            <p>
              For too long, leadership has been measured by authority,
              output, performance and control. But in today&rsquo;s world,
              those rules are breaking down. Burnout is rising. Teams are
              disengaged. Cultures are stretched. Leaders are under pressure
              to deliver more while staying human, grounded and emotionally
              intelligent.
            </p>
            <p>
              The problem is not that people do not know what leadership
              should look like. The problem is that under pressure, people
              often default to old patterns: fear, ego, control, avoidance,
              overthinking, defensiveness or disconnection. That is where
              Reem&rsquo;s work begins.
            </p>
            <p className="font-display italic text-2xl text-rosedeep pt-2">
              Real leadership begins with self-leadership.
            </p>
            <p>
              Before you can lead a team, a business, a conversation or a
              culture, you must learn to lead yourself. In{" "}
              <Link href="/unfollow-the-leader" className="text-oceandark underline underline-offset-4">
                Unfollow the Leader
              </Link>
              , Reem shows that leadership is not about becoming perfect or
              powerful. It is about becoming present, conscious, clear and
              connected.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- HEALTH HEAD HEART ---------- */}
      <section className="section-pad py-28 bg-cream/40">
        <p className="eyebrow mb-4">The Framework</p>
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mb-4 text-oceandark">
          The Health, Head &amp; Heart Framework
        </h2>
        <p className="max-w-xl text-ink/70 mb-16 leading-relaxed">
          When Health, Head and Heart are aligned, leaders become calmer,
          clearer and more connected.
        </p>

        <div className="grid md:grid-cols-3 gap-px bg-ocean/15">
          {FRAMEWORK.map((f, i) => (
            <div key={f.label} className="bg-creamlight p-10">
              <span className="font-display text-5xl text-rose/70">
                0{i + 1}
              </span>
              <h3 className="font-display text-2xl mt-6 mb-4 text-oceandark">
                {f.label}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed">{f.copy}</p>
            </div>
          ))}
        </div>

        <Link
          href="/health-head-heart-framework"
          className="mt-10 inline-block text-sm tracking-wide underline decoration-rose underline-offset-4 hover:text-rosedeep transition-colors"
        >
          Explore the full framework →
        </Link>
      </section>

      {/* ---------- AUDIENCE PATHWAYS ---------- */}
      <section className="section-pad py-28">
        <p className="eyebrow mb-4">Ready to Lead Differently?</p>
        <h2 className="font-display text-4xl md:text-5xl max-w-2xl mb-16 text-oceandark">
          For individuals, leaders and organisations.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {PATHWAYS.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              className="group block border border-ocean/15 p-8 hover:border-rose hover:bg-cream/30 transition-colors"
            >
              <h3 className="font-display text-xl mb-4 text-oceandark group-hover:text-rosedeep transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-ink/70 leading-relaxed mb-6">{p.copy}</p>
              <span className="text-xs tracking-widest2 uppercase text-rosedeep">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- BOOK FEATURE ---------- */}
      <section className="section-pad py-28 bg-ocean text-creamlight">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-44 aspect-[3/4]">
              <Image
                src="/images/unfollow-book-cover.png"
                alt="Unfollow the Leader book cover"
                fill
                sizes="200px"
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <p className="eyebrow !text-rose mb-4">The Book</p>
            <h2 className="font-display text-4xl md:text-5xl italic mb-6 leading-tight">
              Tired of trading humanity for performance?
            </h2>
            <p className="text-creamlight/75 leading-relaxed max-w-xl mb-8">
              Unfollow the Leader exposes the outdated rules driving burnout,
              disengagement and toxic cultures, replacing them with a
              values-driven framework for modern leadership. The book shows
              how real leaders align Health, Head and Heart to create trust,
              accountability and sustainable results.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link href="/unfollow-the-leader" className="btn-rose">
                Order Unfollow the Leader
              </Link>
              <Link
                href="/resources"
                className="inline-block border border-creamlight/30 text-creamlight px-7 py-3.5 text-xs tracking-widest2 uppercase hover:bg-creamlight hover:text-oceandark transition-colors"
              >
                Download Free Resources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCta />
    </main>
  );
}
