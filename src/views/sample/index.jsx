import VerificationCard from 'components/Card/VerificationCard';
import SecurityUpdate from 'components/Card/SecurityUpdate';
import LineGraph from '../../components/Card/LineGraph';
// -----------------------|| SAMPLE ||-----------------------//

export default function Sample() {
  return (
    <div>
      <VerificationCard value={500} max={1000} />
    </div>
  );
}

export default function Sample() {
  return (
    <div>
      <SecurityUpdate  />
    </div>
  );
}
export default function Sample() {
    return (
      <div>
        <LineGraph  />
      </div>
    );
  }