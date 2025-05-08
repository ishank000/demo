// src/views/dashboard/VerificationUsage.jsx
import React from 'react';
// use react-bootstrap ProgressBar instead of NProgress-based Loader
import { ProgressBar } from 'react-bootstrap';
import 'assets/scss/themes/components/_progress-card.scss';

const VerificationUsage = ({ used = 0, total = 0 }) => {
  const pct = total > 0 ? Math.round((used / total) * 100) : 0;
  return (
    <div className="card progress-card">
      <div className="card-body">
        <h5 className="card-title">Verification Requests Usage</h5>
        <div className="progress-wrap" style={{ padding: '1rem 0' }}>
          {/* Bootstrap ProgressBar showing percentage */}
          <ProgressBar now={pct} label={`${pct}%`} />
        </div>
        <div className="d-flex justify-content-between mt-2">
          <small>{used} Available</small>
          <small>{total} Total (Plan)</small>
        </div>
      </div>
    </div>
  );
};

export default VerificationUsage;
