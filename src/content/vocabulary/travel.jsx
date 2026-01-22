import { Whiteboard } from "@/components/molecules/Whiteboard";
import { InlineText } from "@/components/molecules/InlineText";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Paragraph } from "@/components/molecules/Paragraph";

export default function Travel() {
  return (
    <>
      <Whiteboard title="Vocabulary" subtitle="blank" />
      <div className="line-break">
        <InlineText text={[{ part: "Common vocabulary for travel.", type: "bold" }]} />
        <Contents
          items={[
            { href: "packing", label: "Packing" },
            { href: "inside-the-plane", label: "Inside the Plane" },
            { href: "travel-essentials", label: "Travel Essentials" },
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
                      { bullet: true, part: "You can take one carry-on on the plane." },
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
                      { bullet: true, part: "I packed warm clothes for the trip." },
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
                      { bullet: true, part: "Put your bag in the overhead bin." },
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
                      { bullet: true, part: "Ask the flight attendant for help." },
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
