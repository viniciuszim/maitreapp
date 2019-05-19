import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  /* flex-direction: row; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around;
  align-content: flex-start; */
  /* padding: 20px 20px; */
  padding: 30px 100px 30px 0px;
  overflow: scroll;
  height: 100%;

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    padding: 20px 20px;
  }

  img {
    width: 100%;
    height: 300px;
    margin-bottom: 10px;
  }
  h2 {
    color: var(--white-color);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 360px;
  margin-bottom: 30px;
`;
