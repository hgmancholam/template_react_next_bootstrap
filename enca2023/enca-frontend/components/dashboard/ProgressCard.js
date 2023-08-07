import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";

const ProgressCard = ({ title, percentage }) => {
  return (
    <Card>
      <CardBody>
        <h4 className="mb-4">{title}</h4>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: `${percentage}%` }}
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {percentage}%
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

ProgressCard.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.number,
};

export default ProgressCard;
