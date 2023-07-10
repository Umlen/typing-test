import { FunctionComponent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchText, setText, setCurrentCharIndex } from '../redux/store/textSlice';

import { getCurrentChar, compareChars } from '../helpers/charTransform';

const Text:FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(state => state.textSlice.text);
  const isLoading = useAppSelector(state => state.textSlice.isLoading);
  const error = useAppSelector(state => state.textSlice.error);
  const currentCharIndex = useAppSelector(state => state.textSlice.currentCharIndex);

  useEffect(() => {
    dispatch(fetchText('1'));
  }, [dispatch]);

  useEffect(() => {
    const newText = getCurrentChar(text, currentCharIndex);
    dispatch(setText(newText));
  }, [currentCharIndex]);

  useEffect(() => {
    function keyPressHandler(event: KeyboardEvent) {
      const [newText, newCurrentIndex] = compareChars(text, currentCharIndex, event.key);
      
      if (newCurrentIndex <= text.length) {
        dispatch(setCurrentCharIndex(newCurrentIndex));
        dispatch(setText(newText));
      }
    }

    document.addEventListener('keypress', keyPressHandler);

    return () => {
      document.removeEventListener('keypress', keyPressHandler);
    };
  }, [text]);

  return (
    <div className='test-text-wrapper'>
      {
        error && 
          <p className='error-text'>{error}</p>
      }
      {
        isLoading 
          ? <p className='test-loading-text'>Loading text...</p>
          : <div>
              {
                text.map((item, index) => {
                  return (
                    <span className={item.class} key={index}>
                      {item.char}
                    </span>
                  )
                })
              }
            </div> 
      }
    </div>
  );
};

export default Text;
