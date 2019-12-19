onload = function () {
    
    let divs = document.getElementsByClassName("oferta_1")
    console.log(divs);
    
    for(let i=0;i<divs.length;i++){
            divs[i].addEventListener(
                'mouseover',
                function(e){
                    this.style.boxShadow = "8px 8px 25px rgb(116, 35, 116)";
                    this.querySelector(".boto_info").style.visibility = "visible";             
                }
            )
            divs[i].addEventListener(
                'mouseout',
                function(y){
                    this.style.boxShadow = "1px 1px 15px #aaaaaa";
                    this.querySelector(".boto_info").style.visibility = "hidden";                   
                }
            )
        }
    }
