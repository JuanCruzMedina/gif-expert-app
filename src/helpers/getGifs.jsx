
export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY || '';
  if (!apiKey) {
    console.log('Giphy API Key not found');
    return [];
  }
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((image) => ({
    id: image.id,
    title: image.title,
    url: image.images.downsized_medium.url,
  }));
  return gifs;
};
