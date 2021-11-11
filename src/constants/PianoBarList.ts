import { Note } from 'tone/build/esm/core/type/NoteUnits';

interface ListType {
  readonly color: 'white' | 'black';
  readonly note: Note;
}

export const pianobarList: ListType[] = [
  {
    color: 'white',
    note: 'C4'
  },
  {
    color: 'black',
    note: 'C#4'
  },
  {
    color: 'white',
    note: 'D4'
  },
  {
    color: 'black',
    note: 'D#4'
  },
  {
    color: 'white',
    note: 'E4'
  },
  {
    color: 'white',
    note: 'F4'
  },
  {
    color: 'black',
    note: 'F#4'
  },
  {
    color: 'white',
    note: 'G4'
  },
  {
    color: 'black',
    note: 'G#4'
  },
  {
    color: 'white',
    note: 'A4'
  },
  {
    color: 'black',
    note: 'A#4'
  },
  {
    color: 'white',
    note: 'B4'
  },
  {
    color: 'white',
    note: 'C5'
  }
];
