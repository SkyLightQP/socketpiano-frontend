import styled from '@emotion/styled';

export const WhiteBar = styled.div`
  height: 16rem;
  width: 4rem;

  border: 1px solid #111111;
  border-radius: 0 0 5px 5px;
  background: #f1f1f1;

  cursor: pointer;
  z-index: 1;

  &:active {
    background: #ffffff;
  }

  &:first-child {
    border-top-left-radius: 5px;
  }

  &:last-child {
    border-top-right-radius: 5px;
  }
`;

export const BlackBar = styled.div`
  height: 10rem;
  width: 2rem;

  margin-right: -1rem;
  margin-left: -1rem;

  border: 1px solid #111111;
  background: #333333;

  cursor: pointer;
  z-index: 2;

  &:active {
    background: #222222;
  }
`;
