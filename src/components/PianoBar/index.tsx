import styled from '@emotion/styled';

const WHITE_WIDTH = 2.2;

export const WhiteBar = styled.div`
  height: 12rem;
  width: ${WHITE_WIDTH}rem;

  border: 1px solid #949494;
  border-right: none;
  border-radius: 0 0 5px 5px;
  background: #f1f1f1;

  cursor: pointer;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: flex-end;

  font-size: 14px;
  padding-bottom: 4px;

  &:active {
    background: #ffffff;
  }

  &:first-of-type {
    border-top-left-radius: 5px;
  }

  &:last-of-type {
    border-right: 1px solid #949494;
    border-top-right-radius: 5px;
  }
`;

export const BlackBar = styled.div`
  height: 8rem;
  width: ${WHITE_WIDTH / 2}rem;

  margin-right: -${WHITE_WIDTH / 4}rem;
  margin-left: -${WHITE_WIDTH / 4}rem;

  border: 1px solid #111111;
  background: #333333;

  cursor: pointer;
  z-index: 2;

  &:active {
    background: #222222;
  }
`;
