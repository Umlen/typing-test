import { FunctionComponent } from 'react';

import '../../style/ui/modal.css';

type ModalWindowProps = {
  children: JSX.Element | JSX.Element[];
  title: string;
};

const ModalWindow:FunctionComponent<ModalWindowProps> = ( {children, title} ) => {
  return (
    <div className='modal-window-blackout'>
      <div className='modal-window'>
        <h2 className='big-header modal-window-text'>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
