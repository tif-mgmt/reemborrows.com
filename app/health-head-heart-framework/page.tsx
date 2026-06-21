import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Health, Head & Heart Framework | Reem Borrows Leadership Model",
  description:
    "The Health, Head & Heart Framework by Reem Borrows helps leaders align wellbeing, strategic clarity and emotional intelligence to create trust, accountability and sustainable performance.",
};

const PILLARS = [
  {
    label: "Health",
    sub: "Your leadership foundation",
    copy: "Health is not just about exercise or appearance. It is the energy, vitality, emotional steadiness and resilience that allow a leader to stay grounded under pressure. When leaders neglect health, the impact is not private. It shows up in decision-making, communication, patience, presence, creativity and culture. A depleted leader is more likely to react, avoid, control, overwork or disconnect. A grounded leader creates steadiness for others.",
    questions: [
      "What gives you energy?",
      "What drains your leadership presence?",
      "Where are you confusing burnout with commitment?",
      "What rhythm would help you lead with more vitality?",
    ],
  },
  {
    label: "Head",
    sub: "Clarity beyond ego",
    copy: "The Head represents strategic thinking, logic, perspective, learning and decision-making. But the Head can also become distorted by ego. When ego takes over, leaders become defensive, controlling, closed to feedback or overly attached to being right. The Head works best when it is clear, curious and humble.",
    questions: [
      "Am I trying to be right, or trying to get it right?",
      "What am I not seeing?",
      "Where is ego protecting my image instead of serving the mission?",
      "What would change if I listened before solving?",
    ],
  },
  {
    label: "Heart",
    sub: "The master of human leadership",
    copy: "The Heart represents emotional intelligence, empathy, trust, courage and connection. Heart-centred leadership is not soft. It requires strength, self-awareness and the willingness to have honest conversations without losing humanity.",
    questions: [
      "Am I leading from trust or fear?",
      "What emotion is shaping my response?",
      "What does this person need in order to feel safe enough to be honest?",
      "How can I hold accountability without losing empathy?",
    ],
  },
];

const SHIFTS = [
  "Leaders respond instead of react.",
  "Teams speak more honestly.",
  "Trust becomes easier to build.",
  "Accountability becomes less threatening.",
  "Strategy becomes more executable.",
  "Culture becomes more human.",
  "Performance becomes more sustainable.",
];

export default function FrameworkPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-20">
        <p className="eyebrow mb-4">The Framework</p>
        <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight max-w-3xl">
          The Health, Head &amp; Heart Leadership Framework
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 font-light leading-relaxed">
          The Health, Head &amp; Heart Framework is Reem Borrows&rsquo;
          practical model for modern leadership. It helps people move beyond
          partial leadership, where performance is pursued at the expense of
          wellbeing, strategy is disconnected from behaviour, or empathy is
          mistaken for weakness. The framework brings together three
          leadership capacities that must work in harmony: energy, clarity
          and connection.
        </p>
      </section>

      <section className="section-pad py-16 bg-cream/40">
        <p className="max-w-2xl text-ink/75 leading-relaxed">
          A leader can have strong strategy but poor emotional intelligence.
          A leader can have empathy but no clarity. A leader can have vision
          but no energy left to execute it. The Health, Head &amp; Heart
          Framework helps leaders build the internal and external conditions
          for sustainable performance &mdash; designed for real people
          leading in real pressure: complex decisions, difficult
          conversations, culture change, performance expectations and
          personal fatigue.
        </p>
      </section>

      {PILLARS.map((p, i) => (
        <section
          key={p.label}
          className={`section-pad py-24 ${
            i % 2 === 1 ? "bg-oceandark text-creamlight" : ""
          }`}
        >
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span
                className={`font-display text-6xl ${
                  i % 2 === 1 ? "text-rose/60" : "text-rose/50"
                }`}
              >
                0{i + 1}
              </span>
              <h2
                className={`font-display text-4xl mt-4 mb-2 ${
                  i % 2 === 1 ? "text-creamlight" : "text-oceandark"
                }`}
              >
                {p.label}
              </h2>
              <p className={`italic ${i % 2 === 1 ? "text-rose" : "text-rosedeep"}`}>
                {p.sub}
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <p
                className={`leading-relaxed mb-8 ${
                  i % 2 === 1 ? "text-creamlight/75" : "text-ink/75"
                }`}
              >
                {p.copy}
              </p>
              <p
                className={`eyebrow mb-4 ${
                  i % 2 === 1 ? "!text-rose" : ""
                }`}
              >
                Key Questions
              </p>
              <ul className="space-y-3">
                {p.questions.map((q) => (
                  <li
                    key={q}
                    className={`flex gap-3 leading-relaxed ${
                      i % 2 === 1 ? "text-creamlight/85" : "text-ink/80"
                    }`}
                  >
                    <span className="text-rosedeep shrink-0">—</span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* WHEN ALIGNED */}
      <section className="section-pad py-24 bg-cream/40">
        <p className="eyebrow mb-4">The Result</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-12 max-w-2xl">
          When Health, Head &amp; Heart align, leadership changes.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
          {SHIFTS.map((s) => (
            <p key={s} className="text-ink/75 leading-relaxed">
              <span className="text-rosedeep mr-2">•</span>
              {s}
            </p>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Bring the Framework to Your Team"
        title="Give your team a shared language for sustainable leadership."
        copy="The Health, Head & Heart framework can anchor a keynote, a leadership program, or a full culture and behaviour consulting engagement."
        primaryLabel="Bring the Framework to Your Team"
        primaryHref="/work-with-reem"
      />
    </main>
  );
}
