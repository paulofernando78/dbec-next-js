import styles from "./contentLayout.module.css";

import { HeaderProvider } from "@/context/headerContext";

import NavBar from "@/components/organisms/Navbar";

import { ScrollToTop } from "@/components/molecules/ScrollToTop";
import { BuyMeACoffee } from "@/components/atoms/BuyMeACoffee";

export default function ContentLayout({ children }) {
  return (
    <>
      <div className={styles.navMain}>
        <NavBar className={styles.nav} />
        <div className={styles.content}>{children}</div>
        {/* <BuyMeACoffee className="coffee" /> */}
      </div>
    </>
  );
}
