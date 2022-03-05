import { getArtist } from "./artist-data.js";
import { artist } from "./artist.js";

export const artistList = () => {
  let bluegrassArtistContent = document.querySelector(".chatten")
  let funkArtistContent = document.querySelector(".jumpstop")
  let popArtistContent = document.querySelector(".polar")
  const allArtists = getArtist()

  let bluegrassArtistHTMLRep = ''
  let funkArtistHTMLRep = ''
  let popArtistHTMLRep = ''
  
  for (const art of allArtists) {
    if (art.genre === 'Funk' || art.genre === 'Rap')
    {
      funkArtistHTMLRep += artist(art);
    }
    else if (art.genre === 'Country' || art.genre === 'Bluegrass')
    {
      bluegrassArtistHTMLRep += artist(art)
    }
    else if (art.genre === 'Pop')
    {
      popArtistHTMLRep += artist(art)
    }
  }
  funkArtistContent.innerHTML += `${funkArtistHTMLRep}`
  bluegrassArtistContent.innerHTML += `${bluegrassArtistHTMLRep}`
  popArtistContent.innerHTML += `${popArtistHTMLRep}`
}
