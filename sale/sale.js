let btn = document.querySelector(".Up")



window.onload = function(){
    btn.style.display = "none"
}


window.onscroll = function(){
    if(window.scrollY >=700){
        btn.style.display = "block"
    }else{
        btn.style.display = "none";
    }
}

btn.onclick = function(){
    window.scrollTo({
        top:0, 
        behavior:"smooth"
    })
}


let galaxy = document.querySelectorAll(".imgs");
let uler = document.querySelectorAll(".check div")


    Img = Array.from(galaxy)

    para = document.querySelector("p")

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
        ele.style.display = "block"
    })
}
let dis = document.querySelectorAll("li .discount");
let dic = document.querySelectorAll(".dicoration");
let have = document.querySelectorAll("div .have_discount");



 have.forEach((span, i)=>{
    let price = span.innerText;
   
     switch(price){
        case "Sale 10%":
            dis[i].innerText = dis[i].innerText- 99;
            dic[i] = dic[i].style.textDecoration = "line-through"
               
             break;
        case "Sale 15%":
            dis[i].innerText = dis[i].innerText- 119
            dic[i] = dic[i].style.textDecoration = "line-through"
             break;
        case "Sale 20%":
            dis[i].innerText = dis[i].innerText- 159
            dic[i] = dic[i].style.textDecoration = "line-through"
             break;
        case "Sale 25%":
            dis[i].innerText = dis[i].innerText- 199
            dic[i] = dic[i].style.textDecoration = "line-through"
             break;
        case "Sale 30%":
            dis[i].innerText = dis[i].innerText-219
            dic[i] = dic[i].style.textDecoration = "line-through"
             break;
     }
 })








    

 
