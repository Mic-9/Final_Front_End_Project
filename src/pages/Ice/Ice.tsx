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

interface IApi {
  arcticData: {
    data: {
      [year: string]: {
        value: number;
      };
    };
  };
}

const Ice = ({ data }: { data: IApi | null }) => {
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
  for (const year in data.arcticData.data) {
    const value = data.arcticData.data[year].value;
    if (value >= 0) {
      chartData.push({
        date: year,
        value: value,
      });
    }
  }

  return (
    <ResponsiveContainer className="container">
      <LineChart
        data={chartData}
        margin={{ top: 50, right: 50, left: 50, bottom: 50 }}
      >
        <Line type="monotone" dataKey="value" stroke="#1f78b4" dot={{ r: 2 }} />
        <CartesianGrid stroke="#e0e0e0" />
        <XAxis dataKey="date" label={{ value: "time", position: "bottom" }} />
        <YAxis
          domain={[0, 50]}
          label={{ value: "ice extension", angle: -90, position: "left" }}
        />
        <Tooltip />
        <Legend verticalAlign="top" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Ice;
