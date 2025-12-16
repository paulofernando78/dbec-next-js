import Text from "@/components/molecules/Text";
import Whiteboard from "@/components/molecules/Whiteboard";
import { Correct, Incorrect } from "@/lib/svg-imports";

export default function Collocations() {
  return (
    <>
      <Whiteboard
        title="VOCABULARY"
        subtitle="Collocations"
      />
      <div className="line-break">
        <Text><span className="bold">do / make</span></Text>
        <div>
          <Text lang="pt">Tenho que fazer minha lição (tarefa de casa).</Text>
          <Text incorrect>I have to make my homework</Text>
          <Text correct>I have to do my homework</Text>
        </div>
        <div>
          <Text correct>I have to make my bed.</Text>
        </div>
        <div>
          <Text lang="pt">Estou apaixonado por você.</Text>
          <Text incorrect>I’m in love for you.</Text>
          <Text correct>I’m in love with you.</Text>
        </div>
        <div>
          <Text lang="pt">Estou preocupado com você.</Text>
          <Text incorrect>I’m worried with you.</Text>
          <Text correct>I’m worried about you.</Text>
        </div>
        <Text><span className="bold">fast / quick</span></Text>
        <div>
          <Text lang="pt">Um carro rápido</Text>
          <Text incorrect>It’s a quick car.</Text>
          <Text correct>It’s a fast car.</Text>
        </div>
        <div>
        <Text lang="pt">Ele é um corredor rápido.</Text>
        <Text correct>He’s a fast runner.</Text>
        </div>
      </div>
    </>
  )
}