import { FunctionComponent } from 'react';

import '../style/test.css';

import Text from './Text';
import Stats from './Stats';

const Test:FunctionComponent = () => {
  return (
    <section className='test-container'>
      <Text />
      <Stats />
    </section>
  );
};

export default Test;
