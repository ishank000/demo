import MainCard from './MainCard';
import { Row, Col } from 'react-bootstrap';
// -----------------------|| SECURITY UPDATE CARD ||-----------------------//

export default function SecurityUpdate({ value = 500, max = 1000 }) {
  return (
    <Row>
      <Col sm={12}>
        <MainCard title="Security Updates">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ flex: 1 }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div style={{ marginLeft: '20px' }}>
              <img 
                src="assets/images/image.png" 
                alt="Security Update"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>
          </div>
        </MainCard>
      </Col>
    </Row>
  );
}