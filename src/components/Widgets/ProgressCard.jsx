import React from 'react';
import { Card, ProgressBar } from 'react-bootstrap';

// Component for displaying a progress bar card
const ProgressCard = ({
  title,
  currentValue,
  maxValue,
  leftLabel = 'Available',
  rightLabel = 'Total(Plan)',
  variant = 'primary'
}) => {
  // Calculate percentage for the progress bar
  const percentage = (currentValue / maxValue) * 100;

  return (
    <Card className="progress-card mb-4">
      <Card.Body>
        <h5 className="card-title">{title}</h5>
        <div className="metrics">
          <div className="metric-value available">
            <i className="feather icon-activity me-1"></i> {currentValue}
          </div>
          <div className="metric-value total">
            <i className="feather icon-database me-1"></i> {maxValue}
          </div>
        </div>
        <ProgressBar 
          now={percentage} 
          variant={variant} 
          className="mb-2" 
        />
        <div className="labels">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProgressCard;