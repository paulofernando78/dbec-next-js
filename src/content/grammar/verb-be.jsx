import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Text } from "@/components/molecules/Text";
import { Ribbon } from "@/components/atoms/Ribbon";
import { BulletPoint } from "@/components/atoms/BulletPoint";

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
        <Text playAudio="">Profissão:</Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/Im-a-teacher.mp3"><BulletPoint /> I’m a teacher. <span className="portuguese">Sou professor(a).</span></Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/hes-an-engineer.mp3"><BulletPoint /> He’s an enginner.</Text>
        <Text playAudio="/audio/grammar/verb-be/identidade/shes-a-doctor.mp3"><BulletPoint /> She’s a doctor.</Text>
        </div>
        <div>
        <Text playAudio="">Estado / Condição:</Text>
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
          <Text> I <span className="bold">am</span></Text>
          <Text>You are</Text>
          <Text>He <span className="bold">is</span></Text>
          <Text>She <span className="bold">is</span></Text>
          <Text>It <span className="bold">is</span></Text>
          <Text>We <span className="bold">are</span></Text>
          <Text>You <span className="bold">are</span></Text>
          <Text>They <span className="bold">are</span></Text>
        </div>
        <Ribbon label="Negative"/>
        <div>
          <Text> I <span className="bold">am not</span></Text>
          <Text> You <span className="bold">are not</span></Text>
          <Text>Mike <span className="bold">is not</span></Text>
          <Text>She <span className="bold">is not</span></Text>
          <Text>It <span className="bold">is not</span></Text>
          <Text>You <span className="bold">are not</span></Text>
          <Text>They <span className="bold">are not</span></Text>
        </div>
      </div>
      
    </>
  )
}