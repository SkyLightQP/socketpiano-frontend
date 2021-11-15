import { KeyboardEvent } from 'react';
import { Note } from 'tone/build/esm/core/type/NoteUnits';

const usePianoKey =
  (callback: (note: Note) => void) =>
  (e: KeyboardEvent<HTMLDivElement>): void => {
    switch (e.key.toLowerCase()) {
      case 'a':
        callback('C4');
        break;
      case 's':
        callback('D4');
        break;
      case 'd':
        callback('E4');
        break;
      case 'f':
        callback('F4');
        break;
      case 'g':
        callback('G4');
        break;
      case 'h':
        callback('A4');
        break;
      case 'j':
        callback('B4');
        break;
      case 'k':
        callback('C5');
        break;
      case 'l':
        callback('D5');
        break;
      case ';':
        callback('E5');
        break;
      case "'":
        callback('F5');
        break;
      case 'q':
        callback('C#4');
        break;
      case 'w':
        callback('D#4');
        break;
      case 'r':
        callback('F#4');
        break;
      case 't':
        callback('G#4');
        break;
      case 'y':
        callback('A#4');
        break;
      case 'i':
        callback('C#5');
        break;
      case 'o':
        callback('D#5');
        break;
      default:
        break;
    }
  };

export default usePianoKey;
