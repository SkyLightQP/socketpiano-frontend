import React from 'react';
import styled from '@emotion/styled';
import { Note } from 'tone/build/esm/core/type/NoteUnits';
import { pianobarList } from '../../constants/PianoBarList';
import { BlackBar, WhiteBar } from '../PianoBar';
import { getKoreanNoteByEnglish } from '../../utils';

const StyledPiano = styled.div`
  display: flex;
  flex-direction: row;
`;

interface PianoProps {
  readonly onBarClick?: (note: Note) => void;
}

const Piano: React.FC<PianoProps> = ({ onBarClick }) => {
  return (
    <StyledPiano>
      {pianobarList.map(({ color, note }) => {
        if (color === 'white') {
          return (
            <WhiteBar id={note} key={`white-${note}`} onClick={() => onBarClick && onBarClick(note)}>
              {getKoreanNoteByEnglish(note)}
            </WhiteBar>
          );
        }
        return <BlackBar id={note} key={`black-${note}`} onClick={() => onBarClick && onBarClick(note)} />;
      })}
    </StyledPiano>
  );
};

Piano.defaultProps = {
  onBarClick: undefined
};

export default Piano;
