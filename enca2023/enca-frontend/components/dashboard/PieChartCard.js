import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";

const PieChartCard = ({ data, colors }) => {
  return (
    <Card>
      <CardBody>
        <h4 className="mb-4">Distribución</h4>
        <PieChart width={200} height={200}>
          <Pie
            dataKey="value"
            data={data}
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </CardBody>
    </Card>
  );
};

PieChartCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  colors: PropTypes.arrayOf(PropTypes.string),
};

export default PieChartCard;
