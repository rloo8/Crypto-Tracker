import { useParams } from "react-router-dom";

function Coin() {
  const { coinId } = useParams();

  return <h2>Coin: {coinId}</h2>;
}

export default Coin;
