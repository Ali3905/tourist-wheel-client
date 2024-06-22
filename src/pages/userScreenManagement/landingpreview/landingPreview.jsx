import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import CommonButton from '../../../components/commonButton';

const LandingPreviewWrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 150px);
  position: relative;
  background-color: ${(props) => props.backgroundColor || '#ffffff'};
  background-image: ${(props) => props.backgroundImage && `url(${props.backgroundImage})`};
`;

const UploadButton = styled.input.attrs({
  type: 'file',
})`
  display: none;
`;

const CustomUploadButton = styled.label`
  color: #FC7E06;
  background-color: white;
  border: 1px solid #FC7E06;
  border-radius: 5px;
  padding: 1px 18px;
  cursor: pointer;
  margin-right: 5px;
  font-size: 16px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #FC7E06; 
    color: white;
  }
`;

const StyledRangeInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #FC7E06;
    cursor: pointer;
  }
`;

const StyledColorPicker = styled.input`
  padding: 4px 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

// Reducer function to handle state updates
function bannerStylesReducer(state, action) {
  switch (action.type) {
    case 'ADD_BANNER_STYLE':
      return [...state, action.payload];
    case 'UPDATE_MARGIN':
      return state.map((style, index) =>
        index === action.payload.index
          ? { ...style, margin: action.payload.value }
          : style
      );
    case 'UPDATE_PADDING':
      return state.map((style, index) =>
        index === action.payload.index
          ? { ...style, padding: action.payload.value }
          : style
      );
    default:
      return state;
  }
}

function LandingPreview() {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [bannerImages, setBannerImages] = useState([]);
  const [bannerStyles, dispatch] = useReducer(bannerStylesReducer, []);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleBackgroundImageUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setBackgroundImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleAddBanner = () => {
    const uploadButton = document.getElementById('upload-button');
    uploadButton.click();
  };

  const handleBannerUpload = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onload = () => {
        setBannerImages([...bannerImages, reader.result]);
        dispatch({ type: 'ADD_BANNER_STYLE', payload: { margin: 0, padding: 0 } });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleColorChange = (event) => {
    setBackgroundColor(event.target.value);
  };

  const handleMarginChange = (event, index) => {
    dispatch({
      type: 'UPDATE_MARGIN',
      payload: { index, value: parseInt(event.target.value) },
    });
  };

  const handlePaddingChange = (event, index) => {
    dispatch({
      type: 'UPDATE_PADDING',
      payload: { index, value: parseInt(event.target.value) },
    });
  };

  return (
    <LandingPreviewWrapper backgroundColor={backgroundColor} backgroundImage={backgroundImage}>
      <div style={{ display: 'flex', justifyContent: 'end' }}>
        <CustomUploadButton htmlFor="upload-background" isHovered={isHovered}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Upload Background</CustomUploadButton>
        <input id="upload-background" type="file" accept="image/*" onChange={handleBackgroundImageUpload} style={{ display: 'none' }} />
        <CommonButton type="primary" onClick={handleAddBanner}>Add banner</CommonButton>
        <UploadButton id="upload-button" onChange={handleBannerUpload} />
        <StyledColorPicker
          type="color"
          value={backgroundColor}
          onChange={handleColorChange}
        />
      </div>
      {bannerImages.map((image, index) => (
        <div key={index}>
          <div style={{ margin: `${bannerStyles[index]?.margin}px`, padding: `${bannerStyles[index]?.padding}px`, border: '1px solid black' }}>
            <img src={image} alt={`Banner ${index}`} style={{ width: '100%' }} />
          </div>
          <div>
            <StyledRangeInput type="range" min="0" max="100" value={bannerStyles[index]?.margin || 0} onChange={(event) => handleMarginChange(event, index)} />
            <StyledRangeInput type="range" min="0" max="100" value={bannerStyles[index]?.padding || 0} onChange={(event) => handlePaddingChange(event, index)} />
          </div>
        </div>
      ))}
    </LandingPreviewWrapper>
  );
}

export default LandingPreview;
