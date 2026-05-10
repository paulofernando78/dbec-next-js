import styles from "./Contact.module.css";

import { Image } from "@/components/atoms/Image";

const contacts = [
  // email
  {
    link: "mailto:paulofernando78@gmail.com",
    icon: ("/assets/img/contacts/email.png"),
  },
  // youtube
  {
    link: "https://www.youtube.com/@dbec11",
    icon: "/assets/img/contacts/youtube.png"
  },
  // linkedin
  {
    link: "https://www.linkedin.com/in/paulo-fernando-70930725/",
    icon: "/assets/img/contacts/linkedin.png"
  },
  // buy me a coffee
  {
    link: "",
    icon: "/assets/img/contacts/coffee.gif"
  },
  // whatsapp
  {
    link: "https://wa.me/5511981672145",
    icon: "/assets/img/contacts/whatsapp.png"
  },
];

export const Contact = ({className}) => {
  return (
    <ul className={`${styles.contactContainer} ${className}`}>
      {contacts.map((contact, index) => (
        <li key={index} className={styles.scaleAnimation}>
          <a href={contact.link}>
            <Image src={contact.icon} alt=""/>
          </a>
        </li>
      ))}
    </ul>
  );
};
