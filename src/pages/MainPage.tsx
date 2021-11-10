import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';

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

const pianoOption = {
  urls: {
    A0: 'A0.mp3',
    C1: 'C1.mp3',
    'D#1': 'Ds1.mp3',
    'F#1': 'Fs1.mp3',
    A1: 'A1.mp3',
    C2: 'C2.mp3',
    'D#2': 'Ds2.mp3',
    'F#2': 'Fs2.mp3',
    A2: 'A2.mp3',
    C3: 'C3.mp3',
    'D#3': 'Ds3.mp3',
    'F#3': 'Fs3.mp3',
    A3: 'A3.mp3',
    C4: 'C4.mp3',
    'D#4': 'Ds4.mp3',
    'F#4': 'Fs4.mp3',
    A4: 'A4.mp3',
    C5: 'C5.mp3',
    'D#5': 'Ds5.mp3',
    'F#5': 'Fs5.mp3',
    A5: 'A5.mp3',
    C6: 'C6.mp3',
    'D#6': 'Ds6.mp3',
    'F#6': 'Fs6.mp3',
    A6: 'A6.mp3',
    C7: 'C7.mp3',
    'D#7': 'Ds7.mp3',
    'F#7': 'Fs7.mp3',
    A7: 'A7.mp3',
    C8: 'C8.mp3'
  },
  release: 10,
  baseUrl: 'https://tonejs.github.io/audio/salamander/'
};

const MainPage: React.FC = () => {
  const piano = useMemo(() => new Tone.Sampler(pianoOption).toDestination(), []);

  const onBarClick = (note: Note) => {
    piano.triggerAttackRelease(note, 1);
  };

  return (
    <Container>
      <PianoContainer>
        <WhiteBar onClick={() => onBarClick('C4')} />
        <BlackBar onClick={() => onBarClick('C#4')} />
        <WhiteBar onClick={() => onBarClick('D4')} />
        <BlackBar onClick={() => onBarClick('D#4')} />
        <WhiteBar onClick={() => onBarClick('E4')} />
        <WhiteBar onClick={() => onBarClick('F4')} />
        <BlackBar onClick={() => onBarClick('F#4')} />
        <WhiteBar onClick={() => onBarClick('G4')} />
        <BlackBar onClick={() => onBarClick('G#4')} />
        <WhiteBar onClick={() => onBarClick('A4')} />
        <BlackBar onClick={() => onBarClick('A#4')} />
        <WhiteBar onClick={() => onBarClick('B4')} />
        <WhiteBar onClick={() => onBarClick('C5')} />
      </PianoContainer>
    </Container>
  );
};

export default MainPage;
