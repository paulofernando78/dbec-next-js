import styles from "./word-formation.module.css";

import { Whiteboard } from "@/components/molecules/Whiteboard";
import { DictionarySearch } from "../../components/molecules/DictionarySearch/DictionarySearch";
import { Text } from "@/components/molecules/Text";
import { Bold } from "@/components/atoms/Bold";
import { RegisterTag } from "@/components/atoms/RegisterTag";
import { DegreeTag } from "@/components/atoms/DegreeTag";
import { Portuguese } from "@/components/atoms/Portuguese";

const words = [
  // answer
  {
    verbAudio: "/audio/general/answer.mp3",
    verbWord: "answer",
    verbPtDefinition: "responder",
    verbExamples: [
      {
        example: "Please, answer my question.",
        ptExample: "Por favor, responda a minha pergunta.",
      },
    ],
  },
  // ask
  {
    verbAudio: "/audio/general/ask.mp3",
    verbWord: "ask",
    verbPtDefinition: "perguntar",

    phrasalVerbs: [
      {
        audio: "/audio/general/ask-out.mp3",
        word: "ask (someone) out",
        ptDefinition: "convidar para sair",
        examples: [
      {
        example: "Why don’t you ask her out?",
        ptExample: "Por que você não a covida para sair?",
      }
    ],
      },
    ],
  },
  // art
  {
    nouns: [
      {
        audio: "/audio/general/art.mp3",
        word: "art",
        registerTag: "",
        ptDefinition: "arte",
        examples: [
          {
            example: "The gallery has an excellent collection of modern art.",
            ptExample: "A galeria tem uma excelente coleção de arte moderna.",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/artful-artless.mp3",
        word: "artful / artless",
        ptDefinition:
          "astuto; criativo, habilidoso / ingênuo / simples / natural",
      },
    ],
  },
  // beat
  {
    verbAudio: "/audio/general/beat.mp3",
    verbWord: "beat",
    verbPtDefinition: "bater; derrotar",

    phrasalVerbs: [
      {
        audio: "/audio/general/beat-up.mp3",
        word: "beat up",
        ptDefinition: "espancar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/beat-noun.mp3",
        word: "beat",
        ptDefinition: "ritmo; batida",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/beaten.mp3",
        word: "beaten",
        ptDefinition: "derrotado; gasto",
      },
    ],
  },
  // begin-begun-began
  {
    verbAudio: "/audio/general/begin.mp3",
    verbWord: "begin",
    verbPtDefinition: "começar, iniciar",

    nouns: [
      {
        audio: "/audio/general/beginning.mp3",
        word: "beginning",
        ptDefinition: "começo, início",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // beautify
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelezar",

    nouns: [
      {
        audio: "/audio/general/beauty.mp3",
        word: "beauty",
        ptDefinition: "beleza",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/beautiful.mp3",
        word: "beautiful",
        ptDefinition: "bonito(a)",
      },
    ],
  },
  // blow
  {
    verbAudio: "/audio/general/blow.mp3",
    verbWord: "blow",
    verbPtDefinition: "soprar; bater (vento)",

    phrasalVerbs: [
      {
        audio: "/audio/general/blow-up.mp3",
        word: "blow up",
        ptDefinition: "explodir; perder a calma",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/blow-noun.mp3",
        word: "blow",
        ptDefinition: "golpe; sopro; impacto",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/blown.mp3",
        word: "blown",
        ptDefinition: "inchado; estourado",
      },
    ],
  },
  // bore
  {
    verbAudio: "/audio/general/bore.mp3",
    verbWord: "bore",
    verbPtDefinition: "entediar",

    phrasalVerbs: [
      {
        audio: "/audio/general/bore-into.mp3",
        word: "bore into",
        ptDefinition: "criticar duramente; perfurar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/bore-noun.mp3",
        word: "bore",
        registerTag: "formal",
        ptDefinition: "tédio; pessoa chata",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/boring.mp3",
        word: "boring",
        ptDefinition: "entediante",
      },
      {
        audio: "/audio/general/bored.mp3",
        word: "bored",
        ptDefinition: "entediado",
      },
    ],
  },
  // break
  {
    verbAudio: "/audio/general/break.mp3",
    verbWord: "break",
    verbPtDefinition: "quebrar; interromper",

    phrasalVerbs: [
      {
        audio: "/audio/general/break-down.mp3",
        word: "break down",
        ptDefinition: "quebrar; entrar em colapso",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/break-noun.mp3",
        word: "break",
        ptDefinition: "quebra; intervalo",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/broken.mp3",
        word: "broken",
        ptDefinition: "quebrado; danificado",
      },
    ],
  },
  // bring
  {
    verbAudio: "/audio/general/bring.mp3",
    verbWord: "bring",
    verbPtDefinition: "trazer; levar consigo",

    phrasalVerbs: [
      {
        audio: "/audio/general/bring-up.mp3",
        word: "bring up",
        ptDefinition: "mencionar; criar (filhos)",
      },
    ],
  },
  // brush
  {
    verbAudio: "/audio/general/brush.mp3",
    verbWord: "brush",
    verbPtDefinition: "escovar; passar o pincel",

    phrasalVerbs: [
      {
        audio: "/audio/general/brush-off.mp3",
        word: "brush off",
        ptDefinition: "ignorar; dispensar",
      },
      {
        audio: "/audio/general/brush-up.mp3",
        word: "brush up",
        ptDefinition: "revisar; aprimorar (conhecimento ou habilidade)",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/brush-noun.mp3",
        word: "brush",
        ptDefinition: "escova; pincel",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // buy
  {
    verbAudio: "/audio/general/buy.mp3",
    verbWord: "buy",
    verbPtDefinition: "comprar",

    phrasalVerbs: [
      {
        audio: "/audio/general/buy-in.mp3",
        word: "buy in",
        ptDefinition: "aceitar uma ideia; concordar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/buy-noun.mp3",
        word: "buy",
        register: "",
        ptDefinition: "compra; bom negócio",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // call
  {
    verbAudio: "/audio/general/call.mp3",
    verbWord: "call",
    verbPtDefinition: "ligar; chamar",

    phrasalVerbs: [
      {
        audio: "/audio/general/call-off.mp3",
        word: "call off",
        ptDefinition: "cancelar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/call-noun.mp3",
        word: "call",
        ptDefinition: "ligação; chamada",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // comfort
  {
    verbAudio: "/audio/general/comfort.mp3",
    verbWord: "comfort",
    verbPtDefinition: "confortar; consolar",

    nouns: [
      {
        audio: "/audio/general/comfort-noun.mp3",
        word: "comfort",
        ptDefinition: "conforto; alívio",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/comfortable.mp3",
        word: "comfortable",
        ptDefinition: "confortável",
      },
      {
        audio: "/audio/general/uncomfortable.mp3",
        word: "comfortable",
        ptDefinition: "desconfortável",
      },
      {
        audio: "/audio/general/comforting.mp3",
        word: "comforting",
        ptDefinition: "reconfortante",
      },
    ],
  },
  // cook
  {
    verbAudio: "/audio/general/cook.mp3",
    verbWord: "cook",
    verbPtDefinition: "cozinhar",

    phrasalVerbs: [
      {
        audio: "/audio/general/cook-up.mp3",
        word: "cook up",
        ptDefinition: "inventar; preparar (um plano)",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/cook-noun.mp3",
        word: "cook",
        ptDefinition: "cozinheiro(a)",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // create
  {
    verbAudio: "/audio/general/create.mp3",
    verbWord: "create",
    verbPtDefinition: "criar",

    nouns: [
      {
        audio: "/audio/general/creation.mp3",
        word: "creation",
        ptDefinition: "criação",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/creative.mp3",
        word: "creative",
        ptDefinition: "criativo",
      },
    ],
  },
  // cry
  {
    verbAudio: "/audio/general/cry.mp3",
    verbWord: "cry",
    verbPtDefinition: "chorar; gritar",

    phrasalVerbs: [
      {
        audio: "/audio/general/cry-out.mp3",
        word: "cry out",
        ptDefinition: "gritar; clamar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/cry-noun.mp3",
        word: "cry",
        ptDefinition: "choro; grito",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // darken
  {
    verbAudio: "/audio/general/darken.mp3",
    verbWord: "darken",
    verbPtDefinition: "escurecer",

    nouns: [
      {
        audio: "/audio/general/darkness.mp3",
        word: "darkness",
        ptDefinition: "escuridão",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/dark.mp3",
        word: "dark",
        ptDefinition: "escuro",
      },
    ],
  },
  // dig
  {
    verbAudio: "/audio/general/dig.mp3",
    verbWord: "dig",
    verbPtDefinition: "cavar; escavar",

    phrasalVerbs: [
      {
        audio: "/audio/general/dig-in.mp3",
        word: "dig in",
        ptDefinition: "estabelecer-se; começar a comer com vontade",
      },
      {
        audio: "/audio/general/dig-into.mp3",
        word: "dig into",
        ptDefinition: "investigar",
      },
      {
        audio: "/audio/general/dig-up.mp3",
        word: "dig up",
        ptDefinition: "desenterrar; descobrir (informação)",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/dig-noun.mp3",
        word: "dig",
        ptDefinition: "escavação; crítica (informal)",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // do
  {
    verbAudio: "/audio/general/do.mp3",
    verbWord: "do",
    verbPtDefinition: "fazer",

    phrasalVerbs: [
      {
        audio: "/audio/general/do-up.mp3",
        word: "do up",
        ptDefinition: "reformar; fechar (roupa); decorar",
      },
      {
        audio: "/audio/general/do-over.mp3",
        word: "do over",
        ptDefinition: "refazer",
      },
    ],
  },
  // drive
  {
    verbAudio: "/audio/general/drive.mp3",
    verbWord: "drive",
    verbPtDefinition: "dirigir; conduzir; impulsionar",

    phrasalVerbs: [
      {
        audio: "/audio/general/drive-away.mp3",
        word: "drive away",
        ptDefinition: "afastar",
      },
      {
        audio: "/audio/general/drive-out.mp3",
        word: "drive out",
        ptDefinition: "expulsar; forçar a sair",
      },
      {
        audio: "/audio/general/drive-through.mp3",
        word: "drive through",
        ptDefinition: "passar de carro; drive-thru",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/drive-noun.mp3",
        word: "drive",
        ptDefinition: "viagem de carro; impulso; motivação",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // drink
  {
    verbAudio: "/audio/general/drink.mp3",
    verbWord: "drink",
    verbPtDefinition: "beber",

    phrasalVerbs: [
      {
        audio: "/audio/general/drink-up.mp3",
        word: "drink up",
        ptDefinition: "beber tudo; terminar a bebida",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/drink-noun.mp3",
        word: "drink",
        register: "",
        ptDefinition: "bebida",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // drop
  {
    verbAudio: "/audio/general/drop.mp3",
    verbWord: "drop",
    verbPtDefinition: "derrubar; deixar cair",

    phrasalVerbs: [
      {
        audio: "/audio/general/drop-off.mp3",
        word: "drop off",
        ptDefinition: "deixar alguém em um lugar; diminuir (preço)",
      },
      {
        audio: "/audio/general/drop-out.mp3",
        word: "drop out",
        ptDefinition: "abandonar; desistir",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/drop-noun.mp3",
        word: "drop",
        ptDefinition: "gota; queda",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],
  },
  // dry
  {
    verbAudio: "/audio/general/dry.mp3",
    verbWord: "dry",
    verbPtDefinition: "secar",

    phrasalVerbs: [
      {
        audio: "/audio/general/dry-up.mp3",
        word: "dry up",
        ptDefinition: "secar completamente; acabar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/dryness.mp3",
        word: "dryness",
        ptDefinition: "secura; aridez",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/dry.mp3",
        word: "dry",
        ptDefinition: "seco(a)",
      },
    ],
  },
  // die
  {
    verbAudio: "/audio/general/die.mp3",
    verbWord: "die",
    verbPtDefinition: "morrer; falecer",

    phrasalVerbs: [
      {
        audio: "/audio/general/die-out.mp3",
        word: "die out",
        ptDefinition: "desaparecer; extinguir-se",
      },
      {
        audio: "/audio/general/die-off.mp3",
        word: "die off",
        ptDefinition: "morrer gradualmente; extinguir-se",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/death.mp3",
        word: "death",
        ptDefinition: "morte",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      },
      {
        audio: "/audio/general/dying.mp3",
        word: "dying",
        ptDefinition: "ato the morrer",
        examples: [
          {
            example: "",
          },
        ],
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/dead.mp3",
        word: "dead",
        ptDefinition: "morto; sem vida",
      },
      {
        audio: "/audio/general/dying.mp3",
        word: "dying",
        ptDefinition: "Que está morrendo; em perigo de extinção",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/die-hard.mp3",
        word: "die-hard",
        ptDefinition: "firme; resistente; difícil de mudar (figurado)",
      },
    ],
  },
  // eat
  {
    verbAudio: "/audio/general/eat.mp3",
    verbWord: "eat",
    verbPtDefinition: "comer",

    phrasalVerbs: [
      {
        audio: "/audio/general/eat-up.mp3",
        word: "eat up",
        ptDefinition: "comer tudo; devorar",
      },
      {
        audio: "/audio/general/eat-out.mp3",
        word: "eat out",
        ptDefinition: "comer fora (em restaurante)",
      },
    ],
  },
  // fasten
  {
    verbAudio: "/audio/general/fasten.mp3",
    verbWord: "fasten",
    verbPtDefinition: "prender, apertar",

    nouns: [
      {
        audio: "/audio/general/fastness.mp3",
        word: "fastness",
        registerTag: "formal",
        ptDefinition: "pressa, rapidez",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/fast.mp3",
        word: "fast",
        ptDefinition: "rápido",
      },
      {
        audio: "/audio/general/faster.mp3",
        word: "faster",
        degree: "comparativo",
        ptDefinition: "mais rápido",
      },
    ],
  },
  // focus
  {
    verbAudio: "/audio/general/focus.mp3",
    verbWord: "focus (on something)",
    verbPtDefinition: "focar; concentrar-se",

    nouns: [
      {
        audio: "/audio/general/focus-noun.mp3",
        word: "focus",
        ptDefinition: "foco; concentração",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/focused.mp3",
        word: "focused",
        ptDefinition: "focado; concentrado",
      },
    ],
  },
  // give
  {
    verbAudio: "/audio/general/give.mp3",
    verbWord: "give",
    verbPtDefinition: "dar",

    nouns: [
      {
        audio: "/audio/general/giving.mp3",
        word: "giving",
        ptDefinition: "ato de dar; doação",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/giving.mp3",
        word: "giving",
        ptDefinition: "generoso; que gosta de ajudar",
      },
    ],
  },
  // go
  {
    verbAudio: "/audio/general/go.mp3",
    verbWord: "go",
    verbPtDefinition: "ir; passar (tempo)",

    phrasalVerbs: [
      {
        audio: "/audio/general/go-back.mp3",
        word: "go back",
        ptDefinition: "voltar",
      },
      {
        audio: "/audio/general/go-on.mp3",
        word: "go on",
        ptDefinition: "continuar",
      },
      {
        audio: "/audio/general/go-out.mp3",
        word: "go out",
        ptDefinition: "sair",
      },
    ],
    expressions: [
      {
        audio: "/audio/general/go-like-this.mp3",
        word: "go like this",
        ptDefinition: "fazer assim, ser assim",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/go-noun.mp3",
        word: "go",
        ptDefinition: "tentativa; vez; energia (informal)",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],
  },
  // hide
  {
    verbAudio: "/audio/general/hide.mp3",
    verbWord: "hide",
    verbPtDefinition: "esconder; ocultar",

    phrasalVerbs: [
      {
        audio: "/audio/general/hide-away.mp3",
        word: "hide away",
        ptDefinition: "esconder-se; refugiar-se",
      },
      {
        audio: "/audio/general/hide-out.mp3",
        word: "hide out",
        ptDefinition: "ficar escondido",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/hide.mp3",
        word: "hide",
        ptDefinition: "pele; couro (animal)",
        examples: [
          {
            example: "cow hide",
            ptExample: "pele de vaca",
          },
        ],
      }
    ],

  },
  // interest
  {
    verbAudio: "/audio/general/interest.mp3",
    verbWord: "interest (in)",
    verbPtDefinition: "interessar",

    nouns: [
      {
        audio: "/audio/general/interest-noun.mp3",
        word: "interest",
        ptDefinition: "interesse; juros",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/interested.mp3",
        word: "interested",
        ptDefinition: "interessado",
      },
      {
        audio: "/audio/general/interesting.mp3",
        word: "interesting",
        ptDefinition: "interessante",
      },
    ],
  },
  // invite
  {
    verbAudio: "/audio/general/invite.mp3",
    verbWord: "invite",
    verbPtDefinition: "convidar",

    nouns: [
      {
        audio: "/audio/general/invitation.mp3",
        word: "invitation",
        ptDefinition: "convite",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/inviting.mp3",
        word: "inviting",
        ptDefinition: "convidativo; atraente",
      },
    ],
  },
  // know
  {
    verbAudio: "/audio/general/know.mp3",
    verbWord: "know",
    verbPtDefinition: "saber; conhecer",

    phrasalVerbs: [
      {
        audio: "/audio/general/know-about.mp3",
        word: "know about",
        ptDefinition: "saber sobre; ter conhecimento de",
      },
      {
        audio: "/audio/general/know-of.mp3",
        word: "know of",
        ptDefinition: "ter conhecimento de; já ter ouvido falar de",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/knowledge.mp3",
        word: "knowledge",
        ptDefinition: "conhecimento",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/knowledgeable.mp3",
        word: "knowledgeable",
        ptDefinition: "bem-informado; conhecedor",
      },
      {
        audio: "/audio/general/known.mp3",
        word: "known",
        ptDefinition: "conhecido; sabido",
      },
    ],
  },
  // knee
  {
    verbAudio: "/audio/general/knee.mp3",
    verbWord: "knee",
    verbPtDefinition: "dar uma joelhada",

    nouns: [
      {
        audio: "/audio/general/knee.mp3",
        word: "knee",
        ptDefinition: "joelho",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],
  },
  // kneel
  {
    verbAudio: "/audio/general/kneel.mp3",
    verbWord: "kneel",
    verbPtDefinition: "ajoelhar-se",

    phrasalVerbs: [
      {
        audio: "/audio/general/kneel-down.mp3",
        word: "kneel down",
        ptDefinition: "ajoelhar-se",
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/kneeling.mp3",
        word: "kneeling",
        ptDefinition: "ajoelhado",
      },
    ],
  },
  // laugh
  {
    verbAudio: "/audio/general/laugh.mp3",
    verbWord: "laugh",
    verbPtDefinition: "rir",

    phrasalVerbs: [
      {
        audio: "/audio/general/laugh-at.mp3",
        word: "laugh at",
        ptDefinition: "rir de; zombar de",
      },
      {
        audio: "/audio/general/laugh-off.mp3",
        word: "laugh off",
        ptDefinition: "tentar ignorar com humor",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/laughter.mp3",
        word: "laughter",
        ptDefinition: "risada; riso",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/laughing.mp3",
        word: "laughing",
        ptDefinition: "risonho; sorridente",
      },
      {
        audio: "/audio/general/laughable.mp3",
        word: "laughable",
        ptDefinition: "ridículo; risível",
      },
    ],
  },
  // let
  {
    verbAudio: "/audio/general/let.mp3",
    verbWord: "let",
    verbPtDefinition: "deixar; permitir",

    phrasalVerbs: [
      {
        audio: "/audio/general/let-down.mp3",
        word: "let down",
        ptDefinition: "decepcionar; desapontar",
      },
      {
        audio: "/audio/general/let-in.mp3",
        word: "let in",
        ptDefinition: "deixar entrar",
      },
      {
        audio: "/audio/general/let-out.mp3",
        word: "let out",
        ptDefinition: "liberar; deixar sair",
      },
    ],

    adjectives: [
      {
        audio: "/audio/general/lettable.mp3",
        word: "lettable",
        registerTag: "chiefly british",
        ptDefinition: "que pode ser alugado",
      },
    ],
  },
  // like
  {
    verbAudio: "/audio/general/like.mp3",
    verbWord: "like",
    verbPtDefinition: "gostar; apreciar",

    phrasalVerbs: [
      {
        audio: "/audio/general/like-up.mp3",
        word: "like up",
        ptDefinition: "demonstrar aprovação; curtir",
      },
      {
        audio: "/audio/general/like-for.mp3",
        word: "like for",
        ptDefinition: "curtir por causa de (informal, online)",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/like.mp3",
        word: "like",
        ptDefinition: "gostar; preferência",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/likable.mp3",
        word: "likable",
        ptDefinition: "simpático; agradável",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/like.mp3",
        word: "like",
        ptDefinition: "como; do tipo de",
        registerTag: "informal / chiefly American",
      },
    ],
  },
  // light
  {
    verbAudio: "/audio/general/light.mp3",
    verbWord: "light",
    verbPtDefinition: "acender",

    nouns: [
      {
        audio: "/audio/general/light.mp3",
        word: "light",
        ptDefinition: "luz",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/light.mp3",
        word: "light",
        ptDefinition: "leve; claro",
      },
    ],
  },
  // lighten
  {
    verbAudio: "/audio/general/lighten.mp3",
    verbWord: "lighten",
    verbPtDefinition: "clarear; tornar mais leve",
  },
  // love
  {
    verbAudio: "/audio/general/love.mp3",
    verbWord: "love",
    verbPtDefinition: "amar; adorar",

    phrasalVerbs: [
      {
        audio: "/audio/general/love-up.mp3",
        word: "love up",
        ptDefinition: "mostrar carinho; abraçar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/love.mp3",
        word: "love",
        ptDefinition: "amor; afeição",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/loved.mp3",
        word: "loved",
        ptDefinition: "amado; querido",
      },
      {
        audio: "/audio/general/lovely.mp3",
        word: "lovely",
        ptDefinition: "adorável; agradável",
      },
      {
        audio: "/audio/general/loving.mp3",
        word: "loving",
        ptDefinition: "amoroso; carinhoso",
      },
      {
        audio: "/audio/general/love-up.mp3",
        word: "loved-up",
        ptDefinition: "cheio(a) de carinho; afetuoso(a)",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/love-at-first-sight.mp3",
        word: "love at first sight",
        ptDefinition: "amor à primeira vista",
      },
    ],
  },
  // make
  {
    verbAudio: "/audio/general/make.mp3",
    verbWord: "make",
    verbPtDefinition: "fazer, criar; ganhar (dinheiro); totalizar",

    phrasalVerbs: [
      {
        audio: "/audio/general/make-up.mp3",
        word: "make up",
        ptDefinition: "inventar; reconciliar-se; compensar",
      },
      {
        audio: "/audio/general/make-out.mp3",
        word: "make out",
        ptDefinition: "entender; decifrar; beijar (informal)",
      },
      {
        audio: "/audio/general/make-over.mp3",
        word: "make over",
        ptDefinition: "transformar; transferir (legalmente)",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/make-noun.mp3",
        word: "make",
        RegisterTag: "chiefly british",
        ptDefinition: "modelo; marca (de carro ou produto)",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/made-up.mp3",
        word: "made-up",
        ptDefinition: "inventado; fictício",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/make-sense.mp3",
        word: "make sense",
        ptDefinition: "fazer sentido",
      },
      {
        audio: "/audio/general/make-a-difference.mp3",
        word: "make a difference",
        ptDefinition: "fazer a diferença",
      },
    ],
  },
  // meet
  {
    verbAudio: "/audio/general/meet.mp3",
    verbWord: "meet",
    verbPtDefinition: "encontrar; conhecer",

    phrasalVerbs: [
      {
        audio: "/audio/general/meet-up.mp3",
        word: "meet up",
        ptDefinition: "encontrar-se; reunir-se",
      },
      {
        audio: "/audio/general/meet-with.mp3",
        word: "meet with",
        ptDefinition: "reunir-se com; encontrar-se com",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/meeting.mp3",
        word: "meeting",
        ptDefinition: "reunião; encontro",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/meetable.mp3",
        word: "meetable",
        ptDefinition: "que pode ser encontrado; acessível",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/meet-halfway.mp3",
        word: "meet halfway",
        ptDefinition: "chegar a um acordo; ceder parcialmente",
      },
    ],
  },
  // have
  {
    verbAudio: "/audio/general/have.mp3",
    verbWord: "have",
    verbPtDefinition: "ter; possuir; comer, beber",

    phrasalVerbs: [
      {
        audio: "/audio/general/have-on.mp3",
        word: "have on",
        ptDefinition: "estar vestindo; ter planejado",
      },
      {
        audio: "/audio/general/have-over.mp3",
        word: "have over",
        ptDefinition: "receber em casa; convidar para visitar",
      },
      {
        audio: "/audio/general/have-up.mp3",
        word: "have up",
        ptDefinition: "processar; convocar para explicação",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/having.mp3",
        word: "having",
        ptDefinition: "posse; propriedade",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    expressions: [
      {
        audio: "/audio/general/have-a-good-time.mp3",
        word: "have a good time",
        ptDefinition: "divertir-se; aproveitar",
      },
      {
        audio: "/audio/general/have-a-look.mp3",
        word: "have a look",
        ptDefinition: "dar uma olhada; examinar",
      },
    ],
  },
  // pay
  {
    verbAudio: "/audio/general/pay.mp3",
    verbWord: "pay",
    verbPtDefinition: "pagar; recompensar",

    phrasalVerbs: [
      {
        audio: "/audio/general/pay-back.mp3",
        word: "pay back",
        ptDefinition: "reembolsar; vingar-se",
      },
      {
        audio: "/audio/general/pay-off.mp3",
        word: "pay off",
        ptDefinition: "quitar; compensar; dar certo",
      },
      {
        audio: "/audio/general/pay-in.mp3",
        word: "pay in",
        ptDefinition: "depositar dinheiro",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/payment.mp3",
        word: "payment",
        ptDefinition: "pagamento; remuneração",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/payable.mp3",
        word: "payable",
        ptDefinition: "pagável; a ser pago",
      },
      {
        audio: "/audio/general/paid.mp3",
        word: "paid",
        ptDefinition: "pago; remunerado",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/pay-attention.mp3",
        word: "pay attention",
        ptDefinition: "prestar atenção",
      },
    ],
  },
  // practice
  {
    verbAudio: "/audio/general/practice.mp3",
    verbWord: "practice",
    verbPtDefinition: "praticar; treinar",

    nouns: [
      {
        audio: "/audio/general/practice-noun.mp3",
        word: "practice",
        ptDefinition: "prática; exercício; clínica (profissional)",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/practical.mp3",
        word: "practical",
        ptDefinition: "prático; útil",
      },
      {
        audio: "/audio/general/practicable.mp3",
        word: "practicable",
        ptDefinition: "executável; viável",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/practice-makes-perfect.mp3",
        word: "practice makes perfect",
        ptDefinition: "a prática leva à perfeição",
      },
    ],
  },
  // read
  {
    verbAudio: "/audio/general/read.mp3",
    verbWord: "read",
    verbPtDefinition: "ler",

    phrasalVerbs: [
      {
        audio: "/audio/general/read-aloud.mp3",
        word: "read aloud",
        ptDefinition: "ler em voz alta",
      },
      {
        audio: "/audio/general/read-out.mp3",
        word: "read out",
        ptDefinition: "ler em voz alta; anunciar",
      },
      {
        audio: "/audio/general/read-over.mp3",
        word: "read over",
        ptDefinition: "revisar; ler rapidamente",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/reading.mp3",
        word: "reading",
        ptDefinition: "leitura; interpretação",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/readable.mp3",
        word: "readable",
        ptDefinition: "legível; compreensível",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/read-between-the-lines.mp3",
        word: "read between the lines",
        ptDefinition: "ler nas entrelinhas; entender o que não está explícito",
      },
    ],
  },
  // saw (to cut with a saw)
  {
    verbAudio: "/audio/general/saw.mp3",
    verbWord: "saw",
    verbPtDefinition: "serrar; cortar com serra",

    phrasalVerbs: [
      {
        audio: "/audio/general/saw-off.mp3",
        word: "saw off",
        ptDefinition: "cortar algo completamente com serra",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/saw.mp3",
        word: "saw",
        ptDefinition: "serra; ferramenta para cortar madeira",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/sawed-off.mp3",
        word: "sawed-off",
        ptDefinition: "cortado; reduzido (como em 'sawed-off shotgun')",
      },
    ],
  },
  // see
  {
    verbAudio: "/audio/general/see.mp3",
    verbWord: "see",
    verbPtDefinition: "ver; perceber; compreender",

    phrasalVerbs: [
      {
        audio: "/audio/general/see-off.mp3",
        word: "see off",
        ptDefinition: "acompanhar alguém na partida; despedir-se",
      },
      {
        audio: "/audio/general/see-through.mp3",
        word: "see through",
        ptDefinition: "ver através; perceber intenções",
      },
      {
        audio: "/audio/general/see-to.mp3",
        word: "see to",
        ptDefinition: "cuidar de; providenciar",
      },
    ],

    nouns: [
      {
        audio: "/audio/general/seeing.mp3",
        word: "seeing",
        ptDefinition: "visão; percepção",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/seen.mp3",
        word: "seen",
        ptDefinition: "visto; percebido",
      },
    ],

    expressions: [
      {
        audio: "/audio/general/see-eye-to-eye.mp3",
        word: "see eye to eye",
        ptDefinition: "concordar; ter a mesma opinião",
      },
      {
        audio: "/audio/general/see-the-light.mp3",
        word: "see the light",
        ptDefinition: "perceber a verdade; entender algo",
      },
    ],
  },
  // purity
  {
    nouns: [
      {
        audio: "/audio/general/purity.mp3",
        word: "purity",
        ptDefinition: "pureza",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/pure.mp3",
        word: "pure",
        ptDefinition: "puro(a)",
      },
    ],
  },
  // shorten
  {
    verbAudio: "/audio/general/shorten.mp3",
    verbWord: "shorten",
    verbPtDefinition: "encurtar; reduzir",

    nouns: [
      {
        audio: "/audio/general/shortness.mp3",
        word: "shortness",
        ptDefinition: "falta de; deficiência",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/short.mp3",
        word: "short",
        ptDefinition: "curto",
      },
    ],
  },
  // soften
  {
    verbAudio: "/audio/general/soften.mp3",
    verbWord: "soften",
    verbPtDefinition: "amaciar",

    nouns: [
      {
        audio: "/audio/general/softness.mp3",
        word: "softness",
        ptDefinition: "maciez",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/soft.mp3",
        word: "soft",
        ptDefinition: "macio",
      },
    ],
  },
  // teach
  {
    verbAudio: "/audio/general/teach.mp3",
    verbWord: "teach",
    verbPtDefinition: "ensinar",

    nouns: [
      {
        audio: "/audio/general/teacher-teaching.mp3",
        word: "teacher / teaching",
        ptDefinition: "professor / ensino",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/teaching.mp3",
        word: "teaching",
        ptDefinition: "pedagógico",
      },
    ],
  },
  // use
  {
    verbAudio: "/audio/general/use-verb.mp3",
    verbWord: "use",
    verbPtDefinition: "usar",

    nouns: [
      {
        audio: "/audio/general/use-noun.mp3",
        word: "use",
        ptDefinition: "uso",
        examples: [
          {
            example: "",
            ptExample: "",
          },
        ],
      }
    ],

    adjectives: [
      {
        audio: "/audio/general/useful-useless.mp3",
        word: "useful / useless",
        ptDefinition: "útil / inútil",
      },
    ],
  },
];

function escapeRegExp(word) {
  return word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderUnderline(text, underlineWords = []) {
  if (!text) return "-";

  let parts = [text];

  underlineWords.forEach((word) => {
    const safeWord = escapeRegExp(word);
    const regex = new RegExp(`(${safeWord})`, "gi");

    parts = parts.flatMap((part) =>
      typeof part === "string" ? part.split(regex) : part
    );
  });

  return parts.map((part, i) =>
    underlineWords.some((w) => part?.toLowerCase() === w.toLowerCase()) ? (
      <mark key={i}>{part}</mark>
    ) : (
      part
    )
  );
}

export default function WordFormation() {
  return (
    <>
      <Whiteboard title="Grammar" subtitle="Word Formation" />
      <div className="line-break">
        {/* <DictionarySearch /> */}
        <Text>
          <Bold>Use this list as a reference.</Bold>
        </Text>
        <div className={styles.scroll}>
          <div className={styles.table}>
            {/* Headers */}
            <Text className={styles.header}>
              <Bold className="block bold">verb</Bold>
              <span>(-en, -ify)</span>
            </Text>

            <Text className={styles.header}>
              <Bold className="block bold">phrasal verb</Bold>
              <span>(+ prepositions)</span>
            </Text>

            <Text className={styles.header}>
              <Bold className="block">noun</Bold>
              <span>( -ing, -ness, -ment, -ity, -hood)</span>
            </Text>

            <Text className={styles.header}>
              <Bold>adjective </Bold>
              <span>(-ed, ing, -ous, -ive, -able, -ful, -less)</span>
            </Text>

            <Text className={styles.header}>
              <Bold>expressions </Bold>
            </Text>

            {/* Rows */}
            {words.map((word, index) => (
              <div key={index} className={styles.row}>
                {/* verb */}
                <div>
                  <>
                    <Text
                      playAudio={word.verbAudio}
                      className={!word.verbAudio ? styles.hidden : undefined}
                    >
                      <Bold>{word.verbWord}</Bold>{" "}
                      {word.verbRegisterTag && (
                        <RegisterTag>{word.verbRegisterTag}</RegisterTag>
                      )}{" "}
                      <Portuguese>{word.verbPtDefinition}</Portuguese>
                    </Text>
                    {word.verbExamples?.map((item, index) => (
                      <Text key={index}>
                        <Bold>•</Bold> {item.example}{" "}
                        <Portuguese>{item.ptExample}</Portuguese>
                      </Text>
                    ))}
                  </>
                </div>

                {/* phrasal verb */}
                <div>
                  {word.phrasalVerbs?.map((item, index) => (
                    <>
                      <Text
                        key={index}
                        playAudio={item.audio}
                        className={!item.audio ? styles.hidden : undefined}
                      >
                        <Bold>{item.word}</Bold>{" "}
                        {item.registerTag && (
                          <RegisterTag>{item.registerTag}</RegisterTag>
                        )}{" "}
                        <Portuguese>{item.ptDefinition}</Portuguese>
                      </Text>
                      {item.examples?.map((subItem, index) => (
                        <Text key={index}>
                          <Bold>•</Bold> {subItem.example}{" "}
                          <Portuguese>{subItem.ptExample}</Portuguese>
                        </Text>
                      ))}
                    </>
                  ))}
                </div>

                {/* noun */}
                <div>
                  {word.nouns?.map((item, index) => (
                    <>
                      <Text
                        key={index}
                        playAudio={item.audio}
                        className={!item.audio ? styles.hidden : undefined}
                      >
                        <Bold>{item.word}</Bold>{" "}
                        {item.registerTag && (
                          <RegisterTag>{item.registerTag}</RegisterTag>
                        )}{" "}
                        <Portuguese>{item.ptDefinition}</Portuguese>
                      </Text>
                      {item.examples?.map((subItem, index) => (
                        <Text key={index}>
                          <Bold>•</Bold> {subItem.example}{" "}
                          <Portuguese>{subItem.ptExample}</Portuguese>
                        </Text>
                      ))}
                    </>
                  ))}
                </div>

                {/* adjective */}
                <div>
                  {word.adjectives?.map((item, index) => (
                    <>
                      <Text
                        key={index}
                        playAudio={item.audio}
                        className={!item.audio ? styles.hidden : undefined}
                      >
                        <Bold>{item.word}</Bold>{" "}
                        {item.registerTag && (
                          <RegisterTag>{item.registerTag}</RegisterTag>
                        )}{" "}
                        {item.degreeTag && (
                          <DegreeTag>{item.degreeTag}</DegreeTag>
                        )}{" "}
                        <Portuguese>{item.ptDefinition}</Portuguese>
                      </Text>
                      {item.examples?.map((subItem, index) => (
                        <Text key={index}>
                          <Bold>•</Bold> {subItem.example}{" "}
                          <Portuguese>{subItem.ptExample}</Portuguese>
                        </Text>
                      ))}
                    </>
                  ))}
                </div>

                {/* expressions */}
                <div>
                  {word.expressions?.map((item, index) => (
                    <Text
                      key={index}
                      playAudio={item.audio}
                      className={!item.audio ? styles.hidden : undefined}
                    >
                      <Bold>{item.word}</Bold>{" "}
                      <Portuguese>{item.ptDefinition}</Portuguese>
                    </Text>
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
