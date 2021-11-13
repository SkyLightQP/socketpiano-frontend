import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianoOption } from '../constants/PianoOption';
import Menu from '../components/Menu';
import Piano from '../components/Piano';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const PianoContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
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
        <Piano onBarClick={onBarClick} />
      </PianoContainer>

      <Menu onVolumeChange={onVolumeChange} />
    </Container>
  );
};

export default MainPage;
