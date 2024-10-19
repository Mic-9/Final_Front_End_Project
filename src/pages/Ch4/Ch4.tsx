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
import "./Ch4.css";

interface ICh4 {
  date: string;
  average: string;
}
interface IApi {
  methane: ICh4[];
}

const Ch4 = ({ data }: { data: IApi | null }) => {
  const chartData = data?.methane?.map((entry) => ({
    date: entry.date,
    average: parseFloat(entry.average),
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
          dataKey="average"
          stroke="#1f78b4"
          dot={{ r: 2 }}
        />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" label={{ value: "time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{ value: "CH4 concentration", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Ch4;
