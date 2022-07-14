import { render, screen } from '@testing-library/react';
import { GifGrid } from '../src/components/GifGrid'
import { useFetchGifs } from '../src/hooks/useFetchGifs';

jest.mock('../src/hooks/useFetchGifs');

describe('testing GifGrid component', () => { 

   const category = 'GOKU';
   
   test('should show loading', () => { 
      
      useFetchGifs.mockReturnValue({
         images: [],
         isLoading: true,
      });

      render( <GifGrid category={category}/>)
      screen.debug();

      expect(screen.getByText('Cargando gifs...'));
      expect(screen.getByText(category)).toBeTruthy();
   });

   test('should show items when use useFetchGifs', () => { 

      const gifs = [
         {
            id: 'abc',
            title: 'goku',
            url: 'https://www.google.com/'
         },
         {
            id: 'abcd',
            title: 'krilin',
            url: 'https://www.google.com/'
         }
   ];

      useFetchGifs.mockReturnValue({
         images: gifs,
         isLoading: false,
      });
      
      const { container } = render(<GifGrid category={category}/>);
      expect(screen.getAllByRole('img').length).toBe(2);
      expect(container).toMatchSnapshot();
   });

});