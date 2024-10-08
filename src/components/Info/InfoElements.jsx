import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: auto; /* Adjusted to accommodate varying content height */
  width: 100%;
  max-width: 2000px; /* Reduced width slightly to allow better centering */
  margin-right: 0px;
  margin-left: 0px;
  padding: 0 0;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: 1fr 1fr; /* Explicitly define the grid columns */
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    grid-auto-columns: 1fr; /* Ensure full width on smaller screens */
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-top: 45px;
  padding: 0 15px;
  grid-area: col1;
  max-width: 1200px; /* Increased the maximum width */
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  max-width: 800px;
`;

export const TextWrapper = styled.div`
  max-width: 600px; /* Increased the maximum width to match the Column1 */
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.5;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 600px; /* Increased max-width to allow more text wrapping space */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Skills = styled.div`
  max-width: 600px; /* Match the width to the rest of the text elements */
  margin-bottom: 35px;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
  white-space: pre-wrap;
  padding-left: 1rem;
`;
