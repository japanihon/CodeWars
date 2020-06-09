/*

INSTRUCTION

You are taking a music class and you need to know what notes are on every fret of the guitar. There are six strings on the guitar and 18 frets. Given the name of the string, in STRING format ("E" "A" "D" "G" "B" and "e"), as well the fret in integer format (open note is 0), return the note.

We are going to use a music scale with only sharps and regular notes, so the 12 notes to know are: A, A#, B, C, C#, D, D#, E, F, F#, G, and G# (notice that B# and E# do not exist).

Moving up one fret goes one note up on the fretboard moves one note up the scale, so the open(0) note on E is E, the 1st fret note(1) is F, and the second fret note (2) is F#. You can find a picture of this here: http://takelessons.com/blog/wp-content/uploads/2014/01/guitar-fretboard.jpg

We're not concerned with octaves, so just return the note as a capital letter (C#, B, D, etc.)

*/

// SOLUTION

const whatNote = (string, fret) => {
  const notesOrderE = [
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#"
  ];
  const notesOrderB = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F"
  ];
  const notesOrderG = [
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#"
  ];
  const notesOrderD = [
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#"
  ];
  const notesOrderA = [
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#"
  ];
  const notesOrdere = [
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#"
  ];

  if (fret === 0) {
    return string.toUpperCase();
  }
  if (string === "E") {
    return notesOrderE[fret - 1];
  }
  if (string === "B") {
    return notesOrderB[fret - 1];
  }
  if (string === "G") {
    return notesOrderG[fret - 1];
  }
  if (string === "D") {
    return notesOrderD[fret - 1];
  }
  if (string === "A") {
    return notesOrderA[fret - 1];
  }
  if (string === "e") {
    return notesOrdere[fret - 1];
  }
};
