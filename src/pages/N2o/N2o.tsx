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
import "./N2o.css";

interface IN2o {
  date: string;
  trend: string;
}
interface IApi {
  nitrous: IN2o[];
}

const N2o = ({ data }: { data: IApi | null }) => {
  const chartData = data?.nitrous?.map((entry) => ({
    date: entry.date,
    trend: parseFloat(entry.trend),
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
        <Line type="monotone" dataKey="trend" stroke="#1f78b4" dot={{ r: 2 }} />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" label={{ value: "time", position: "bottom" }} />
        <YAxis
          domain={["dataMin", "dataMax"]}
          label={{ value: "N2O concentration", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default N2o;
