import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinDetail from "./routes/CoinDetail";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coin />} />
        <Route path="/:coinId" element={<CoinDetail />}>
          <Route path="chart" element={<Chart />} />
          <Route path="price" element={<Price />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
