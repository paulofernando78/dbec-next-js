"use client";

import styles from "./word-formation.module.css";

import { useRef } from "react";
import { useDragScroll } from "@/hooks/useDragScroll";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Dictionary } from "../../components/molecules/Dictionary";
import { Audio } from "@/components/atoms/Audio";
import { Bold } from "@/components/atoms/Bold";
import { RegisterTag } from "@/components/atoms/RegisterTag";
import { DegreeTag } from "@/components/atoms/DegreeTag";
import { Portuguese } from "@/components/atoms/Portuguese";

const words = [
  // answer
  {
    verbAudio: "/assets/audio/general/answer.mp3",
    verbWord: "answer",
    verbPtDefinition: "responder",
  },
  // ask
  {
    verbAudio: "/assets/audio/general/ask.mp3",
    verbWord: "ask",
    verbPtDefinition: "perguntar",

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
    verbAudio: "",
    verbWord: "beat",
    verbPtDefinition: "bater; derrotar",

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
    verbAudio: "",
    verbWord: "begin",
    verbPtDefinition: "começar, iniciar",

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
    verbAudio: "",
    verbWord: "beautify",
    verbPtDefinition: "embelezar",

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
    verbAudio: "",
    verbWord: "blow",
    verbPtDefinition: "soprar; bater (vento)",

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
    verbAudio: "",
    verbWord: "bore",
    verbPtDefinition: "entediar",

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
    verbAudio: "",
    verbWord: "break",
    verbPtDefinition: "quebrar; interromper",

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
    verbAudio: "",
    verbWord: "bring",
    verbPtDefinition: "trazer; levar consigo",

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
    verbAudio: "",
    verbWord: "brush",
    verbPtDefinition: "escovar; passar o pincel",

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
    verbAudio: "",
    verbWord: "buy",
    verbPtDefinition: "comprar",

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
    verbAudio: "",
    verbWord: "call",
    verbPtDefinition: "ligar; chamar",

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
    verbAudio: "",
    verbWord: "comfort",
    verbPtDefinition: "confortar; consolar",

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
    verbAudio: "",
    verbWord: "cook",
    verbPtDefinition: "cozinhar",

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
    verbAudio: "",
    verbWord: "create",
    verbPtDefinition: "criar",

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
    verbAudio: "",
    verbWord: "cry",
    verbPtDefinition: "chorar; gritar",

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
    verbAudio: "",
    verbWord: "darken",
    verbPtDefinition: "escurecer",

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
    verbAudio: "",
    verbWord: "dig",
    verbPtDefinition: "cavar; escavar",

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
    verbAudio: "",
    verbWord: "do",
    verbPtDefinition: "fazer",

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
    verbAudio: "",
    verbWord: "drive",
    verbPtDefinition: "dirigir; conduzir; impulsionar",

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
    verbAudio: "",
    verbWord: "drink",
    verbPtDefinition: "beber",

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
    verbAudio: "",
    verbWord: "drop",
    verbPtDefinition: "derrubar; deixar cair",

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
    verbAudio: "",
    verbWord: "dry",
    verbPtDefinition: "secar",

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
    verbAudio: "",
    verbWord: "die",
    verbPtDefinition: "morrer; falecer",

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
    verbAudio: "",
    verbWord: "eat",
    verbPtDefinition: "comer",

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
    verbAudio: "",
    verbWord: "fasten",
    verbPtDefinition: "prender, apertar",

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
    verbAudio: "",
    verbWord: "focus (on something)",
    verbPtDefinition: "focar; concentrar-se",

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
    verbAudio: "",
    verbWord: "give",
    verbPtDefinition: "dar",

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
    verbAudio: "",
    verbWord: "go",
    verbPtDefinition: "ir; passar (tempo)",

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
    verbAudio: "",
    verbWord: "hide",
    verbPtDefinition: "esconder; ocultar",

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
    verbAudio: "",
    verbWord: "interest (in)",
    verbPtDefinition: "interessar",

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
    verbAudio: "",
    verbWord: "invite",
    verbPtDefinition: "convidar",

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
    verbAudio: "",
    verbWord: "know",
    verbPtDefinition: "saber; conhecer",

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
    verbAudio: "",
    verbWord: "knee",
    verbPtDefinition: "dar uma joelhada",

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
    verbAudio: "",
    verbWord: "kneel",
    verbPtDefinition: "ajoelhar-se",

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
    verbAudio: "",
    verbWord: "laugh",
    verbPtDefinition: "rir",

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
    verbAudio: "",
    verbWord: "let",
    verbPtDefinition: "deixar; permitir",

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
    verbAudio: "",
    verbWord: "like",
    verbPtDefinition: "gostar; apreciar",
    enNotes: "Do not confuse with like = 'como'.",
    ptNotes: "Não confundir com like = 'como'.",

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

    expressions: [
      {
        audio: "",
        word: "like",
        ptDefinition: "como; do tipo de",
        registerTag: "informal",
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
    verbAudio: "",
    verbWord: "light",
    verbPtDefinition: "acender",

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
    verbAudio: "",
    verbWord: "lighten",
    verbPtDefinition: "clarear; tornar mais leve",
  },
  // love
  {
    verbAudio: "",
    verbWord: "love",
    verbPtDefinition: "amar; adorar",

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
    verbAudio: "",
    verbWord: "make",
    verbPtDefinition: "fazer, criar; ganhar (dinheiro); totalizar",

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
    verbAudio: "",
    verbWord: "meet",
    verbPtDefinition: "encontrar; conhecer",

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
    verbAudio: "",
    verbWord: "have",
    verbPtDefinition: "ter; possuir; comer, beber",

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
    verbAudio: "",
    verbWord: "pay",
    verbPtDefinition: "pagar; recompensar",

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
    verbAudio: "",
    verbWord: "practice",
    verbPtDefinition: "praticar; treinar",

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
    verbAudio: "",
    verbWord: "read",
    verbPtDefinition: "ler",

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
    verbAudio: "",
    verbWord: "saw",
    verbPtDefinition: "serrar; cortar com serra",

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
    verbAudio: "",
    verbWord: "see",
    verbPtDefinition: "ver; perceber; compreender",

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
    verbAudio: "",
    verbWord: "shorten",
    verbPtDefinition: "encurtar; reduzir",

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
    verbAudio: "",
    verbWord: "soften",
    verbPtDefinition: "amaciar",

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
    verbAudio: "",
    verbWord: "speak",
    verbPtDefinition: "falar",

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
    verbAudio: "",
    verbWord: "teach",
    verbPtDefinition: "ensinar",

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
    verbAudio: "",
    verbWord: "use",
    verbPtDefinition: "usar",

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
      <Whiteboard title="Grammar" subtitle="Word Families" />
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
                {/* VERB */}
                <div>
                  {word.verbAudio && <Audio src={word.verbAudio} />}
                  <Bold>{word.verbWord}</Bold>{" "}
                  {word.verbRegisterTag && (
                    <RegisterTag>{word.verbRegisterTag}</RegisterTag>
                  )}
                  <Portuguese>{word.verbPtDefinition}</Portuguese>
                  <div>
                    {(word.enNotes || word.ptNotes) && (
                      <span className={styles.notes}>
                        <Bold>Notes:</Bold>{" "}
                        {word.enNotes &&
                        <span>{word.enNotes}</span>
                        }
                        {word.enNotes && word.ptNotes && " "}
                        {word.ptNotes && (
                          
                            <Portuguese className={styles.ptNotes}>{word.ptNotes}</Portuguese>
                          
                        )}
                      </span>
                    )}
                  </div>
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
