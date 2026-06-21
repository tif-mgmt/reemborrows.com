import Image from "next/image";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Unfollow the Leader by Reem Borrows | Why the Old Rules Are Failing Us",
  description:
    "Unfollow the Leader by Reem Borrows challenges outdated leadership rules and introduces the Health, Head & Heart framework for self-leadership, emotional intelligence, trust, accountability and sustainable performance.",
};

const RETAILERS = [
  { label: "Amazon", href: "https://www.amazon.com.au/dp/B0F6Q2WXNG" },
  { label: "Barnes & Noble", href: "https://www.barnesandnoble.com" },
  { label: "Amazon Kindle", href: "https://www.amazon.com.au/dp/B0F6Q2WXNG" },
];

const WHO_FOR = [
  { title: "For Individuals", copy: "People leading themselves, their careers, their confidence or their next chapter." },
  { title: "For Business Owners", copy: "Founders and entrepreneurs who want to build businesses with clarity, culture and purpose." },
  { title: "For Leaders", copy: "Executives, managers and emerging leaders ready to align their behaviour with the impact they want to create." },
  { title: "For Organisations", copy: "Teams that want to move beyond performance pressure and build trust, accountability and sustainable growth." },
];

const LEARN = [
  "Replace outdated leadership habits with values that inspire trust.",
  "Lead with emotional intelligence and empathy without losing authority.",
  "Align personal wellbeing with professional performance.",
  "Build cultures of accountability and psychological safety.",
  "Develop self-leadership as the foundation for leading others.",
];

const IDEAS = [
  { title: "Self-leadership comes first", copy: "Strong leadership always begins with the ability to lead yourself." },
  { title: "Health is not optional", copy: "Energy, vitality and resilience are leadership foundations, not personal side projects." },
  { title: "The head must serve, not dominate", copy: "Strategic thinking matters, but ego-driven intelligence can derail trust, creativity and progress." },
  { title: "The heart is not weakness", copy: "Empathy, courage, emotional fluency and connection are essential leadership capabilities." },
  { title: "Culture is behaviour repeated", copy: "Values only matter when they are visible in decisions, conversations, accountability and daily rhythm." },
  { title: "Performance must be sustainable", copy: "Results achieved through burnout, fear or disconnection are not true success." },
];

export default function BookPage() {
  return (
    <main>
      {/* HERO */}
      <section className="section-pad pt-40 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-4">The Book</p>
          <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight">
            Unfollow the Leader
          </h1>
          <p className="mt-2 text-rosedeep italic text-lg">
            Why the Old Rules Are Failing Us, and What Real Leadership Looks
            Like Now
          </p>
          <p className="mt-8 max-w-xl text-ink/70 leading-relaxed">
            Most leadership advice teaches people how to be followed.
            Unfollow the Leader teaches something deeper: how to lead
            yourself first. In this practical and reflective leadership
            book, Reem Borrows challenges outdated models of authority,
            performance and control, offering a new way forward through
            self-awareness, emotional intelligence, wellbeing, strategic
            clarity and heart-centred action.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            {RETAILERS.map((r) => (
              <a
                key={r.label}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {r.label}
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9 flex justify-center">
          <div className="relative w-56 aspect-[3/4]">
            <Image
              src="/images/unfollow-book-cover.png"
              alt="Unfollow the Leader by Reem Borrows — book cover"
              fill
              sizes="240px"
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* TIRED OF TRADING */}
      <section className="section-pad py-20 bg-ocean text-creamlight">
        <p className="font-display text-2xl md:text-3xl italic max-w-3xl leading-relaxed">
          &ldquo;A leadership book for people tired of trading humanity for
          performance.&rdquo;
        </p>
        <p className="mt-6 max-w-2xl text-creamlight/75 leading-relaxed">
          Unfollow the Leader exposes the outdated rules that drive burnout,
          disengagement and toxic cultures. In their place, Reem offers a
          practical, values-driven framework for leaders who want to create
          trust, accountability and sustainable results.
        </p>
      </section>

      {/* WHO IT'S FOR */}
      <section className="section-pad py-24">
        <p className="eyebrow mb-4">Who It&rsquo;s For</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-14 max-w-2xl">
          A book for anyone ready to lead differently.
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ocean/15">
          {WHO_FOR.map((w) => (
            <div key={w.title} className="bg-creamlight p-8">
              <h3 className="font-display text-lg mb-3 text-oceandark">{w.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{w.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT READERS LEARN */}
      <section className="section-pad py-24 bg-cream/40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">What Readers Will Learn</p>
            <h2 className="font-display text-3xl md:text-4xl text-oceandark leading-tight">
              Practical shifts, not platitudes.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="space-y-5">
              {LEARN.map((l) => (
                <li key={l} className="flex gap-4 text-ink/75 leading-relaxed">
                  <span className="text-rosedeep font-display italic text-xl shrink-0">—</span>
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CORE IDEAS */}
      <section className="section-pad py-24">
        <p className="eyebrow mb-4">At the Heart of the Book</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-14 max-w-2xl">
          The ideas at the heart of Unfollow the Leader
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {IDEAS.map((idea, i) => (
            <div key={idea.title}>
              <span className="font-display text-3xl text-rose/60">0{i + 1}</span>
              <h3 className="font-display text-lg mt-3 mb-3 text-oceandark">{idea.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed">{idea.copy}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FRAMEWORK CALLOUT */}
      <section className="section-pad py-24 bg-oceandark text-creamlight">
        <p className="eyebrow !text-rose mb-4">At the Centre of the Book</p>
        <h2 className="font-display text-3xl md:text-4xl mb-8 max-w-2xl">
          The Health, Head &amp; Heart Framework
        </h2>
        <p className="max-w-2xl text-creamlight/75 leading-relaxed">
          Health gives leaders energy, resilience and steadiness. Head gives
          leaders clarity, strategy and perspective. Heart gives leaders
          empathy, courage, trust and connection. Together, they create a
          practical roadmap for leadership that is both human and effective.
        </p>
      </section>

      <FinalCta
        eyebrow="Continue the Journey"
        title="Order the book. Download the free resources."
        copy="The book invites readers to continue their development through practical resources connected to Dreem Coaching & Consulting, including the Dreem GROW Coaching Framework and the Dreem S.T.O.P. Workbook."
        primaryLabel="Download Free Resources"
        primaryHref="/resources"
        secondaryLabel="Order the Book"
        secondaryHref="https://www.amazon.com.au/dp/B0F6Q2WXNG"
      />
    </main>
  );
}
