import styled from 'styled-components';

export const Container = styled.aside`
  overflow-y: auto;
  height: 100%;
  width: 225px;
  background: var(--menu-color);
  color: var(--light-color);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainLogo = styled.div`
  height: 80px;
  background: var(--black-color);

  img {
    width: 100%;
    height: 80px;
  }
`;

export const ClientLogo = styled.div`
  height: 80px;
  background: var(--primaryDark-color);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: var(--white-color);
    font-size: 18px;
  }
`;

export const Nav = styled.ul`
  list-style: none;

  li {
    padding: 10px 20px;
    border-bottom: 1px solid;
    border-bottom-color: var(--menuBorderBottom-color);

    a {
      color: inherit;
      text-decoration: none;
      font-size: 14px;
      line-height: 60px;

      i {
        font-size: 20px;
        width: 35px;
      }
    }

    a.active {
      color: var(--menuTextHover-color);
    }

    &:hover {
      cursor: pointer;
      color: var(--menuTextHover-color);
    }

    &:last-child {
      border: none;
    }
  }
`;
