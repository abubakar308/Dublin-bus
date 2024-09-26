const count = document.getElementById('count');
const select = document.getElementById('select');
const total = document.getElementById('Total');
const seat = document.getElementById('seat');
count.innerText = 0;
let totalprice = 0;
 seat.innerText = 40;

const btns = document.getElementsByClassName('btn');
for (let i = 0; i < btns.length; i++) {
    btns[i].classList.add('bg-gray-200');
    btns[i].classList.add('text-2xl');
    btns[i].classList.add('hover:bg-black');
    btns[i].classList.add('hover:text-white');

}

function menubar(){
    document.getElementById('menu').classList.remove('hidden');
}

function buttonclick(event){
   document.getElementById('default-text').innerText = ''

     totalprice += 550;
    total.innerText = totalprice.toFixed(2);
      seat.innerText--
     count.innerText++;
     event.style.backgroundColor = 'green'
     event.style.color = 'white'
     const item = document.createElement('p');
  item.style.paddingLeft = '20px'
  item.style.paddingRight = '20px'
  select.style.color = 'black'
   select.innerHTML +=`
         <li class=" font-normal text-2xl flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `
   
}