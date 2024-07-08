
import { getDate, createCard } from "./functions.js";

const wrapper = document.getElementById('wrapper');



document.addEventListener('DOMContentLoaded', function() {
    getDate("https://strapi-store-server.onrender.com/api/products")
       .then(data => {
           loader.style.display = 'none'
           data.data.length > 0 && data.data.forEach(product => {
              let card = createCard(product);
              wrapper.innerHTML += card
           });
          const cards = document.querySelectorAll('.card')
          cards.length > 0 && cards.forEach(function(card) {
            card.addEventListener('click', function(event) {
                const cardId = this.getAttribute('data-id');
                if(cardId) {
                    window.location.assign(`http://127.0.0.1:5500/pages/details.html?id=${cardId}`)
                }
            })
          })


       })
       .catch(err => {
           console.log(err)
       })
})
