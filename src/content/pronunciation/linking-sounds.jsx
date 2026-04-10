import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
export default function LikedSounds() {
  return <>
      <Whiteboard title="Pronunciation" subtitle="Linked Sounds" />
      <div className="line-break">
        <Paragraph value={[{
        audio: "/assets/audio/pronunciation/linked-sounds/check-out.mp3",
        part: "Check out a couple of linked sounds.",
        type: "bold"
      }]} />
        <Contents items={[{
        href: "vowel-vowel",
        label: "Vowel + Vowel"
      }, {
        href: "consonant-vowel",
        label: "Consonant + Vowel"
      }, {
        href: "d-y",
        label: "d + y"
      }, {
        href: "t-y",
        label: "t + y"
      }, {
        href: "s-y",
        label: "s + y"
      }]} />

        <Section id="vowel-vowel" label="Vowel + Vowel" heading={3}>
          <Paragraph value={[{
          audio: "/assets/audio/pronunciation/phonetics/consonants/w.mp3"
        }, {
          part: "/w/ ",
          type: "phonetics"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/go-on.mp3"
        }, "G", {
          part: "o o",
          type: "underline"
        }, "n. ", {
          part: "Vá em frente.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/do-it-again.mp3"
        }, "D", {
          part: "o i",
          type: "underline"
        }, "t again. ", {
          part: "Faça novamente.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-to-get-used-to-it.mp3"
        }, "You have to ge(t) used to i(t).", {
          lineBreak: true
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/phonetics/consonants/j.mp3"
        }, {
          part: "/j/",
          type: "phonetics"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/vowel-vowel/j/i-agree-with-you-on-this-issue.mp3"
        }, {
          part: "I a",
          type: "underline"
        }, "gree with you on this issue. ", {
          part: "Eu concordo com você nesse ponto.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/general/she-asked-me-a-question.mp3"
        }, "Sh", {
          part: "e a",
          type: "underline"
        }, "sked me a question. ", {
          part: "Ela me fez uma pergunta.",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="consonant-vowel" label="Consonant + Vowel" heading={3}>
          <Paragraph value={[{
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/have-a-seat-please.mp3"
        }, "Ha", {
          part: "v(e) a",
          type: "underline"
        }, "  sea(t), please.", {
          part: " Sente-se, por favor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/take-a-look-at-it.mp3"
        }, "Ta", {
          part: "k(e) a",
          type: "underline"
        }, " loo", {
          part: "k at i",
          type: "underline"
        }, "(t).", {
          part: " Dê uma olhada.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/its-an-easy-task.mp3"
        }, "It’", {
          part: "s an e",
          type: "underline"
        }, "asy task.", {
          part: " É uma tarefa fácil.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-an-incredible-memory.mp3"
        }, "You ha", {
          part: "v(e) an i",
          type: "underline"
        }, "ncredible memory.", {
          part: " Você tem uma memória incrível.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-to-get-used-to-it.mp3"
        }, "You have to ge(t) used to i(t).", {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/i-like-it-a-lot.mp3"
        }, "I lik", {
          part: "e it a",
          type: "underline"
        }, " lo(t).", {
          part: " Gosto bastante.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/pick-it-up.mp3"
        }, "Pi", {
          part: "ck it u",
          type: "underline"
        }, "(p).", {
          part: " Pegue.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/im-out-of-time.mp3"
        }, "I’", {
          part: "m o",
          type: "underline"
        }, "u", {
          part: "t o",
          type: "underline"
        }, "f time.", {
          part: " Estou sem tempo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/turn-off-the-lights.mp3"
        }, "Tur", {
          part: "n o",
          type: "underline"
        }, "ff the lights.", {
          part: " Apague as luzes.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/he-works-in-an-office.mp3"
        }, "He work", {
          part: "s i",
          type: "underline"
        }, {
          part: "n an o",
          type: "underline"
        }, "ffic(e). ", {
          part: "Ele trabalha no escritório.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/in-the-end-it-doesnt-even-matter.mp3"
        }, "In the en(d), i(t) does", {
          part: "n’t",
          type: "underline"
        }, " even matter.", {
          part: " No final, isso nem importa.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/consonant-vowel/embark-on-an-extraordinary-journey.mp3"
        }, "Embar", {
          part: "k on an e",
          type: "underline"
        }, "xtraordinary journey.", {
          part: " Embarque em uma jornada extraordinária.",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="d-y" label="d + y" heading={3}>
          <Paragraph value={[{
          audio: "/assets/audio/pronunciation/phonetics/consonants/dʒ.mp3"
        }, {
          part: "/dʒ/",
          type: "phonetics"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/d-y/did-you-like-it.mp3"
        }, "Di", {
          part: "d y",
          type: "underline"
        }, "ou like i(t)? ", {
          part: "Você gostou?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/d-y/did-you-eat.mp3"
        }, "Di", {
          part: "d y",
          type: "underline"
        }, "ou ea(t)? ", {
          part: "Você comeu?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/d-y/do-you-know-what-i-mean.mp3"
        }, {
          part: "D(o) y",
          type: "underline"
        }, "ou know what I mean? ", {
          part: "Você me entende?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/d-y/would-you-like-it.mp3"
        }, "Woul", {
          part: "d y",
          type: "underline"
        }, "ou like i(t)? ", {
          part: "Você gostaria?",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="t-y" label="t + y" heading={3}>
          <Paragraph value={[{
          audio: "/assets/audio/pronunciation/phonetics/consonants/tʃ.mp3"
        }, {
          part: "/tʃ/",
          type: "phonetics"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3"
        }, "Wha", {
          part: "t’(s) y",
          type: "underline"
        }, "our name?", " ", {
          part: "Qual é o seu nome?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/t-y/dont-you-like-it.mp3"
        }, "Don’", {
          part: "t y",
          type: "underline"
        }, "ou like it?", " ", {
          part: "Você não gosta?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/t-y/didnt-you-like-it.mp3"
        }, "Didn’", {
          part: "t y",
          type: "underline"
        }, "ou like it?", " ", {
          part: "Você não gostou?",
          type: "portuguese"
        }]} />
        </Section>

        <Section id="s-y" label="s + y" heading={3}>
          <Paragraph value={[{
          audio: "/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3"
        }, {
          part: "/ʒ/",
          type: "phonetics"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/s-y/this-year-i-wanna-learn-spanish.mp3"
        }, "Thi", {
          part: "s y",
          type: "underline"
        }, "ear I wanna learn Spanish.", {
          part: "Este ano eu quero aprender espanhol.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/s-y/hows-your-family.mp3"
        }, "How’", {
          part: "s y",
          type: "underline"
        }, "our family? ", {
          part: "Como está a sua família?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          audio: "/assets/audio/pronunciation/linked-sounds/s-y/wheres-your-phone.mp3"
        }, "Where i", {
          part: "s y",
          type: "underline"
        }, "our phone?? ", {
          part: "Cadê o seu telefone?",
          type: "portuguese"
        }]} />
        </Section>
      </div>
    </>;
}