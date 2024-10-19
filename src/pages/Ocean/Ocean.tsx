import {
  CartesianGrid,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Ocean.css";

interface IApi {
  result: {
    [year: string]: string;
  };
}
const Ocean = ({ data }: { data: IApi | null }) => {
  if (!data) {
    return (
      <div className="container">
        <h3>
          Data currently unavailable. Try again later. If the problem persists,
          please inform us at help@global-warming.org
        </h3>
      </div>
    );
  }

  const chartData = [];
  for (const year in data.result) {
    chartData.push({
      date: year,
      temperature: parseFloat(data.result[year]),
    });
  }

  return (
    <ResponsiveContainer className="container">
      <LineChart
        data={chartData}
        margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
      >
        <Line
          type="monotone"
          dataKey="temperature"
          stroke="#1f78b4"
          dot={{ r: 2 }}
        />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" label={{ value: "time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{
            value: " temperature variation",
            angle: -90,
            position: "left",
          }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Ocean;
