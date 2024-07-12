
import { getDate, createDateils, getDatestorage } from "./functions.js";
const dateils = document.getElementById('dateils');



document.addEventListener('DOMContentLoaded', function() {
    const url = window.location.href;
    let id = url.split('id=')[1];
    
    if(!id) {
        window.location.assign('http://127.0.0.1:5500/index.html')
        return;
    }

    getDate(`https://strapi-store-server.onrender.com/api/products/${id}`)
          .then(data => {
            if(data.data.id) {
                const card = createDateils(data.data);
                dateils.innerHTML = card;

                const form = document.querySelector('form')
                const button = document.querySelector('button')
                const select = document.querySelector('select')

                form.addEventListener('submit', function(event) {
                     event.preventDefault();
                     let product = {
                            id: data.data.id,
                            time: Date.now(),
                            count: select.value,
                            attribute: data.data.attribute,
                     }
                     let products = getDatestorage();
                })
            }
          })
          .catch(err => {
            console.log(err);
          })
})

