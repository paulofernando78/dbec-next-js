import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { Checklist } from "@/components/molecules/Checklist";

import { content } from "@/helpers/content";

export default function Minecraft() {
  return (
    <>
      <Whiteboard title="Games" subtitle="Minecraft" />
      <div className="line-break">
        <Contents
          items={[
            {
              href: "basics",
              label: "Basics",
            },
            {
              href: "stone-phase",
              label: "Stone Phase",
            },
            {
              href: "get-food",
              label: "Get Food",
            },
            {
              href: "breed-animals",
              label: "Breed Animals",
            },
          ]}
        />

        {/* Basics */}
        <Section id="basics" label="Basics" heading={3}>
          <Line
            value={[
              ...content({
                icons: [
                  "attention",
                ],
                parts: [
                  "First things to do when game starts:",
                  {
                    part: "",
                    type: "",
                  },
                ],
              }),
            ]}
          />
          <LineBreak />
          <Checklist
            items={[
              {
                item: "Punch tree",
              },
              {
                item: "Collect / Get / Gather logs (wood)",
              },
              {
                item: "Craft a wooden pickaxe to mine stones",
              },
            ]}
          />
        </Section>

        {/* Stone Phase */}
        <Section id="stone-phase" label="Stone Phase" heading={3}>
          <Line
            value={[
              ...content({
                icons: [
                  "attention",
                ],
                parts: [
                  "After collecting stones we can craft stone tools like:",
                  {
                    part: "",
                    type: "",
                  },
                ],
              }),
            ]}
          />
          <LineBreak />
          <Checklist
            items={[
              {
                item: "a stone axe to chop trees faster",
              },
              {
                item: "a stone pickaxe to mine stones faster",
              },
              {
                item: "a shovel to break dirt faster and to pave paths",
              },
              {
                item: "a sword to fight the mobs",
              },
            ]}
          />
        </Section>

        {/* Get Food */}
        <Section id="" label="Get Food" heading={3}>
          <Line
            value={[
              ...content({
                icons: [
                  "attention",
                ],
                parts: [
                  "Kill animals to collect food to avoid starving.",
                  {
                    part: "",
                    type: "",
                  },
                ],
                portugueseTranslation: "",
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cow ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "chicken",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "pig",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "sheep",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "fish",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "rabbit",
                ],
              },
            ]}
          />
          <LineBreak />
          <Line
            value={[
              ...content({
                icons: [
                  "attention",
                ],
                parts: [
                  "Animals we shouldn’t kill:",
                  {
                    part: "",
                    type: "",
                  },
                ],
                portugueseTranslation: "",
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "wolf ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cat ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "dolphin ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "panda ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "parrot ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "fox ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "frog ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "armadillo ",
                ],
              },
            ]}
          />
        </Section>

        {/* Breed Animals */}
        <Section id="breed-animals" label="Breed Animals" heading={3}>
          <Line
            value={[
              ...content({
                icons: [
                  "attention",
                ],
                parts: ["We can feed the animals in order to breed:"],
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cow ➜ calf ",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "chicken ➜ chick",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "pig ➜ piglet",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "sheep ➜ lamb",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "rabbit ➜ bunny",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "turtle ➜ baby turtles",
                ],
              },
              {
                value: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "rabbit ➜ baby pandas",
                ],
              },
            ]}
          />
        </Section>
      </div>
    </>
  );
}
