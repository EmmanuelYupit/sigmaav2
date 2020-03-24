import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  /* z-index: 1; */
  background-color: white;
  transition: 0.3s;
  width: 1000px;
  text-align: center;
  border-radius: 5px;
  margin: auto;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  width: 700px;
  padding: 2px 16px;
  margin-top: 5%;
`;

export const LoginTitle = styled.h2`
  font-family: 'Convergence', sans-serif;
  color: #707070;
`;

export const ImgCard = styled.img`
  width: 600px;
  height: 400px;
  border-radius: 5px 0px 0px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

export const ImgLittleCard = styled.img`
  display: flex;
  padding: 0px 0px 15px 0px;
  text-align: center;
  margin: auto;
`;
