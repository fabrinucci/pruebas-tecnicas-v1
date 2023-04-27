
export const getImages = (firstThreeWords) => {
  return fetch(`https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`)
  .then(res => res.json())
  .then(data => {
    return data.url;
  })
}