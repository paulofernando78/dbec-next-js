import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";
import { Dialogue } from "@/components/molecules/Dialogue";

export default function Travel() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Travel" />
      <div className="line-break">
        <Line
          text={[{ part: "Common vocabulary for travel.", type: "bold" }]}
        />
        <Contents
          items={[
            { href: "packing", label: "Packing" },
            { href: "travel-essentials", label: "Travel Essentials" },
            { href: "at-the-irport", label: "At the aiport" },
            { href: "inside-the-plane", label: "Inside the Plane" },
            { href: "common-vocabulary", label: "Common Vocabulary" },
          ]}
        />

        <Section id="packing" label="Packing" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "to pack", type: "bold" },
                      " ",
                      { part: "fazer as malas / arrumar", type: "portuguese" },
                      " ",
                      { bullet: true, part: "I need to pack my bags tonight." },
                      " ",
                      {
                        part: "Eu preciso fazer as malas hoje à noite.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "suitcase", type: "bold" },
                      " ",
                      { part: "mala", type: "portuguese" },
                      " ",
                      { bullet: true, part: "My suitcase is too heavy." },
                      " ",
                      {
                        part: "Minha mala está muito pesada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "carry-on", type: "bold" },
                      " ",
                      { part: "bagagem de mão", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "You can take one carry-on on the plane.",
                      },
                      " ",
                      {
                        part: "Você pode levar uma bagagem de mão no avião.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "toiletries", type: "bold" },
                      " ",
                      { part: "itens de higiene", type: "portuguese" },
                      " ",
                      { bullet: true, part: "Don't forget your toiletries." },
                      " ",
                      {
                        part: "Não se esqueça dos seus itens de higiene.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "clothes", type: "bold" },
                      " ",
                      { part: "roupas", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I packed warm clothes for the trip.",
                      },
                      " ",
                      {
                        part: "Eu arrumei roupas quentes para a viagem.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "charger", type: "bold" },
                      " ",
                      { part: "carregador", type: "portuguese" },
                      " ",
                      { bullet: true, part: "Bring your phone charger." },
                      " ",
                      {
                        part: "Traga o carregador do seu celular.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    hr: true,
                  },
                  {
                    text: [
                      {
                        part: "Listen to the dialogue and practice with someone.",
                        type: "bold",
                      },
                    ],
                  },
                  {
                    lineBreak: true,
                  },
                ],
              },
            ]}
          />
          <Dialogue
            title="Packing at Home"
            audioPlayer="/assets/audio/dialogues/packing.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "Two friends are getting ready for a trip at home.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Have you finished packing yet? ",
                  {
                    part: "Você já terminou de fazer as malas?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Almost. I still need to pack my toiletries and my travel documents. ",
                  {
                    part: "Quase. Ainda preciso arrumar meus itens de higiene e meus documentos de viagem.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Don’t forget your charger. ",
                  {
                    part: "Não se esqueça do seu carregador.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Good point. I’ll put them in my carry-on. ",
                  {
                    part: "Boa ideia. Vou colocá-los na minha bagagem de mão.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Try to pack light. Airlines charge extra for heavy luggage. ",
                  {
                    part: "Tente viajar leve. As companhias aéreas cobram a mais por bagagem pesada.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "I know! I also brought a laundry bag to separate dirty clothes. ",
                  {
                    part: "Eu sei! Também trouxe um saco para separar as roupas sujas.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Perfect. What time are we leaving for the airport? ",
                  {
                    part: "Perfeito. Que horas vamos sair para o aeroporto?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "In about an hour. Let’s double-check everything. ",
                  {
                    part: "Em cerca de uma hora. Vamos conferir tudo mais uma vez.",
                    type: "portuguese",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="travel-essentials" label="Travel Essentials" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "passport", type: "bold" },
                      " ",
                      { part: "passaporte", type: "portuguese" },
                      " ",
                      { bullet: true, part: "I need my passport to check in." },
                      " ",
                      {
                        part: "Eu preciso do meu passaporte para fazer o check-in.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "boarding pass", type: "bold" },
                      " ",
                      { part: "cartão de embarque", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Please show your boarding pass at the gate.",
                      },
                      " ",
                      {
                        part: "Por favor, mostre seu cartão de embarque no portão.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "luggage", type: "bold" },
                      " ",
                      { part: "bagagem", type: "portuguese" },
                      " ",
                      { bullet: true, part: "My luggage is very heavy." },
                      " ",
                      {
                        part: "Minha bagagem está muito pesada.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "hotel reservation", type: "bold" },
                      " ",
                      { part: "reserva de hotel", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I have a hotel reservation for tonight.",
                      },
                      " ",
                      {
                        part: "Eu tenho uma reserva de hotel para esta noite.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "currency", type: "bold" },
                      " ",
                      { part: "moeda", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "You need to exchange your currency at the airport.",
                      },
                      " ",
                      {
                        part: "Você precisa trocar sua moeda no aeroporto.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <Dialogue
            title="Asking for Help in the City"
            audioPlayer="/assets/audio/dialogues/common-vocabulary.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "A tourist asks for directions in a new city.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Excuse me, can you give me directions to the hotel? ",
                  {
                    part: "Com licença, você pode me dar direções para o hotel?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Sure. Go straight, then turn left at the restaurant. ",
                  {
                    part: "Claro. Vá em frente e depois vire à esquerda no restaurante.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Thank you. Is there a map I can use? ",
                  {
                    part: "Obrigado(a). Há um mapa que eu possa usar?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, you can find one at the tourist center. ",
                  {
                    part: "Sim, você pode encontrar um no centro de informações turísticas.",
                    type: "portuguese",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="At the airport" label="at-the-airport" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "seat", type: "bold" },
                      " ",
                      { part: "...", type: "portuguese" },
                      " ",
                      { bullet: true, part: "..." },
                      " ",
                      {
                        part: "...",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <Dialogue
            title="At the Airport Check-in"
            audioPlayer="/assets/audio/dialogues/travel-essentials.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "A traveler checks in at the airport counter.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "May I see your passport, please? ",
                  {
                    part: "Posso ver seu passaporte, por favor?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Here you are. I also have my boarding pass. ",
                  {
                    part: "Aqui está. Também tenho meu cartão de embarque.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Do you have any luggage to check in? ",
                  {
                    part: "Você tem alguma bagagem para despachar?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, just this suitcase. ",
                  { part: "Sim, apenas esta mala.", type: "portuguese" },
                ],
              },
            ]}
          />
          <Dialogue
            title="Finding Your Seat"
            audioPlayer="/assets/audio/dialogues/inside-the-plane.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "A passenger asks for help on the plane.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Excuse me, is this seat 14A? ",
                  {
                    part: "Com licença, este é o assento 14A?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, that’s the window seat. Your seatbelt is under the armrest. ",
                  {
                    part: "Sim, é o assento da janela. Seu cinto de segurança está sob o apoio de braço.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Thank you. Where can I put my bag? ",
                  {
                    part: "Obrigado(a). Onde posso colocar minha bolsa?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Please place it in the overhead bin. ",
                  {
                    part: "Por favor, coloque-a no compartimento superior.",
                    type: "portuguese",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="inside-the-plane" label="Inside the Plane" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "seat", type: "bold" },
                      " ",
                      { part: "assento", type: "portuguese" },
                      " ",
                      { bullet: true, part: "My seat is near the window." },
                      " ",
                      {
                        part: "Meu assento fica perto da janela.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "seatbelt", type: "bold" },
                      " ",
                      { part: "cinto de segurança", type: "portuguese" },
                      " ",
                      { bullet: true, part: "Please fasten your seatbelt." },
                      " ",
                      {
                        part: "Por favor, aperte o cinto de segurança.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "overhead bin", type: "bold" },
                      " ",
                      { part: "compartimento superior", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Put your bag in the overhead bin.",
                      },
                      " ",
                      {
                        part: "Coloque sua bolsa no compartimento superior.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "aisle", type: "bold" },
                      " ",
                      { part: "corredor", type: "portuguese" },
                      " ",
                      { bullet: true, part: "I prefer an aisle seat." },
                      " ",
                      {
                        part: "Eu prefiro um assento no corredor.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "flight attendant", type: "bold" },
                      " ",
                      { part: "comissário(a) de bordo", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Ask the flight attendant for help.",
                      },
                      " ",
                      {
                        part: "Peça ajuda ao(à) comissário(a) de bordo.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "tray table", type: "bold" },
                      " ",
                      { part: "mesinha", type: "portuguese" },
                      " ",
                      { bullet: true, part: "Please fold your tray table." },
                      " ",
                      {
                        part: "Por favor, dobre a mesinha.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
          <Dialogue
            title="At the Airport Check-in"
            audioPlayer="/assets/audio/dialogues/travel-essentials.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "A traveler checks in at the airport counter.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "May I see your passport, please? ",
                  {
                    part: "Posso ver seu passaporte, por favor?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Here you are. I also have my boarding pass. ",
                  {
                    part: "Aqui está. Também tenho meu cartão de embarque.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Do you have any luggage to check in? ",
                  {
                    part: "Você tem alguma bagagem para despachar?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, just this suitcase. ",
                  { part: "Sim, apenas esta mala.", type: "portuguese" },
                ],
              },
            ]}
          />
          <Dialogue
            title="Finding Your Seat"
            audioPlayer="/assets/audio/dialogues/inside-the-plane.mp3"
            lines={[
              {
                text: [
                  {
                    type: "italic",
                    part: "A passenger asks for help on the plane.",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Excuse me, is this seat 14A? ",
                  {
                    part: "Com licença, este é o assento 14A?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Yes, that’s the window seat. Your seatbelt is under the armrest. ",
                  {
                    part: "Sim, é o assento da janela. Seu cinto de segurança está sob o apoio de braço.",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "A:",
                text: [
                  "Thank you. Where can I put my bag? ",
                  {
                    part: "Obrigado(a). Onde posso colocar minha bolsa?",
                    type: "portuguese",
                  },
                ],
              },
              {
                speaker: "B:",
                text: [
                  "Please place it in the overhead bin. ",
                  {
                    part: "Por favor, coloque-a no compartimento superior.",
                    type: "portuguese",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="common-vocabulary" label="Common Vocabulary" heading={3}>
          <Paragraph
            blocks={[
              {
                lines: [
                  {
                    text: [
                      { part: "directions", type: "bold" },
                      " ",
                      { part: "direções", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "Can you give me directions to the hotel?",
                      },
                      " ",
                      {
                        part: "Você pode me dar direções para o hotel?",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "ticket", type: "bold" },
                      " ",
                      { part: "bilhete / passagem", type: "portuguese" },
                      " ",
                      { bullet: true, part: "I bought my ticket online." },
                      " ",
                      {
                        part: "Eu comprei minha passagem online.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "map", type: "bold" },
                      " ",
                      { part: "mapa", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "This map shows all the main attractions.",
                      },
                      " ",
                      {
                        part: "Este mapa mostra todas as atrações principais.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "restaurant", type: "bold" },
                      " ",
                      { part: "restaurante", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "We are looking for a good restaurant nearby.",
                      },
                      " ",
                      {
                        part: "Estamos procurando um bom restaurante por perto.",
                        type: "portuguese",
                      },
                    ],
                  },
                  {
                    text: [
                      { part: "souvenir", type: "bold" },
                      " ",
                      { part: "lembrança", type: "portuguese" },
                      " ",
                      {
                        bullet: true,
                        part: "I want to buy a souvenir for my family.",
                      },
                      " ",
                      {
                        part: "Eu quero comprar uma lembrança para minha família.",
                        type: "portuguese",
                      },
                    ],
                  },
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
