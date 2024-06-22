import React, { useState } from 'react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { RevenueChartWrapper, ChartTitle, DoughnutChartWrapper , FlexWrapper , SubCardWrapper } from './styles/overViewStyles';
import { commonOptions, } from './chartConstants';
import revenueData from '../../jsonData/revenueData.json';
import sourceData from '../../jsonData/sourceData.json';
import donutData from '../../jsonData/dounutData.json'
import { Button } from 'antd';
import styled from 'styled-components';
import Select from '../../components/select'


const StyledOrderCard = styled.div`
  background-color: #f4f4f4;
  padding: 16px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  // Style the inner elements
  > div {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  // Style the FlexWrapper within the OrderCard
  ${FlexWrapper} {
    // Add any additional styling for FlexWrapper if needed
  }
`;

function useChartData(initialDataPoints = 7, initialTimeFrame = 'day') {
  const [dataPoints, setDataPoints] = useState(initialDataPoints);
  const [timeFrame, setTimeFrame] = useState(initialTimeFrame);

  const options = [
    { option: 7, label: "Day" },
    { option: 10, label: "Week" },
    { option: revenueData.length, label: "Month" }
  ];

  const generateLabels = () => {
    const currentDate = new Date();
    const labels = [];

    switch (timeFrame) {
      case 'day':
        for (let i = dataPoints - 1; i >= 0; i--) {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - i);
          labels.push(date.toISOString().slice(0, 10));
        }
        break;

      case 'week':
        for (let i = dataPoints - 1; i >= 0; i--) {
          const date = new Date(currentDate);
          date.setDate(date.getDate() - i * 7);
          const endDateFormat = `${date.toLocaleString('default', { month: 'short' }).slice(0, 3)} ${date.getDate()} ${date.getFullYear()}`;
          labels.push(endDateFormat);
        }
        break;

      case 'month':
        for (let i = dataPoints - 1; i >= 0; i--) {
          const date = new Date(currentDate);
          date.setMonth(date.getMonth() - i);
          labels.push(date.toLocaleString('default', { month: 'short', year: 'numeric' }));
        }
        break;

      default:
        break;
    }

    return labels;
  };

  const handleChange = (value) => {
    setDataPoints(value);

    let newTimeFrame;
    if (value === 7) {
      newTimeFrame = 'day';
    } else if (value === 10) {
      newTimeFrame = 'week';
    } else {
      newTimeFrame = 'month';
    }

    setTimeFrame(newTimeFrame);
  };

  return { dataPoints, timeFrame, options, generateLabels, handleChange };
}

