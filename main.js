let days=document.getElementById("days")
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
setInterval(()=>{
    let currentTime = new Date();
days.innerHTML=(currentTime.getDay()<10?"0":"")+currentTime.getDay();
hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
},1000)
//reveiws
const reviews = [
    {
      id: 1,
      name: "Bill Anderson",
      img: "images/1.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicyle rights tumeric chartreuse brfore they sold out chambry phoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "susan smith",
      img: "images/2.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell or brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "anna johnson",
      img: "images/3.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic j ianbing swag.",
    },
  ];
  
  // Select items
  const img = document.querySelector(".person-info img");
  const author = document.querySelector(".author");
  const info = document.querySelector(".text");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  
  window.addEventListener("DOMContentLoaded", function () {
    // callback function
    showPerson();
  });
  
  // set initial value
  let currentItem = 0;
  
  // create a showPerson function
  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    
    info.textContent = item.text;
  }
  
  // Show next person when click the next button
  
  nextBtn.addEventListener("click", () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });
  
  // Show prev person when click the prev button
  
  prevBtn.addEventListener("click", () => {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });
  //maxlength
  let count=document.getElementById('count')
  let Notes=document.getElementById('Notes')
  maxlength=Notes.getAttribute('maxlength')
  Notes.oninput=function(){
      count.innerHTML=maxlength -this.value.length
      if(count.innerHTML==0){
        count.classList.add('danger')
      }else{
        count.classList.remove('danger')
      }
  }
  //dark mood
  let icon=document.getElementById('moon');
  icon.onclick=function(){
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')){
      icon.src="images/sun.png"
    }else{
      icon.src="images/moon.png"
    }
  }