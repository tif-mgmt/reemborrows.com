import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Leadership Insights by Reem Borrows | Self-Leadership, Culture & Emotional Intelligence",
  description:
    "Read Reem Borrows' insights on self-leadership, emotional intelligence, human-centred leadership, culture, behaviour, ego, accountability and the Health, Head & Heart framework.",
};

const CATEGORIES = [
  "Self-Leadership",
  "Health, Head & Heart",
  "Leadership Under Pressure",
  "Culture & Behaviour",
  "Women & Leadership",
  "Emotional Intelligence",
  "Accountability & Values",
  "Speaking & Media",
];

const ARTICLES = [
  { title: "What Is Self-Leadership and Why Does It Matter Now?", category: "Self-Leadership", excerpt: "Defining self-leadership as the foundation of modern leadership." },
  { title: "Why the Best Leaders Don't Build Followers", category: "Self-Leadership", excerpt: "Connecting the book's central idea to empowerment, autonomy and culture." },
  { title: "The Hidden Cost of Ego in Leadership", category: "Leadership Under Pressure", excerpt: "How ego appears as defensiveness, control and resistance to feedback." },
  { title: "Health Is a Leadership Strategy", category: "Health, Head & Heart", excerpt: "Reframing wellbeing as a performance and culture issue, not a personal perk." },
  { title: "Why Strategy Fails When Behaviour Doesn't Change", category: "Culture & Behaviour", excerpt: "Execution depends on daily behaviour, not only plans." },
  { title: "How to Lead With Heart Without Losing Accountability", category: "Emotional Intelligence", excerpt: "Challenging the misconception that empathy means weakness." },
  { title: "The Health, Head & Heart Framework Explained", category: "Health, Head & Heart", excerpt: "Defining the methodology in a clear, practical way." },
  { title: "Calm Under Pressure: The Leadership Skill Nobody Teaches", category: "Leadership Under Pressure", excerpt: "Using the eye-of-the-storm idea to discuss emotional regulation." },
  { title: "Intelligent Following: The Leadership Skill Behind Real Influence", category: "Self-Leadership", excerpt: "When leaders must listen, learn and follow before guiding." },
  { title: "What Real Leadership Looks Like Now", category: "Culture & Behaviour", excerpt: "Defining leadership for the post-burnout, post-command-and-control era." },
  { title: "Gratitude as a Leadership Practice", category: "Accountability & Values", excerpt: "Using gratitude as a tool for culture, morale and possibility-thinking." },
  { title: "The Knowing-Doing Gap in Leadership", category: "Accountability & Values", excerpt: "Why people know what to do but do not act, using S.T.O.P. and activity management." },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-16">
        <p className="eyebrow mb-4">Insights Hub</p>
        <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight max-w-3xl">
          Thoughts on leadership, behaviour &amp; culture
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 font-light leading-relaxed">
          Explore Reem&rsquo;s latest thinking on self-leadership, emotional
          intelligence, behaviour change, culture, strategy and what real
          leadership looks like now.
        </p>
      </section>

      <section className="section-pad pb-12">
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="text-xs tracking-wide uppercase border border-ocean/20 text-oceandark px-4 py-2 hover:bg-ocean hover:text-creamlight transition-colors cursor-default"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="section-pad pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ocean/15">
          {ARTICLES.map((a) => (
            <article key={a.title} className="bg-creamlight p-8 flex flex-col">
              <p className="eyebrow mb-3">{a.category}</p>
              <h2 className="font-display text-xl text-oceandark mb-3 leading-snug">
                {a.title}
              </h2>
              <p className="text-sm text-ink/65 leading-relaxed flex-1">{a.excerpt}</p>
              <span className="mt-5 text-xs tracking-widest2 uppercase text-rosedeep">
                Coming soon
              </span>
            </article>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Stay Connected"
        title="Get new insights as they're published."
        copy="Sign up to receive Reem's writing on self-leadership, culture and emotional intelligence directly in your inbox."
        primaryLabel="Subscribe"
        primaryHref="/contact"
        secondaryLabel="Read the Book"
        secondaryHref="/unfollow-the-leader"
      />
    </main>
  );
}
