import { render, screen } from "@testing-library/react"
import { GifItem } from "../src/components/GifItem"

describe('Testing the snapshot', () => { 
   
   const title = 'Simpons'
   const url = 'https://thesimpson.com/'

   test('should be the same as expected', () => { 
      
      const { container } = render(<GifItem title={title} url={url}/>);

      expect(container).toMatchSnapshot();

   });

   test('should show url and alt given', () => { 

      render(<GifItem title={title} url={url}/>);

      // expect(screen.getByRole('img').src).toBe(url);
      // expect(screen.getByRole('img').alt).toBe(title);
      const { src, alt } = screen.getByRole('img');

      expect(src).toBe(url);
      expect(alt).toBe(title);

   });

   test('should show component title', () => { 
   
      render(<GifItem title={title} url={url}/>);
      expect(screen.getByText(title)).toBeTruthy();

   })
})