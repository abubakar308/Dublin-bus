const count = document.getElementById('count');
const select = document.getElementById('select');
const total = document.getElementById('Total');
const seat = document.getElementById('seat');
const grandPrice = document.getElementById('grand');
const couponField = document.getElementById('coupon-field');
const couponButton = document.getElementById('coupon-button');
const discount = document.getElementById('discount');
const number = document.getElementById('number');
const pname = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const modal = document.getElementById('modal');
count.innerText = 0;
let totalprice = 0;
 seat.innerText = 40;
 let seatBooked = [];

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
   const value = event.innerText;
   if(seatBooked.includes(value)){
   return alert('this seat already booked')
   }
   else{
      if(seatBooked.length < 4){
         seatBooked.push(value)
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
        if (seatBooked.length > 3) {
         couponField.removeAttribute("disabled")
         couponButton.removeAttribute('disabled')
         couponButton.style.backgroundColor = 'green'
     }
      }
      else{
         return alert('maximum seat added')
      }
   }
     
}
 let couponSave = 0;
document.getElementById('coupon-button').addEventListener('click',function(){
   const input = couponField.value;
   number.removeAttribute('disabled');
   pname.removeAttribute('disabled');
   email.removeAttribute('disabled');
  
   if(input !== 'NEW15' && input !== 'NEW20'){
      return alert('Invalid coupon');
   }
   if(input === 'NEW15'){
    couponSave = totalprice * 0.15;
   }
   
   if(input === 'NEW20'){
      couponSave = totalprice * 0.2;
   }
   discount.innerHTML =`
                      <div class="flex text-2xl justify-between p-4 items-center">
                     <p class="">Discount</p>
                      <p class=" flex">-BDT: ${couponSave.toFixed(2)} </p>
                       </div>
   `
   let grand = totalprice - couponSave;
   grandPrice.innerText = grand.toFixed(2);
})
  number,pname,email.addEventListener('input',function(event){
   const input = event.target.value
   if(input.length >= '11'){
      submit.removeAttribute("disabled");
      submit.style.backgroundColor = 'green';
   }
  })

