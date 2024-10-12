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
import "./Temp.css";

interface ITemp {
  time: string;
  land: string;
}
interface IApi {
  result: ITemp[];
}

const Temp = ({ data }: { data: IApi }) => {
  const chartData = data?.result?.map((entry) => ({
    time: entry.time,
    land: parseFloat(entry.land),
  }));

  return (
    <ResponsiveContainer className="container">
      <LineChart
        data={chartData}
        margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
      >
        <Line type="monotone" dataKey="land" stroke="#1f78b4" dot={{ r: 2 }} />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="time" label={{ value: "Time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{ value: "Variation", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Temp;
