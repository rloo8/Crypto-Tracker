import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistoryData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistoryData[]>(["chart", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => parseFloat(price.close)) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 500,
              width: 500,
              background: "none",
              toolbar: {
                show: false,
              },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["#FFD616"], stops: [0, 100] },
            },
            colors: ["#3C82F5"],
            grid: {
              show: false,
            },
            stroke: {
              curve: "smooth",
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toUTCString()
              ),
            },
          }}
        />
      )}
    </div>
  );
}

export default Chart;
