"use client";

import styles from "./word-families.module.css";

import { useRef } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "../../components/molecules/Dictionary";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { Phonetics } from "@/components/atoms/Phonetics";
import { RegisterTag } from "@/components/atoms/RegisterTag";
import { DegreeTag } from "@/components/atoms/DegreeTag";
import { Portuguese } from "@/components/atoms/Portuguese";

const words = [
  // answer
  {
    verb: {
      audio: "/assets/audio/general/answer.mp3",
      word: "answer",
      partOfSpeech: "regular",
      phonetics: "/ˈæn.sɚ/",
      ptDefinition: "responder",
    },
    conjugation: {
      thirdPersonAudio: "/assets/audio/general/answers.mp3",
      thirdPerson: "answers",
      thirdPersonPhonetics: "/z/",
      pastAudio: "/assets/audio/general/answered.mp3",
      past: "answered",
      pastPhonetics: "/d/",
      participleAudio: "/assets/audio/general/answered.mp3",
      participle: "answered",
      participlePhonetics: "/d/",
      progressiveAudio: "/assets/audio/general/answering.mp3",
      progressive: "answering",
    },
    nouns: [
      {
        audio: "/assets/audio/general/answer.mp3",
        word: "answer",
        ptDefinition: "resposta",
      },
    ],
  },
  // ask
  {
    verb: {
      audio: "/assets/audio/general/ask.mp3",
      word: "ask",
      ptDefinition: "perguntar",
    },
    phrasalVerbs: [
      {
        audio: "/assets/audio/general/ask-out.mp3",
        word: "ask (someone) out",
        ptDefinition: "convidar para sair",
      },
    ],
  },
  // art
  {
    nouns: [
      {
        audio: "",
        word: "art",
        registerTag: "",
        ptDefinition: "arte",
      },
    ],

    adjectives: [
      {
        audio: "",
        word: "artful",
        ptDefinition: "astuto; criativo, habilidoso",
      },
      {
        audio: "",
        word: "artless",
        ptDefinition: "ingênuo / simples / natural",
      },
    ],
  },
  // beat
  {
    verb: {
      audio: "",
      word: "beat",
      ptDefinition: "bater; derrotar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "beat up",
        ptDefinition: "espancar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "beat",
        ptDefinition: "ritmo; batida",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "beaten",
        ptDefinition: "derrotado; gasto",
      },
    ],
    expressions: [
      {
        audio: "/assets/audio/general/beat-around-the-bush.mp3",
        word: "beat around the bush",
        ptDefinition: "enrolar",
      },
    ],
  },
  // begin
  {
    verb: {
      audio: "",
      word: "begin",
      ptDefinition: "começar, iniciar",
    },
    nouns: [
      {
        audio: "",
        word: "beginning",
        ptDefinition: "começo, início",
      },
    ],
  },
  // beautify
  {
    verb: {
      audio: "",
      word: "beautify",
      ptDefinition: "embelezar",
    },
    nouns: [
      {
        audio: "",
        word: "beauty",
        ptDefinition: "beleza",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "beautiful",
        ptDefinition: "bonito(a)",
      },
    ],
  },
  // blow
  {
    verb: {
      audio: "",
      word: "blow",
      ptDefinition: "soprar; bater (vento)",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "blow up",
        ptDefinition: "explodir; perder a calma",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "blow",
        ptDefinition: "golpe; sopro; impacto",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "blown",
        ptDefinition: "inchado; estourado",
      },
    ],
  },
  // bore
  {
    verb: {
      audio: "",
      word: "bore",
      ptDefinition: "entediar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "bore into",
        ptDefinition: "criticar duramente; perfurar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "bore",
        registerTag: "formal",
        ptDefinition: "tédio; pessoa chata",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "boring",
        ptDefinition: "entediante",
      },
      {
        audio: "",
        word: "bored",
        ptDefinition: "entediado",
      },
    ],
  },
  // break
  {
    verb: {
      audio: "",
      word: "break",
      ptDefinition: "quebrar; interromper",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "break down",
        ptDefinition: "quebrar; entrar em colapso",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "break",
        ptDefinition: "quebra; intervalo",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "broken",
        ptDefinition: "quebrado; danificado",
      },
    ],
  },
  // bring
  {
    verb: {
      audio: "",
      word: "bring",
      ptDefinition: "trazer; levar consigo",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "bring up",
        ptDefinition: "mencionar; criar (filhos)",
      },
    ],
  },
  // brush
  {
    verb: {
      audio: "",
      word: "brush",
      ptDefinition: "escovar; passar o pincel",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "brush off",
        ptDefinition: "ignorar; dispensar",
      },
      {
        audio: "",
        word: "brush up",
        ptDefinition: "revisar; aprimorar (conhecimento ou habilidade)",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "brush",
        ptDefinition: "escova; pincel",
      },
    ],
  },
  // buy
  {
    verb: {
      audio: "",
      word: "buy",
      ptDefinition: "comprar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "buy in",
        ptDefinition: "aceitar uma ideia; concordar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "buy",
        register: "",
        ptDefinition: "compra; bom negócio",
      },
    ],
  },
  // call
  {
    verb: {
      audio: "",
      word: "call",
      ptDefinition: "ligar; chamar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "call off",
        ptDefinition: "cancelar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "call",
        ptDefinition: "ligação; chamada",
      },
    ],
  },
  // comfort
  {
    verb: {
      audio: "",
      word: "comfort",
      ptDefinition: "confortar; consolar",
    },
    nouns: [
      {
        audio: "",
        word: "comfort",
        ptDefinition: "conforto; alívio",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "comfortable",
        ptDefinition: "confortável",
      },
      {
        audio: "",
        word: "uncomfortable",
        ptDefinition: "desconfortável",
      },
      {
        audio: "",
        word: "comforting",
        ptDefinition: "reconfortante",
      },
    ],
  },
  // cook
  {
    verb: {
      audio: "",
      word: "cook",
      ptDefinition: "cozinhar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "cook up",
        ptDefinition: "inventar; preparar (um plano)",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "cook",
        ptDefinition: "cozinheiro(a)",
      },
    ],
  },
  // create
  {
    verb: {
      audio: "",
      word: "create",
      ptDefinition: "criar",
    },
    nouns: [
      {
        audio: "",
        word: "creation",
        ptDefinition: "criação",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "creative",
        ptDefinition: "criativo",
      },
    ],
  },
  // cry
  {
    verb: {
      audio: "",
      word: "cry",
      ptDefinition: "chorar; gritar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "cry out",
        ptDefinition: "gritar; clamar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "cry",
        ptDefinition: "choro; grito",
      },
    ],
  },
  // darken
  {
    verb: {
      audio: "",
      word: "darken",
      ptDefinition: "escurecer",
    },
    nouns: [
      {
        audio: "",
        word: "darkness",
        ptDefinition: "escuridão",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "dark",
        ptDefinition: "escuro",
      },
    ],
  },
  // dig
  {
    verb: {
      audio: "",
      word: "dig",
      ptDefinition: "cavar; escavar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "dig in",
        ptDefinition: "estabelecer-se; começar a comer com vontade",
      },
      {
        audio: "",
        word: "dig into",
        ptDefinition: "investigar",
      },
      {
        audio: "",
        word: "dig up",
        ptDefinition: "desenterrar; descobrir (informação)",
      },
    ],
    nouns: [
      {
        audio: "/audio/general/dig-noun.mp3",
        word: "dig",
        ptDefinition: "escavação; crítica (informal)",
      },
    ],
  },
  // do
  {
    verb: {
      audio: "",
      word: "do",
      ptDefinition: "fazer",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "do up",
        ptDefinition: "reformar; fechar (roupa); decorar",
      },
      {
        audio: "",
        word: "do over",
        ptDefinition: "refazer",
      },
    ],
  },
  // drive
  {
    verb: {
      audio: "",
      word: "drive",
      ptDefinition: "dirigir; conduzir; impulsionar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "drive away",
        ptDefinition: "afastar",
      },
      {
        audio: "",
        word: "drive out",
        ptDefinition: "expulsar; forçar a sair",
      },
      {
        audio: "",
        word: "drive through",
        ptDefinition: "passar de carro; drive-thru",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "drive",
        ptDefinition: "viagem de carro; impulso; motivação",
      },
    ],
  },
  // drink
  {
    verb: {
      audio: "",
      word: "drink",
      ptDefinition: "beber",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "drink up",
        ptDefinition: "beber tudo; terminar a bebida",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "drink",
        register: "",
        ptDefinition: "bebida",
      },
    ],
  },
  // drop
  {
    verb: {
      audio: "",
      word: "drop",
      ptDefinition: "derrubar; deixar cair",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "drop off",
        ptDefinition: "deixar alguém em um lugar; diminuir (preço)",
      },
      {
        audio: "",
        word: "drop out",
        ptDefinition: "abandonar; desistir",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "drop",
        ptDefinition: "gota; queda",
      },
    ],
  },
  // dry
  {
    verb: {
      audio: "",
      word: "dry",
      ptDefinition: "secar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "dry up",
        ptDefinition: "secar completamente; acabar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "dryness",
        ptDefinition: "secura; aridez",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "dry",
        ptDefinition: "seco(a)",
      },
    ],
  },
  // die
  {
    verb: {
      audio: "",
      word: "die",
      ptDefinition: "morrer; falecer",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "die out",
        ptDefinition: "desaparecer; extinguir-se",
      },
      {
        audio: "",
        word: "die off",
        ptDefinition: "morrer gradualmente; extinguir-se",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "death",
        ptDefinition: "morte",
      },
      {
        audio: "",
        word: "dying",
        ptDefinition: "ato the morrer",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "dead",
        ptDefinition: "morto; sem vida",
      },
      {
        audio: "",
        word: "dying",
        ptDefinition: "Que está morrendo; em perigo de extinção",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "die-hard",
        ptDefinition: "firme; resistente; difícil de mudar (figurado)",
      },
    ],
  },
  // eat
  {
    verb: {
      audio: "",
      word: "eat",
      ptDefinition: "comer",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "eat up",
        ptDefinition: "comer tudo; devorar",
      },
      {
        audio: "",
        word: "eat out",
        ptDefinition: "comer fora (em restaurante)",
      },
    ],
  },
  // fasten
  {
    verb: {
      audio: "",
      word: "fasten",
      ptDefinition: "prender, apertar",
    },
    nouns: [
      {
        audio: "",
        word: "fastness",
        registerTag: "formal",
        ptDefinition: "pressa, rapidez",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "fast",
        ptDefinition: "rápido",
      },
      {
        audio: "",
        word: "faster",
        degreeTag: "comparative",
        ptDefinition: "mais rápido",
      },
    ],
  },
  // focus
  {
    verb: {
      audio: "",
      word: "focus (on something)",
      ptDefinition: "focar; concentrar-se",
    },
    nouns: [
      {
        audio: "",
        word: "focus",
        ptDefinition: "foco; concentração",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "focused",
        ptDefinition: "focado; concentrado",
      },
    ],
  },
  // give
  {
    verb: {
      audio: "",
      word: "give",
      ptDefinition: "dar",
    },
    nouns: [
      {
        audio: "",
        word: "giving",
        ptDefinition: "ato de dar; doação",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "giving",
        ptDefinition: "generoso; que gosta de ajudar",
      },
    ],
  },
  // go
  {
    verb: {
      audio: "",
      word: "go",
      ptDefinition: "ir; passar (tempo)",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "go back",
        ptDefinition: "voltar",
      },
      {
        audio: "",
        word: "go on",
        ptDefinition: "continuar",
      },
      {
        audio: "",
        word: "go out",
        ptDefinition: "sair",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "go like this",
        ptDefinition: "fazer assim, ser assim",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "go",
        ptDefinition: "tentativa; vez; energia (informal)",
      },
    ],
  },
  // hide
  {
    verb: {
      audio: "",
      word: "hide",
      ptDefinition: "esconder; ocultar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "hide away",
        ptDefinition: "esconder-se; refugiar-se",
      },
      {
        audio: "",
        word: "hide out",
        ptDefinition: "ficar escondido",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "hide",
        ptDefinition: "pele; couro (animal)",
      },
    ],
  },
  // interest
  {
    verb: {
      audio: "",
      word: "interest (in)",
      ptDefinition: "interessar",
    },
    nouns: [
      {
        audio: "",
        word: "interest",
        ptDefinition: "interesse; juros",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "interested",
        ptDefinition: "interessado",
      },
      {
        audio: "",
        word: "interesting",
        ptDefinition: "interessante",
      },
    ],
  },
  // invite
  {
    verb: {
      audio: "",
      word: "invite",
      ptDefinition: "convidar",
    },
    nouns: [
      {
        audio: "",
        word: "invitation",
        ptDefinition: "convite",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "inviting",
        ptDefinition: "convidativo; atraente",
      },
    ],
  },
  // know
  {
    verb: {
      audio: "",
      word: "know",
      ptDefinition: "saber; conhecer",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "know about",
        ptDefinition: "saber sobre; ter conhecimento de",
      },
      {
        audio: "",
        word: "know of",
        ptDefinition: "ter conhecimento de; já ter ouvido falar de",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "knowledge",
        ptDefinition: "conhecimento",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "knowledgeable",
        ptDefinition: "bem-informado; conhecedor",
      },
      {
        audio: "",
        word: "known",
        ptDefinition: "conhecido; sabido",
      },
    ],
  },
  // knee
  {
    verb: {
      audio: "",
      word: "knee",
      ptDefinition: "dar uma joelhada",
    },
    nouns: [
      {
        audio: "",
        word: "knee",
        ptDefinition: "joelho",
      },
    ],
  },
  // kneel
  {
    verb: {
      audio: "",
      word: "kneel",
      ptDefinition: "ajoelhar-se",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "kneel down",
        ptDefinition: "ajoelhar-se",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "kneeling",
        ptDefinition: "ajoelhado",
      },
    ],
  },
  // laugh
  {
    verb: {
      audio: "",
      word: "laugh",
      ptDefinition: "rir",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "laugh at",
        ptDefinition: "rir de; zombar de",
      },
      {
        audio: "",
        word: "laugh off",
        ptDefinition: "tentar ignorar com humor",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "laughter",
        ptDefinition: "risada; riso",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "laughing",
        ptDefinition: "risonho; sorridente",
      },
      {
        audio: "",
        word: "laughable",
        ptDefinition: "ridículo; risível",
      },
    ],
  },
  // let
  {
    verb: {
      audio: "",
      word: "let",
      ptDefinition: "deixar; permitir",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "let down",
        ptDefinition: "decepcionar; desapontar",
      },
      {
        audio: "",
        word: "let in",
        ptDefinition: "deixar entrar",
      },
      {
        audio: "",
        word: "let out",
        ptDefinition: "liberar; deixar sair",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "lettable",
        registerTag: "chiefly british",
        ptDefinition: "que pode ser alugado",
      },
    ],
  },
  // like
  {
    verb: {
      audio: "",
      word: "like",
      ptDefinition: "gostar; apreciar",
      enNotes: "Do not confuse with like = 'como'.",
      ptNotes: "Não confundir com like = 'como'.",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "like up",
        ptDefinition: "demonstrar aprovação; curtir",
      },
      {
        audio: "",
        word: "like for",
        ptDefinition: "curtir por causa de (informal, online)",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "like",
        ptDefinition: "gostar; preferência",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "likable",
        ptDefinition: "simpático; agradável",
      },
    ],
  },
  // likely - likelihood
  {
    nouns: [
      {
        audio: "",
        word: "likelihood",
        ptDefinition: "probabilidade",
      },
    ],

    adjectives: [
      {
        audio: "",
        word: "likely",
        ptDefinition: "provável",
      },
      {
        audio: "",
        word: "unlikely",
        ptDefinition: "improvável",
      },
    ],
  },
  // light
  {
    verb: {
      audio: "",
      word: "light",
      ptDefinition: "acender",
    },
    nouns: [
      {
        audio: "",
        word: "light",
        ptDefinition: "luz",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "light",
        ptDefinition: "leve; claro",
      },
    ],
  },
  // lighten
  {
    verb: {
      audio: "",
      word: "lighten",
      ptDefinition: "clarear; tornar mais leve",
    },
  },
  // love
  {
    verb: {
      audio: "",
      word: "love",
      ptDefinition: "amar; adorar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "love up",
        ptDefinition: "mostrar carinho; abraçar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "love",
        ptDefinition: "amor; afeição",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "loved",
        ptDefinition: "amado; querido",
      },
      {
        audio: "",
        word: "lovely",
        ptDefinition: "adorável; agradável",
      },
      {
        audio: "",
        word: "loving",
        ptDefinition: "amoroso; carinhoso",
      },
      {
        audio: "",
        word: "loved-up",
        ptDefinition: "cheio(a) de carinho; afetuoso(a)",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "love at first sight",
        ptDefinition: "amor à primeira vista",
      },
    ],
  },
  // make
  {
    verb: {
      audio: "",
      word: "make",
      ptDefinition: "fazer, criar; ganhar (dinheiro); totalizar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "make up",
        ptDefinition: "inventar; reconciliar-se; compensar",
      },
      {
        audio: "",
        word: "make out",
        ptDefinition: "entender; decifrar; beijar (informal)",
      },
      {
        audio: "",
        word: "make over",
        ptDefinition: "transformar; transferir (legalmente)",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "make",
        registerTag: "chiefly british",
        ptDefinition: "modelo; marca (de carro ou produto)",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "made-up",
        ptDefinition: "inventado; fictício",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "make sense",
        ptDefinition: "fazer sentido",
      },
      {
        audio: "",
        word: "make a difference",
        ptDefinition: "fazer a diferença",
      },
    ],
  },
  // meet
  {
    verb: {
      audio: "",
      word: "meet",
      ptDefinition: "encontrar; conhecer",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "meet up",
        ptDefinition: "encontrar-se; reunir-se",
      },
      {
        audio: "",
        word: "meet with",
        ptDefinition: "reunir-se com; encontrar-se com",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "meeting",
        ptDefinition: "reunião; encontro",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "meetable",
        ptDefinition: "que pode ser encontrado; acessível",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "meet halfway",
        ptDefinition: "chegar a um acordo; ceder parcialmente",
      },
    ],
  },
  // have
  {
    verb: {
      audio: "",
      word: "have",
      ptDefinition: "ter; possuir; comer, beber",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "have on",
        ptDefinition: "estar vestindo; ter planejado",
      },
      {
        audio: "",
        word: "have over",
        ptDefinition: "receber em casa; convidar para visitar",
      },
      {
        audio: "",
        word: "have up",
        ptDefinition: "processar; convocar para explicação",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "having",
        ptDefinition: "posse; propriedade",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "have a good time",
        ptDefinition: "divertir-se; aproveitar",
      },
      {
        audio: "",
        word: "have a look",
        ptDefinition: "dar uma olhada; examinar",
      },
    ],
  },
  // pay
  {
    verb: {
      audio: "",
      word: "pay",
      ptDefinition: "pagar; recompensar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "pay back",
        ptDefinition: "reembolsar; vingar-se",
      },
      {
        audio: "",
        word: "pay off",
        ptDefinition: "quitar; compensar; dar certo",
      },
      {
        audio: "",
        word: "pay in",
        ptDefinition: "depositar dinheiro",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "payment",
        ptDefinition: "pagamento; remuneração",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "payable",
        ptDefinition: "pagável; a ser pago",
      },
      {
        audio: "",
        word: "paid",
        ptDefinition: "pago; remunerado",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "pay attention",
        ptDefinition: "prestar atenção",
      },
    ],
  },
  // practice
  {
    verb: {
      audio: "",
      word: "practice",
      ptDefinition: "praticar; treinar",
    },
    nouns: [
      {
        audio: "",
        word: "practice",
        ptDefinition: "prática; exercício; clínica (profissional)",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "practical",
        ptDefinition: "prático; útil",
      },
      {
        audio: "",
        word: "practicable",
        ptDefinition: "executável; viável",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "practice makes perfect",
        ptDefinition: "a prática leva à perfeição",
      },
    ],
  },
  // read
  {
    verb: {
      audio: "",
      word: "read",
      ptDefinition: "ler",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "read aloud",
        ptDefinition: "ler em voz alta",
      },
      {
        audio: "",
        word: "read out",
        ptDefinition: "ler em voz alta; anunciar",
      },
      {
        audio: "",
        word: "read over",
        ptDefinition: "revisar; ler rapidamente",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "reading",
        ptDefinition: "leitura; interpretação",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "readable",
        ptDefinition: "legível; compreensível",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "read between the lines",
        ptDefinition: "ler nas entrelinhas; entender o que não está explícito",
      },
    ],
  },
  // saw (to cut with a saw)
  {
    verb: {
      audio: "",
      word: "saw",
      ptDefinition: "serrar; cortar com serra",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "saw off",
        ptDefinition: "cortar algo completamente com serra",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "saw",
        ptDefinition: "serra; ferramenta para cortar madeira",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "sawed-off",
        ptDefinition: "cortado; reduzido",
      },
    ],
  },
  // see
  {
    verb: {
      audio: "",
      word: "see",
      ptDefinition: "ver; perceber; compreender",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "see off",
        ptDefinition: "acompanhar alguém na partida; despedir-se",
      },
      {
        audio: "",
        word: "see through",
        ptDefinition: "ver através; perceber intenções",
      },
      {
        audio: "",
        word: "see to",
        ptDefinition: "cuidar de; providenciar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "seeing",
        ptDefinition: "visão; percepção",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "seen",
        ptDefinition: "visto; percebido",
      },
    ],
    expressions: [
      {
        audio: "",
        word: "see eye to eye",
        ptDefinition: "concordar; ter a mesma opinião",
      },
      {
        audio: "",
        word: "see the light",
        ptDefinition: "perceber a verdade; entender algo",
      },
    ],
  },
  // purity
  {
    nouns: [
      {
        audio: "",
        word: "purity",
        ptDefinition: "pureza",
      },
    ],

    adjectives: [
      {
        audio: "",
        word: "pure",
        ptDefinition: "puro(a)",
      },
    ],
  },
  // shorten
  {
    verb: {
      audio: "",
      word: "shorten",
      ptDefinition: "encurtar; reduzir",
    },
    nouns: [
      {
        audio: "",
        word: "shortness",
        ptDefinition: "falta de; deficiência",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "short",
        ptDefinition: "curto",
      },
    ],
  },
  // soften
  {
    verb: {
      audio: "",
      word: "soften",
      ptDefinition: "amaciar",
    },
    nouns: [
      {
        audio: "",
        word: "softness",
        ptDefinition: "maciez",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "soft",
        ptDefinition: "macio",
      },
    ],
  },
  // speak
  {
    verb: {
      audio: "",
      word: "speak",
      ptDefinition: "falar",
    },
    phrasalVerbs: [
      {
        audio: "",
        word: "speak up",
        ptDefinition: "falar mais alto; expressar opinião",
      },
      {
        audio: "",
        word: "speak out",
        ptDefinition: "falar abertamente; protestar",
      },
    ],
    nouns: [
      {
        audio: "",
        word: "speaking",
        ptDefinition: "fala; conversação",
      },
      {
        audio: "",
        word: "speaker",
        ptDefinition: "orador; falante",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "spoken",
        ptDefinition: "falado",
      },
    ],
  },
  // teach
  {
    verb: {
      audio: "",
      word: "teach",
      ptDefinition: "ensinar",
    },
    nouns: [
      {
        audio: "",
        word: "teacher",
        ptDefinition: "professor",
      },
      {
        audio: "",
        word: "teaching",
        ptDefinition: "ensino",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "teaching",
        ptDefinition: "pedagógico",
      },
    ],
  },
  // use
  {
    verb: {
      audio: "",
      word: "use",
      ptDefinition: "usar",
    },
    nouns: [
      {
        audio: "",
        word: "use",
        ptDefinition: "uso",
      },
    ],
    adjectives: [
      {
        audio: "",
        word: "useful / useless",
        ptDefinition: "útil / inútil",
      },
    ],
  },
];

