import { TextType } from '../types/types';

type GetCurrentCharType = (
  charsArray: TextType[], 
  currentIndex: number
) => TextType[];

type CompareCharsType = (
  charsArray: TextType[], 
  currentIndex: number,
  pressedKey: string
) => [
  resultArr: TextType[],
  currentIndex: number,
];

export const getCurrentChar: GetCurrentCharType = (charsArray, currentIndex) => {
  return charsArray.map((item, index) => {
    if (index === currentIndex) {
      return {
        ...item,
        class: 'current-char'
      };
    }

    return item;
  });
};

export const compareChars: CompareCharsType = (charsArray, currentIndex, pressedKey) => {
  let newCurrentIndex = currentIndex;

  const resultArr = charsArray.map((item, index) => {
    if (index === currentIndex && item.char === pressedKey) {
      newCurrentIndex += 1;
      return {
        ...item,
        class: 'right-char'
      };
    } else if (index === currentIndex && item.char !== pressedKey) {
      return {
        ...item,
        class: 'wrong-char'
      };
    }

    return item;
  });

  return [resultArr, newCurrentIndex];
};
