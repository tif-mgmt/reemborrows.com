import Image from "next/image";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Reem Borrows Speaking | Leadership Keynote Speaker on Self-Leadership & Culture",
  description:
    "Book Reem Borrows for keynotes, panels and leadership events on self-leadership, emotional intelligence, culture, ego, strategy, behaviour and the Health, Head & Heart framework.",
};

const KEYNOTES = [
  {
    title: "Unfollow the Leader",
    sub: "Why the Old Rules Are Failing Us",
    copy: "This keynote challenges outdated ideas of leadership built on control, hierarchy, ego and performance at all costs. Reem introduces a new model of leadership grounded in self-awareness, emotional intelligence, wellbeing and values-led action.",
    takeaway: "A clearer understanding of why leadership must begin with self-leadership and how to shift from performance pressure to sustainable impact.",
  },
  {
    title: "Health, Head & Heart",
    sub: "A Framework for Sustainable Leadership",
    copy: "This keynote introduces Reem's practical leadership framework for aligning energy, strategic clarity and emotional intelligence. It helps leaders understand how their wellbeing, thinking and emotional presence shape culture and performance.",
    takeaway: "A simple, memorable framework leaders can use immediately to reflect, reset and lead with more intention.",
  },
  {
    title: "The Ego in the Boardroom",
    sub: "",
    copy: "Unchecked ego does not always look like arrogance. It can appear as defensiveness, control, resistance to feedback, hiding mistakes or needing to be right. This keynote explores how ego quietly derails trust, creativity, accountability and culture.",
    takeaway: "Leaders learn how to recognise ego patterns and replace self-protection with ownership, humility and purpose.",
  },
  {
    title: "Calm Under Pressure",
    sub: "",
    copy: "In high-pressure environments, people often react before they reflect. Reem explores how leaders can regulate their emotions, return to clarity and create steadiness for the people around them.",
    takeaway: "Practical tools for emotional regulation, grounded decision-making and leading from the eye of the storm.",
  },
  {
    title: "Self-Leadership for Women",
    sub: "",
    copy: "This talk helps women recognise limiting patterns, rebuild confidence and lead on their own terms. It brings together self-image, emotional awareness, courage, boundaries and purpose.",
    takeaway: "A powerful reflection on confidence, self-trust and the leadership identity women choose to embody.",
  },
];

const AUDIENCES = [
  "Corporate leadership conferences",
  "Women in leadership events",
  "Executive retreats",
  "Culture and transformation summits",
  "Sales leadership events",
  "Founder and entrepreneur communities",
  "Government and community leadership events",
  "Purpose-led and social impact events",
];

export default function SpeakingPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative section-pad pt-40 pb-24 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Speaking</p>
            <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight">
              Keynotes that challenge how people lead.
            </h1>
            <p className="mt-8 max-w-xl text-ink/70 leading-relaxed">
              Reem Borrows delivers keynotes and conversations that help
              audiences rethink leadership from the inside out. Her talks
              are practical, reflective and deeply human. She helps people
              understand what drives behaviour under pressure and how to
              lead with greater clarity, courage, emotional intelligence and
              heart.
            </p>
            <a href="/contact" className="btn-primary inline-block mt-10">
              Invite Reem to Speak
            </a>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="relative w-full aspect-[3/4] shadow-xl">
              <Image
                src="/images/reem-speaking.jpg"
                alt="Reem Borrows speaking"
                fill
                sizes="(max-width: 1024px) 60vw, 320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* KEYNOTES */}
      <section className="section-pad py-24 bg-cream/40">
        <p className="eyebrow mb-4">Signature Keynotes</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-14 max-w-2xl">
          Five talks. One shared idea: lead from within.
        </h2>

        <div className="space-y-px bg-ocean/15">
          {KEYNOTES.map((k) => (
            <div key={k.title} className="bg-creamlight p-8 md:p-10 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl text-oceandark">{k.title}</h3>
                {k.sub && <p className="text-rosedeep italic text-sm mt-1">{k.sub}</p>}
              </div>
              <div className="md:col-span-8">
                <p className="text-ink/75 leading-relaxed mb-4">{k.copy}</p>
                <p className="text-sm text-ink/55">
                  <span className="text-rosedeep font-semibold uppercase tracking-wide text-xs mr-2">
                    Audience takeaway
                  </span>
                  {k.takeaway}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* AUDIENCES */}
      <section className="section-pad py-24">
        <p className="eyebrow mb-4">Ideal Audiences</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-14 max-w-2xl">
          Where Reem&rsquo;s talks land best
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6">
          {AUDIENCES.map((a) => (
            <p key={a} className="text-ink/75 leading-relaxed">
              <span className="text-rosedeep mr-2">•</span>
              {a}
            </p>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Book Reem to Speak"
        title="Bring a grounded, human keynote to your next event."
        copy="Share your event details, audience and goals, and Reem's team will follow up with availability and a tailored proposal."
        primaryLabel="Invite Reem to Speak"
        primaryHref="/contact"
        secondaryLabel="Media Kit"
        secondaryHref="/media"
      />
    </main>
  );
}
