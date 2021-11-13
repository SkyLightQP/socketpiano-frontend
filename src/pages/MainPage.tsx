import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import * as Tone from 'tone';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianoOption } from '../constants/PianoOption';
import { pianobarList } from '../constants/PianoBarList';
import { BlackBar, WhiteBar } from '../components/PianoBar';
import { getKoreanNoteByEnglish } from '../Util';

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

const Piano = styled.div`
  display: flex;
  flex-direction: row;
`;

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
        <Piano>
          {pianobarList.map(({ color, note }) => {
            if (color === 'white') {
              return (
                <WhiteBar key={`white-${note}`} onClick={() => onBarClick(note)}>
                  {getKoreanNoteByEnglish(note)}
                </WhiteBar>
              );
            }
            return <BlackBar key={`black-${note}`} onClick={() => onBarClick(note)} />;
          })}
        </Piano>
      </PianoContainer>
      <MenuContainer>
        <Field>
          <span>내 소리</span>
          <input
            type="range"
            min="-10"
            max="10"
            defaultValue={0}
            step={1}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
          />
        </Field>

        <Field>
          <span>상대방 소리</span>
          <input type="range" min="-10" max="10" defaultValue={0} step={1} disabled />
        </Field>
      </MenuContainer>
    </Container>
  );
};

export default MainPage;
