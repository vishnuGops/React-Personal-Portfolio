import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 100px 0 50px 0;

  @media screen and (max-width: 768px) {
    height: fit-content;
  }

  @media screen and (max-width: 480px) {
    height: fit-content;
  }
`;
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;
export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  max-height: fit-content;
  min-height: 920px;
  padding: 50px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ServicesH2 = styled.h2`
  font-size: 1rem;
  color: #010606;
  margin-bottom: 10px;
`;

export const ServicesH3 = styled.h2`
  font-size: 0.85rem;
  font-weight: 600;
  color: #010606;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  color: #010606;
  text-align: center;
`;

export const ServicesDesc = styled.ul`
  font-size: 1rem;
  margin-top: 20px;
  color: #010606;
  text-align: center;
`;
