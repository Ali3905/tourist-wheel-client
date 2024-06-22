import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { keyframes } from 'styled-components';


const bounceIn = keyframes`
  from, 20%, 40%, 60%, 80%, to {
    transform: translateY(0);
  }

  40%, 60% {
    transform: translateY(-10px);
  }

  20%, 80% {
    transform: translateY(-5px);
  }
`;

const AnimatedHeading = styled.h1`
  animation: ${bounceIn} 0.3s ease-in-out;
  padding : 0px 0px 0px 20px;
`;

function Heading() {
  const selectedTitle = useSelector((state) => state.heading.selectedTitle);
  console.log(selectedTitle , "selectedTitle")
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [selectedTitle]);

  return (
    <div key={key}>
      <AnimatedHeading>{selectedTitle}</AnimatedHeading>
    </div>
  );
}

export default Heading;
