import Card from "../components/Card";
import Header from "../components/Header";
import data from "../helper/data";
import "../styles/styles.css";

const Homepage = () => {
  return (
    <div>
      <Header />
      <ul>
        {data.map(({ photographer, src: { large } }) => (
          <Card photographer={photographer} img={large} />
        ))}
      </ul>
    </div>
  );
};

export default Homepage;
