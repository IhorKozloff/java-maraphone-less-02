const item = document.querySelector('.item');
const places = document.querySelectorAll('.placeholder');


item.addEventListener('dragstart', dragSttttart);
item.addEventListener('dragend', dragEeeeeend);

for (const place of places) {
   place .addEventListener('dragover', dragOover);
   place .addEventListener('dragenter', dragEenter);
   place .addEventListener('dragleave', dragLleave);
   place .addEventListener('drop', dragDdrop);
};

function dragSttttart (object) {
// console.log(object.target);
object.target.classList.add('hold');
setTimeout(() => object.target.classList.add('hide'), 0);

};
function dragEeeeeend (object) {
    console.log('остановилось');
    object.target.classList.remove('hold', 'hide')   
};




function dragOover (object2) {
    object2.preventDefault();
};
function dragEenter (object2) {
    console.log('объект ЗАШЕЛ!!! на территорию плейсхолдера');
    object2.target.classList.add('place-finish');
};
function dragLleave (object2) {
    console.log('объект покинул территорию плейсхолдера');
    object2.target.classList.remove('place-finish');
};
function dragDdrop (object2) {
    console.log('птичка в клетке');
    object2.target.append(item);
    object2.target.classList.remove('place-finish');
    
};
  