var productContainer = document.getElementById("product")
var search=document.getElementById("search")
var productlist=productContainer.querySelectorAll("div")

search.addEventListener("keyup",function(event){
  var enterdValue=event.target.value.toUpperCase()

  for(let i=0;i<productlist.length;i++){
    var productname=productlist[i].querySelector("p").textContent

    if(productname.toUpperCase().indexOf(enterdValue)<0){
      productlist[i].style.display="None"
    }
    else{
      productlist[i].style.display="block"
    }
  }
})