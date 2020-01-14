import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LanguageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin-bottom: 20px;
`;

export const ButtonLanguage = styled.button`
  padding: 10px;
  background-color: ${props => (props.active ? '#24ab24ee' : '#3e3e3e')};
  color: #fff;
  border: none;
  cursor: pointer;
`;
