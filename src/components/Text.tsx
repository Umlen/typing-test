import { FunctionComponent, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchText } from '../redux/store/textSlice';

const Text:FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const text = useAppSelector(state =>state.textSlice.text);
  const isLoading = useAppSelector(state => state.textSlice.isLoading);
  const error = useAppSelector(state => state.textSlice.error);

  useEffect(() => {
    dispatch(fetchText('4'));
  }, [dispatch]);

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