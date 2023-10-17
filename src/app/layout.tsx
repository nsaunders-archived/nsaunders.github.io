import "./globals.css";

import { Lato } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Surface from "@/components/Surface";
import exhausted from "@/utils/exhausted";
import { title, description } from "@/meta";
import { css } from "@/utils/css-hooks";

const lato = Lato({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = { title, description };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Surface>
        {({ style, ...restProps }) =>
          exhausted(restProps) && (
            <body className={lato.className} style={{ ...style, margin: 0 }}>
              <style>{css}</style>
              <Providers>
                <Header />
                {children}
                <Footer />
              </Providers>
              <script
                defer
                src="https://static.cloudflareinsights.com/beacon.min.js"
                data-cf-beacon='{"token": "ad77aeb014e549369c7c560c90f545c2"}'
              ></script>
            </body>
          )
        }
      </Surface>
    </html>
  );
}
