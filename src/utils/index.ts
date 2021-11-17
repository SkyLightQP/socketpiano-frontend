const KoreanNoteMap: Record<string, string> = {
  C: '도',
  D: '레',
  E: '미',
  F: '파',
  G: '솔',
  A: '라',
  B: '시'
};

export const getKoreanNoteByEnglish = (note: string): string => {
  const english = note.replaceAll(/[^a-zA-Z]/g, '');
  return KoreanNoteMap[english] ?? '알수없음';
};
