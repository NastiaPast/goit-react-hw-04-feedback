import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;
export const Button = styled.button`
  display: inline-block;
  border: none;
  border-radius: 4px;
  font-family: inherit;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  min-width: 73px;
  padding: 10px 32px;
  font-weight: 500;
  line-height: 1.62;
  background-color: #96c5c3;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #7918e8;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
      0px 2px 2px rgba(0, 0, 0, 0.12);
    color: white;
  }
`;
