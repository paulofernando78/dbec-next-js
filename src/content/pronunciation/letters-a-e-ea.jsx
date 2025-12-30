import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Comparison } from "../../components/molecules/Comparison/Comparison";

const letterA = [
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "and",
        phonetics: "/ænd/",
        translation: "e",
      },
      {
        playAudio: "/....mp3",
        word: "end",
        phonetics: "/end/",
        translation: "fim",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "bad",
        phonetics: "/bæd/",
        translation: "mal, ruim; péssimo",
      },
      {
        playAudio: "/....mp3",
        word: "bed",
        phonetics: "/bed/",
        translation: "cama",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "bat",
        phonetics: "/bæt/",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "bet",
        phonetics: "/bet/",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "dad",
        phonetics: "/dæd/",
        translation: "pai",
      },
      {
        playAudio: "/....mp3",
        word: "dead",
        phonetics: "/ded/",
        translation: "morto(a)",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "had",
        phonetics: "/hæd/",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "head",
        phonetics: "/hed/",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "man",
        phonetics: "/mæn/",
        translation: "homem",
      },
      {
        playAudio: "/....mp3",
        word: "men",
        phonetics: "/men/",
        translation: "homens",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "pan",
        phonetics: "/pæn/",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "pen",
        phonetics: "/pen/",
        translation: "...",
      },
    ],
  },
  {
    comparison: [
      {
        playAudio: "/....mp3",
        word: "tan",
        phonetics: "/tan/",
        translation: "...",
      },
      {
        playAudio: "/....mp3",
        word: "ten",
        phonetics: "/ten/",
        translation: "dez (número)",
      },
    ],
  }
];

export default function LetterA() {
  return (
    <>
      <Whiteboard
      title="Pronunciation"
      subtitle="Letters a / e(a)" />
      <div className="line-break">
        
        <Comparison groups={letterA} />
      </div>
    </>
  );
}
