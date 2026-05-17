import styles from "./contentLayout.module.css";

import { HeaderProvider } from "@/context/headerContext";

import { DictionaryArea } from "@/components/molecules/DictionaryArea";
import NavBar from "@/components/organisms/Navbar";

import { ScrollToTop } from "@/components/molecules/ScrollToTop";
import { BuyMeACoffee } from "@/components/atoms/BuyMeACoffee";

export default function ContentLayout({ children }) {
  return (
    <>
      <div className={styles.navMain}>
        <DictionaryArea />
        <NavBar className={styles.nav} />
        <div className={styles.content} id="content-scroll">{children}</div>
        <ScrollToTop />
        <BuyMeACoffee className="coffee" />
      </div>
    </>
  );
}
