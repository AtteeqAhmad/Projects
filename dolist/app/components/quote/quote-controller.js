import QuoteService from "./quote-service.js";

let _qs = new QuoteService()

function drawquote() {
      let template = ''
      let quote = _qs.Quote
      document.getElementById('quote').innerHTML = quote.body
}

export default class QuoteController {
      constructor() {
            _qs.getquote()
            _qs.addSubscriber('quote', drawquote)
      }
}
