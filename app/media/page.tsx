import Image from "next/image";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "Reem Borrows Media Kit | Author, Speaker & Leadership Strategist",
  description:
    "Media kit for Reem Borrows, author of Unfollow the Leader, leadership strategist, executive coach and speaker on self-leadership, emotional intelligence, culture and human-centred leadership.",
};

const TOPICS = [
  "Self-leadership",
  "Human-centred leadership",
  "Leadership under pressure",
  "Emotional intelligence",
  "Ego and leadership",
  "Women and leadership",
  "Burnout and sustainable performance",
  "Culture and behaviour change",
  "Strategy, behaviour and culture alignment",
  "Health, Head & Heart leadership",
  "Trauma-informed leadership",
  "Values, accountability and trust",
];

const QUESTIONS = [
  "What does it mean to unfollow the leader?",
  "Why are old leadership models failing?",
  "Why does real leadership begin with self-leadership?",
  "How does ego show up in leadership?",
  "What is the Health, Head & Heart Framework?",
  "How can leaders create accountability without fear?",
  "What does heart-centred leadership look like in practice?",
  "Why do so many strategies fail at the behaviour level?",
  "How can women lead with more confidence and self-trust?",
  "What should organisations rethink about burnout and performance?",
];

const FEATURED = [
  {
    tag: "Featured Interview",
    title: "Scientifically Speaking — Reem Borrows",
    desc: "A deep conversation exploring leadership, neuroscience, and how conscious awareness unlocks human potential.",
    href: "https://www.youtube.com/watch?v=zrDsLXTJjTU",
    img: "https://img.youtube.com/vi/zrDsLXTJjTU/maxresdefault.jpg",
    cta: "Watch Interview",
  },
  {
    tag: "YouTube",
    title: "Identifying Toxicity in the Workplace",
    desc: "Recognising toxic workplace dynamics and transforming leadership culture.",
    href: "https://www.youtube.com/watch?v=DvRWhpN7iU8",
    img: "https://img.youtube.com/vi/DvRWhpN7iU8/hqdefault.jpg",
    cta: "Watch",
  },
  {
    tag: "YouTube",
    title: "Modulating Human Potential",
    desc: "Insights into unlocking human potential through conscious leadership.",
    href: "https://www.youtube.com/watch?v=5limQgePgoM",
    img: "https://img.youtube.com/vi/5limQgePgoM/hqdefault.jpg",
    cta: "Watch",
  },
  {
    tag: "Spotify Podcast",
    title: "Resilient Leadership in Times of Change",
    desc: "A discussion about trust, adaptability, and navigating uncertainty as a leader.",
    href: "https://open.spotify.com/episode/1QFH3TsFsBesTQKVwryoEt",
    img: null,
    cta: "Listen",
  },
  {
    tag: "Brainz Magazine",
    title: "5 Characteristics of Conscious Leaders",
    desc: "The leadership traits shaping conscious organisations and modern teams.",
    href: "https://www.brainzmagazine.com/post/5-characteristics-of-conscious-leaders",
    img: null,
    cta: "Read",
  },
  {
    tag: "MSN",
    title: "Top 10 Inspiring Women Leaders",
    desc: "Recognition of women shaping the future of leadership and innovation.",
    href: "https://www.msn.com/en-us/news/other/top-10-inspiring-women-leaders-in-2026-/ar-AA1VAbbm",
    img: null,
    cta: "Read",
  },
];

export default function MediaPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-16">
        <p className="eyebrow mb-4">Media &amp; Press</p>
        <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight max-w-3xl">
          Available for interviews, podcasts &amp; features.
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-ink/70 font-light leading-relaxed">
          Reem Borrows is available for interviews, podcasts, panels, expert
          commentary and media features on self-leadership, modern
          leadership, emotional intelligence, culture, behaviour and
          human-centred performance.
        </p>
        <a href="/contact" className="btn-primary inline-block mt-10">
          Request an Interview
        </a>
      </section>

      {/* BIO */}
      <section className="section-pad py-20 bg-cream/40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Short Bio</p>
            <p className="text-ink/75 leading-relaxed">
              Reem Borrows is the author of Unfollow the Leader, founder of
              Dreem Coaching &amp; Consulting and a leadership strategist
              helping individuals, teams and organisations align strategy,
              behaviour and culture through self-leadership, emotional
              intelligence and the Health, Head &amp; Heart framework.
            </p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow mb-4">Long Bio</p>
            <p className="text-ink/75 leading-relaxed">
              Reem Borrows is an author, leadership strategist, executive
              coach, keynote speaker and founder of Dreem Coaching &amp;
              Consulting. With more than two decades of experience across
              leadership, sales, marketing, organisational development and
              coaching, Reem helps people close the gap between what they
              know and how they lead under pressure. Her work sits at the
              intersection of strategy, behaviour, culture, emotional
              intelligence and human-centred performance.
            </p>
          </div>
        </div>
      </section>

      {/* TOPICS + QUESTIONS */}
      <section className="section-pad py-24 grid lg:grid-cols-2 gap-16">
        <div>
          <p className="eyebrow mb-6">Speaking Topics for Media</p>
          <div className="flex flex-wrap gap-3">
            {TOPICS.map((t) => (
              <span
                key={t}
                className="text-xs tracking-wide uppercase border border-ocean/20 text-oceandark px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-6">Suggested Interview Questions</p>
          <ul className="space-y-3">
            {QUESTIONS.map((q) => (
              <li key={q} className="flex gap-3 text-ink/80 leading-relaxed text-sm">
                <span className="text-rosedeep shrink-0">—</span>
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RECENT COLLABORATIONS */}
      <section className="section-pad py-24 bg-cream/40">
        <p className="eyebrow mb-4">Recent Collaborations</p>
        <h2 className="font-display text-3xl md:text-4xl text-oceandark mb-14 max-w-2xl">
          In conversation
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {FEATURED.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="aspect-video bg-ocean/10 overflow-hidden mb-4 relative">
                {m.img ? (
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-display italic text-oceandark/40">
                    {m.tag}
                  </div>
                )}
              </div>
              <p className="eyebrow mb-2">{m.tag}</p>
              <h3 className="font-display text-lg mb-2 text-oceandark group-hover:text-rosedeep transition-colors">
                {m.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-2">{m.desc}</p>
              <span className="text-xs tracking-widest2 uppercase text-rosedeep">
                {m.cta} →
              </span>
            </a>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="For Media"
        title="Request Reem for your next interview or feature."
        copy="Share your outlet, format and timeline and Reem's team will follow up promptly with availability."
        primaryLabel="Request an Interview"
        primaryHref="/contact"
      />
    </main>
  );
}
