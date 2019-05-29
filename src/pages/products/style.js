import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 22px 95px;
  overflow-y: auto;

  /* Extra small devices (phones, less than 768px) */
  @media (max-width: 768px) {
    padding: 22px 30px;
  }

  h1 {
    color: var(--white-color);
  }
  img {
    width: 100%;
    height: 200px;
  }
  h2 {
    color: var(--white-color);
    margin-bottom: 15px;
  }

  .line-last {
    border-bottom: none;
  }
`;

export const BoxContainer = styled.div`
  margin-bottom: 30px;
  background-color: var(--menu-color);

  h3 {
    color: var(--white-color);
    font-weight: bold;
    margin-bottom: 10px;
  }

  i {
    font-size: 16px;
    margin-right: 5px;
  }
  .infos {
    color: var(--dark-color);
    font-style: italic;
    font-size: 12px;
  }
  .detalhes {
    color: var(--white-color);
    font-size: 12px;
  }
`;

export const LineContainer = styled.div`
  margin-bottom: 30px;
  border-bottom: 1px solid;
  border-bottom-color: var(--secundary-color);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  button {
    border-radius: 0px;
    margin-bottom: 0px;
  }
`;