export default function WordFamilies() {
  const scrollRef = useRef(null);
  useDragScroll(scrollRef);

  return (
    <>
      <Whiteboard
        title="Grammar"
        subtitle="Word Families"
        descriptions={[
          "Verb ",
          "Phrasal Verb",
          "Noun",
          "Adjective",
          "Expressions",
        ]}
      />
      <div className="line-break">
        <div className="dictionary-area">
          <Dictionary />
        </div>
        <span>
          <Bold>Use this list as a reference.</Bold>
        </span>
        <div ref={scrollRef} className={styles.scroll}>
          <div className={styles.table}>
            {/* HEADERS */}

            {/* VERB */}
            <span className={styles.header}>
              <Bold>VERB</Bold>
              <span>-en, -ify</span>
            </span>

            {/* PHRASAL VERB */}
            <span className={styles.header}>
              <Bold>PHRASAL VERB</Bold>
              <span>+ prepositions</span>
            </span>

            {/* NOUN */}
            <span className={styles.header}>
              <Bold>NOUN</Bold>
              <span>-ing, -ness, -ment, -ity, -hood</span>
            </span>

            {/* ADJECTIVE */}
            <span className={styles.header}>
              <Bold>ADJECTIVE </Bold>
              <span>-ed, ing, -ous, -ive, -able, -ful, -less</span>
            </span>

            {/* EXPRESSIONS */}
            <span className={styles.header}>
              <Bold>EXPRESSIONS</Bold>
            </span>

            {/* ROWS */}

            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                <div>
                  {/* VERB */}
                  {word.verb && (
                    <>
                      {word.verb.audio && <Audio src={word.verb.audio} />}
                      <Bold>{word.verb.word}</Bold>{" "}
                      <Phonetics>{word.verb.phonetics}</Phonetics>{" "}
                      <span className={styles.partOfSpeech}>{word.verb.partOfSpeech}</span>{" "}
                      {word.verb.registerTag && (<RegisterTag>{word.verb.registerTag}</RegisterTag>)}{" "}
                      <Portuguese className={styles.ptDefinition}>{word.verb.ptDefinition}</Portuguese>

                      {/* CONJUGATION */}
                      {word.conjugation && (
                        <div className={styles.conjugation}>

                          {/* Third Person */}
                          <div>
                            {word.conjugation.thirdPersonAudio && (<Audio src={word.conjugation.thirdPersonAudio} />)}
                            <Bold>{word.conjugation.thirdPerson}</Bold>{" "}
                            <Phonetics>{word.conjugation.thirdPersonPhonetics}</Phonetics>{" "}
                            <span className={styles.partOfSpeech}>third person</span>
                          </div>

                          <div>
                            {word.conjugation.pastAudio && (<Audio src={word.conjugation.pastAudio} />)}
                            <Bold>{word.conjugation.past}</Bold>{" "}
                            <Phonetics>{word.conjugation.pastPhonetics}</Phonetics>{" "}
                            <span className={styles.partOfSpeech}>past</span>
                          </div>

                          {/* Participle */}
                          <div>
                            {word.conjugation.participleAudio && <Audio src={word.conjugation.participleAudio} />}
                            <Bold>{word.conjugation.participle}</Bold>{" "}
                            <span><Phonetics>{word.conjugation.participlePhonetics}{" "}</Phonetics></span>
                            <span className={styles.partOfSpeech}>past participle</span>
                          </div>

                          {/* Progressive */}
                          <div>
                            {word.conjugation.progressiveAudio && <Audio src={word.conjugation.progressiveAudio} />}
                            <Bold>{word.conjugation.progressive}</Bold>{" "}
                            <span className={styles.partOfSpeech}>progressive</span>
                          </div>
                        </div>
                      )}
                      <div>
                        {(word.verb.enNotes || word.verb.ptNotes) && (
                          <span className={styles.notes}>
                            <Bold>Notes:</Bold>{" "}
                            {word.verb.enNotes && (
                              <span>{word.verb.enNotes}</span>
                            )}
                            {word.verb.ptNotes && (
                              <Portuguese className={styles.ptNotes}>
                                {word.verb.ptNotes}
                              </Portuguese>
                            )}
                          </span>
                        )}
                      </div>
                    </>
                  )}
                </div>

                {/* PHRASAL VERB */}
                <div>
                  {word.phrasalVerbs?.map((item, index) => (
                    <div key={index}>
                      {item.audio && <Audio src={item.audio} />}
                      <Bold>{item.word}</Bold>{" "}
                      {item.registerTag && (
                        <RegisterTag>{item.registerTag}</RegisterTag>
                      )}
                      <Portuguese>{item.ptDefinition}</Portuguese>
                    </div>
                  ))}
                </div>

                {/* NOUN */}
                <div>
                  {word.nouns?.map((item, index) => (
                    <div key={index}>
                      {item.audio && <Audio src={item.audio} />}
                      <Bold>{item.word}</Bold>{" "}
                      {item.registerTag && (
                        <RegisterTag>{item.registerTag}</RegisterTag>
                      )}{" "}
                      <Portuguese>{item.ptDefinition}</Portuguese>
                    </div>
                  ))}
                </div>

                {/* ADJECTIVE */}
                <div>
                  {word.adjectives?.map((item, index) => (
                    <div key={index}>
                      {item.audio && <Audio src={item.audio} />}
                      <Bold>{item.word}</Bold>
                      {item.registerTag && (
                        <RegisterTag>{item.registerTag}</RegisterTag>
                      )}{" "}
                      {item.degreeTag && (
                        <DegreeTag>{item.degreeTag}</DegreeTag>
                      )}{" "}
                      <Portuguese>{item.ptDefinition}</Portuguese>
                    </div>
                  ))}
                </div>

                {/* EXPRESSIONS */}
                <div>
                  {word.expressions?.map((item, index) => (
                    <div key={index}>
                      {item.audio && <Audio src={item.audio} />}
                      <Bold>{item.word}</Bold>{" "}
                      <Portuguese>{item.ptDefinition}</Portuguese>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
