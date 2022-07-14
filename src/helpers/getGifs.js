export const getGifs = async(category) => {
   const url = `https://api.giphy.com/v1/gifs/search?api_key=x7aJ3Yn4hCzvnCS7PLZFmKlVBL93hxUJ&q=${category}&limit=20`;
   const response = await fetch(url);
   const { data } = await response.json();

   const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
   }));

   return gifs;
}