import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Comparison } from "@/components/molecules/Comparison/";

export default function LetterA() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Letters a / e(a)" />
      <div className="line-break">
        <Comparison
          groups={[
            {
              group: [
                {
                  audio: "/audio/general/and.mp3",
                  word: "and",
                  phonetics: "/ænd/",
                  translation: "e",
                },
                {
                  audio: "/audio/general/end.mp3",
                  word: "end",
                  phonetics: "/end/",
                  translation: "fim",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/bad.mp3",
                  word: "bad",
                  phonetics: "/bæd/",
                  translation: "mal, ruim; péssimo",
                },
                {
                  audio: "/audio/general/bed.mp3",
                  word: "bed",
                  phonetics: "/bed/",
                  translation: "cama",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/bat.mp3",
                  word: "bat",
                  phonetics: "/bæt/",
                  translation: "...",
                },
                {
                  audio: "/audio/general/bet.mp3",
                  word: "bet",
                  phonetics: "/bet/",
                  translation: "...",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/dad.mp3",
                  word: "dad",
                  phonetics: "/dæd/",
                  translation: "pai",
                },
                {
                  audio: "/audio/general/dead.mp3",
                  word: "dead",
                  phonetics: "/ded/",
                  translation: "morto(a)",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/had.mp3",
                  word: "had",
                  phonetics: "/hæd/",
                  translation: "...",
                },
                {
                  audio: "/audio/general/head.mp3",
                  word: "head",
                  phonetics: "/hed/",
                  translation: "...",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/man.mp3",
                  word: "man",
                  phonetics: "/mæn/",
                  translation: "homem",
                },
                {
                  audio: "/audio/general/men.mp3",
                  word: "men",
                  phonetics: "/men/",
                  translation: "homens",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/pan.mp3",
                  word: "pan",
                  phonetics: "/pæn/",
                  translation: "...",
                },
                {
                  audio: "/audio/general/pen.mp3",
                  word: "pen",
                  phonetics: "/pen/",
                  translation: "...",
                },
              ],
            },
            {
              group: [
                {
                  audio: "/audio/general/tan.mp3",
                  word: "tan",
                  phonetics: "/tan/",
                  translation: "...",
                },
                {
                  audio: "/audio/general/ten.mp3",
                  word: "ten",
                  phonetics: "/ten/",
                  translation: "dez (número)",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}
