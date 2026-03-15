import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
export default function Cooking() {
  return <>
      <Whiteboard title="Vocabulary" subtitle="Cooking & Food" />
      <div className="line-break">
        <Line text={[{
        part: "Common cooking and food vocabulary.",
        type: "bold"
      }]} />
        <Contents items={[{
        href: "#cooking-actions",
        label: "Cooking Actions"
      }, {
        href: "#ingredients-and-food",
        label: "Ingredients & Food"
      }, {
        href: "#kitchen-ware",
        label: "Kitchen Ware"
      }, {
        href: "#phrases-and-questions",
        label: "Phrases & Questions"
      }]} />
        <Section id="cooking-actions" label="Cooking Actions" heading={3}>
          <Paragraph value={[{
          part: "to chop",
          type: "bold"
        }, " ", {
          part: "cortar (em pedaços)",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Chop the onions into small pieces."
        }, {
          part: " Corte as cebolas em pedaços pequenos.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "to carve",
          type: "bold"
        }, " ", {
          part: "fatiar / cortar em fatias",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "He carved the turkey for dinner."
        }, {
          part: " Ele fatiou o peru para o jantar.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "to grate",
          type: "bold"
        }, " ", {
          part: "ralar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Grate the cheese on top of the pasta."
        }, {
          part: " Rale o queijo em cima da massa.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "to peel",
          type: "bold"
        }, " ", {
          part: "descascar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Peel the potatoes before cooking."
        }, {
          part: " Descasque as batatas antes de cozinhar.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "to scrape",
          type: "bold"
        }, " ", {
          part: "raspar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Scrape the burnt part off the pan."
        }, {
          part: " Raspe a parte queimada da panela.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "to stir",
          type: "bold"
        }, " ", {
          part: "mexer",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Stir the soup so it doesn’t stick."
        }, {
          part: " Mexa a sopa para não grudar.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="ingredients-and-food" label="Ingredients & Food" heading={3}>
          <Paragraph value={[{
          part: "broth",
          type: "bold"
        }, " ", {
          part: "caldo",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Add the broth to the soup."
        }, {
          part: " Adicione o caldo à sopa.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "cold cuts",
          type: "bold"
        }, " ", {
          part: "frios",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "We served cold cuts and cheese."
        }, {
          part: " Servimos frios e queijo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "dough",
          type: "bold"
        }, " ", {
          part: "massa",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Let the dough rest for 30 minutes."
        }, {
          part: " Deixe a massa descansar por 30 minutos.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "salad dressing",
          type: "bold"
        }, " ", {
          part: "molho para salada",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "This salad dressing is homemade."
        }, {
          part: " Este molho para salada é caseiro.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "sauce",
          type: "bold"
        }, " ", {
          part: "molho (ex: tomate)",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The sauce is ready to serve."
        }, {
          part: " O molho está pronto para servir.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "seasoning",
          type: "bold"
        }, " ", {
          part: "tempero",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Add some seasoning to improve the flavor."
        }, {
          part: " Adicione um pouco de tempero para melhorar o sabor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "stew",
          type: "bold"
        }, " ", {
          part: "ensopado / moqueca",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "She made a beef stew for dinner."
        }, {
          part: " Ela fez um ensopado de carne para o jantar.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="kitchen-ware" label="Kitchen Ware" heading={3}>
          <Paragraph value={[{
          part: "clay pot",
          type: "bold"
        }, " ", {
          part: "panela de barro",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The stew is cooking in a clay pot."
        }, {
          part: " O ensopado está cozinhando em uma panela de barro.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "frying pan",
          type: "bold"
        }, " ", {
          part: "frigideira",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Heat the oil in the frying pan."
        }, {
          part: " Aqueça o óleo na frigideira.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "pan",
          type: "bold"
        }, " ", {
          part: "panela",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Boil the pasta in a large pan."
        }, {
          part: " Ferva a massa em uma panela grande.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="phrases-and-questions" label="Phrases & Questions" heading={3}>
          <Paragraph value={[{
          part: "Have you ever eaten...?",
          type: "bold"
        }, " ", {
          part: "Você já comeu...?",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Have you ever eaten sushi?"
        }, {
          part: " Você já comeu sushi?",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "What's your specialty?",
          type: "bold"
        }, " ", {
          part: "Qual é a sua especialidade?",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "What's your specialty? This dish is amazing!"
        }, {
          part: " Qual é a sua especialidade? Este prato está incrível!",
          type: "portuguese"
        }]} />
        </Section>
      </div>
    </>;
}