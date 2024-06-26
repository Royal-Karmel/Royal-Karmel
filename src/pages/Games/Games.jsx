import Title from "../../components/Title/Title";
import gamesData from "../../data/games.json";
import "./Games.css";

const Games = ({ setGame }) => {
  return (
    <section className="games__section">
      <Title parentName={"games"}>Games</Title>
      <div className="games">
        {gamesData.map((game, index) => (
          <div key={index} className="game" onClick={() => setGame(game)}>
            <Title content={game.name} parentName={"games"} isSubtitle={true} />
            <img className="game__icon" src={game.logo} alt={game.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Games;
