import { TextType } from '../types/types';

type GetCurrentCharType = (
  charsArray: TextType[], 
  currentIndex: number
) => TextType[];

type CompareCharsType = (
  charsArray: TextType[], 
  currentIndex: number,
  pressedKey: string,
  mistakes: number,
) => [
  resultArr: TextType[],
  currentIndex: number,
  mistakes: number
];

type restoreTextType = (
  charsArray: TextType[], 
) => TextType[];

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

export const compareChars: CompareCharsType = (charsArray, currentIndex, pressedKey, mistakes) => {
  let newCurrentIndex = currentIndex;
  let newMistakes = mistakes;

  const resultArr = charsArray.map((item, index) => {
    if (index === currentIndex && item.char === pressedKey) {
      newCurrentIndex += 1;
      return {
        ...item,
        class: 'right-char'
      };
    } else if (index === currentIndex && item.char !== pressedKey) {
      newMistakes += 1;
      return {
        ...item,
        class: 'wrong-char'
      };
    }

    return item;
  });

  return [resultArr, newCurrentIndex, newMistakes];
};

export const restoreText: restoreTextType = (charsArray) => {
  return charsArray.map((item, index) => {
    if (index === 0) {
      return {
        ...item,
        class: 'current-char'
      };
    }

    return {
      ...item,
      class: ''
    };
  });
};
