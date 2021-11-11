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
  flex-direction: column;

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

  const onVolumeChange = (vol: number) => {
    if (vol <= -10) {
      piano.volume.value = -100;
      return;
    }

    piano.volume.value = vol;
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
      <br />
      <input
        type="range"
        min="-10"
        max="10"
        defaultValue={0}
        step={1}
        onChange={(e) => onVolumeChange(Number(e.target.value))}
      />
    </Container>
  );
};

export default MainPage;
