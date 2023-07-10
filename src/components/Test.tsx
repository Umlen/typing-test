import { FunctionComponent } from 'react';

import '../style/test.css';

import Text from './Text';

const Test:FunctionComponent = () => {
  return (
    <section className='test-container'>
      <Text />
    </section>
  );
};

export default Test;
