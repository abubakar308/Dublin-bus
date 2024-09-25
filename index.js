const count = document.getElementById('count');
const select = document.getElementById('select');
const total = document.getElementById('Total');
count.innerText = 0;
let totalprice = 0;
function buttonclick(event){
     totalprice += 550;
    total.innerText = totalprice.toFixed(2);
    
     count.innerText++;
     event.style.backgroundColor = 'green'
     event.style.color = 'white'
     const item = document.createElement('p');
  item.style.paddingLeft = '20px'
  item.style.paddingRight = '20px'
   item.innerHTML =`
         <li class="text-base font-normal flex justify-between">
            <span>${event.innerText}</span>
            <span>Economy</span>
            <span>550</span>
        </li>
        `
 select.appendChild(item);
   
}