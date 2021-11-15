import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianoOption } from '../constants/PianoOption';
import Menu from '../components/Menu';
import Piano from '../components/Piano';
import usePianoKey from '../hooks/usePianoKey';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  &:focus {
    outline: none;
  }
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
  const onKeyDown = usePianoKey((note) => {
    piano.triggerAttackRelease(note, 1);

    const ele = document.getElementById(note);
    if (!ele) return;
    ele.classList.add('active');
  });
  const onKeyUp = usePianoKey((note) => {
    const ele = document.getElementById(note);
    if (!ele) return;
    ele.classList.remove('active');
  });

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
    <Container tabIndex={0} onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
      <PianoContainer>
        <Piano onBarClick={onBarClick} />
      </PianoContainer>

      <Menu onVolumeChange={onVolumeChange} />
    </Container>
  );
};

export default MainPage;