function RevenueChart({width}) {
  const { dataPoints, options, generateLabels, handleChange } = useChartData();

  return (
    <RevenueChartWrapper width={width} >
      <FlexWrapper>
        <ChartTitle>Monthly Revenue & Cost</ChartTitle>
        <Select value={dataPoints} onChange={handleChange} placeholder="Select Outlet" mode="select" options={options} width={'140px'} />
      </FlexWrapper>

      <Line
        data={{
          labels: generateLabels(),
          datasets: [
            {
              label: 'Revenue',
              data: revenueData.slice(0, dataPoints).map((data) => data.revenue),
              backgroundColor: '#FC7E06',
              borderColor: '#FC7E06',
            },
            {
              label: 'Cost',
              data: revenueData.slice(0, dataPoints).map((data) => data.cost),
              backgroundColor: 'green',
              borderColor: 'green',
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
            line: { tension: 0.5 },
          },
          scales: {
            xAxes: [{ type: 'time', time: { unit: 'day' } }],
          },
        }}
      />
    </RevenueChartWrapper>
  );
}

function OrderChart({width}) {
  const { dataPoints, options, generateLabels, handleChange } = useChartData();

  return (
    <RevenueChartWrapper width={width}>
      <FlexWrapper>
        <ChartTitle>Orders Data</ChartTitle>
        <Select value={dataPoints} onChange={handleChange} placeholder="Select Outlet" mode="select" options={options} width={'140px'} />
      </FlexWrapper>

      <Bar
        data={{
          labels: generateLabels(),
          datasets: [
            {
              label: 'Offline',
              data: sourceData.slice(0, dataPoints).map((data) => data.online),
              backgroundColor: 'green',
              borderColor: 'green',
              borderRadius: 5,
            },
            {
              label: 'Online',
              data: sourceData.slice(0, dataPoints).map((data) => data.offline),
              backgroundColor: '#FC7E06',
              borderColor: '#FC7E06',
            },
          ],
        }}
        options={{
          plugins: {
            legend: { display: false },
            line: { tension: 0.5 },
          },
          scales: {
            xAxes: [{ type: 'time', time: { unit: 'day' } }],
          },
        }}
      />
    </RevenueChartWrapper>
  );
}


function DoughnutChart() {
  return (

    <DoughnutChartWrapper>
      <FlexWrapper>
        <ChartTitle>Online Status</ChartTitle>
        <Button>View Status</Button>
      </FlexWrapper>

      <div className='dougnutContainer' style={{ height: "380px", display: "flex", justifyContent: "center", alignItems: "start" }}>
        <div className='dougnutCard' style={{ marginTop: "35px" }}>
          <Doughnut
            data={{
              labels: donutData.map((data) => data.label),
              datasets: [
                {
                  label: 'Count',
                  data: donutData.map((data) => data.value),
                  backgroundColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                  borderColor: [
                    'rgba(43, 63, 229, 0.8)',
                    'rgba(250, 192, 19, 0.8)',
                    'rgba(253, 135, 135, 0.8)',
                  ],
                },
              ],
            }}
            options={{
              ...commonOptions,
            }}
          />
        </div>
      </div>
      <FlexWrapper>
        <h4>
          Admin
        </h4>
        <h4>Vendor</h4>
        <h4>Partner</h4>


      </FlexWrapper>
    </DoughnutChartWrapper>
  );
}


function OrdersData() {
  // Dummy data for demonstration purposes
  const orders = [
    { id: 1234, date: '2023-12-23', time: '14:30', status: 'Pending' },
    { id: 2567, date: '2023-12-22', time: '10:45', status: 'Pending' },
    { id: 1234, date: '2023-12-23', time: '14:30', status: 'Pending' },
    { id: 2567, date: '2023-12-22', time: '10:45', status: 'Pending' },
  ];

  return (
    <DoughnutChartWrapper>
      <FlexWrapper>
        <ChartTitle>Pending Orders</ChartTitle>
        <Button>View All</Button>
      </FlexWrapper>

      {/* Render order cards */}
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </DoughnutChartWrapper>
  );
}

function StatusData() {
  // Dummy data for demonstration purposes
  const orders = [
    { id: 1234, date: '2023-12-23', time: '14:30', status: 'Pending' },
    { id: 2567, date: '2023-12-22', time: '10:45', status: 'Pending' },
    { id: 1234, date: '2023-12-23', time: '14:30', status: 'Pending' },
    { id: 2567, date: '2023-12-22', time: '10:45', status: 'Pending' },
  ];

  return (
   <>
    <SubCardWrapper>
      <FlexWrapper>
        <ChartTitle>Top products</ChartTitle>
        <Button>View All</Button>
      </FlexWrapper>
      {orders.map(order => (
    <>
        <OrderCard key={order.id} order={order} />
    </>
      ))}
          </SubCardWrapper>
          <SubCardWrapper>

            <FlexWrapper>
        <ChartTitle>Top Vendors</ChartTitle>
        <Button>View All</Button>
      </FlexWrapper>
      {orders.map(order => (
    <>
        <OrderCard key={order.id} order={order} />
    </>
      ))}
         </SubCardWrapper>
         <SubCardWrapper>
            <FlexWrapper>
        <ChartTitle>Top Admins</ChartTitle>
        <Button>View All</Button>
      </FlexWrapper>
      {orders.map(order => (
    <>
        <OrderCard key={order.id} order={order} />
    </>
      ))}
          </SubCardWrapper>
          <SubCardWrapper>
            <FlexWrapper>
        <ChartTitle>Top Customers</ChartTitle>
        <Button>View All</Button>
      </FlexWrapper>
      {orders.map(order => (
    <>
        <OrderCard key={order.id} order={order} />
    </>
      ))}
    </SubCardWrapper>
   </>
  );
}

const OrderCard = ({ order }) => (
  <StyledOrderCard>
    <div>
      <FlexWrapper>
        <div>
          <div>{order.id}</div>
          <div>{order.date} {order.time}</div>
        </div>
        <div>{order.status}</div>
      </FlexWrapper>
    </div>
  </StyledOrderCard>
);

export default OrdersData;

export { RevenueChart, OrderChart, DoughnutChart, OrdersData , StatusData };
