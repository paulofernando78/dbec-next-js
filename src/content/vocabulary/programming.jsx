import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Programming() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Programming" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common programming terms.")],
            }),
          ]}
        />
        <Contents
          items={[
            {
              href: "project-and-files",
              label: "Project & Files",
            },
            {
              href: "layout-and-structure",
              label: "Layout & Structure",
            },
            {
              href: "styling-and-css",
              label: "Styling & CSS",
            },
            {
              href: "components-and-ui",
              label: "Components & UI",
            },
            {
              href: "rules-and-access",
              label: "Rules & Access",
            },
            {
              href: "performance-and-behavior",
              label: "Performance & Behavior",
            },
          ]}
        />
        <Section id="project-and-files" label="Project & Files" heading={3}>
          <Line
            value={[
              bold("assets"),
              " ",
              portuguese("recursos / arquivos estáticos"),
              " ",
              example("Store images and fonts in the assets folder."),
              " ",
              portuguese("Guarde imagens e fontes na pasta de recursos."),
            ]}
          />
          <Line
            value={[
              bold("folder"),
              " ",
              portuguese("pasta"),
              " ",
              example("Create a new folder for this feature."),
              " ",
              portuguese("Crie uma nova pasta para esse recurso."),
            ]}
          />
          <Line
            value={[
              bold("file"),
              " ",
              portuguese("arquivo"),
              " ",
              example("Save the file before closing the editor."),
              " ",
              portuguese("Salve o arquivo antes de fechar o editor."),
            ]}
          />
          <Line
            value={[
              bold("module"),
              " ",
              portuguese("módulo"),
              " ",
              example("This module handles user authentication."),
              " ",
              portuguese("Este módulo lida com a autenticação do usuário."),
            ]}
          />
          <Line
            value={[
              bold("path"),
              " ",
              portuguese("caminho"),
              " ",
              example("Check the file path in the import statement."),
              " ",
              portuguese(
                "Verifique o caminho do arquivo na instrução de importação.",
              ),
            ]}
          />
          <Line
            value={[
              bold("root"),
              " ",
              portuguese("diretório raiz"),
              " ",
              example("The config file is in the root directory."),
              " ",
              portuguese("O arquivo de configuração está no diretório raiz."),
            ]}
          />
          <Line
            value={[
              bold("import"),
              " ",
              portuguese("importar"),
              " ",
              example("Import the component from another file."),
              " ",
              portuguese("Importe o componente de outro arquivo."),
            ]}
          />
          <Line
            value={[
              bold("export"),
              " ",
              portuguese("exportar"),
              " ",
              example("Export the function to use it elsewhere."),
              " ",
              portuguese("Exporte a função para usá-la em outro lugar."),
            ]}
          />
        </Section>
        <Section
          id="layout-and-structure"
          label="Layout & Structure"
          heading={3}
        >
          <Line
            value={[
              bold("header"),
              " ",
              portuguese("cabeçalho"),
              " ",
              example("The header contains the navigation menu."),
              " ",
              portuguese("O cabeçalho contém o menu de navegação."),
            ]}
          />
          <Line
            value={[
              bold("footer"),
              " ",
              portuguese("rodapé"),
              " ",
              example("The footer shows the copyright information."),
              " ",
              portuguese(
                "O rodapé mostra as informações de direitos autorais.",
              ),
            ]}
          />
          <Line
            value={[
              bold("section"),
              " ",
              portuguese("seção"),
              " ",
              example("Each section explains a different feature."),
              " ",
              portuguese("Cada seção explica um recurso diferente."),
            ]}
          />
          <Line
            value={[
              bold("container"),
              " ",
              portuguese("contêiner"),
              " ",
              example("Wrap the content in a container."),
              " ",
              portuguese("Envolva o conteúdo em um contêiner."),
            ]}
          />
          <Line
            value={[
              bold("height"),
              " ",
              portuguese("altura"),
              " ",
              example("Set the height of the image to 200 pixels."),
              " ",
              portuguese("Defina a altura da imagem para 200 pixels."),
            ]}
          />
          <Line
            value={[
              bold("width"),
              " ",
              portuguese("largura"),
              " ",
              example("Adjust the width of the sidebar."),
              " ",
              portuguese("Ajuste a largura da barra lateral."),
            ]}
          />
        </Section>
        <Section id="styling-and-css" label="Styling & CSS" heading={3}>
          <Line
            value={[
              bold("stylesheet"),
              " ",
              portuguese("folha de estilo"),
              " ",
              example("The stylesheet controls the page design."),
              " ",
              portuguese("A folha de estilo controla o design da página."),
            ]}
          />
          <Line
            value={[
              bold("class"),
              " ",
              portuguese("classe"),
              " ",
              example("Add a class to style this button."),
              " ",
              portuguese("Adicione uma classe para estilizar este botão."),
            ]}
          />
          <Line
            value={[
              bold("selector"),
              " ",
              portuguese("seletor"),
              " ",
              example("This selector targets all paragraphs."),
              " ",
              portuguese("Este seletor seleciona todos os parágrafos."),
            ]}
          />
          <Line
            value={[
              bold("property"),
              " ",
              portuguese("propriedade"),
              " ",
              example("Change the color property."),
              " ",
              portuguese("Altere a propriedade de cor."),
            ]}
          />
          <Line
            value={[
              bold("responsive"),
              " ",
              portuguese("responsivo"),
              " ",
              example("The layout is responsive on mobile devices."),
              " ",
              portuguese("O layout é responsivo em dispositivos móveis."),
            ]}
          />
        </Section>
        <Section id="components-and-ui" label="Components & UI" heading={3}>
          <Line
            value={[
              bold("components"),
              " ",
              portuguese("componentes"),
              " ",
              example("The app is built with reusable components."),
              " ",
              portuguese(
                "O aplicativo é construído com componentes reutilizáveis.",
              ),
            ]}
          />
          <Line
            value={[
              bold("props"),
              " ",
              portuguese("propriedades (props)"),
              " ",
              example("Pass data to the component using props."),
              " ",
              portuguese("Passe dados para o componente usando props."),
            ]}
          />
          <Line
            value={[
              bold("state"),
              " ",
              portuguese("estado"),
              " ",
              example("The state changes when the button is clicked."),
              " ",
              portuguese("O estado muda quando o botão é clicado."),
            ]}
          />
          <Line
            value={[
              bold("fragment"),
              " ",
              portuguese("fragmento"),
              " ",
              example("Use a fragment to group elements."),
              " ",
              portuguese("Use um fragmento para agrupar elementos."),
            ]}
          />
          <Line
            value={[
              bold("render"),
              " ",
              portuguese("renderizar"),
              " ",
              example("Render the list after fetching data."),
              " ",
              portuguese("Renderize a lista após buscar os dados."),
            ]}
          />
        </Section>
        <Section id="rules-and-access" label="Rules & Access" heading={3}>
          <Line
            value={[
              bold("forbidden"),
              " ",
              portuguese("proibido(a)"),
              " ",
              example("Access to this page is forbidden."),
              " ",
              portuguese("O acesso a esta página é proibido."),
            ]}
          />
          <Line
            value={[
              bold("permission"),
              " ",
              portuguese("permissão"),
              " ",
              example("You need permission to edit this file."),
              " ",
              portuguese("Você precisa de permissão para editar este arquivo."),
            ]}
          />
          <Line
            value={[
              bold("error"),
              " ",
              portuguese("erro"),
              " ",
              example("The console shows an error message."),
              " ",
              portuguese("O console mostra uma mensagem de erro."),
            ]}
          />
          <Line
            value={[
              bold("deprecated"),
              " ",
              portuguese("obsoleto / depreciado"),
              " ",
              example("This API is deprecated."),
              " ",
              portuguese("Esta API está obsoleta."),
            ]}
          />
        </Section>
        <Section
          id="performance-and-behavior"
          label="Performance & Behavior"
          heading={3}
        >
          <Line
            value={[
              bold("load"),
              " ",
              portuguese("carregar"),
              " ",
              example("The page loads quickly."),
              " ",
              portuguese("A página carrega rapidamente."),
            ]}
          />
          <Line
            value={[
              bold("cache"),
              " ",
              portuguese("cache / armazenamento temporário"),
              " ",
              example("Clear the cache to see the changes."),
              " ",
              portuguese("Limpe o cache para ver as mudanças."),
            ]}
          />
          <Line
            value={[
              bold("event"),
              " ",
              portuguese("evento"),
              " ",
              example("Click events trigger this function."),
              " ",
              portuguese("Eventos de clique acionam esta função."),
            ]}
          />
          <Line
            value={[
              bold("refresh"),
              " ",
              portuguese("atualizar / recarregar"),
              " ",
              example("Refresh the browser to apply the update."),
              " ",
              portuguese("Atualize o navegador para aplicar a atualização."),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
