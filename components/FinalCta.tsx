import Link from "next/link";

export default function FinalCta({
  eyebrow = "Ready to lead differently?",
  title = "Lead with clarity, courage and heart.",
  copy = "Whether you are looking for a keynote, a leadership program, executive coaching or practical tools for your team, Reem's work helps people move from awareness to action.",
  primaryLabel = "Start a Conversation",
  primaryHref = "/contact",
  secondaryLabel = "Order the Book",
  secondaryHref = "/unfollow-the-leader",
}) {
  return (
    <section className="section-pad py-28 bg-ocean text-creamlight">
      <div className="max-w-2xl">
        <p className="eyebrow !text-rose mb-4">{eyebrow}</p>
        <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
          {title}
        </h2>
        <p className="text-creamlight/75 mb-10 leading-relaxed">{copy}</p>
        <div className="flex flex-wrap gap-5">
          <Link href={primaryHref} className="btn-rose">
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-block border border-creamlight/30 text-creamlight px-7 py-3.5 text-xs tracking-widest2 uppercase hover:bg-creamlight hover:text-oceandark transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
