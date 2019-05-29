import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 95px;
  overflow-y: auto;

  h1 {
    color: var(--white-color);
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  border-bottom: 1px solid;
  border-bottom-color: var(--secundary-color);

  .row {
    margin: 0px;
  }
  div[class^='col'] {
    padding: 0px;
  }

  img {
    width: 100%;
  }
`;

export const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  height: 100%;
`;

export const ProductDetailsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;

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

export const SideDishContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 12px;

  color: var(--white-color);

  .orderCurrency {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .orderCurrencylabel {
    font-size: 20px;
  }
  .orderCurrencyValue {
    font-size: 30px;
    font-weight: bold;
  }
`;

export const SeeMoreContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  /* background-color: yellow; */
`;
