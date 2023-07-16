import { FunctionComponent } from 'react';

import './style/typography.css';

import { useAppSelector, useAppDispatch } from './redux/hooks';
import { setIsTestStarted, setSentences } from './redux/store/testSlice';

import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Test from './components/Test';
import ModalWindow from './components/ui/ModalWindow';
import Button from './components/ui/Button';
import Select from './components/ui/Select';

const App:FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const isTestStarted = useAppSelector(state => state.testSlice.isTestStarted);
  const sentences = useAppSelector(state => state.testSlice.sentences);
  const sentencesOptions = [
    {value: '1', name: '1'},
    {value: '2', name: '2'},
    {value: '3', name: '3'},
    {value: '4', name: '4'},
    {value: '5', name: '5'},
  ];

  const testStateToggler = () => dispatch(setIsTestStarted(true));
  const changeSentences = (value: string) => dispatch(setSentences(value));

  return (
    <>
      <Header />
      <main className='container main'>
        {
          isTestStarted 
            ? <Test /> 
            : <ModalWindow title='Take a typing test'>
                <label className='paragraph' htmlFor='select-senteces'>
                  Choose number of sentences
                </label>
                <Select 
                  id='select-senteces'
                  defaultValue={sentences} 
                  options={sentencesOptions} 
                  onChange={(event) => changeSentences(event.target.value)}
                />
                <Button btnText='start' onClick={testStateToggler} />
              </ModalWindow>
        }
      </main>
      <Footer />
    </>
  );
};

export default App;
