import { string } from "prop-types";
import { getGifs } from "../src/helpers/getGifs";

describe('testing getGifs() helper', () => { 
   
   test('should return a gif array', async () => { 

      const gifs = await getGifs('cheems');

      expect(gifs.length).toBeGreaterThan(0);
      expect(gifs[0]).toEqual({
         id: expect.any(String),
         title: expect.any(String),
         url: expect.any(String)
      });
   })

});