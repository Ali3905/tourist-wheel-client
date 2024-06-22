import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const BannerWrapper = styled.div`
display: flex;
justify-content;center;
background-color: white;
margin:20px 0px;
flex-direction:column;
  height: ${(props) => props.height ? `calc(${props.height} + 123px)` : 'auto'};
`;
// style={{height:'443px' , display:'flex' , alignItems:'center'}}
const ImageWrapper = styled.div`
  padding: 11px 0px;
  background-color: white;
  margin: 15px 0px;
  border-radius: 10px;
  height: ${(props) => props.height ? `calc(${props.height} + 200px)` : 'auto'};
`;

const BannerContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

const BannerTitleText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.5;
  letter-spacing: 0.2px;
  text-transform: capitalize;
`;

const ImageUploadButton = styled.div`
  display: flex;
  overflow-x: auto;
  ${(props) =>
    props.hasImages
      ? 'pb-20px'
      : 'border-2 border-dotted border-black p-20px'};

  img {
    height: 100%;
    margin-right: 20px;
  }

  > div {
    display: flex;
    align-items: flex-start;
    margin-bottom: 10px;
    height: ${(props) => props.height ? `calc(${props.height} - 0px)` : 'auto'};
  }
`;

const AddBannerButton = styled.button`
  border-2 border-dotted border-black px-20px;
`;

function BannerSectionCard({ bannerInfo }) {
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) => {
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.readAsDataURL(file);
        });
      });

      Promise.all(newImages).then((imageDataUrls) => {
        setSelectedImages([...selectedImages, ...imageDataUrls]);
      });
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  return (
    <BannerWrapper height={bannerInfo.height}>
 <div style={{display:'flex'}}>
 <BannerContainer>
        <BannerTitleText>{bannerInfo.title}</BannerTitleText>
      </BannerContainer>
      <AddBannerButton onClick={openFileDialog}>Add Banner</AddBannerButton>
 </div>
<ImageWrapper height={bannerInfo.height} >

<input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />

      <ImageUploadButton
        hasImages={selectedImages.length > 0}
        onClick={openFileDialog}
        height={bannerInfo.height} 
      >
        <div>
          {selectedImages.length > 0 ? (
            selectedImages.map((image, index) => (
            
                <img key={index} src={image} alt={`Selected ${index}`} />
           
            ))
          ) : (
            <>Select Image</>
          )}
        </div>
      </ImageUploadButton>
</ImageWrapper>
    </BannerWrapper>
  );
}

export default BannerSectionCard;
