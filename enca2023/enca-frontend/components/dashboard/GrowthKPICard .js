import React from "react";
import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Asegura tener FontAwesome instalado

const GrowthKPICard = ({ value, icon, growth }) => {
  const isPositive = growth >= 0;
  const growthIcon = isPositive ? "arrow-up" : "arrow-down";
  const growthColor = isPositive ? "text-success" : "text-danger";

  return (
    <Card className="growth-kpi">
      <CardBody>
        <div className="d-flex align-items-center">
          <div className="kpi-icon bg-primary text-white">
            <FontAwesomeIcon icon={icon} size="2x" />
          </div>
          <div className="kpi-content ms-3">
            <h3 className="mb-0">{value}</h3>
            <div className={`growth ${growthColor}`}>
              <FontAwesomeIcon icon={["fas", growthIcon]} /> {Math.abs(growth)}%
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

GrowthKPICard.propTypes = {
  value: PropTypes.number,
  icon: PropTypes.object, // icon prop should be a FontAwesome icon object
  growth: PropTypes.number,
};

export default GrowthKPICard;
