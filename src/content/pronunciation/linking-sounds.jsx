import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { LineBreak } from "@/components/atoms/LineBreak";
import { underline, portuguese, phonetics } from "@/helpers/content";

export default function LikedSounds() {
  return (
    <>
      <Whiteboard title="Pronunciation" subtitle="Linked Sounds" />
      <div className="line-break">
        {/* Check out a couple of linked sounds. */}
        <Line
          value={[
            {
              audio: "/assets/audio/pronunciation/linked-sounds/check-out.mp3",
              part: "Check out a couple of linked sounds.",
              type: "bold",
            },
          ]}
        />
        <Contents
          items={[
            {
              href: "vowel-vowel",
              label: "Vowel + Vowel",
            },
            {
              href: "consonant-vowel",
              label: "Consonant + Vowel",
            },
            {
              href: "d-y",
              label: "d + y",
            },
            {
              href: "t-y",
              label: "t + y",
            },
            {
              href: "s-y",
              label: "s + y",
            },
          ]}
        />

        <Section id="vowel-vowel" label="Vowel + Vowel" heading={3}>
          {/* /w/ */}
          <Line
            value={[
              {
                audio: "/assets/audio/pronunciation/phonetics/consonants/w.mp3",
              },
              phonetics("/w/ "),
            ]}
          />
          {/* Go on. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/go-on.mp3",
              },
              "G",
              underline("o o"),
              "n. ",
              portuguese("Vá em frente."),
            ]}
          />
          {/* Do it again. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/do-it-again.mp3",
              },
              "D",
              underline("o i"),
              "t again. ",
              portuguese("Faça novamente."),
            ]}
          />
          {/* Do it again. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/vowel-vowel/w/do-it-again.mp3",
              },
              "D",
              underline("o i"),
              "t again. ",
              portuguese("Faça novamente."),
            ]}
          />
          {/* You have to ge(t) used to i(t). */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-to-get-used-to-it.mp3",
              },
              "You have to ge(t) used t",
              underline("o i"),
              "(t)."
            ]}
          />

          <LineBreak />

          {/* /j/ */}
          <Line
            value={[
              {
                audio: "/assets/audio/pronunciation/phonetics/consonants/j.mp3",
              },
              phonetics("/j/"),
            ]}
          />
          {/* I a gree with you on this issue. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/vowel-vowel/j/i-agree-with-you-on-this-issue.mp3",
              },
              underline("I a"),
              "gree with you on this issue. ",
              portuguese("Eu concordo com você nesse ponto."),
            ]}
          />
          {/* She asked me a question. */}
          <Line
            value={[
              {
                audio: "/assets/audio/general/she-asked-me-a-question.mp3",
              },
              "Sh",
              underline("e a"),
              "sked me a question. ",
              portuguese("Ela me fez uma pergunta."),
            ]}
          />
        </Section>

        <Section id="consonant-vowel" label="Consonant + Vowel" heading={3}>
          {/* Have a seat, please. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/have-a-seat-please.mp3",
              },
              "Ha",
              underline("v(e) a"),
              "  sea(t), please.",
              portuguese(" Sente-se, por favor."),
            ]}
          />
          {/* Take a look at it. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/take-a-look-at-it.mp3",
              },
              "Ta",
              underline("k(e) a"),
              " loo",
              underline("k at i"),
              "(t).",
              portuguese(" Dê uma olhada."),
            ]}
          />
          {/* It's an easy task. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/its-an-easy-task.mp3",
              },
              "It’",
              underline("s an e"),
              "asy task.",
              portuguese(" É uma tarefa fácil."),
            ]}
          />
          {/* You have an incredible memory. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-an-incredible-memory.mp3",
              },
              "You ha",
              underline("v(e) an i"),
              "ncredible memory.",
              portuguese(" Você tem uma memória incrível."),
            ]}
          />
          {/* You have to ge(t) used to i(t). */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/you-have-to-get-used-to-it.mp3",
              },
              "You have to ge(t) used to i(t).",
            ]}
          />
          {/* I like it a lot. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/i-like-it-a-lot.mp3",
              },
              "I lik",
              underline("e it a"),
              " lo(t).",
              portuguese(" Gosto bastante."),
            ]}
          />
          {/* Pick it up. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/pick-it-up.mp3",
              },
              "Pi",
              underline("ck it u"),
              "(p).",
              portuguese(" Pegue."),
            ]}
          />
          {/* I'm out of time. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/im-out-of-time.mp3",
              },
              "I’",
              underline("m o"),
              "u",
              underline("t o"),
              "f time.",
              portuguese(" Estou sem tempo."),
            ]}
          />
          {/* Turn off the lights. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/turn-off-the-lights.mp3",
              },
              "Tur",
              underline("n o"),
              "ff the lights.",
              portuguese(" Apague as luzes."),
            ]}
          />
          {/* He works in an office. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/he-works-in-an-office.mp3",
              },
              "He work",
              underline("s i"),
              underline("n an o"),
              "ffic(e). ",
              portuguese("Ele trabalha no escritório."),
            ]}
          />
          {/* In the end, it doesnt eve matter. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/in-the-end-it-doesnt-even-matter.mp3",
              },
              "In the en(d), i(t) does",
              underline("n’t"),
              " even matter.",
              portuguese(" No final, isso nem importa."),
            ]}
          />
          {/* Embark on an extradionary journey. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/consonant-vowel/embark-on-an-extraordinary-journey.mp3",
              },
              "Embar",
              underline("k on an e"),
              "xtraordinary journey.",
              portuguese(" Embarque em uma jornada extraordinária."),
            ]}
          />
        </Section>

        <Section id="d-y" label="d + y" heading={3}>
          {/* /dʒ/ */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/phonetics/consonants/dʒ.mp3",
              },
              phonetics("/dʒ/"),
            ]}
          />
          {/* Did you like it? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/d-y/did-you-like-it.mp3",
              },
              "Di",
              underline("d y"),
              "ou like i(t)? ",
              portuguese("Você gostou?"),
            ]}
          />
          {/* Did you eat? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/d-y/did-you-eat.mp3",
              },
              "Di",
              underline("d y"),
              "ou ea(t)? ",
              portuguese("Você comeu?"),
            ]}
          />
          {/* Do you know what I mean? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/d-y/do-you-know-what-i-mean.mp3",
              },
              underline("D(o) y"),
              "ou know what I mean? ",
              portuguese("Você me entende?"),
            ]}
          />
          {/* Would you like it? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/d-y/would-you-like-it.mp3",
              },
              "Woul",
              underline("d y"),
              "ou like i(t)? ",
              portuguese("Você gostaria?"),
            ]}
          />
        </Section>

        <Section id="t-y" label="t + y" heading={3}>
          {/* /tʃ/ */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/phonetics/consonants/tʃ.mp3",
              },
              phonetics("/tʃ/"),
            ]}
          />
          {/* What's your name? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/t-y/whats-your-name.mp3",
              },
              "Wha",
              underline("t’(s) y"),
              "our name?",
              " ",
              portuguese("Qual é o seu nome?"),
            ]}
          />
          {/* Don't you like it? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/t-y/dont-you-like-it.mp3",
              },
              "Don’",
              underline("t y"),
              "ou like it?",
              " ",
              portuguese("Você não gosta?"),
            ]}
          />
          {/* Didn't you like it? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/t-y/didnt-you-like-it.mp3",
              },
              "Didn’",
              underline("t y"),
              "ou like it?",
              " ",
              portuguese("Você não gostou?"),
            ]}
          />
        </Section>

        <Section id="s-y" label="s + y" heading={3}>
          {/* /ʒ/ */}
          <Line
            value={[
              {
                audio: "/assets/audio/pronunciation/phonetics/consonants/ʒ.mp3",
              },
              phonetics("/ʒ/"),
            ]}
          />
          {/* This year I wanna learn Spanish. */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/s-y/this-year-i-wanna-learn-spanish.mp3",
              },
              "Thi",
              underline("s y"),
              "ear I wanna learn Spanish.",
              portuguese("Este ano eu quero aprender espanhol."),
            ]}
          />
          {/* How's your family? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/s-y/hows-your-family.mp3",
              },
              "How’",
              underline("s y"),
              "our family? ",
              portuguese("Como está a sua família?"),
            ]}
          />
          {/* Where's your phone? */}
          <Line
            value={[
              {
                audio:
                  "/assets/audio/pronunciation/linked-sounds/s-y/wheres-your-phone.mp3",
              },
              "Where i",
              underline("s y"),
              "our phone?? ",
              portuguese("Cadê o seu telefone?"),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
