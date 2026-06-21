import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-oceandark text-creamlight">
      <div className="section-pad py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display text-2xl mb-4">
            Reem <span className="italic text-rose">Borrows</span>
          </p>
          <p className="text-creamlight/60 text-sm leading-relaxed max-w-sm">
            Author of Unfollow the Leader and founder of Dreem Coaching &amp;
            Consulting. Helping individuals, leaders and organisations align
            strategy, behaviour and culture through self-leadership.
          </p>
        </div>

        <div>
          <p className="eyebrow !text-rose mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-creamlight/70">
            <li><Link href="/about-reem-borrows" className="hover:text-rose transition-colors">About Reem</Link></li>
            <li><Link href="/unfollow-the-leader" className="hover:text-rose transition-colors">Unfollow the Leader</Link></li>
            <li><Link href="/health-head-heart-framework" className="hover:text-rose transition-colors">Health, Head &amp; Heart</Link></li>
            <li><Link href="/speaking" className="hover:text-rose transition-colors">Speaking</Link></li>
            <li><Link href="/work-with-reem" className="hover:text-rose transition-colors">Work With Reem</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow !text-rose mb-4">Connect</p>
          <ul className="space-y-2 text-sm text-creamlight/70">
            <li><Link href="/insights" className="hover:text-rose transition-colors">Insights</Link></li>
            <li><Link href="/media" className="hover:text-rose transition-colors">Media &amp; Press</Link></li>
            <li><Link href="/resources" className="hover:text-rose transition-colors">Free Resources</Link></li>
            <li><Link href="/contact" className="hover:text-rose transition-colors">Contact</Link></li>
            <li>
              <a
                href="https://www.instagram.com/dreemcoachingandconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/reem-borrows"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-rose transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="section-pad py-6 border-t border-creamlight/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-creamlight/40">
        <p>© {new Date().getFullYear()} Reem Borrows. All rights reserved.</p>
        <p>
          Founder of{" "}
          <a
            href="https://www.dreem.com.au/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-rose transition-colors"
          >
            Dreem Coaching &amp; Consulting
          </a>
        </p>
      </div>
    </footer>
  );
}
