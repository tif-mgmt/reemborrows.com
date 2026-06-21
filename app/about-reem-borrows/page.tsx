import Image from "next/image";
import Link from "next/link";
import FinalCta from "@/components/FinalCta";

export const metadata = {
  title: "About Reem Borrows | Author, Leadership Strategist & Executive Coach",
  description:
    "Meet Reem Borrows, author of Unfollow the Leader, founder of Dreem Coaching & Consulting and leadership strategist helping people align strategy, behaviour and culture through self-leadership and emotional intelligence.",
};

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="section-pad pt-40 pb-20 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow mb-6">About</p>
          <h1 className="font-display text-5xl md:text-6xl text-oceandark leading-tight">
            Meet Reem Borrows
          </h1>
          <p className="mt-8 max-w-xl text-lg text-ink/70 font-light leading-relaxed">
            Reem Borrows is an author, leadership strategist, executive
            coach, keynote speaker and founder of Dreem Coaching &amp;
            Consulting. Her work sits at the intersection of strategy,
            behaviour, culture, emotional intelligence and human-centred
            performance.
          </p>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/speaking" className="btn-primary">
              Book Reem
            </Link>
            <Link href="/work-with-reem" className="btn-outline">
              Work With Reem
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="relative w-full aspect-[3/4] shadow-xl">
            <Image
              src="/images/reem-portrait.png"
              alt="Reem Borrows"
              fill
              sizes="(max-width: 1024px) 60vw, 320px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* GROUNDED VOICE */}
      <section className="section-pad py-24 bg-cream/40">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-oceandark leading-tight">
              A grounded voice for human-centred leadership.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/75 leading-relaxed">
            <p>
              Reem is known for helping people align strategy, behaviour and
              culture in a way that creates sustainable change rather than
              short-term motivation. Her approach combines strategic
              thinking with human behaviour, emotional regulation and
              self-leadership. Her work is especially relevant for leaders
              and teams navigating complexity, burnout, change, conflict,
              disengagement or cultural misalignment.
            </p>
          </div>
        </div>
      </section>

      {/* LEADERSHIP IS HUMANITY */}
      <section className="section-pad py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl md:text-4xl text-oceandark leading-tight italic text-rosedeep">
              Leadership is not about hierarchy. It is about humanity.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-ink/75 leading-relaxed">
            <p>
              Reem believes leadership begins with self-awareness. The way a
              person thinks, responds, communicates and behaves under
              pressure has a direct impact on the people around them. Her
              work challenges leaders to stop performing leadership and
              start practising it. That means noticing when ego is driving
              the conversation, recognising when fear is shaping the
              decision, understanding when stress is narrowing perspective,
              and choosing clarity, courage and connection instead.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND */}
      <section className="section-pad py-24 bg-oceandark text-creamlight">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow !text-rose mb-4">Background</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              25+ years across leadership, coaching and culture.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-creamlight/75 leading-relaxed">
            <p>
              Reem has more than two decades of experience across
              leadership, coaching, facilitation, organisational culture,
              communication, behavioural change and strategy execution. Her
              professional background includes senior leadership and sales
              management roles, as well as extensive work in executive
              coaching, leadership development and organisational
              consulting.
            </p>
            <p>
              She holds a Bachelor of Commerce, a Postgraduate Diploma in
              Strategic Human Resources and Industrial Relations, and is a
              graduate of the Australian Institute of Company Directors.
            </p>
            <p className="text-creamlight/55 italic">
              Alongside her leadership work, Reem is deeply committed to
              humanitarian initiatives that support dignity, justice, and
              greater understanding between people.
            </p>
          </div>
        </div>
      </section>

      {/* THE BOOK */}
      <section className="section-pad py-24 bg-cream/40">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Author</p>
            <h2 className="font-display text-3xl md:text-4xl text-oceandark leading-tight mb-6">
              Author of Unfollow the Leader
            </h2>
            <p className="text-ink/75 leading-relaxed mb-6">
              In Unfollow the Leader, Reem challenges outdated leadership
              models and presents a practical, values-driven approach to
              modern leadership. The book explores self-leadership,
              emotional intelligence, wellbeing, ego, accountability,
              culture and the Health, Head &amp; Heart framework.
            </p>
            <p className="text-ink/75 leading-relaxed mb-8 italic">
              What sets Reem apart is not only her experience. It is her
              presence. Her writing, speaking, coaching and facilitation are
              shaped by warmth, honesty, depth and practical clarity.
            </p>
            <Link href="/unfollow-the-leader" className="btn-primary">
              Explore the Book
            </Link>
          </div>
          <div className="lg:col-span-3 lg:col-start-9">
            <div className="relative w-full aspect-[3/4]">
              <Image
                src="/images/unfollow-book-cover.png"
                alt="Unfollow the Leader book cover"
                fill
                sizes="220px"
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <FinalCta
        eyebrow="Bring Reem's Work To Life"
        title="Bring Reem's work to your organisation, event or leadership team."
        copy="From keynotes to executive coaching to culture consulting, Reem's work helps people move from awareness to action."
        primaryLabel="Book Reem"
        primaryHref="/speaking"
      />
    </main>
  );
}
