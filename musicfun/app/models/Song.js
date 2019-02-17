export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "250x250")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }
    getTemplate() {
        return `
        <div class="col-12 col-md-3">

        <div class="card">
  <img class="card-img-top" src="..." alt="">
  <div class="card-body">
  <audio controls>
  <source src="${this.preview}" type="audio/mpeg">
  </audio>
    <p class="card-text"></p>

    </div>
    <img src="${this.albumArt}">
    <p class="this.title">${this.title}</p>
    <p class="this.collection">${this.collection}</p>
    <p class="this.artist">${this.artist}</P>
    <P class="this.price">${this.price}</p>
        </div>
        </div>
        `
    }
}