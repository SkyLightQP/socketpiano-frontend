import styled from '@emotion/styled';

type ColorProps<T> = T extends string ? `#${T}` : never;

const Background = styled.div<{ color: ColorProps<string> }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: ${({ color }) => color};

  z-index: -10;
`;

export default Background;
