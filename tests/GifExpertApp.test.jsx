import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp'

describe('testing GifExpertApp', () => {

   const inputValue = 'GOKU';

   test('h1 should exist', () => {

      render(<GifExpertApp />)

      const h1 = screen.getByRole('heading', { level: 1 });

      expect(h1.innerHTML).toBe('My GifExpertApp');

   });

   test('should match the snapshot', () => {

      const { container } = render(<GifExpertApp />);

      expect(container).toMatchSnapshot();
   });

   test('should show input.value on DOM with value we are passing', () => {
      
      render(<GifExpertApp />)

      const input = screen.getByRole('textbox');
      fireEvent.input(input, { target: { value: inputValue } });

      expect(input.value).toBe('GOKU')

      //screen.debug();
   });

   test('should addCategory and match the input', () => {
      render(<GifExpertApp />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);
      
      expect(screen.getByRole('heading', { level: 3})).toBeTruthy();
      expect(screen.getByRole('heading', { level: 3}).innerHTML).toBe(inputValue);
   });

   test('should add category if it doesnt exist', () => {
      render(<GifExpertApp />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);

      fireEvent.input(input, { target: { value: 'CHEEMS' } });
      fireEvent.submit(form);

      const item = screen.getAllByRole('heading', { level: 3 }).length;

      expect(item).toBeGreaterThan(1);

      //screen.debug();
   });

   test('should not add category if it already exists', () => {
      render(<GifExpertApp />);

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);
      
      fireEvent.input(input, { target: { value: 'MIKASA' } });
      fireEvent.submit(form);

      fireEvent.input(input, { target: { value: inputValue } });
      fireEvent.submit(form);

      //screen.debug();

      const items = screen.getAllByRole('heading', { level: 3 });

      expect(items.length).toBe(2);
   })
});