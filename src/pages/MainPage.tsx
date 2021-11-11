import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianoOption } from '../constants/PianoOption';
import { pianobarList } from '../constants/PianoBarList';

const Container = styled.div`
  background-color: #e5eff8;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 800px;
  height: 400px;
`;

const PianoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const WhiteBar = styled.div`
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

const BlackBar = styled.div`
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

const MainPage: React.FC = () => {
  const piano = useMemo(() => new Tone.Sampler(pianoOption).toDestination(), []);

  const onBarClick = (note: Note) => {
    piano.triggerAttackRelease(note, 1);
  };

  return (
    <Container>
      <PianoContainer>
        {pianobarList.map(({ color, note }) => {
          if (color === 'white') {
            return <WhiteBar onClick={() => onBarClick(note)} />;
          }
          return <BlackBar onClick={() => onBarClick(note)} />;
        })}
      </PianoContainer>
    </Container>
  );
};

export default MainPage;
