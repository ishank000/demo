import MainCard from './MainCard';
import { Row, Col } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
// -----------------------|| VERIFICATION CARD ||-----------------------//

export default function VerificationCard({ value = 500, max = 1000 }) {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="Verification Requests Usage">
          <div style={{ position: 'relative' }}>
            {/* Indicators above the progress bar */}
            <span style={{ position: 'absolute', left: '0', top: '-20px', color: '#10B981' }}>-{value}</span>
            <span style={{ position: 'absolute', right: '0', top: '-20px', color: '#06B6D4' }}>={max}</span>
            
            {/* Placeholder for Progress Bar - Mentor to provide striped version */}
            
            <ProgressBar animated now={45} />
          </div>
          
          {/* Labels below the progress bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6B7280', marginTop: '10px' }}>
            <span>Available</span>
            <span>Total(Plan)</span>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}