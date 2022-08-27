
let btn = document.querySelector(".Up");
const bt = document.querySelector(".btns");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const nav = document.querySelector("nav")
const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.body.classList.toggle("light-theme");
}
bt.addEventListener("click", dark);

function dark() {
    bt.classList.toggle("fa-toggle-on");
    nav.classList.toggle("bg-primary");
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    var theme = document.body.classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.body.classList.toggle("dark-theme");
    var theme = document.body.classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
}
function light() {
    bt.classList="fas fa-toggle-off btns"
}



window.onload = function(){
    btn.style.display = "none"
}
window.onscroll = function(){
    if(window.scrollY >= 600){
        btn.style.display = "block";
    }else{
        btn.style.display = "none";
    }
}
btn.onclick = function(){
    window.scrollTo({
        top:0 ,
        behavior:"smooth"
    })
}



let galaxy = document.querySelectorAll(".imgs");
let uler = document.querySelectorAll(".check div")


    Img = Array.from(galaxy)

 

    uler.forEach((div) => {
    div.addEventListener("click" , removeActive)
    div.addEventListener("click" , mangerImg)
})

    function removeActive(){
    uler.forEach((div) => {
        div.classList.remove("active");
        this.classList.add("active")
    })
    
}


function mangerImg(){
    Img.forEach((div) => {
        div.style.display = "none"
    })
    document.querySelectorAll(this.dataset.cat).forEach((ele) => {
        ele.style.display = "block";
        
    })
}


let icons1 = document.querySelectorAll(".icon");
let icons2 = document.querySelectorAll(".icon .far")


icons1.forEach((e) => {    
    e.classList.toggle("icon") 
    e.addEventListener("mouseenter",()=>{
        e.classList.add("icon")
    e.addEventListener("mouseleave",()=>{
        e.classList.remove("icon")
    })
    let icons2 = document.querySelectorAll(".icon .far")
    icons2.forEach((e , index )=>{
            e.addEventListener("click",()=>{
            e.parentElement.classList.toggle("icon");
            e.classList.remove("fas")
            for (let i = 0; i <= index; i++) {
            icons2[i].classList.add("fas")   
                }
            })

        })
       
    })     
 })



let btns = document.getElementById("btns");
let divs = document.querySelectorAll(".searchs");
let search = document.getElementById("form1")



 search.addEventListener("keyup",(e)=>{
     let text = e.target.value.toLowerCase()
     let news = Array.from(divs);
     
     news.forEach((divs) => {
       console.log(divs.innerText);
        if(divs.innerHTML.includes(text)){
           divs.style.display = "block"
       }else{
        divs.style.display = "none";
        console.log("Not");
       }
    })
 })

 let cartshop = document.getElementById("cartshop");
 let trans =  document.querySelector(".translate");
 let closes = document.querySelector("#closes")
 let colse = document.querySelector("#colse")
cartshop.addEventListener("click", ()=>{
       trans.style.display = "block";
})
closes.addEventListener("click",()=>{
       trans.style.display ="none"
})
colse.addEventListener("click",()=>{
    trans.style.display ="none"
})


let icons = document.querySelectorAll(".showicons")
let table = document.querySelector(".class");
let total = document.getElementById("total")

let free =[]
let add = []
getelement()

    if(window.localStorage.getItem("items")){
        free = JSON.parse(window.localStorage.getItem("items")) 
    }
    if(window.localStorage.getItem("price")){
        total.innerHTML = window.localStorage.getItem("price")
    }
  function prices() {
    for (let i = 0; i < free.length; i++) {
        add.push(parseInt(free[i].p))
        let dos = add.reduce(function(acc , ele) {
            return acc + ele
        })
        total.innerHTML = dos
     }
  }prices()
    icons.forEach((e)=>{
        e.addEventListener("click" , (x) =>{
            x.preventDefault();
            let image = x.target.parentElement.parentElement.parentElement.children[0].src
            let name = x.target.parentElement.parentElement.parentElement.children[1].children[0].children[1].innerHTML.slice(8)
            let price = x.target.parentElement.parentElement.parentElement.children[1].children[0].children[3].children[0].innerHTML
            let obj ={
            i:image,
            n:name,
            p:price,
            c:false,
            d:Date.now()
        }
        free.push(obj)
        setitemsfromarray(free)
        set(free)

          })
    })
   
     
  function set(arrays) {
    localStorage.setItem("items", JSON.stringify(arrays))
  }
 function setitemsfromarray(arrays){
    table.innerHTML =""
    for (let i = 0; i < arrays.length; i++) {
        let spano =document.querySelector(".spano")
        spano.innerHTML =""
        table.innerHTML += `  
    <tr data-id="${arrays[i].d}" class ="task">
      <td><img src ='${arrays[i].i}' id="imgs"></td>
      <td>${arrays[i].n}</td>
      <td>${arrays[i].p}</td>
      <td><i class="fas fa-window-close cursor-pointer del"></i></td>
    </tr>
    `
    }
   
    
let delet = document.querySelectorAll(".del")
delet.forEach((e)=>{
    e.addEventListener("click",(x)=>{
        if(x.target.classList.contains("del")){
            deleteTaskWith(x.target.parentElement.parentElement.getAttribute("data-id"))
            x.target.parentElement.parentElement.remove();
        } 
        
        let push = x.target.parentElement.parentElement.children[2].innerHTML
    })
})
  }

  function deleteTaskWith(taskId) {
    free = free.filter((task) => task.d != taskId);
    set(free)
  }
  
  function getelement() {
      let Data = localStorage.getItem("items")
      if(Data){
          let task = JSON.parse(Data)
          setitemsfromarray(task)
      }
  }



