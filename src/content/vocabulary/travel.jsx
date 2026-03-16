import { Whiteboard } from "@/components/molecules/Whiteboard";
import { Line } from "@/components/molecules/Line";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Dialogue } from "@/components/molecules/Dialogue";

import { content, bold, example, portuguese } from "@/helpers/content";

export default function Travel() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="Travel" />
      <div className="line-break">
        <Line
          value={[
            ...content({
              parts: [bold("Common vocabulary for travel.")],
            }),
          ]}
        />
        <Contents
          items={[
            {
              href: "packing",
              label: "Packing",
            },
            {
              href: "travel-essentials",
              label: "Travel Essentials",
            },
            {
              href: "at-the-airport",
              label: "At the Airport",
            },
            {
              href: "inside-the-plane",
              label: "Inside the Plane",
            },
            {
              href: "common-vocabulary",
              label: "Common Vocabulary",
            },
          ]}
        />

        <Section id="packing" label="Packing" heading={3}>
          <Line
            value={[
              bold("to pack"),
              " ",
              portuguese("fazer as malas / arrumar"),
              " ",
              example("I need to pack my bags tonight."),
              " ",
              portuguese("Eu preciso fazer as malas hoje à noite."),
            ]}
          />
          <Line
            value={[
              bold("suitcase"),
              " ",
              portuguese("mala"),
              " ",
              example("My suitcase is too heavy."),
              " ",
              portuguese("Minha mala está muito pesada."),
            ]}
          />
          <Line
            value={[
              bold("carry-on"),
              " ",
              portuguese("bagagem de mão"),
              " ",
              example("You can take one carry-on on the plane."),
              " ",
              portuguese("Você pode levar uma bagagem de mão no avião."),
            ]}
          />
          <Line
            value={[
              bold("toiletries"),
              " ",
              portuguese("itens de higiene"),
              " ",
              example("Don't forget your toiletries."),
              " ",
              portuguese("Não se esqueça dos seus itens de higiene."),
            ]}
          />
          <Line
            value={[
              bold("clothes"),
              " ",
              portuguese("roupas"),
              " ",
              example("I packed warm clothes for the trip."),
              " ",
              portuguese("Eu arrumei roupas quentes para a viagem."),
            ]}
          />
          <Line
            value={[
              bold("charger"),
              " ",
              portuguese("carregador"),
              " ",
              example("Bring your phone charger."),
              " ",
              portuguese("Traga o carregador do seu celular."),
            ]}
          />
          <Line
            value={[
              ...content({
                parts: [bold("Listen to the dialogue and practice with someone.")],
              }),
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
          <Line
            value={[
              bold("passport"),
              " ",
              portuguese("passaporte"),
              " ",
              example("I need my passport to check in."),
              " ",
              portuguese("Eu preciso do meu passaporte para fazer o check-in."),
            ]}
          />
          <Line
            value={[
              bold("boarding pass"),
              " ",
              portuguese("cartão de embarque"),
              " ",
              example("Please show your boarding pass at the gate."),
              " ",
              portuguese(
                "Por favor, mostre seu cartão de embarque no portão.",
              ),
            ]}
          />
          <Line
            value={[
              bold("luggage"),
              " ",
              portuguese("bagagem"),
              " ",
              example("My luggage is very heavy."),
              " ",
              portuguese("Minha bagagem está muito pesada."),
            ]}
          />
          <Line
            value={[
              bold("hotel reservation"),
              " ",
              portuguese("reserva de hotel"),
              " ",
              example("I have a hotel reservation for tonight."),
              " ",
              portuguese("Eu tenho uma reserva de hotel para esta noite."),
            ]}
          />
          <Line
            value={[
              bold("currency"),
              " ",
              portuguese("moeda"),
              " ",
              example("You need to exchange your currency at the airport."),
              " ",
              portuguese("Você precisa trocar sua moeda no aeroporto."),
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

        <Section id="at-the-airport" label="At the Airport" heading={3}>
          <Line
            value={[
              bold("check-in"),
              " ",
              portuguese("check-in / despacho"),
              " ",
              example("We need to check in two hours before the flight."),
              " ",
              portuguese("Precisamos fazer o check-in duas horas antes do voo."),
            ]}
          />
          <Line
            value={[
              bold("counter"),
              " ",
              portuguese("balcão"),
              " ",
              example("Go to the counter to drop off your luggage."),
              " ",
              portuguese("Vá ao balcão para despachar sua bagagem."),
            ]}
          />
          <Line
            value={[
              bold("gate"),
              " ",
              portuguese("portão de embarque"),
              " ",
              example("Our gate changed at the last minute."),
              " ",
              portuguese("Nosso portão de embarque mudou no último minuto."),
            ]}
          />
          <Line
            value={[
              bold("security"),
              " ",
              portuguese("segurança / controle de segurança"),
              " ",
              example("You have to take off your shoes at security."),
              " ",
              portuguese("Você precisa tirar os sapatos no controle de segurança."),
            ]}
          />
          <Line
            value={[
              bold("to board"),
              " ",
              portuguese("embarcar"),
              " ",
              example("Passengers will board the plane at gate 12."),
              " ",
              portuguese("Os passageiros vão embarcar no portão 12."),
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
                  {
                    part: "Sim, apenas esta mala.",
                    type: "portuguese",
                  },
                ],
              },
            ]}
          />
        </Section>

        <Section id="inside-the-plane" label="Inside the Plane" heading={3}>
          <Line
            value={[
              bold("seat"),
              " ",
              portuguese("assento"),
              " ",
              example("My seat is near the window."),
              " ",
              portuguese("Meu assento fica perto da janela."),
            ]}
          />
          <Line
            value={[
              bold("seatbelt"),
              " ",
              portuguese("cinto de segurança"),
              " ",
              example("Please fasten your seatbelt."),
              " ",
              portuguese("Por favor, aperte o cinto de segurança."),
            ]}
          />
          <Line
            value={[
              bold("overhead bin"),
              " ",
              portuguese("compartimento superior"),
              " ",
              example("Put your bag in the overhead bin."),
              " ",
              portuguese("Coloque sua bolsa no compartimento superior."),
            ]}
          />
          <Line
            value={[
              bold("aisle"),
              " ",
              portuguese("corredor"),
              " ",
              example("I prefer an aisle seat."),
              " ",
              portuguese("Eu prefiro um assento no corredor."),
            ]}
          />
          <Line
            value={[
              bold("flight attendant"),
              " ",
              portuguese("comissário(a) de bordo"),
              " ",
              example("Ask the flight attendant for help."),
              " ",
              portuguese("Peça ajuda ao(à) comissário(a) de bordo."),
            ]}
          />
          <Line
            value={[
              bold("tray table"),
              " ",
              portuguese("mesinha"),
              " ",
              example("Please fold your tray table."),
              " ",
              portuguese("Por favor, dobre a mesinha."),
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
          <Line
            value={[
              bold("directions"),
              " ",
              portuguese("direções"),
              " ",
              example("Can you give me directions to the hotel?"),
              " ",
              portuguese("Você pode me dar direções para o hotel?"),
            ]}
          />
          <Line
            value={[
              bold("ticket"),
              " ",
              portuguese("bilhete / passagem"),
              " ",
              example("I bought my ticket online."),
              " ",
              portuguese("Eu comprei minha passagem online."),
            ]}
          />
          <Line
            value={[
              bold("map"),
              " ",
              portuguese("mapa"),
              " ",
              example("This map shows all the main attractions."),
              " ",
              portuguese("Este mapa mostra todas as atrações principais."),
            ]}
          />
          <Line
            value={[
              bold("restaurant"),
              " ",
              portuguese("restaurante"),
              " ",
              example("We are looking for a good restaurant nearby."),
              " ",
              portuguese("Estamos procurando um bom restaurante por perto."),
            ]}
          />
          <Line
            value={[
              bold("souvenir"),
              " ",
              portuguese("lembrança"),
              " ",
              example("I want to buy a souvenir for my family."),
              " ",
              portuguese("Eu quero comprar uma lembrança para minha família."),
            ]}
          />
        </Section>
      </div>
    </>
  );
}
