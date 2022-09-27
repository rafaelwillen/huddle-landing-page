import flowingConversations from "./assets/images/illustration-flowing-conversation.svg";
import growTogether from "./assets/images/illustration-grow-together.svg";
import yourUsers from "./assets/images/illustration-your-users.svg";
import BodySections, {
  SectionCardType,
} from "./components/sections/BodySections";
import Header from "./components/sections/Header";

const sectionCards: SectionCardType[] = [
  {
    imgSrc: growTogether,
    heading: "Grow Together",
    content: ` Create meaningful discussions with your audience and build a strong,
    loyal community. Think of the insightful conversations you miss out
    on with a feedback form.`,
  },
  {
    imgSrc: flowingConversations,
    heading: "Flowing Conversations",
    content: `You wouldn't paginate a conversation
     in real life, so why do it online? Our
     threads hav just-in-time loading for a more natural flow.`,
  },
  {
    imgSrc: yourUsers,
    heading: "Your Users",
    content: `It takes no time at all to integrate
     Huddle with your app's authentication solution. This means
     once signed in to your app, your users can start chatting immediately.`,
  },
];

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto mt-14 px-6 bg-white">
        <BodySections sectionCards={sectionCards} />
      </main>
    </>
  );
}

export default App;
