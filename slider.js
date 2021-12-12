const list_of_images = [
  'images/4.png',
  'images/3.jpg',
  'images/1.jpg',
  'images/2.png',
]



const image_cont = document.createElement('div');
document.body.appendChild(image_cont);
image_cont.className = 'image_cont';




// Turns urls into image els on page so that they all load when the page loads.

const list_of_els = [];

for (let i=0; i<list_of_images.length; i++) {
  const el = document.createElement('div');
  el.className = 'image';

  image_cont.appendChild(el);
  el.style.backgroundImage = "url(" + list_of_images[i] + ")";
  list_of_els[i] = el;
}


let is_image_cont_clicked = false;
image_cont.addEventListener('pointerdown', function () {is_image_cont_clicked = true});
window.addEventListener('pointerup', function () {is_image_cont_clicked = false});





// Animates images

let i = 0;
let previous_image = null;

window.setInterval(
  function () {
    if (is_image_cont_clicked) return;

    list_of_els[i].style.display = 'block';
    if (previous_image != null) {
      previous_image.style.display = 'none';
    }

    previous_image = list_of_els[i];
    i = (i + 1) % list_of_els.length;
  },
  200
);

