import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdifatah Abdi",
  description: "CS & Data Science @ UW–Madison · ML Researcher · Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* Cal.com embed — popup opens when any element with data-cal-link is clicked */}
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal; let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {}; cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    typeof namespace === "string"
                      ? (cal.ns[namespace] = api) && p(api, ar)
                      : p(cal, ar);
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", { origin: "https://app.cal.com" });
              Cal("ui", {
                theme: "light",
                styles: { branding: { brandColor: "#2563eb" } },
                hideEventTypeDetails: false,
                layout: "month_view"
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
