
let el = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;



window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});





let sliderIamges = Array.from(document.querySelectorAll(".bilder img"));
let slidesCount = sliderIamges.length;

let slideNumberElement = document.querySelector(".slider-number");

let nextButton = document.getElementById("next");
let prevButton = document.getElementById("previous");

var currentSlide = 8;

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationElement =document.createElement("ul");
paginationElement.setAttribute('id', 'pagination-ul');


for(let i=1 ;i<=slidesCount;i++){

let paginationItem =document.createElement("li");

   paginationItem.setAttribute("data-Index",i);

   paginationItem.appendChild(document.createTextNode(i));

   paginationElement.appendChild(paginationItem);
}
 document.getElementById("indikator").appendChild(paginationElement);

 let pagiCreateUl=document.getElementById("pagination-ul");

 let pagiCreateBullt = Array.from(document.querySelectorAll("#pagination-ul li"));

 for(var i =0;i<pagiCreateBullt.length;i++){
  pagiCreateBullt[i].onclick=function(){
    currentSlide=parseInt(this.getAttribute("data-index"));
    checker();
  }

 }

checker();

function nextSlide() {
   if(nextButton.classList.contains("disabled")){
    return false;
   }else{
    currentSlide++;
    checker();
   }
}
function prevSlide() {
   if(prevButton.classList.contains("disabled")){
    return false;
   }else{
    currentSlide--;
    checker();
   }
}
function checker(){

      removeAllActive()
    slideNumberElement.textContent=currentSlide;
    sliderIamges[currentSlide-1].classList.add("active");
    pagiCreateUl.children[currentSlide-1].classList.add("active");
  
  if(currentSlide==1){
    prevButton.classList.add("disabled");
  }else{
    prevButton.classList.remove("disabled");

  }
  if(currentSlide==slidesCount){
    nextButton.classList.add("disabled");
  }else{
    nextButton.classList.remove("disabled");

  }

}

function removeAllActive(){
sliderIamges.forEach(function(img){
 img.classList.remove("active");
});
pagiCreateBullt.forEach(function(bullt){
  bullt.classList.remove("active");
});



}