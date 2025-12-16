import Whiteboard from "@/components/molecules/Whiteboard";
import Text from "@/components/molecules/Text";
import Ribbon from "@/components/atoms/Ribbon";
import List from "@/components/molecules/List";
import BulletPoint from "@/components/atoms/BulletPoint";

export default function VerbBe() {
  return (
    <>
      <Whiteboard
        title="Grammar"
        subtitle="Verb Be"
      />
      <div className="line-break">
        <Text><span className="bold">O verb to be é usado para falar sobre.</span></Text>
        <div>
        <Text><span className="underlined">Identidade:</span></Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/im-paul.mp3"><BulletPoint /> I’m Paul. <span className="portuguese">Sou o Paulo.</span></Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/hes-my-brother.mp3"><BulletPoint /> He’s my brother. <span className="portuguese">Ele é o meu irmão.</span></Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/theyre-my-friends.mp3"><BulletPoint /> They are my friends. <span className="portuguese">Eles são meus amigos.</span></Text>
        </div> 
        <div>
        <Text playAudio=""><BulletPoint /> Profissão:</Text>
        <Text playAudio=""><BulletPoint /> I’m a teacher.</Text>
        <Text playAudio=""><BulletPoint /> He’s an enginner.</Text>
        <Text playAudio=""><BulletPoint /> She’s a doctor.</Text>
        </div>
        <div>
        <Text playAudio=""><BulletPoint /> Estado / Condição:</Text>
        <Text playAudio=""><BulletPoint /> I’m tired.</Text>
        <Text playAudio=""><BulletPoint /> She’s happy.</Text>
        <Text playAudio=""><BulletPoint /> They’re ready to go.</Text>
        </div>
        <div>
        <Text>Nacionalidade:</Text>
        <Text playAudio=""><BulletPoint /> ...</Text>
        <Text playAudio=""><BulletPoint /> ...</Text>
        <Text playAudio=""><BulletPoint /> ...</Text>
        </div>
        <Ribbon label="Affirmative"/>
        <div>
          <Text> I <span className="bold">am</span> Paulo. My name <span className="bold">is</span> Paulo.</Text>
          <Text> I <span className="bold">am</span> the teacher. You are the student.</Text>
          <Text>He <span className="bold">is</span> Mike. He is a doctor.</Text>
          <Text>She <span className="bold">is</span> a photographer.</Text>
          <Text>It <span className="bold">is</span> cat. Her name is Cora.</Text>
          <Text>We <span className="bold">are</span> Brazilian.</Text>
          <Text>You <span className="bold">are</span> students.</Text>
          <Text>They <span className="bold">are</span> teachers.</Text>
        </div>
        <Ribbon label="Negative"/>
        <div>
          <Text> I <span className="bold">am not</span> a student. My name <span className="bold">is not</span> John.</Text>
          <Text> You <span className="bold">are not</span> the teacher.</Text>
          <Text>Mike <span className="bold">is not</span> teacher.</Text>
          <Text>She <span className="bold">is</span> a photographer.</Text>
          <Text>It <span className="bold">is</span> cat. Her name is Cora.</Text>
          <Text>You <span className="bold">are</span> students.</Text>
          <Text>They <span className="bold">are</span> teachers.</Text>
        </div>
      </div>
      
    </>
  )
}