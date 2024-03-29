import SingleFeaturedCard from "./components/blocks/singleFeaturedCard";
import List from "./components/cards/myth-list/List";

const Home = () => {
  return (
    <>
     <SingleFeaturedCard />
      <List
        title="Myth Debunkers Unleashed: Separating Fact from Fiction"
        subText="Platform to discover all the myths from around the world"
      />
    </>
  );
};

export default Home;
