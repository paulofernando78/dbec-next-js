import { Whiteboard } from "@/components/molecules/Whiteboard";
import { LineBreak } from "@/components/atoms/LineBreak";
import { Contents } from "@/components/molecules/Contents";
import { Section } from "@/components/molecules/Section";
import { Line } from "@/components/molecules/Line";
import { List } from "@/components/molecules/List";
import { Checklist } from "@/components/molecules/Checklist";
import { instruction } from "@/helpers/content";
import { note } from "@/helpers/content";

export default function Blank() {
  return (
    <>
      <Whiteboard title="Games" subtitle="Minecraft" />
      <div className="line-break">
        <Contents
          items={[
            { href: "basics", label: "Basics" },
            { href: "stone-phase", label: "Stone Phase" },
            { href: "get-food", label: "Get Food" },
            { href: "breed-animals", label: "Breed Animals" },
          ]}
        />

        {/* Basics */}
        <Section id="basics" label="Basics" heading={3}>
          <Line
            value={[
              ...instruction({
                parts: [
                  "First things to do when game starts:",
                  { part: "", type: "" },
                ],
              }),
            ]}
          />
          <LineBreak />
          <Checklist
            items={[
              { item: "Punch tree" },
              { item: "Collect / Get / Gather logs (wood)" },
              { item: "Craft a wooden pickaxe to mine stones" },
            ]}
          />
        </Section>

        {/* Stone Phase */}
        <Section id="stone-phase" label="Stone Phase" heading={3}>
          <Line
            value={[
              ...instruction({
                parts: [
                  "After collecting stones we can craft stone tools like:",
                  { part: "", type: "" },
                ],
              }),
            ]}
          />
          <LineBreak />
          <Checklist
            items={[
              { item: "a stone axe to chop trees faster" },
              { item: "a stone pickaxe to mine stones faster" },
              { item: "a shovel to break dirt faster and to pave paths" },
              { item: "a sword to fight the mobs" },
            ]}
          />
        </Section>

        {/* Get Food */}
        <Section id="" label="Get Food" heading={3}>
          <Line
            value={[
              ...note({
                audio: "/assets/audio/general/.mp3",
                parts: [
                  "Kill animals to collect food to avoid starving.",
                  { part: "", type: "" },
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
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cow ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "chicken",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "pig",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "sheep",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "fish",
                ],
              },
              {
                text: [
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
              ...note({
                audio: "/assets/audio/general/.mp3",
                parts: ["Animals we shouldn’t kill:", { part: "", type: "" }],
                portugueseTranslation: "",
              }),
            ]}
          />
          <LineBreak />
          <List
            bullet={true}
            items={[
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "wolf ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cat ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "dolphin ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "panda ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "parrot ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "fox ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "frog ",
                ],
              },
              {
                text: [
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
              ...note({
                audio: "/assets/audio/general/.mp3",
                parts: [
                  "We can feed the animals in order to breed:",
                ],
              }),
            ]}
          />
           <LineBreak />
          <List
            bullet={true}
            items={[
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "cow ➜ calf ",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "chicken ➜ chick",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "pig ➜ piglet",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "sheep ➜ lamb",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "rabbit ➜ bunny",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "turtle ➜ baby turtles",
                ],
              },
              {
                text: [
                  {
                    audio: "/audio/general/....mp3",
                  },
                  "rabbit ➜ baby pandas",
                ],
              }
            ]}
          />
        </Section>
      </div>
    </>
  );
}
