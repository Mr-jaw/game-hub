import { useParams } from "react-router-dom";

const GameDetailPage = () => {
  const params = useParams();
  return <div>Game Details {params.id}</div>;
};

export default GameDetailPage;
