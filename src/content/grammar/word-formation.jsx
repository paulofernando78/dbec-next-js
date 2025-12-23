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
  },
  // ask
  {
    verbAudio: "/audio/general/ask.mp3",
    verbWord: "ask",
    verbPtDefinition: "perguntar",

    phrasalVerbs: [
      {
        audio: "/audio/general/ask out.mp3",
        word: "ask out",
        ptDefinition: "convidar para sair",
      },
    ],
  },
  // art
  {
    nounAudio: "/audio/general/art.mp3",
    nounWord: "art",
    nounPtDefinition: "arte",

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

    nounAudio: "/audio/general/beat-noun.mp3",
    nounWord: "beat",
    nounRegisterTag: "informal",
    nounPtDefinition: "ritmo; batida",

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

    nounAudio: "/audio/general/beginning.mp3",
    nounWord: "beginning",
    nounPtDefinition: "começo, início",
  },
  // beautify
  {
    verbAudio: "/audio/general/beautify.mp3",
    verbWord: "beautify",
    verbPtDefinition: "embelezar",

    nounAudio: "/audio/general/beauty.mp3",
    nounWord: "beauty",
    nounPtDefinition: "beleza",

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

    nounAudio: "/audio/general/blow-noun.mp3",
    nounWord: "blow",
    nounPtDefinition: "golpe; sopro; impacto",

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

    nounAudio: "/audio/general/bore-noun.mp3",
    nounWord: "bore",
    nounRegisterTag: "formal",
    nounPtDefinition: "tédio; pessoa chata",

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

    nounAudio: "/audio/general/break-noun.mp3",
    nounWord: "break",
    nounPtDefinition: "quebra; intervalo",

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

    nounAudio: "/audio/general/brush-noun.mp3",
    nounWord: "brush",
    nounPtDefinition: "escova; pincel",
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

    nounAudio: "/audio/general/buy-noun.mp3",
    nounWord: "buy",
    nounPtDefinition: "compra; bom negócio",
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

    nounAudio: "/audio/general/call-noun.mp3",
    nounWord: "call",
    nounPtDefinition: "ligação; chamada",
  },
  // comfort
  {
    verbAudio: "/audio/general/comfort.mp3",
    verbWord: "comfort",
    verbPtDefinition: "confortar; consolar",

    nounAudio: "/audio/general/comfort-noun.mp3",
    nounWord: "comfort",
    nounPtDefinition: "conforto; alívio",

    adjectives: [
      {
        audio: "/audio/general/comfortable.mp3",
        word: "comfortable",
        ptDefinition: "confortável",
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

    nounAudio: "/audio/general/cook-noun.mp3",
    nounWord: "cook",
    nounPtDefinition: "cozinheiro(a)",
  },
  // create
  {
    verbAudio: "/audio/general/create.mp3",
    verbWord: "create",
    verbPtDefinition: "criar",

    nounAudio: "/audio/general/creation.mp3",
    nounWord: "creation",
    nounPtDefinition: "criação",

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

    nounAudio: "/audio/general/cry-noun.mp3",
    nounWord: "cry",
    nounPtDefinition: "choro; grito",
  },
  // darken
  {
    verbAudio: "/audio/general/darken.mp3",
    verbWord: "darken",
    verbPtDefinition: "escurecer",

    nounAudio: "/audio/general/darkness.mp3",
    nounWord: "darkness",
    nounPtDefinition: "escuridão",

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

    nounAudio: "/audio/general/dig-noun.mp3",
    nounWord: "dig",
    nounPtDefinition: "escavação; crítica (informal)",
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

    nounAudio: "/audio/general/drive-noun.mp3",
    nounWord: "drive",
    nounPtDefinition: "viagem de carro; impulso; motivação",
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

    nounAudio: "/audio/general/drink-noun.mp3",
    nounWord: "drink",
    nounPtDefinition: "bebida",
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

    nounAudio: "/audio/general/drop-noun.mp3",
    nounWord: "drop",
    nounPtDefinition: "gota; queda",
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

    nounAudio: "/audio/general/dryness.mp3",
    nounWord: "dryness",
    nounPtDefinition: "secura; aridez",

    adjectives: [
      {
        audio: "/audio/general/dry.mp3",
        word: "dry",
        ptDefinition: "seco(a)",
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

    nounAudio: "/audio/general/fastness.mp3",
    nounWord: "fastness",
    nounRegisterTag: "formal",
    nounPtDefinition: "pressa, rapidez",

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

    nounAudio: "/audio/general/focus-noun.mp3",
    nounWord: "focus",
    nounPtDefinition: "foco; concentração",

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

    nounAudio: "/audio/general/giving.mp3",
    nounWord: "giving",
    nounPtDefinition: "ato de dar; doação",

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

    nounAudio: "/audio/general/go-noun.mp3",
    nounWord: "go",
    nounPtDefinition: "tentativa; vez; energia (informal)",
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

    nounAudio: "/audio/general/hide.mp3",
    nounWord: "hide",
    nounPtDefinition: "pele; couro (animal)",
  },
  // interest
  {
    verbAudio: "/audio/general/interest.mp3",
    verbWord: "interest (in)",
    verbPtDefinition: "interessar",

    nounAudio: "/audio/general/interest-noun.mp3",
    nounWord: "interest",
    nounPtDefinition: "interesse; juros",

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

    nounAudio: "/audio/general/invitation.mp3",
    nounWord: "invitation",
    nounPtDefinition: "convite",

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

    nounAudio: "/audio/general/knowledge.mp3",
    nounWord: "knowledge",
    nounPtDefinition: "conhecimento",

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

    nounAudio: "/audio/general/knee.mp3",
    nounWord: "knee",
    nounPtDefinition: "joelho",
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

    nounAudio: "/audio/general/laughter.mp3",
    nounWord: "laughter",
    nounPtDefinition: "risada; riso",

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

    nounAudio: "/audio/general/letting-noun.mp3",
    nounWord: "letting",
    nounPtDefinition: "ato de permitir; aluguel (em contexto imobiliário)",

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

    nounAudio: "/audio/general/like.mp3",
    nounWord: "like",
    nounPtDefinition: "gostar; preferência",

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

    nounAudio: "/audio/general/light.mp3",
    nounWord: "light",
    nounPtDefinition: "luz",

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
        audio: "/audio/general/love-for.mp3",
        word: "love for",
        ptDefinition: "ter amor ou afeição por",
      },
    ],

    nounAudio: "/audio/general/love.mp3",
    nounWord: "love",
    nounPtDefinition: "amor; afeição",

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
      }
      ,
      {
        audio: "/audio/general/love-up.mp3",
        word: "loved-up",
        ptDefinition: "cheio(a) de carinho; afetuoso(a)",
      }
    ],

    expressions: [
      {
        audio: "/audio/general/love-at-first-sight.mp3",
        word: "love at first sight",
        ptDefinition: "amor à primeira vista",
      },
    ],
  },
  // purity
  {
    nounAudio: "/audio/general/purity.mp3",
    nounWord: "purity",
    nounPtDefinition: "pureza",

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

    nounAudio: "/audio/general/shortness.mp3",
    nounWord: "shortness",
    nounPtDefinition: "falta de; deficiência",

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

    nounAudio: "/audio/general/softness.mp3",
    nounWord: "softness",
    nounPtDefinition: "maciez",

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

    nounAudio: "/audio/general/teacher-teaching.mp3",
    nounWord: "teacher / teaching",
    nounPtDefinition: "professor / ensino",

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

    nounAudio: "/audio/general/use-noun.mp3",
    nounWord: "use",
    nounPtDefinition: "uso",

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
                </div>

                {/* phrasal verb */}
                <div>
                  {word.phrasalVerbs?.map((item, index) => (
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
                  ))}
                </div>

                {/* noun */}
                <div>
                  <Text
                    playAudio={word.nounAudio}
                    className={!word.nounAudio ? styles.hidden : undefined}
                  >
                    <Bold>{word.nounWord}</Bold>{" "}
                    {word.nounRegisterTag && (
                      <RegisterTag>{word.nounRegisterTag}</RegisterTag>
                    )}{" "}
                    <Portuguese>{word.nounPtDefinition}</Portuguese>
                  </Text>
                </div>

                {/* adjective */}
                <div>
                  {word.adjectives?.map((item, index) => (
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
