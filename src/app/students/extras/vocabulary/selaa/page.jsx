import { Whiteboard } from "@/components/molecules/Whiteboard"
import {  Lesson } from "@/lib/svg-imports"
import Link from "next/link"

const links = [
  {
    href: "/students/extras/vocabulary/selaa/lesson-1",
    label: "Lesson 1 • Bob’s Day at Work",
    words: "about to • after all • at least • break the news • cost an arm and a leg • dead-end job • (let's) face it • give one the creeps • go back to the drawing board • go belly-up • give someone the ax • lose one's temper • make up one's mind • no point in • put up with • real flop (flop) • save the day • sharp as a tack • talk over • top dollar"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-2",
    label: "Lesson 2 • Bob Returns Home with Bad News",
    words: "change one's • mind easier • said than done • get canned • hang in there • if worse comes to worst • keep one's chin up • last resort • live from hand to mouth • look on the bright side • make ends meet • make up one's mind • out of work • right-hand man • set eyes on • stab someone in the back • stressed out • tell off • thank goodness • think big • What's the matter? • When pigs fly!"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-3",
    label: "Lesson 3 • Ted”s Day at School",
    words: "beside the point • blow something • buckle down • can't stand • cut class • Get real! • have one's heart set on • hit the books • lost cause • not give a hoot • over one's head • slack off • stand a chance"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-4",
    label: "Lesson 4 • Nicole Day’s at School",
    words: "butt in • drive one crazy • go into • green with envy • gung ho • head and shoulders above • hit the nail on the head • (to be) on thin ice (with someone) • pay (someone) a compliment • shake in one's shoes • Way to go!"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-5",
    label: "Lesson 5 • Ted Goes Out for the Evening",
    words: "about to • (to be) crazy about • cup of tea • (to be) down in the dumps • drop by • hang around • hang out • have a blast • have a good time • take it easy • take something the wrong way • there's no accounting for taste • under one's breath • (to be) up in the air"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-6",
    label: "Lesson 6 • ",
    words: "cheer someone up • give (someone) credit • give credit where credit is due • go into business • good thinking • have a heart of gold • Help yourself • (to be) in a bad mood • just what the doctor ordered • make a bundle • (to be) on edge • out of this world • pig out"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-7",
    label: "Lesson 7 • Susan Hires Bob to Run Her Business",
    words: "bright and early • crash course • Fat chance! • give it a shot • happy camper • (to have) mixed feelings • needless to say • not have a clue not • sleep a wink • work like a dog"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-8",
    label: "Lesson 8 • Ted Forms a Rock Band",
    words: "beat around the bush • dime a dozen • Good for you! • hard times • (to be) in good spirits • made of money make a splash • pay (someone) back • pipe dream • shell out • take (something) by storm • (that's or those are) the breaks • wise guy"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-9",
    label: "Lesson 9 • Nicole for President",
    words: "beside the point • brown-noser • by far • count on someone • (to be) crazy about • get down to business • get or to have under one's belt • give (someone) a run for (one's) money • give someone the cold shoulder • (to not) give someone the time of day • goody-goody • it's a deal • kid around • talk into • you scratch my back and I'll scratch yours"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-10",
    label: "Lesson 10 • Bob Visits the Village Market",
    words: "ballpark figure • Don't mention it! • figure out • from scratch • go nuts • jump the gun • just kidding make a pig of oneself • make time for • out of this world • sit tight • talk over • you can say that again"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-11",
    label: "Lesson 11 • Bob Drives a Hard Bargain",
    words: "can't complain • crunch numbers • drive a hard bargain • get the ball rolling • make a living • now you're talking • out of the question • sweeten the deal take it or leave it • twist (someone's) arm • worth one's while"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-12",
    label: "Lesson 12 • Bob’s Big Cookie Order",
    words: "bite off more than one can chew • down in the dumps • for heaven's sake! • get going • help out • like a chicken with its head cut off • like crazy • like pulling teeth • never mind • pitch in • run around • things are looking up"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-13",
    label: "Lesson 13 • Amber Comes Over to Bake Cookies",
    words: "all the rage • call it a night • get out of the way • (to be) in good hands • know one's stuff • lend a hand • lose one's touch • (to be) out of practice • pick up • sweet tooth • take a break • take over • too many cooks spoil the broth • tricks of the trade • work one's tail off"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-14",
    label: "Lesson 14 • Amber and Ted Heat Up the itchen",
    words: "Lesson 14 • break up with (someone) • crank out • crunch time • Give me a break! • go ahead • head over heels in love • love at first sight • make out • (to be) nuts about • (to have a) one-track mind • plug away (at something) • take a break • treat (someone) like dirt"
  },
  {
    href: "/students/extras/vocabulary/selaa/lesson-15",
    label: "Lesson 15 • Nicole Practice Her Election Speech",
    words: "basket case • (to have a) big head • conventional wisdom • do the trick • I'll say! • in reality • load off one's mind • look like • nervous wreck • no wonder • pull an all-nighter • rule of thumb • turn off"
  },
]

export default function SELAA() {
  return (
    <>
      <Whiteboard
        title="Extras"
        subtitle="Speak English like an American"
      />
      <div className="line-break">
        {links.map((item, index) => (
          <div key={index}>
            <Lesson className="icon-position" /><Link href={item.href}><strong>{item.label}</strong></Link>
            <span>{item.words}</span>
          </div>
        ))}
      </div>
    </>
  )
}