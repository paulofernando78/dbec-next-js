import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import NavBar from "@/components/organisms/Navbar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const bebas_Neue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Daily Basis English Course",
  description: "Aulas particulares de inglês",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${bebas_Neue.variable}`}>
        <div className="layout">
          <Header></Header>
          <div className="content-wrapper">
            <NavBar></NavBar>
            <main>{children}</main>
          </div>
          <footer>
            <small>© Daily Basis Englih Course 2025</small>
          </footer>
        </div>
      </body>
    </html>
  );
}
