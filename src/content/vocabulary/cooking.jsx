import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Cooking() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Cooking & Food" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common cooking and food vocabulary.")],
            }),
          ]}
        />
        <Contents
          items={[
            {
              href: "cooking-actions",
              label: "Cooking Actions",
            },
            {
              href: "ingredients-and-food",
              label: "Ingredients & Food",
            },
            {
              href: "kitchen-ware",
              label: "Kitchen Ware",
            },
            {
              href: "phrases-and-questions",
              label: "Phrases & Questions",
            },
          ]}
        />
        <Section id="cooking-actions" label="Cooking Actions" heading={3}>
          <Line
            value={[
              bold("to chop"),
              " ",
              portuguese("cortar (em pedaços)"),
              " ",
              example("Chop the onions into small pieces."),
              " ",
              portuguese("Corte as cebolas em pedaços pequenos."),
            ]}
          />
          <Line
            value={[
              bold("to carve"),
              " ",
              portuguese("fatiar / cortar em fatias"),
              " ",
              example("He carved the turkey for dinner."),
              " ",
              portuguese("Ele fatiou o peru para o jantar."),
            ]}
          />
          <Line
            value={[
              bold("to grate"),
              " ",
              portuguese("ralar"),
              " ",
              example("Grate the cheese on top of the pasta."),
              " ",
              portuguese("Rale o queijo em cima da massa."),
            ]}
          />
          <Line
            value={[
              bold("to peel"),
              " ",
              portuguese("descascar"),
              " ",
              example("Peel the potatoes before cooking."),
              " ",
              portuguese("Descasque as batatas antes de cozinhar."),
            ]}
          />
          <Line
            value={[
              bold("to scrape"),
              " ",
              portuguese("raspar"),
              " ",
              example("Scrape the burnt part off the pan."),
              " ",
              portuguese("Raspe a parte queimada da panela."),
            ]}
          />
          <Line
            value={[
              bold("to stir"),
              " ",
              portuguese("mexer"),
              " ",
              example("Stir the soup so it doesn't stick."),
              " ",
              portuguese("Mexa a sopa para não grudar."),
            ]}
          />
        </Section>
        <Section
          id="ingredients-and-food"
          label="Ingredients & Food"
          heading={3}
        >
          <Line
            value={[
              bold("broth"),
              " ",
              portuguese("caldo"),
              " ",
              example("Add the broth to the soup."),
              " ",
              portuguese("Adicione o caldo à sopa."),
            ]}
          />
          <Line
            value={[
              bold("cold cuts"),
              " ",
              portuguese("frios"),
              " ",
              example("We served cold cuts and cheese."),
              " ",
              portuguese("Servimos frios e queijo."),
            ]}
          />
          <Line
            value={[
              bold("dough"),
              " ",
              portuguese("massa"),
              " ",
              example("Let the dough rest for 30 minutes."),
              " ",
              portuguese("Deixe a massa descansar por 30 minutos."),
            ]}
          />
          <Line
            value={[
              bold("salad dressing"),
              " ",
              portuguese("molho para salada"),
              " ",
              example("This salad dressing is homemade."),
              " ",
              portuguese("Este molho para salada é caseiro."),
            ]}
          />
          <Line
            value={[
              bold("sauce"),
              " ",
              portuguese("molho (ex: tomate)"),
              " ",
              example("The sauce is ready to serve."),
              " ",
              portuguese("O molho está pronto para servir."),
            ]}
          />
          <Line
            value={[
              bold("seasoning"),
              " ",
              portuguese("tempero"),
              " ",
              example("Add some seasoning to improve the flavor."),
              " ",
              portuguese("Adicione um pouco de tempero para melhorar o sabor."),
            ]}
          />
          <Line
            value={[
              bold("stew"),
              " ",
              portuguese("ensopado / moqueca"),
              " ",
              example("She made a beef stew for dinner."),
              " ",
              portuguese("Ela fez um ensopado de carne para o jantar."),
            ]}
          />
        </Section>
        <Section id="kitchen-ware" label="Kitchen Ware" heading={3}>
          <Line
            value={[
              bold("clay pot"),
              " ",
              portuguese("panela de barro"),
              " ",
              example("The stew is cooking in a clay pot."),
              " ",
              portuguese("O ensopado está cozinhando em uma panela de barro."),
            ]}
          />
          <Line
            value={[
              bold("frying pan"),
              " ",
              portuguese("frigideira"),
              " ",
              example("Heat the oil in the frying pan."),
              " ",
              portuguese("Aqueça o óleo na frigideira."),
            ]}
          />
          <Line
            value={[
              bold("pan"),
              " ",
              portuguese("panela"),
              " ",
              example("Boil the pasta in a large pan."),
              " ",
              portuguese("Ferva a massa em uma panela grande."),
            ]}
          />
        </Section>
        <Section
          id="phrases-and-questions"
          label="Phrases & Questions"
          heading={3}
        >
          <Line
            value={[
              bold("Have you ever eaten...?"),
              " ",
              portuguese("Você já comeu...?"),
              " ",
              example("Have you ever eaten sushi?"),
              " ",
              portuguese("Você já comeu sushi?"),
            ]}
          />
          <Line
            value={[
              bold("What's your specialty?"),
              " ",
              portuguese("Qual é a sua especialidade?"),
              " ",
              example("What's your specialty? This dish is amazing!"),
              " ",
              portuguese("Qual é a sua especialidade? Este prato está incrível!"),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
