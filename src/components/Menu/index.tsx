import React from 'react';
import styled from '@emotion/styled';

const MenuContainer = styled.div`
  width: 100vw;
  height: 200px;

  padding: 2rem;

  background-color: #e3e3e3;

  & > div {
    margin-bottom: 8px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > span {
    width: 80px;
    margin-right: 4px;
  }
`;

interface MenuProps {
  readonly onVolumeChange?: (vol: number) => void;
}

const Menu: React.FC<MenuProps> = ({ onVolumeChange }) => {
  return (
    <MenuContainer>
      <Field>
        <span>내 소리</span>
        <input
          type="range"
          min="-10"
          max="10"
          defaultValue={0}
          step={1}
          onChange={(e) => onVolumeChange && onVolumeChange(Number(e.target.value))}
        />
      </Field>

      <Field>
        <span>상대방 소리</span>
        <input type="range" min="-10" max="10" defaultValue={0} step={1} disabled />
      </Field>
    </MenuContainer>
  );
};

Menu.defaultProps = {
  onVolumeChange: undefined
};

export default Menu;
