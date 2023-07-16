import { ComponentPropsWithoutRef } from 'react';

import '../../style/ui/select.css';

interface SelectProps extends ComponentPropsWithoutRef<'select'> {
  defaultValue: string;
  options: {
    value: string,
    name: string
  }[];
}

const Select:React.FC<SelectProps> = ( {defaultValue, options, ...props} ) => {
  return (
    <select 
      className='uppercase-text paragraph select'
      defaultValue={defaultValue}
      {...props}
    >
      {
        options.map(option => {
          return (
            <option 
              key={option.value} 
              value={option.value} 
            >
              {option.name}
            </option>
          );
        })
      }
    </select>
  );
};

export default Select;
