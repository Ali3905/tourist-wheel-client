import React from 'react';
import { FlexWrapper } from './styles/overViewStyles';
import { RevenueChart, OrderChart, DoughnutChart, OrdersData, StatusData } from './chartUtiles';
import OverSubViewCard from "./overViewComponents/overSubViewCard"
import OverViewCard from "./overViewComponents/overViewCard"
function OverView() {

  const cardData = [
    { title: "Invested", content: "Over All", rate: 10 },
    { title: "Online Sale", content: "Over All", rate: 5 },
    { title: "Offline Sale", content: "Over All", rate: 8 },
    { title: "Vendors", content: "Payout", rate: 15 },
    { title: "Partner", content: "Payout", rate: 12 },
    { title: "Profit", content: "Some Value", rate: 20 },
  ];
  const cardDataone = [
    { title: "Orders", rate: 10 },
    { title: "Offline Orders", rate: 5 },
    { title: "Transfer Orders", rate: 8 },
    { title: "Sheduled Orders", rate: 15 },
    { title: "Bulk Orders", rate: 12 },

  ];
  return (
    <>

        <div >
          <FlexWrapper>
            {cardData.map((card, index) => (
              <OverViewCard key={index} title={card.title} content={card.content} rate={card.rate} />
            ))}
          </FlexWrapper>
          <FlexWrapper>
            {cardDataone.map((card, index) => (
              <OverSubViewCard key={index} title={card.title} rate={card.rate} />
            ))}
          </FlexWrapper>
        </div>
        <FlexWrapper style={{ marginBottom: "20px" }}>
          <RevenueChart />
          <DoughnutChart />
        </FlexWrapper>
        <FlexWrapper style={{ marginBottom: "20px" }}>
          <OrderChart />
          <OrdersData />
        </FlexWrapper>
        <FlexWrapper>
          <StatusData />
        </FlexWrapper>

    </>

  );
}

export default OverView;
