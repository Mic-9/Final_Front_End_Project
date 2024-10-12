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
import "./Co2.css";

interface ICo2 {
  year: string;
  month: string;
  day: string;
  trend: string;
}
interface IApi {
  co2: ICo2[];
}

const Co2 = ({ data }: { data: IApi }) => {
  const chartData = data?.co2?.map((entry) => ({
    date: `${entry.year}-${entry.month}-${entry.day}`,
    trend: parseFloat(entry.trend),
  }));

  return (
    <ResponsiveContainer className="container">
      <LineChart
        data={chartData}
        margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
      >
        <Line type="monotone" dataKey="trend" stroke="#1f78b4" dot={{ r: 2 }} />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" label={{ value: "Time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{ value: "Concentration", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Co2;
