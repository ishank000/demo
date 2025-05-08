// react-bootstrap
import { Row, Col, Card } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';

// project imports
import FlatCard from 'components/Widgets/Statistic/FlatCard';
import ProductCard from 'components/Widgets/Statistic/ProductCard';
import FeedTable from 'components/Widgets/FeedTable';
import ProductTable from 'components/Widgets/ProductTable';
import { SalesCustomerSatisfactionChartData } from './chart/sales-customer-satisfication-chart';
import SalesAccountChartData from './chart/sales-account-chart.jsx'; // Updated to .jsx
import { SalesSupportChartData } from './chart/sales-support-chart';
import { SalesSupportChartData1 } from './chart/sales-support-chart1';
import feedData from 'data/feedData';
import productData from 'data/productTableData';
import { useEffect, useState } from 'react';
import { getMonthlySales } from 'services/dashboard';
import VerificationCard from 'components/Card/VerficationCard.jsx';
import SecurityUpdate from 'components/Card/SecurityUpdate.jsx';
import LineGraph from '../../../components/Card/LineGraph.jsx';
// -----------------------|| DASHBOARD SALES ||-----------------------//
export default function DashSales() {
  // State to store the fetched sales data
  const [salesData, setSalesData] = useState([]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMonthlySales();
        console.log('API Response:', response.data); // Log to verify data
        setSalesData(response.data || []);
      } catch (error) {
        console.error('Error fetching monthly sales data:', error);
        setSalesData([]);
      }
    };
    fetchData();
  }, []);

  return (
    
    <Row>
      <Col md={12} xl={6}>
      <SecurityUpdate />
      {/* Verification progress card showing 500/1000 completion */}

      <VerificationCard value={500} max={1000} />

        <Row>
          <Col md={6}>
            {/* Conversion rate analytics card with historical comparison */}
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">53.94%</h2>
                <span className="text-primary">Conversion Rate</span>
                <p className="mb-3 mt-3">Number of conversions divided by the total visitors. </p>
              </Card.Body>
              <Chart {...SalesSupportChartData()} />
              <Card.Footer className="border-0 bg-primary text-white background-pattern-white">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0 text-white">10</h4>
                    <span>2018</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">15</h4>
                    <span>2017</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 text-white">13</h4>
                    <span>2016</span>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={6}>
            {/* Order delivery metrics card with monthly breakdown */}
            <Card className="support-bar overflow-hidden">
              <Card.Body className="pb-0">
                <h2 className="m-0">1432</h2>
                <span className="text-primary">Order Delivered</span>
                <p className="mb-3 mt-3">Number of conversions divided by the total visitors. </p>
              </Card.Body>
              <Card.Footer className="border-0">
                <Row className="text-center">
                  <Col>
                    <h4 className="m-0">130</h4>
                    <span>May</span>
                  </Col>
                  <Col>
                    <h4 className="m-0">251</h4>
                    <span>June</span>
                  </Col>
                  <Col>
                    <h4 className="m-0 ">235</h4>
                    <span>July</span>
                  </Col>
                </Row>
              </Card.Footer>
              <Chart type="bar" {...SalesSupportChartData1()} />
            </Card>
          </Col>
        </Row>
        {/* Department sales report card with total and average metrics */}
   

      </Col>

      {/* Summary cards showing key business metrics */}
      <Col md={12} xl={6}>
        {/* Summary cards showing key business metrics */}
        <Row>
          <Col sm={6}>
            <ProductCard params={{ title: 'Total Profit', primaryText: '$1,783', icon: 'card_giftcard' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Total Orders', primaryText: '15,830', icon: 'local_mall' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ variant: 'primary', title: 'Average Price', primaryText: '$6,780', icon: 'monetization_on' }} />
          </Col>
          <Col sm={6}>
            <ProductCard params={{ title: 'Product Sold', primaryText: '6,784', icon: 'local_offer' }} />
          </Col>
        </Row>
        {/* Activity feed table showing recent updates */}
        <FeedTable {...feedData} />
           <Card>
          <Card.Header>
            <h5>Department wise monthly sales report</h5>
          </Card.Header>
          <Card.Body>
            <Row className="pb-2">
              <div className="col-auto m-b-10">
                <h3 className="mb-1">$21,356.46</h3>
                <span>Total Sales</span>
              </div>
              <div className="col-auto m-b-10">
                <h3 className="mb-1">$1935.6</h3>
                <span>Average</span>
              </div>
            </Row>
            <SalesAccountChartData data={salesData} />
          </Card.Body>
        </Card>  
      </Col>

           <Card>
           
          <Card.Header>
            <h5>Department wise monthly sales report</h5>
          </Card.Header>
         <LineGraph/>
        </Card>
    </Row>
    
  );
}