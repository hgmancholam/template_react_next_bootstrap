import React from "react";
import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const RadialBarChartCard = ({ data }) => {
  return (
    <Card>
      <CardBody>
        <h4 className="mb-4">Distribución Radial</h4>

        <RadialBarChart
          width={600}
          height={400}
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="value"
          />
          <Legend
            iconSize={15}
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </RadialBarChart>
      </CardBody>
    </Card>
  );
};

RadialBarChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default RadialBarChartCard;
