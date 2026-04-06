import styles from "./layout.module.css"
import "./globals.css";
import { ThemeProvider } from "@/context/themeContext";
import { HeaderProvider } from "../context/headerContext";
import Header from "@/components/organisms/Header";
import NavBar from "@/components/organisms/Navbar";
import { ScrollToTop } from "@/components/molecules/ScrollToTop";
import Footer from "@/components/organisms/Footer";

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
      <body>
        <ThemeProvider>
          <div className="layout">
            <HeaderProvider>
              <Header></Header>
              <div className="nav-main">
                <NavBar></NavBar>
                <main className={styles.main}>
                  {children}
                  <div className={styles.scrollToTopWrapper}>
                    <ScrollToTop />
                  </div>
                </main>
              </div>
            </HeaderProvider>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
