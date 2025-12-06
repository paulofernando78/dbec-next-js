import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

import Header from "@/components/organisms/Header";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Card from "@/components/atoms/Card";

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
            <Navbar></Navbar>
              <main>{children}</main>
          </div>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
