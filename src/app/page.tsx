import SingleFeaturedCard from "./components/blocks/singleFeaturedCard";
import List from "./components/cards/myth-list/List";

const Home = () => {
  return (
    <>
      <List
        title="Myth Debunkers Unleashed: Separating Fact from Fiction"
        subText="Platform to discover all the myths from around the world"
        startIndex={0}
        endIndex={8}
        isLoadMore={false}
      />
      <SingleFeaturedCard />
      <List
        title={null}
        subText={null}
        startIndex={8}
        endIndex={16}
        isLoadMore={true}
      />
    </>
  );
};

export default Home;
