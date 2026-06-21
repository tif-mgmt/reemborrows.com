export const metadata = {
  title: "Contact Reem Borrows | Speaking, Coaching, Media & Leadership Programs",
  description:
    "Contact Reem Borrows for speaking, media, executive coaching, leadership development, workshops and organisational consulting.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section-pad pt-40 pb-20 grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="font-display text-5xl text-oceandark leading-tight mb-8">
            Get in touch
          </h1>
          <p className="text-ink/70 leading-relaxed mb-10">
            Whether you are interested in booking Reem to speak, exploring
            leadership work for your team, requesting media commentary or
            asking about Unfollow the Leader, we would love to hear from
            you.
          </p>
          <p className="text-sm text-ink/60">
            Email{" "}
            <a href="mailto:info@dreem.com.au" className="text-rosedeep underline underline-offset-4">
              info@dreem.com.au
            </a>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form action="#" method="post" className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="organisation" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                  Organisation
                </label>
                <input
                  id="organisation"
                  name="organisation"
                  type="text"
                  className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
                />
              </div>
              <div>
                <label htmlFor="role" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                  Role
                </label>
                <input
                  id="role"
                  name="role"
                  type="text"
                  className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
                />
              </div>
            </div>

            <div>
              <label htmlFor="reason" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                Reason for Enquiry
              </label>
              <select
                id="reason"
                name="reason"
                className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
              >
                <option>Speaking</option>
                <option>Coaching</option>
                <option>Media</option>
                <option>Leadership Program</option>
                <option>Book</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="text-xs tracking-widest2 uppercase text-oceandark/70 block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-transparent border border-ocean/25 px-4 py-3 text-sm focus:outline-none focus:border-rose"
              />
            </div>

            <label className="flex items-start gap-3 text-xs text-ink/60">
              <input type="checkbox" required className="mt-1" />
              I consent to Reem Borrows / Dreem Coaching &amp; Consulting
              contacting me regarding this enquiry.
            </label>

            <button type="submit" className="btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
