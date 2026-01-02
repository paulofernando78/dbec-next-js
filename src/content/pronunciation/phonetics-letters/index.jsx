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
              audio: "/audio/general/",
              text: ["Phonetics sounds of American English."],
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
                {
                  href: "/pronunciation/letter-a",
                  label: "Letter \"a\" ",
                  phonetics: "/æ/, /ɑː/, /ə/, /eɪ/"
                },
                {
                  href: "/pronunciation/letters-a-vs-ea",
                  label: 'Letters "a vs. e(a)"',
                  phonetics: "/æ/ vs. /e/"
                },
                {
                  href: "/pronunciation/letters-a-vs-ea",
                  label: 'Letter "u"',
                  phonetics: "/uː/, /ʌ/, /ɪ/, /ʊ/, /jʊ/"
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
