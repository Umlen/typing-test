import { FunctionComponent } from 'react';

import './style/typography.css';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setIsTestStarted } from './redux/store/testSlice';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Test from './components/Test';
import ModalWindow from './components/ui/ModalWindow';
import Button from './components/ui/Button';

const App:FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isTestStarted = useAppSelector(state => state.testSlice.isTestStarted);

  const testStateToggler = () => dispatch(setIsTestStarted(true));

  return (
    <>
      <Header />
      <main className='container main'>
        {
          isTestStarted 
            ? <Test /> 
            : <ModalWindow title='Take a typing test'>
                <Button btnText='start' onClick={testStateToggler} />
              </ModalWindow>
        }
      </main>
      <Footer />
    </>
  );
};

export default App;
