import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
export default function Programming() {
  return <>
      <Whiteboard title="Vocabulary" subtitle="Programming" />
      <div className="line-break">
        <Line text={[{
        part: "Common programming terms.",
        type: "bold"
      }]} />
        <Contents items={[{
        href: "#project-and-files",
        label: "Project & Files"
      }, {
        href: "#layout-and-structure",
        label: "Layout & Structure"
      }, {
        href: "#styling-and-css",
        label: "Styling & CSS"
      }, {
        href: "#components-and-ui",
        label: "Components & UI"
      }, {
        href: "#rules-and-access",
        label: "Rules & Access"
      }, {
        href: "#performance-and-behavior",
        label: "Performance & Behavior"
      }]} />
        <Section id="project-and-files" label="Project & Files" heading={3}>
          <Paragraph value={[{
          part: "assets",
          type: "bold"
        }, " ", {
          part: "recursos / arquivos estáticos",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Store images and fonts in the assets folder."
        }, {
          part: " Guarde imagens e fontes na pasta de recursos.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "folder",
          type: "bold"
        }, " ", {
          part: "pasta",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Create a new folder for this feature."
        }, {
          part: " Crie uma nova pasta para esse recurso.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "file",
          type: "bold"
        }, " ", {
          part: "arquivo",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Save the file before closing the editor."
        }, {
          part: " Salve o arquivo antes de fechar o editor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "module",
          type: "bold"
        }, " ", {
          part: "módulo",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "This module handles user authentication."
        }, {
          part: " Este módulo lida com a autenticação do usuário.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "path",
          type: "bold"
        }, " ", {
          part: "caminho",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Check the file path in the import statement."
        }, {
          part: " Verifique o caminho do arquivo na instrução de importação.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "root",
          type: "bold"
        }, " ", {
          part: "diretório raiz",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The config file is in the root directory."
        }, {
          part: " O arquivo de configuração está no diretório raiz.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "import",
          type: "bold"
        }, " ", {
          part: "importar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Import the component from another file."
        }, {
          part: " Importe o componente de outro arquivo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "export",
          type: "bold"
        }, " ", {
          part: "exportar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Export the function to use it elsewhere."
        }, {
          part: " Exporte a função para usá-la em outro lugar.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="layout-and-structure" label="Layout & Structure" heading={3}>
          <Paragraph value={[{
          part: "header",
          type: "bold"
        }, " ", {
          part: "cabeçalho",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The header contains the navigation menu."
        }, {
          part: " O cabeçalho contém o menu de navegação.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "footer",
          type: "bold"
        }, " ", {
          part: "rodapé",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The footer shows the copyright information."
        }, {
          part: " O rodapé mostra as informações de direitos autorais.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "section",
          type: "bold"
        }, " ", {
          part: "seção",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Each section explains a different feature."
        }, {
          part: " Cada seção explica um recurso diferente.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "container",
          type: "bold"
        }, " ", {
          part: "contêiner",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Wrap the content in a container."
        }, {
          part: " Envolva o conteúdo em um contêiner.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "height",
          type: "bold"
        }, " ", {
          part: "altura",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Set the height of the image to 200 pixels."
        }, {
          part: " Defina a altura da imagem para 200 pixels.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "width",
          type: "bold"
        }, " ", {
          part: "largura",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Adjust the width of the sidebar."
        }, {
          part: " Ajuste a largura da barra lateral.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="styling-and-css" label="Styling & CSS" heading={3}>
          <Paragraph value={[{
          part: "stylesheet",
          type: "bold"
        }, " ", {
          part: "folha de estilo",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The stylesheet controls the page design."
        }, {
          part: " A folha de estilo controla o design da página.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "class",
          type: "bold"
        }, " ", {
          part: "classe",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Add a class to style this button."
        }, {
          part: " Adicione uma classe para estilizar este botão.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "selector",
          type: "bold"
        }, " ", {
          part: "seletor",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "This selector targets all paragraphs."
        }, {
          part: " Este seletor seleciona todos os parágrafos.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "property",
          type: "bold"
        }, " ", {
          part: "propriedade",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Change the color property."
        }, {
          part: " Altere a propriedade de cor.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "responsive",
          type: "bold"
        }, " ", {
          part: "responsivo",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The layout is responsive on mobile devices."
        }, {
          part: " O layout é responsivo em dispositivos móveis.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="components-and-ui" label="Components & UI" heading={3}>
          <Paragraph value={[{
          part: "components",
          type: "bold"
        }, " ", {
          part: "componentes",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The app is built with reusable components."
        }, {
          part: " O aplicativo é construído com componentes reutilizáveis.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "props",
          type: "bold"
        }, " ", {
          part: "propriedades (props)",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Pass data to the component using props."
        }, {
          part: " Passe dados para o componente usando props.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "state",
          type: "bold"
        }, " ", {
          part: "estado",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The state changes when the button is clicked."
        }, {
          part: " O estado muda quando o botão é clicado.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "fragment",
          type: "bold"
        }, " ", {
          part: "fragmento",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Use a fragment to group elements."
        }, {
          part: " Use um fragmento para agrupar elementos.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "render",
          type: "bold"
        }, " ", {
          part: "renderizar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Render the list after fetching data."
        }, {
          part: " Renderize a lista após buscar os dados.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="rules-and-access" label="Rules & Access" heading={3}>
          <Paragraph value={[{
          part: "forbidden",
          type: "bold"
        }, " ", {
          part: "proibido(a)",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Access to this page is forbidden."
        }, {
          part: " O acesso a esta página é proibido.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "permission",
          type: "bold"
        }, " ", {
          part: "permissão",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "You need permission to edit this file."
        }, {
          part: " Você precisa de permissão para editar este arquivo.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "error",
          type: "bold"
        }, " ", {
          part: "erro",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The console shows an error message."
        }, {
          part: " O console mostra uma mensagem de erro.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "deprecated",
          type: "bold"
        }, " ", {
          part: "obsoleto / depreciado",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "This API is deprecated."
        }, {
          part: " Esta API está obsoleta.",
          type: "portuguese"
        }]} />
        </Section>
        <Section id="performance-and-behavior" label="Performance & Behavior" heading={3}>
          <Paragraph value={[{
          part: "load",
          type: "bold"
        }, " ", {
          part: "carregar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "The page loads quickly."
        }, {
          part: " A página carrega rapidamente.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "cache",
          type: "bold"
        }, " ", {
          part: "cache / armazenamento temporário",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Clear the cache to see the changes."
        }, {
          part: " Limpe o cache para ver as mudanças.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "event",
          type: "bold"
        }, " ", {
          part: "evento",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Click events trigger this function."
        }, {
          part: " Eventos de clique acionam esta função.",
          type: "portuguese"
        }, {
          lineBreak: true
        }, {
          part: "refresh",
          type: "bold"
        }, " ", {
          part: "atualizar / recarregar",
          type: "portuguese"
        }, " ", {
          bullet: true,
          part: "Refresh the browser to apply the update."
        }, {
          part: " Atualize o navegador para aplicar a atualização.",
          type: "portuguese"
        }]} />
        </Section>
      </div>
    </>;
}