export const artist = (artistObj) => {
    return `
      <ul class="artist-list">
      <li class="artist-name"><strong>Name:</strong> ${artistObj.name}</li>
      <li class="artist-age"><strong>Age:</strong> ${artistObj.age}</li>
      <li class="artist-genre"><strong>Genre:</strong> ${artistObj.genre}</li>
      </ul>
    `
}
