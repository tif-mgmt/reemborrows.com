import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Work With Reem Borrows | Executive Coaching, Leadership Programs & Culture Consulting",
  description:
    "Work with Reem Borrows through executive coaching, leadership programs, workshops and consulting designed to align strategy, behaviour and culture through self-leadership and emotional intelligence.",
};

const SERVICES = [
  {
    title: "Executive Coaching",
    copy: "For leaders navigating pressure, growth, transition, complexity or reinvention. Reem helps leaders strengthen self-awareness, emotional regulation, confidence, decision-making, communication and personal leadership rhythm.",
    best: "Executives, senior leaders, founders, emerging leaders, women in leadership and high-potential talent.",
  },
  {
    title: "Leadership Development Programs",
    copy: "For teams that need shared language, stronger trust and practical leadership tools. Programs can be built around self-leadership, Health Head & Heart, emotional intelligence, accountability, coaching conversations, communication and leading under pressure.",
    best: "Leadership teams, sales leaders, people managers, cross-functional teams and organisations in change.",
  },
  {
    title: "Culture & Behaviour Consulting",
    copy: "For organisations that need to close the gap between stated values and lived behaviour. Reem helps teams explore how strategy, behaviour, communication, accountability and culture interact.",
    best: "Organisations dealing with disengagement, misalignment, low trust, toxic patterns, leadership inconsistency or values that are not being lived.",
  },
  {
    title: "Workshops & Retreats",
    copy: "For organisations that want focused, immersive experiences based on Unfollow the Leader. Workshops can be designed around the Health, Head & Heart framework, ego, emotional fluency, self-leadership, gratitude, values, culture, accountability or S.T.O.P. execution.",
    best: "Teams seeking an immersive, applied reset rather than a one-off session.",
  },
];

const INDIVIDUAL_REASONS = [
  "You are successful on paper but disconnected internally.",
  "You are navigating a career or life transition.",
  "You are tired of reacting from fear, doubt or old patterns.",
  "You want to build confidence without performing perfection.",
  "You are ready to lead your next chapter with more intention.",
];

const CHALLENGES = [
  "Leadership inconsistency",
  "Low trust",
  "Burnout or emotional fatigue",
  "Poor communication under pressure",
  "Values that are stated but not lived",
  "Conflict avoidance",
  "Lack of accountability",
  "High performance expectations without sustainable rhythm",
];

const OUTCOMES = [
  "Stronger leadership alignment",
  "Clearer communication",
  "Better decision-making under pressure",
  "Healthier accountability",
  "Improved trust and psychological safety",
  "More sustainable performance",
];

export default function WorkWithReemPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-20">
        <p className="eyebrow mb-4">Work With Reem</p>
        <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight max-w-3xl">
          Change from the inside out.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 font-light leading-relaxed">
          Reem works with individuals, leaders, teams and organisations that
          want to create meaningful change from the inside out. Her work is
          designed for people who know leadership cannot be solved through
          strategy alone. Real change requires behaviour change, emotional
          intelligence, trust, accountability and a culture that supports
          people to perform sustainably.
        </p>
        <a href="/contact" className="btn-primary inline-block mt-10">
          Start a Conversation
        </a>
      </section>

      {/* SERVICES */}
      <section className="section-pad py-24 bg-cream/40">
        <div className="grid md:grid-cols-2 gap-px bg-ocean/15">
          {SERVICES.map((s) => (
            <div key={s.title} className="bg-creamlight p-10">
              <h3 className="font-display text-2xl mb-4 text-oceandark">{s.title}</h3>
              <p className="text-ink/75 leading-relaxed mb-5">{s.copy}</p>
              <p className="text-sm text-ink/55">
                <span className="text-rosedeep font-semibold uppercase tracking-wide text-xs mr-2">
                  Best for
                </span>
                {s.best}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FOR INDIVIDUALS */}
      <section className="section-pad py-24" id="individuals">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">For Individuals</p>
            <h2 className="font-display text-3xl md:text-4xl text-oceandark leading-tight">
              Lead yourself before you lead anything else.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-ink/75 leading-relaxed mb-8">
              You do not need a title to practise leadership. Every
              decision, boundary, conversation, response and habit is part
              of how you lead your life. Reem helps individuals reconnect
              with clarity, confidence, purpose and self-trust, especially
              during moments of transition, pressure, reinvention or
              personal growth.
            </p>
            <p className="eyebrow mb-4">You may be here because</p>
            <ul className="space-y-3">
              {INDIVIDUAL_REASONS.map((r) => (
                <li key={r} className="flex gap-3 text-ink/80 leading-relaxed">
                  <span className="text-rosedeep shrink-0">—</span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FOR BUSINESSES */}
      <section className="section-pad py-24 bg-oceandark text-creamlight" id="businesses">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow !text-rose mb-4">For Businesses &amp; Teams</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Align strategy, behaviour &amp; culture.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="text-creamlight/75 leading-relaxed mb-10">
              Strategies fail when behaviour does not support them. Values
              become meaningless when culture does not live them. Reem
              helps organisations bring strategy, behaviour and culture into
              alignment so teams can perform without losing their humanity.
            </p>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <p className="eyebrow !text-rose mb-4">Common Challenges</p>
                <ul className="space-y-2 text-sm text-creamlight/80">
                  {CHALLENGES.map((c) => (
                    <li key={c}>— {c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow !text-rose mb-4">Outcomes</p>
                <ul className="space-y-2 text-sm text-creamlight/80">
                  {OUTCOMES.map((o) => (
                    <li key={o}>— {o}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW SHE WORKS */}
      <section className="section-pad py-24 bg-cream/40">
        <p className="eyebrow mb-4">How Reem Works</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-8 max-w-2xl">
          Practical. Reflective. Human.
        </h2>
        <p className="max-w-2xl text-ink/75 leading-relaxed">
          Reem&rsquo;s approach is not about surface-level motivation. It
          helps people understand what is happening beneath behaviour:
          stress, fear, ego, conditioning, emotional overload, lack of
          clarity and the patterns that shape how people lead under
          pressure. The goal is not just insight. The goal is applied
          change.
        </p>
      </section>

      <FinalCta />
    </main>
  );
}
