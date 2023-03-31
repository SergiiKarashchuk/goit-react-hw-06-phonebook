import styled from 'styled-components';

export const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
  padding: 5px 10px;
  color: black;
  background: yellow;

  }
  & button {
    margin-left: auto;
    padding: 5px;
  }
`;

export const Name = styled.span`
  font-size: 20px;
`;
export const Number = styled.span`
  font-size: 20px;
  color: black;
`;
