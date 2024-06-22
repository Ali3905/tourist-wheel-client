import React, { useState } from 'react';
import { Input, message } from 'antd';
import styled from 'styled-components';
import BannersectionCard from '../createBanners/bannerSectionCard'; 
import * as Styled from '../../../components/formButton';

const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content:end;
`;

const SectionContent = styled.div`
  display: flex;
  justify-content: end;
`;

export default function CreateBanners() {
  const [bannerInfo, setBannerInfo] = useState({ title: '', height: '' });
  const [BannersectionCards, setBannersectionCards] = useState([]);

  const handleInputChange = (key, value) => {
    setBannerInfo(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  const handleAddBannerCard = () => {
    if (bannerInfo.title.trim() === '') {
      message.error('Section Title cannot be empty');
      return;
    }

    const newCard = (
      <BannersectionCard bannerInfo={bannerInfo} key={BannersectionCards.length} />
    );

    setBannersectionCards([...BannersectionCards, newCard]);
    setBannerInfo({ title: '', height: '' });
  };

  return (
    <>
      <SectionWrapper>
        <SectionContent>
          <Input
            style={{ width: "200px", margin: "0px 20px 0px 0px" }}
            placeholder="Enter Section Title"
            value={bannerInfo.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
          />
          <Input
            style={{ width: "200px", margin: "0px 20px 0px 0px" }}
            placeholder="Enter Height"
            value={bannerInfo.height}
            onChange={(e) => handleInputChange('height', e.target.value)}
          />
          <Styled.SubmitButton type="primary" onClick={handleAddBannerCard} style={{ width: "200px" }}>
            Add Banners
          </Styled.SubmitButton>
        </SectionContent>
      </SectionWrapper>
      {BannersectionCards.map((card) => card)}
    </>
  );
}
