import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianoOption } from '../constants/PianoOption';
import { pianobarList } from '../constants/PianoBarList';
import { BlackBar, WhiteBar } from '../components/PianoBar';

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
