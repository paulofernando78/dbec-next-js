import { Montserrat, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import NavBar from "@/components/organisms/NavBar/NavBar";
import { HeaderProvider } from "../context/headerContext";
import { ThemeProvider } from "@/context/themeContext";
import Footer from "@/components/organisms/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Basis English Course",
  description: "Aulas particulares de inglês",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${oswald.variable}`}>
        <ThemeProvider>
          <div className="layout">
            <HeaderProvider>
              <Header></Header>
              <div className="nav-main">
                <NavBar></NavBar>
                <main>{children}</main>
              </div>
            </HeaderProvider>
            <Footer></Footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
