const keyMy = '19837116 - a8a4c21810fe9d1bcba52e72d';
function fotofeth(searchQuery) {
  return fetch(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}=${pageNunber}&per_page=12&key=keyMy/`,
  ).then(res => res.json());
}

export default { fotofeth };
