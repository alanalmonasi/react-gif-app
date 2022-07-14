import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from '../src/components/AddCategory'

describe('testing <AddCategory />', () => { 

   test('should change value of input', () => { 

      render(<AddCategory onNewValue={() => {}}/>);
      const input = screen.getByRole('textbox');
      fireEvent.input(input, { target: { value: 'Goku' } });

      expect(input.value).toBe('Goku')
      // screen.debug();

   });

   test('should call onNewValue if input has a value', () => { 
      
      const inputValue = 'GOKU';
      const onNewValue = jest.fn();

      render(<AddCategory onNewValue={onNewValue}/>);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);

      expect(input.value).toBe('');
      expect(onNewValue).toHaveBeenCalled();
      expect(onNewValue).toHaveBeenCalledWith(inputValue);

   });

   test('should not call onNewValue if input has no value', () => { 
      
      const onNewValue = jest.fn();

      render(<AddCategory onNewValue={onNewValue}/>);

      const form = screen.getByRole('form');
      
      fireEvent.submit(form);

      expect(onNewValue).toHaveBeenCalledTimes(0);

   });

});