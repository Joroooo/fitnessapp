import api from './api.js';

function getAllOffers() {
    return fetch(api.offers)
    .then(res => res.json())
 //   .then(returnedOffers => {
  //      this.setState(() => ({returnedOffers: this.state.offers}));
 //   })
    .catch(err => console.log(err));
}

export default {
    getAllOffers,
}
