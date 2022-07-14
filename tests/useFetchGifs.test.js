import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../src/hooks/useFetchGifs'

describe('testing hook useFetchGif', () => { 

   test('should return initial state', () => {

      const { result } = renderHook(() => useFetchGifs('GOKU'));
      const { images, isLoading } = result.current;
      
      expect(images.length).toBe(0);
      expect(isLoading).toBe(true);
   });

   test('should return images array and isLoading false', async () => {

      const { result } = renderHook(() => useFetchGifs('GOKU'));

      await waitFor(
         () => expect(result.current.images.length).toBeGreaterThan(0)
      );
      
      const { images, isLoading } = result.current;

      expect(images.length).toBeGreaterThan(0);
      expect(isLoading).toBe(false);

   });
});