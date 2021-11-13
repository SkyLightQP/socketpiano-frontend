import React, { KeyboardEvent, useMemo } from 'react';
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

  const onKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    switch (e.key.toLowerCase()) {
      case 'a':
        onBarClick('C4');
        break;
      case 's':
        onBarClick('D4');
        break;
      case 'd':
        onBarClick('E4');
        break;
      case 'f':
        onBarClick('F4');
        break;
      case 'g':
        onBarClick('G4');
        break;
      case 'h':
        onBarClick('A4');
        break;
      case 'j':
        onBarClick('B4');
        break;
      case 'k':
        onBarClick('C5');
        break;
      case 'l':
        onBarClick('D5');
        break;
      case ';':
        onBarClick('E5');
        break;
      case "'":
        onBarClick('F5');
        break;
      default:
        break;
    }
  };

  return (
    <Container tabIndex={0} onKeyDown={onKeyPress}>
      <PianoContainer>
        <Piano onBarClick={onBarClick} />
      </PianoContainer>

      <Menu onVolumeChange={onVolumeChange} />
    </Container>
  );
};

export default MainPage;
