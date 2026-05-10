import styles from "./layout.module.css";

import {
  Luckiest_Guy,
  Montserrat,
  Oswald,
  Rampart_One,
  Anton,
  Shadows_Into_Light
} from "next/font/google";
import Script from "next/script";

import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import { HeaderProvider } from "../context/headerContext";
import Header from "@/components/organisms/Header";
import NavBar from "@/components/organisms/Navbar";
import { ScrollToTop } from "@/components/molecules/ScrollToTop";
import Footer from "@/components/organisms/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiestGuy",
  subsets: ["latin"],
  weight: "400",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: "400",
});

const rampartOne = Rampart_One({
  variable: "--font-rampart-one",
  subsets: ["latin"],
  weight: "400",
});

const shadowIntoLight = Shadows_Into_Light({
  variable: "--font-shadow-into-light",
  subsets: ["latin"],
  weight: "400",
})

export const metadata = {
  title: "Daily Basis English Course",
  description: "Aulas particulares de inglês",
  openGraph: {
    title: "Daily Basis English Course",
    description: "Aulas particulares de inglês",
    url: "https://www.dbec.com.br",
    siteName: "Daily Basis English Course",
    images: [
      {
        url: "https://www.dbec.com.br/assets/img/og.png",
        width: 1200,
        height: 630,
        alt: "Daily Basis English Course",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0FBQ6F0DWC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'G-0FBQ6F0DWC');
          `}
        </Script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7288029314979883"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body
        className={`${montserrat.variable}
        ${anton.variable}
        ${oswald.variable}
        ${luckiestGuy.variable}
        ${rampartOne.variable}
        ${shadowIntoLight.variable}`
      }
      >
        <ThemeProvider>
          <div className={styles.layout}>
            <HeaderProvider>
              <Header />
              <main className={styles.main}>{children}</main>
            </HeaderProvider>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
