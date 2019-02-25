import ImageService from "./image-service.js";

const _is = new ImageService()

function drawImage() {
    //need to get the imageUrl from the service
    let image = _is.ImageUrl
    //then need to set that url equal to the style.backgroundImage of an element on the DOM
    document.body.style.backgroundImage =  `url(${image})`
}

export default class ImageController {
constructor() {
    _is.getimage()
    //add the drawImage function as a subscriber of the image in the service
    _is.addSubscribers('image', drawImage)
}

}

