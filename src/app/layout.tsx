import "./globals.css";

import { Lato } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Surface from "@/components/Surface";
import ifExhausted from "@/utils/ifExhausted";
import { title, description } from "@/meta";

const lato = Lato({ subsets: ["latin"], weight: "400" });

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
          ifExhausted(
            restProps,
            <body className={lato.className} style={{ ...style, margin: 0 }}>
              <Providers>
                <Header />
                {children}
                <Footer />
              </Providers>
            </body>
          )
        }
      </Surface>
    </html>
  );
}
