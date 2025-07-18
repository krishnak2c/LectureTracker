import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSE Tracker",
  description: "Track your Preparation for CSE Exam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://cseLectureTracker.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="GATE CSE Tracker" />
        <meta
          property="og:description"
          content="Track preparation for CSE Exam"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/brn0WTcz/GCT-OG-Image.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="LectureTracker.vercel.app" />
        <meta
          property="twitter:url"
          content="https://cselecturetracker.vercel.app/"
        />
        <meta name="twitter:title" content="CSE Tracker" />
        <meta
          name="twitter:description"
          content="Track preparation for CSE Exam"
        />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/brn0WTcz/GCT-OG-Image.png"
        />
        {/* <script //analytics
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "73fa6f1bac1b4c22a158830005f40c56"}'
        ></script> */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "ifk1t3e1jr");
              `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <div className="h-px w-full mt-20"></div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
