// import styles from "./"

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Links } from "@/components/molecules/Links";

export default function PhoneticsLetters() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Phonetics + Letters" />
      <div className="line-break">
        <Paragraph
          paragraphs={[
            {
              audio: "/assets//audio/general/",
              text: ["Check out the phonetic sounds of American English."],
            },
          ]}
        />
        <div>
          <div></div>
        </div>
        <Links
          links={[
            {
              title: "Sounds by letters",
              links: [
                // {
                //   href: "/pronunciation/phonetics-letters/letter-a",
                //   label: "Letter \"a\" ",
                //   phonetics: "/æ/, /ɑː/, /ə/, /eɪ/"
                // },
                {
                  href: "/pronunciation/phonetics-letters/letters-a-vs-ea",
                  label: 'Letters "a vs. e(a)"',
                  phonetics: "/æ/ vs. /e/"
                },
                {
                  href: "/pronunciation/phonetics-letters/letters-ea-ee-vs-i",
                  label: 'Letters "ea, ee vs. i"',
                  phonetics: "/iː/ vs /ɪ/"
                },
                // {
                //   href: "/pronunciation/phonetics-letters/letteru",
                //   label: 'Letter "u"',
                //   phonetics: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/"
                // },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
