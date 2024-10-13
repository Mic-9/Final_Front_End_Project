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
import "./Ice.css";

interface IIce {
  date: string;
  temperature: string;
}
interface IApi {
  methane: IIce[];
}

const Ice = ({ data }: { data: IApi }) => {
  const chartData = data?.methane?.map((entry) => ({
    date: entry.date,
    average: parseFloat(entry.temperature),
  }));

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
        <XAxis dataKey="date" label={{ value: "Time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{ value: "temperature", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Ice;
