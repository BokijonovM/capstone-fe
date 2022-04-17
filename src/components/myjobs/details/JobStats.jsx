/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Moment from "moment";

let date = new Date();
let yesterday = new Date(Date.now() - 86400000);
let yesterday1 = new Date(Date.now() - 86400000 * 2);
let yesterday2 = new Date(Date.now() - 86400000 * 3);
let yesterday3 = new Date(Date.now() - 86400000 * 4);
let yesterday4 = new Date(Date.now() - 86400000 * 5);
let yesterday5 = new Date(Date.now() - 86400000 * 6);

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y, stroke, value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
        {value}
      </text>
    );
  }
}

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, stroke, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-35)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

export default function JobStats({ applicants }) {
  //   static demoUrl =
  //     "https://codesandbox.io/s/line-chart-with-customized-label-hs5b7";

  // useEffect(() => {
  //   console.log("applicants", applicants);
  // }, []);

  const todaysApp = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(date).format("DD-MM-YYYY")
    );
  });

  const yesterdayApp = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday).format("DD-MM-YYYY")
    );
  });

  const yesterdayApp1 = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday1).format("DD-MM-YYYY")
    );
  });
  const yesterdayApp2 = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday2).format("DD-MM-YYYY")
    );
  });
  const yesterdayApp3 = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday3).format("DD-MM-YYYY")
    );
  });
  const yesterdayApp4 = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday4).format("DD-MM-YYYY")
    );
  });

  const yesterdayApp5 = applicants.filter(function (item) {
    const itemTime = new Date(item.createdAt).getTime();
    return (
      Moment(itemTime).format("DD-MM-YYYY") ===
      Moment(yesterday5).format("DD-MM-YYYY")
    );
  });

  const length = applicants.length;

  const data = [
    {
      name: yesterday5
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp5.length,
    },
    {
      name: yesterday4
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp4.length,
    },
    {
      name: yesterday3
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp3.length,
    },
    {
      name: yesterday2
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp2.length,
    },
    {
      name: yesterday1
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp1.length,
    },
    {
      name: yesterday
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: yesterdayApp.length,
    },
    {
      name: date
        .toLocaleString("en-us", { weekday: "long" })
        .toString()
        .slice(0, 3),
      apc: todaysApp.length,
    },
  ];
  return (
    <ResponsiveContainer height="100%">
      <LineChart
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,

          bottom: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={<CustomizedAxisTick />} />
        <YAxis />
        <Tooltip />

        <Line
          type="monotone"
          dataKey="apc"
          stroke="#8884d8"
          label={<CustomizedLabel />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
