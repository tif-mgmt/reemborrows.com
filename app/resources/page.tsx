import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Free Leadership Resources | Reem Borrows & Unfollow the Leader",
  description:
    "Download free leadership tools from Reem Borrows, including self-leadership reflections, Health Head & Heart pulse checks, ego check prompts and practical resources from Unfollow the Leader.",
};

const RESOURCES = [
  { title: "Self-Leadership Reflection Guide", copy: "A practical reflection tool to help you identify where you are leading consciously and where old patterns may still be leading you." },
  { title: "Health, Head & Heart Pulse Check", copy: "A simple diagnostic tool to help you reflect on your energy, clarity and emotional presence." },
  { title: "Ego Check for Leaders", copy: "A meeting and decision-making reflection tool to help you notice when ego is driving behaviour." },
  { title: "Calm Under Pressure Practice", copy: "A practical reset tool for leaders who want to return to clarity before reacting." },
  { title: "Dreem GROW Coaching Framework", copy: "A practical coaching framework for meaningful conversations, accountability and growth." },
  { title: "Dreem S.T.O.P. Workbook", copy: "A practical workbook based on Strategic, Tactical and Operational Priorities. It helps leaders manage activities, choices, focus and execution rather than trying to manage time." },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-16">
        <p className="eyebrow mb-4">Resources</p>
        <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight max-w-3xl">
          Free leadership resources
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 font-light leading-relaxed">
          Leadership does not end when the book closes. It begins with what
          you practise next. Download practical tools from Reem Borrows to
          help you reflect, reset and lead with more clarity, courage and
          heart.
        </p>
      </section>

      <section className="section-pad pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ocean/15">
          {RESOURCES.map((r) => (
            <div key={r.title} className="bg-creamlight p-8 flex flex-col">
              <h3 className="font-display text-lg mb-3 text-oceandark">{r.title}</h3>
              <p className="text-sm text-ink/70 leading-relaxed flex-1">{r.copy}</p>
              <a
                href="/contact"
                className="mt-6 text-xs tracking-widest2 uppercase text-rosedeep hover:text-oceandark transition-colors"
              >
                Download Guide →
              </a>
            </div>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Keep Going"
        title="Ready for the next step?"
        copy="Combine these tools with the book, a keynote, or coaching to turn insight into applied, lasting change."
        primaryLabel="Work With Reem"
        primaryHref="/work-with-reem"
        secondaryLabel="Order the Book"
        secondaryHref="/unfollow-the-leader"
      />
    </main>
  );
}
