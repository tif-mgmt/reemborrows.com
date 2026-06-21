import "./globals.css";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://reemborrows.com"),
  title: {
    default: "Reem Borrows | Author of Unfollow the Leader | Human-Centred Leadership Strategist",
    template: "%s | Reem Borrows",
  },
  description:
    "Reem Borrows is the author of Unfollow the Leader and founder of Dreem Coaching & Consulting. She helps leaders, teams and organisations align strategy, behaviour and culture through self-leadership, emotional intelligence and the Health, Head & Heart framework.",
  openGraph: {
    title: "Reem Borrows | Author of Unfollow the Leader",
    description:
      "Human-centred leadership strategist, executive coach and keynote speaker helping organisations align strategy, behaviour and culture through self-leadership.",
    siteName: "Reem Borrows",
    type: "website",
    images: ["/images/unfollow-book-cover.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reem Borrows | Author of Unfollow the Leader",
    description:
      "Human-centred leadership strategist, executive coach and keynote speaker.",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Reem Borrows",
    jobTitle: "Author, Leadership Strategist, Executive Coach, Keynote Speaker",
    description:
      "Reem Borrows is an author, leadership strategist, executive coach, keynote speaker and founder of Dreem Coaching & Consulting. She helps individuals, leaders and organisations align strategy, behaviour and culture through self-leadership, emotional intelligence and the Health, Head & Heart leadership framework.",
    url: "https://reemborrows.com",
    sameAs: [
      "https://www.linkedin.com/in/reem-borrows",
      "https://www.instagram.com/dreemcoachingandconsulting/",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Dreem Coaching & Consulting",
      url: "https://www.dreem.com.au/",
    },
  };

  const bookSchema = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: "Unfollow the Leader",
    author: { "@type": "Person", name: "Reem Borrows" },
    description:
      "Unfollow the Leader challenges outdated models of leadership built on control, performance and followers, and presents the Health, Head & Heart framework for self-leadership, emotional intelligence and sustainable performance.",
  };

  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased bg-creamlight text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
        />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
