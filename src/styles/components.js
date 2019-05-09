import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const LoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-content: flex-end;
  align-items: center;
  padding: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;

  button {
    margin: 16px 20px !important;
  }
`;

export const Input = styled.input.attrs({
  type: 'text',
  value: props => (props.value ? props.value : ''),
  onChange: props => (props.onChange ? props.onChange : () => {}),
})`
  flex: ${props => (props.small ? 0.2 : 1)};
  height: 30px;
  border-radius: 3px;
  border: 1px solid var(--secundary-color);
  display: block;
  margin-right: ${props => (props.small ? '20px' : 0)};

  ::placeholder {
    color: var(--secundary-color);
  }
`;
