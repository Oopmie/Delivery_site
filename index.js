const food = [
    {img:"Assets/Rectangle 53.png", name:"Blaze Pizza", time:"11.00 AM - 10.00 PM"},
    {img:"Assets/Rectangle 53 (1).png", name:"Pizza Ranch", time:"09.00 AM - 10.00 PM"},
    {img:"Assets/Rectangle 53 (2).png", name:"Dion’s Pizza Hut", time:"10.00 AM - 12.00 PM"},
    {img:"Assets/Rectangle 53 (3).png", name:"Royel Burger", time:"11.00 AM - 10.00 PM"},
    {img:"Assets/Rectangle 53 (4).png", name:"KFC Restaurant", time:"09.00 AM - 10.00 PM"},
    {img:"Assets/Rectangle 53 (5).png", name:"Star Food", time:"10.00 AM - 12.00 PM"}
];
const verhfood = document.getElementById('verhfood');
const nizfood = document.getElementById('nizfood');
const verhfood4 = food.slice(0,3);
const nizfood4 = food.slice(3,6);
verhfood.innerHTML = verhfood4.map(
    item=>`<div class = "food4">
                <img src="${item.img}" alt="">
                <h1>${item.name}</h1>
                <div class="time4">
                    <img src="Assets/timer 1.png" alt="">
                    <p>${item.time}</p>
                    <button>→</button>
                </div>
            </div>`
).join('');
nizfood.innerHTML = nizfood4.map(
    item=>`<div class = "food4">
                <img src="${item.img}" alt="">
                <h1>${item.name}</h1>
                <div class="time4">
                    <img src="Assets/timer 1.png" alt="">
                    <p>${item.time}</p>
                    <button>→</button>
                </div>
            </div>`
).join('')