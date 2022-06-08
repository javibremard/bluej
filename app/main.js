//DESPLEGABLE PULP CLICK


// let infodesplegable = document.querySelectorAll(".infodesplegable");


// for (let i = 0; i < infodesplegable.length; i++){

//   var open = false;

  



//   infodesplegable[i].addEventListener('click', function(){
//     open = !open;
//     var infotooltip = document.querySelectorAll(".infotooltip");
//     var infodescription = infodesplegable[i].getAttribute("title");
   

//     const infotext = document.createElement("div");
//     infotext.classList = "infotooltip bjcolor";
//     infotext.alt = "Logo Javascript";
//     infotext.innerHTML = `◊ ` + infodescription;
    
    


//     if (open) {
//       infodesplegable[i].appendChild(infotext);
//       console.log("CLICKADO");
      
      

//     } 
    
    
//     else {
//       infodesplegable[i].classList.remove("bjcolor");
//       console.log("NOCLICKADO");
      
     
     

//       for (let i = 0; i < infotooltip.length; i++){
//       infotooltip[i].remove();
//      // infotooltip[i].style.display = "none";
//       }
      
//     }
    
    
  
    
    



//   });



//   }


/*

//Al hacer click en una imagen de la galería se abre 
//una ventana modal con la imagen y su información
//Al hacer click sobre la cruz 
//(o fuera de la ventana modal) se cierra la ventana

let boxes = document.querySelectorAll('.contenedor');
let modalClose = document.querySelector('.fa-times');
let modalWindow = document.querySelector('.content');
let heart = document.querySelector('.corazon__img');

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', function () {
        modalWindow.classList.toggle('no__visible');
    });
}
modalClose.addEventListener('click', function () {
    modalWindow.classList.add('no__visible');
});



//Al hacer click sobre la barra de búsqueda se despliega un div
//al hacer click fuera del div se cierra

let input = document.querySelector('.box');
let userBox = document.querySelector('.searchbox__hidden');

input.addEventListener('focus', function () {
    userBox.classList.remove('hidden');
});
input.addEventListener('blur', function () {
    userBox.classList.add('hidden');
});



//Al hacer doble click sobre la imagen de la ventana modal 
//aparece un icono de un corazón (like)

let imagen = document.querySelectorAll('.imagebig');
let modalheart = document.querySelector('.corazon__img');

for (let i = 0; i < imagen.length; i++) {
    imagen[i].addEventListener('dblclick', function () {
        modalheart.classList.toggle('hidd');
    });
   
}



//Al hacer click sobre cada imagen, introduce su etiqueta
//correspondiente dentro de un div vacío en el html para que
//esa imagen sea la que aparezca en la ventana modal

let galleryBigImage = document.querySelector('.img__big');
let thumb = document.querySelectorAll('.images');
let img = document.querySelector('.imagebig')

for (let i = 0; i < thumb.length; i++){
    thumb[i].addEventListener('click', function(){
        
        document.getElementById("cont").innerHTML= `<img src="${thumb[i].src} " alt="" class="images">`;
        
        console.log(thumb[i])
    });
}
*/













//ANIMACIONES SCROLL
// let windowHeightFirst = window.innerHeight;
// let windowWidthFirst = window.innerWidth;
// let proportionFirst = windowHeightFirst / windowWidthFirst;
// let franjaFirst = proportionFirst * (900 - 200) + 200;
// let margenFirst = franjaFirst;

// document.getElementById("novisible").style.fontVariationSettings =  '"wght" ' + margenFirst + ', "opsz" 128';

//document.getElementById("novisible").style.fontVariationSettings =  '"wght" ' + 246 + ', "opsz" 1';





window.onscroll = function() {myFunction()};
            
            function myFunction() {
               var header = document.getElementById("myHeader");
               var opacity = document.getElementById("novisible");
               var opacitybottom = opacity.offsetBottom;
               var alertyears = document.getElementById("alert");
               var sticky = header.offsetTop;
               var logoopacity = opacity.offsetTop;
               var alertchange = opacity.offsetTop;  
               var other = alertyears.offsetTop;
               var logosmall = document.getElementById("logosmall");
               var content = document.getElementById("bodycontent");

               var header2 = document.getElementById("myHeader2");
               var section3 = document.getElementById("section-3");
               
               var sticky2 = section3.offsetTop;
               var myheaderheightsticky = document.getElementById("myHeader").offsetHeight;
               var newsticky2 = sticky2 - myheaderheightsticky;
               var sectionsection = section3.offsetTop - 400;
               
               var shopsection = document.getElementById("shopsection");
               var go = shopsection.offsetTop - 200;
               var bigwordblue = document.getElementById("bigwordblue");
               
              
               //PROPORCIÓN PANTALLA PARA TIPO
               var windowHeight = window.innerHeight;
               var windowWidth = window.innerWidth;
               console.log(windowHeight);
               
               var windowProportion = windowHeight / windowWidth * 1000 / 2 + 100;
                             
                

             

            

               var section1 = document.getElementById("section-1");
               var section1top = section1.offsetTop;

               var section2 = document.getElementById("section-2");
               var section2top = section2.offsetTop;
 
              
              var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
              var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
              var scrolled = (winScroll / height) * 100;

              var keepscrollid = document.getElementById("keepscrollid");
              


              if (window.pageYOffset > section2top) {
                document.getElementById("myBar").style.height = scrolled + "%";
                document.getElementById("myBar").style.backgroundColor = "black";
              } else {
               
                document.getElementById("myBar").style.backgroundColor = "transparent";
              }



              if (window.pageYOffset > section2top - 900) {
                document.getElementById("definitionnoun").style.position = "absolute";
                document.getElementById("definitionnoun").style.visibility = "hidden";
               
                console.log("BOTTOMFIX");
              } else {
                console.log("BOTTOMNO");
                document.getElementById("definitionnoun").style.position = "fixed";
                document.getElementById("definitionnoun").style.visibility = "visible";
                
              }

              if (window.pageYOffset > section2top - 150) {
                
                keepscrollid.style.opacity = "0";
              } else {
                keepscrollid.style.opacity = "1";
              }




              
              if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                
                var definitionTop = document.getElementById("section-1").offsetTop;
                var myheaderheightscroll = document.getElementById("myHeader").offsetHeight;
                
                var scrolltoTopDefin = definitionTop - myheaderheightscroll + 1;


                var topContainer1 = document.getElementById("topContainer");

                
               // topContainer1.style.visibility = "hidden";
               // topContainer1.style.height = "0";
                //topContainer1.style.height = "62px";
                

                
    
                
   
        



              //SCROLL GOTA
               // document.getElementById("myBar").style.height = scrolled + "%";
                document.getElementById("About").style.opacity = "1";
                document.getElementById("Shop").style.opacity = "1";
                document.getElementById("Guide").style.opacity = "1";
                
              } 
              
              
              else {
              
               
                var topContainer1 = document.getElementById("topContainer");
               // topContainer1.style.visibility = "visible";
               // topContainer1.style.height = "100vh";

                header.classList.remove("sticky");
                document.getElementById("About").style.opacity = "0";
                document.getElementById("Shop").style.opacity = "0";
                document.getElementById("Guide").style.opacity = "0";
               // document.getElementById("myBar").style.backgroundColor = "white";
              }



              
              

              




              
              if (window.pageYOffset > logoopacity) {
               
                opacity.classList.add("opacity");
                opacity.style.fontVariationSettings = "\"wght\" 1, \"opsz\" 1";




              } else {
                opacity.classList.remove("opacity");
                opacity.style.fontVariationSettings = "\"wght\" 246, \"opsz\" 128";
                
              }
              if (window.pageYOffset > alertchange) {
                alertyears.classList.add("variantfranklin");
                document.getElementById("scroll").style.fontSize = "5.4vw";
                document.getElementById("scroll").style.fontVariationSettings = "\"wght\" 700";
              } else {
                alertyears.classList.remove("variantfranklin");
                document.getElementById("scroll").style.fontSize = "32px";
                document.getElementById("scroll").style.fontVariationSettings = "\"wght\" 900";
              }


              if (window.pageYOffset > sticky) {
                logosmall.classList.add("logosmallopacity");
              } else {
                logosmall.classList.remove("logosmallopacity");
              }








              
              if (window.pageYOffset > sticky) {

               
                
                content.classList.add("contentopacity");
                bigwordblue.style.fontVariationSettings = "\"wght\" " + 900 + ", \"opsz\" " + 128;
                var calculovh = windowWidth / windowHeight * 1220;
                document.getElementById("bigword1").style.height = calculovh / 10 + "vh";


                
              } else {
                
                content.classList.remove("contentopacity");
                bigwordblue.style.fontVariationSettings = "\"wght\" 259, \"opsz\" 0";
              }

           


              






              
              if (window.pageYOffset > newsticky2) {
                header2.classList.add("sticky2");
                document.getElementById("brandmenu").style.transition = 'all 0.5s ease-out';
                
                document.getElementById("brandmenu").style.opacity = '1';
                document.getElementById("brandmenu").style.position = 'fixed';
                //document.getElementById("brandmenu").style.display = 'flex';
                document.getElementById("brandmenu").style.top = '84px';
                document.getElementById("brandmenu").style.height = '100%';

               document.getElementById("brandmenu").style.paddingBottom = '16px';
               //document.getElementById("guidecontent").style.visibility = 'visible';
               //document.getElementById("guidecontent").style.marginTop = '0';
               document.getElementById("guidecontent").style.opacity = '1';
               document.getElementById("brandmenu").style.backgroundColor = 'white';

               //document.getElementById("brandmenu").style.paddingBottom = '16px';
               

              


                
              } else {
                header2.classList.remove("sticky2");
                document.getElementById("brandmenu").style.transition = 'none';
                document.getElementById("brandmenu").style.opacity = '0';
                document.getElementById("brandmenu").style.position = 'fixed';
               
               // document.getElementById("brandmenu").style.display = 'none';
                document.getElementById("brandmenu").style.height = '0vh';
                document.getElementById("brandmenu").style.paddingBottom = '0px';
                //document.getElementById("guidecontent").style.visibility = 'hidden';
                
                //document.getElementById("guidecontent").style.marginTop = '-20%';
                document.getElementById("brandmenu").style.top = '-775px';
                document.getElementById("guidecontent").style.opacity = '0';
                document.getElementById("brandmenu").style.backgroundColor = 'transparent';
               // document.getElementById("brandmenu").style.paddingBottom = '0px';
               

              }


              var franksizes = document.getElementById("franksizes");
              var topfranksizes = franksizes.offsetTop - 150;
              var franksizes2 = document.getElementById("franksizes2");
              var topfranksizes2 = franksizes2.offsetTop - 150;

              // if (window.pageYOffset > topfranksizes) {
              //   document.getElementById("myBar2").style.height = '100%';
              // } else {
              //   document.getElementById("myBar2").style.height = '0%';
              // }

              
              
              // if (window.pageYOffset > topfranksizes2) {
              //   document.getElementById("myBar3").style.height = '100%';
              // } else {
              //   document.getElementById("myBar3").style.height = '0%';
              // }




              var gotanim1 = document.getElementsByClassName("gota");


              var branditems = document.querySelectorAll('.brandmenu-items');

              for (let i = 0; i < branditems.length; i++) {

                branditems[i].style.transition = "all .25s ease-out";
                

                if (window.pageYOffset > newsticky2) {
                
                branditems[i].style.paddingBottom = '6px';
                branditems[i].style.opacity = '1';
              } else {
                branditems[i].style.paddingBottom = '0px';
                branditems[i].style.opacity = '0';
                
              }


              }





              
            for (var i=0; i<gotanim1.length; i++) {
              if (window.pageYOffset > go) {
                gotanim1[i].style.height = '90%';
               } else {
                 
                 gotanim1[i].style.height = '0%';
               }
          }

          

          var commentbluish = document.getElementById("animat");
            if (window.pageYOffset > sectionsection) {
              commentbluish.style.fontSize = '3vw';
              commentbluish.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 8";
             } else {
               
               commentbluish.style.fontSize = '24px';
               commentbluish.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 60";
             }




            
            }
          
            
 




            



//QUE LOS ITEMS DEL NAVEGADOR HAGAN SCROLL HASTA LA SECCIÓN CORRESPONDIENTE

            document.querySelectorAll('a[href^="#"]').forEach(elem => {
              elem.addEventListener('click', e => {
                  e.preventDefault();
                  let block = document.querySelector(elem.getAttribute('href')),
                      offset = elem.dataset.offset ? parseInt(elem.dataset.offset) : 0,
                      bodyOffset = document.body.getBoundingClientRect().top;

                  let myheaderheight = document.getElementById("myHeader").offsetHeight;
                  let myheader2height = document.getElementById("myHeader2").offsetHeight;

               // console.log(block.id);

                      if (block.id == "shopsection") {
                        console.log("esto es");

                        window.scrollTo({
                          top: block.getBoundingClientRect().top - bodyOffset + offset - myheaderheight + 1,
                          behavior: "smooth"
                      }); 

                      } else if (block.id == "beginningguidelines") {
                        window.scrollTo({
                          top: block.getBoundingClientRect().top - bodyOffset + offset + myheaderheight,
                          behavior: "smooth"
                      });


                      }
                      
                      else {
                        console.log("LO DEMAS");

                        window.scrollTo({
                          top: block.getBoundingClientRect().top - bodyOffset + offset - myheaderheight - myheader2height + 2,
                          behavior: "smooth"
                      }); 


                      }
                      


                  
              });
          });





//MANTENER LA POSICIÓN DEL SCROLL AL RECARGAR LA PÁGINA

          window.onload=function(){
            var pos=window.name || 0;
            window.scrollTo(0,pos);
            }
            window.onunload=function(){
            window.name=self.pageYOffset || (document.documentElement.scrollTop+document.body.scrollTop);
            }




//ANIMACIÓN TIPO CABECERA AL RECARGAR LA PÁGINA (1SEGUNDO DESPUÉS)


function myFunctionload() {
  console.log("hola");
  
  document.getElementById("novisible").style.fontVariationSettings = '"wght" 246, "opsz" 128';
  

}

setTimeout(myFunctionload,500);




          

















//HOVER GOTA

            //  document.querySelector(".gota").addEventListener("mouseover", mouseOver);
            //  document.querySelector(".gota").addEventListener("mouseout", mouseOut);

            //  document.querySelector(".rectangulogota").addEventListener("mouseover", mouseOver);
            //  document.querySelector(".rectangulogota").addEventListener("mouseout", mouseOut);
            
            
            
            //  var gotanim1 = document.getElementsByClassName("gota");
              
                          
            //  function mouseOver() {
            //    document.querySelector(".gota").style.height = "0%";
            //  }
            
            //  function mouseOut() {
            //    document.querySelector(".gota").style.height = "90%";
            //  }
          


//HOVER INTERACCIÓN SOBRE EJEMPLARES REVISTA

            //COLORBLUE
            let bjcolor = "#000000";
            //COLORBLUE


            let nissues12 = document.querySelectorAll(".nissue");
          


            for (let i = 0; i < nissues12.length; i++){
              nissues12[i].style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
            }
             
             let issue1 = document.getElementById('issue1');
             let issue2 = document.getElementById('issue2');
             let issue3 = document.getElementById('issue3');
             let issue4 = document.getElementById('issue4');
             let issue5 = document.getElementById('issue5');
             let issue6 = document.getElementById('issue6');
             let issue7 = document.getElementById('issue7');
             let issue8 = document.getElementById('issue8');

            

             let gotita1 = document.getElementById('gotita1');
             let gotita2 = document.getElementById('gotita2');
             let gotita3 = document.getElementById('gotita3');
             let gotita4 = document.getElementById('gotita4');
             let gotita5 = document.getElementById('gotita5');
             let gotita6 = document.getElementById('gotita6');
             let gotita7 = document.getElementById('gotita7');
             let gotita8 = document.getElementById('gotita8');
             
            
             
             let hdissue1 = document.getElementById('hdissue1');
             let hdissue2 = document.getElementById('hdissue2');
             let hdissue3 = document.getElementById('hdissue3');
             let hdissue4 = document.getElementById('hdissue4');
             let hdissue5 = document.getElementById('hdissue5');
             let hdissue6 = document.getElementById('hdissue6');
             let hdissue7 = document.getElementById('hdissue7');
             let hdissue8 = document.getElementById('hdissue8');


             let dissue1 = document.getElementById('dissue1');
             let dissue2 = document.getElementById('dissue2');
             let dissue3 = document.getElementById('dissue3');
             let dissue4 = document.getElementById('dissue4');
             let dissue5 = document.getElementById('dissue5');
             let dissue6 = document.getElementById('dissue6');
             let dissue7 = document.getElementById('dissue7');
             let dissue8 = document.getElementById('dissue8');

            
             
            
              issue1.addEventListener("mouseover", mouseOver);
              issue1.addEventListener("mouseout", mouseOut);
              issue2.addEventListener("mouseover", mouseOver2);
              issue2.addEventListener("mouseout", mouseOut2);
              issue3.addEventListener("mouseover", mouseOver3);
              issue3.addEventListener("mouseout", mouseOut3);
              issue4.addEventListener("mouseover", mouseOver4);
              issue4.addEventListener("mouseout", mouseOut4);
              issue5.addEventListener("mouseover", mouseOver5);
              issue5.addEventListener("mouseout", mouseOut5);
              issue6.addEventListener("mouseover", mouseOver6);
              issue6.addEventListener("mouseout", mouseOut6);
              issue7.addEventListener("mouseover", mouseOver7);
              issue7.addEventListener("mouseout", mouseOut7);
              issue8.addEventListener("mouseover", mouseOver8);
              issue8.addEventListener("mouseout", mouseOut8);



             function mouseOver() {
                  gotita1.style.height = "0%";
                  gotita1.style.backgroundColor = bjcolor;

                  hdissue1.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue1.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue1.style.backgroundColor = bjcolor;
                  hdissue1.style.color = "white";
                 
                  
                }
              
                function mouseOut() {
                  gotita1.style.height = "92.2%";
                  gotita1.style.backgroundColor = "white";

                  hdissue1.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue1.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue1.style.backgroundColor = "white";
                  hdissue1.style.color = "black";
                  
                }


            function mouseOver2() {
                  gotita2.style.height = "0%";
                  gotita2.style.backgroundColor = bjcolor;


                  hdissue2.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue2.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue2.style.backgroundColor = bjcolor;
                  hdissue2.style.color = "white";
                  
                }
              
                function mouseOut2() {
                  gotita2.style.height = "92.2%";
                  gotita2.style.backgroundColor = "white";

                  hdissue2.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue2.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue2.style.backgroundColor = "white";
                  hdissue2.style.color = "black";
                  
                }


            function mouseOver3() {
                  gotita3.style.height = "0%";
                  gotita3.style.backgroundColor = bjcolor;


                  hdissue3.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue3.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue3.style.backgroundColor = bjcolor;
                  hdissue3.style.color = "white";
                  
                }
              
                function mouseOut3() {
                  gotita3.style.height = "92.2%";
                  gotita3.style.backgroundColor = "white";

                  hdissue3.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue3.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue3.style.backgroundColor = "white";
                  hdissue3.style.color = "black";
                  
                }


             function mouseOver4() {
                  gotita4.style.height = "0%";
                  gotita4.style.backgroundColor = bjcolor;


                  hdissue4.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue4.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue4.style.backgroundColor = bjcolor;
                  hdissue4.style.color = "white";
                  
                }
              
                function mouseOut4() {
                  gotita4.style.height = "92.2%";
                  gotita4.style.backgroundColor = "white";

                  hdissue4.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue4.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue4.style.backgroundColor = "white";
                  hdissue4.style.color = "black";
                  
                }    


               function mouseOver5() {
                  gotita5.style.height = "0%";
                  gotita5.style.backgroundColor = bjcolor;


                  hdissue5.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue5.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue5.style.backgroundColor = bjcolor;
                  hdissue5.style.color = "white";
                  
                }
              
                function mouseOut5() {
                  gotita5.style.height = "92.2%";
                  gotita5.style.backgroundColor = "white";

                  hdissue5.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue5.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue5.style.backgroundColor = "white";
                  hdissue5.style.color = "black";
                  
                }    


              function mouseOver6() {
                  gotita6.style.height = "0%";
                  gotita6.style.backgroundColor = bjcolor;


                  hdissue6.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue6.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue6.style.backgroundColor = bjcolor;
                  hdissue6.style.color = "white";
                  
                }
              
                function mouseOut6() {
                  gotita6.style.height = "92.2%";
                  gotita6.style.backgroundColor = "white";

                  hdissue6.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue6.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue6.style.backgroundColor = "white";
                  hdissue6.style.color = "black";
                  
                }   
                
                
            function mouseOver7() {
                  gotita7.style.height = "0%";
                  gotita7.style.backgroundColor = bjcolor;


                  hdissue7.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue7.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue7.style.backgroundColor = bjcolor;
                  hdissue7.style.color = "white";
                  
                }
              
                function mouseOut7() {
                  gotita7.style.height = "92.2%";
                  gotita7.style.backgroundColor = "white";

                  hdissue7.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue7.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue7.style.backgroundColor = "white";
                  hdissue7.style.color = "black";
                  
                }   


            function mouseOver8() {
                  gotita8.style.height = "0%";
                  gotita8.style.backgroundColor = bjcolor;


                  hdissue8.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  dissue8.style.fontVariationSettings = "\"wght\" 900, \"opsz\" 1";
                  hdissue8.style.backgroundColor = bjcolor;
                  hdissue8.style.color = "white";
                  
                }
              
                function mouseOut8() {
                  gotita8.style.height = "92.2%";
                  gotita8.style.backgroundColor = "white";

                  hdissue8.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  dissue8.style.fontVariationSettings = "\"wght\" 668, \"opsz\" 60";
                  hdissue8.style.backgroundColor = "white";
                  hdissue8.style.color = "black";
                  
                }   
  




                 



            
             
             













//TIPOGRAFÍA VARIABLE + CURSOR

// let textinter = document.getElementById("textinter");
//             textinter.style.fontVariationSettings = "\"wght\" 550, \"opsz\" 6";
            
            

          
//             function updateText(e) {
//               multiplierWidth = e.offsetX / window.innerWidth;
//               //multiplierHeight = e.offsetY / window.innerHeight;
//               randomWeight =  multiplierWidth * (900 - 200) + 200;
//               //randomWidth =  multiplierHeight * (8 - 60) + 60;
//               textinter.style.fontVariationSettings = "\"wght\" " + randomWeight;
            
//               //console.log(e.offsetY);
//             }
            
//             window.addEventListener("mousemove", updateText);

console.log(window.innerHeight);



               

               





            
           

            // let textinter2 = document.getElementById("frankinteractive");
            // textinter2.style.fontVariationSettings = "\"wght\" 550";
            
            

          
            // function updateText2(e) {
            //   multiplierWidth = e.offsetX / window.innerWidth;
            //   //multiplierHeight = e.offsetY / window.innerHeight;
            //   randomWeight =  multiplierWidth * (900 - 200) + 200;
            //   //randomWidth =  multiplierHeight * (8 - 60) + 60;
            //   textinter2.style.fontVariationSettings = "\"wght\" " + randomWeight;
            
            //   console.log(e.offsetY);
            // }
            
            // window.addEventListener("mousemove", updateText2);







// INTERACCION LOGO CONSTRUCTION
let logoconstruction = document.getElementById("logoconstruction");

logoconstruction.addEventListener("mouseover", mouseOver33);
logoconstruction.addEventListener("mouseout", mouseOut33);


             function mouseOver33() {
              logoconstruction.src= "./assets/img/LOGO/Logo_Display_Construction_withoutlines.svg";
                }
              
                function mouseOut33() {
                  logoconstruction.src= "./assets/img/LOGO/Logo_Display_Construction.svg";
                }











            

//CAMBIA EL FACTOR DE LA TIPO CADA SEGUNDO ALEATORIAMENTE
let textanim2 = document.getElementById("sele2");
let textanim = document.getElementById("sele");
let textanim3 = document.getElementById("bjfont");
            textanim.style.fontVariationSettings = "\"wght\" 550, \"opsz\" 6";

            function randomizeText() {
              randomWeight = Math.random() * (900 - 200) + 200;
              randomWidth = Math.random() * (200 - 100) + 100;
              randomWeight1 = Math.random() * (900 - 200) + 200;
              randomWidth1 = Math.random() * (60 - 8) + 8;
              randomWeight3 = Math.random() * (300 - 1) + 1;
              randomWidth3 = Math.random() * (128 - 1) + 1;
              textanim.style.fontVariationSettings = "\"wght\" " + randomWeight + ", \"wdth\" " + randomWidth;
              textanim2.style.fontVariationSettings = "\"wght\" " + randomWeight1 + ", \"opsz\" " + randomWidth1;
              //textanim3.style.fontVariationSettings = "\"wght\" " + randomWeight3 + ", \"opsz\" " + randomWidth3;
             
            }
            
            setInterval(randomizeText, 500);

            textanim.style.transition = "all .45s ease";



           textanim2.style.transition = "all .45s ease"; 
           //textanim3.style.transition = "all 1s ease";           



           

            
            








            document.getElementById("myHeader").style.transition = "all 2s";     

            

      
            



//SLIDERS




document.getElementById("bjfont").style.fontVariationSettings = "\"wght\" 350, \"opsz\" 128";






document.getElementById("text-weight").addEventListener("input", function () {

  let axisValue = document.getElementById("text-weight").value;
  let axisValueOp = document.getElementById("text-op").value;
  
  

  document.getElementById("bjfont").style.fontVariationSettings = "\"wght\" " + axisValue + ", \"opsz\" " + axisValueOp;
  

  
  document.getElementById("value-wght").innerText = axisValue;
 
  
});




document.getElementById("text-op").addEventListener("input", function () {

  let axisValue = document.getElementById("text-weight").value;
  let axisValueOp = document.getElementById("text-op").value;
  
  

  document.getElementById("bjfont").style.fontVariationSettings = "\"wght\" " + axisValue + ", \"opsz\" " + axisValueOp;
  

  
  document.getElementById("value-op").innerText = axisValueOp;
 
  
});
            
      

//HOVER INFO


let hoverInfo = document.querySelectorAll(".hoverInfo");

datagradient1.innerHTML= "Font-Family" + "<br>" + 00 + "pt" + " | " + 00 + "px" + "<br>"  + " weight " + 00;
datagradient2.innerHTML= "Font-Family" + "<br>" + 00 + "pt" + " | " + 00 + "px" + "<br>"  + "optical size " + 00 + " | " + " weight " + 00;
datagradient3.innerHTML= "Font-Family" + "<br>" + 00 + "pt" + " | " + 00 + "px" + "<br>"  + " weight " + 00  + " | " + "optical size " + 00;




    
    
    for (let i = 0; i < hoverInfo.length; i++){
        hoverInfo[i].addEventListener('mouseover', function(){
          var style = window.getComputedStyle(hoverInfo[i]);
          var fontSizeInfo = style.getPropertyValue('font-size');
          var fontFamilyInfo = style.getPropertyValue('font-family');
          var fontFamilyString = String(fontFamilyInfo);
          var fontVarInfo = style.getPropertyValue('font-variation-settings');

          var fontSplit = fontVarInfo.split(" ");
          var fontWeightInfo = fontSplit[3];
          var fontOpszInfo = fontSplit[1].replace(/\,(?:\n|$)/g, "\n");
         
          var informationHover = document.getElementById("informationHover");
          var datagradient1 = document.getElementById("datagradient1");
          var datagradient2 = document.getElementById("datagradient2");
          var datagradient3 = document.getElementById("datagradient3");

          var fontSizeInfoN = parseInt(fontSizeInfo, 10);
          var pixeltopt = fontSizeInfoN  * 72 / 96;
          var fontSizeInfoPt = Math.round(pixeltopt);
          var definexampleblue = hoverInfo[i].className;
         




          console.log(definexampleblue);

          // informationHover.innerHTML= fontFamilyInfo + " | " + fontSizeInfoPt + "pt" + " | " + fontSizeInfoN + "px" + " | " + "optical size " + fontOpszInfo + " | " + "weight " + fontWeightInfo;
          

          

          if (definexampleblue.includes("defexample")) {
            
            datagradient3.innerHTML= fontFamilyInfo + "<br>" + fontSizeInfoPt + "pt" + " | " + fontSizeInfoN + "px" + "<br>"  + " weight " + fontWeightInfo  + " | " + "optical size " + fontOpszInfo;
            

          } else if (fontFamilyString == "Libre-Franklin") {
            datagradient1.innerHTML= fontFamilyInfo + "<br>" + fontSizeInfoPt + "pt" + " | " + fontSizeInfoN + "px" + "<br>"  + " weight " + fontWeightInfo;

          } else if (fontFamilyString == "Source-Serif") {
            
            datagradient2.innerHTML= fontFamilyInfo + "<br>" + fontSizeInfoPt + "pt" + " | " + fontSizeInfoN + "px" + "<br>"  + "optical size " + fontOpszInfo + " | " + " weight " + fontWeightInfo;

          } else {

          }

          
          
          

         

           
            console.log(pixeltopt);
            //console.log(fontWeightInfo, fontOpszInfo);
        });
    }





// CENSURA IMAGENES GALERÍA

let imagesimagery = document.querySelectorAll(".imagesimagery");
let fuentereferencia = document.querySelectorAll(".fuentereferenciaimagery");

for (let i = 0; i < imagesimagery.length; i++){

  for (let i = 0; i < fuentereferencia.length; i++){

    

  imagesimagery[i].addEventListener('mouseover', function(){
    var referencedata = imagesimagery[i].getAttribute('alt');
    
    imagesimagery[i].style.opacity = "1";

    fuentereferencia[i].innerHTML= "<span class=\"serifmenu\">FROM: </span>" + referencedata;
    fuentereferencia[i].style.bottom = "-1px";

  
  });

  imagesimagery[i].addEventListener('mouseout', function(){
    var referencedata = imagesimagery[i].getAttribute('alt');
    
    imagesimagery[i].style.opacity = "0.2";

    fuentereferencia[i].innerHTML= "<span class=\"serifmenu\">TOUCH </span> ME</p>";
    fuentereferencia[i].style.bottom = "47%";

  
  });

}
}


//RANDOM NUMEROS NODOS
let widthBar1 = document.querySelectorAll(".widthBar1");

let nodesexamplebarwhite = document.querySelectorAll(".nodesexamplebarwhite");

for (let i = 0; i < nodesexamplebarwhite.length; i++){
            
for (let i = 0; i < widthBar1.length; i++){
 
          setInterval(function () {
            randomnumber = Math.random();
            randomNum = randomnumber * (900 - 30) + 30;
            
            widthBar1[i].style.width = randomNum + "%";
          
          }, 500);

          setInterval(function () {
            randomnumber = Math.random();
            randomNum = randomnumber * (100 - 30) + 30;
            randomhtml = randomnumber * (9 - 0) + 0;
          nodesexamplebarwhite[i].innerHTML = randomhtml.toFixed(3);
          
          }, 400);


          


            widthBar1[i].style.transition = "all .45s ease";

            
          }
        }
           

          
           









// SHADERS GALERÍA

let imgcloth = document.querySelectorAll(".imgcloth");
let textshader = document.querySelectorAll(".textshader");
let imgclothcontainer = document.querySelectorAll(".imgclothcontainer");


for (let i = 0; i < imgclothcontainer.length; i++){
for (let i = 0; i < imgcloth.length; i++){

  for (let i = 0; i < textshader.length; i++){

    

    imgclothcontainer[i].addEventListener('mouseover', function(){
    var shaderdata = imgcloth[i].getAttribute('name');
    var shaderdescrip = imgcloth[i].getAttribute('alt');
    imgcloth[i].style.opacity = "1";


    textshader[i].innerHTML= `<span class="serifmenu">` + shaderdata +  `<br></span> SHADER` + `<p class="paragraphshaderdescrip bjborder-top">` + shaderdescrip + `</p>`;
    textshader[i].style.bottom = "-1px";
   

  
  });

  imgclothcontainer[i].addEventListener('mouseout', function(){
    var shaderdata = imgcloth[i].getAttribute('name');
    
    imgcloth[i].style.opacity = "0";

    textshader[i].innerHTML= `<span class="serifmenu">` + shaderdata +  `</span><br> SHADER`;
    textshader[i].style.bottom = "47%";

  
  });

}
}
}









//PULP SHADER INFO DESPLEGABLE

let infodesplegable = document.querySelectorAll(".infodesplegable");


for (let i = 0; i < infodesplegable.length; i++){

  var open = false;

  



  infodesplegable[i].addEventListener('mouseover', function(){
   
    var infotooltip = document.querySelectorAll(".infotooltip");
    var infodescription = infodesplegable[i].getAttribute("data-info");
   

    const infotext = document.createElement("div");
    infotext.classList = "infotooltip blackcolor";
    infotext.alt = "Logo Javascript";
    infotext.innerHTML = infodescription;
    
      infodesplegable[i].appendChild(infotext);
     

      for (let i = 0; i < infotooltip.length; i++){
      infotooltip[i].remove();
     // infotooltip[i].style.display = "none";
      }
      
  });

  infodesplegable[i].addEventListener('mouseout', function(){
    var infotooltip = document.querySelectorAll(".infotooltip");
    var infodescription = infodesplegable[i].getAttribute("title");
    for (let i = 0; i < infotooltip.length; i++){
      infotooltip[i].remove();
    
      }

  });



  }







//SHOW MORE PULP SHADER


let showmorenodes = document.querySelectorAll(".showmorenodes");
let shader1box = document.querySelectorAll(".shader1box");
let pulpshaderimage = document.getElementById("pulpshaderimage");

for (let i = 0; i < showmorenodes.length; i++){
  var open = false;
  

  showmorenodes[i].addEventListener('click', function(){

    open = !open;

    if (open) {
      for (let i = 0; i < shader1box.length; i++){
        shader1box[i].style.height = "auto";
      }
      
      showmorenodes[i].innerHTML = `+ <span class="serifmenu">SHOW</span> LESS`;
      //CAMBIAR IMAGEN POR VERTICAL
      pulpshaderimage.src = "./assets/img/Ilustraciones/flowersvertical.png";

    } 
    
    
    else {

      showmorenodes[i].innerHTML = `+ <span class="serifmenu">SHOW</span> MORE`;
      
      for (let i = 0; i < shader1box.length; i++){
        shader1box[i].style.height = "368px";
        pulpshaderimage.src = "./assets/img/Ilustraciones/Bed_illustration.png";
      }

    }

   


  });

}




 //PROPORCIÓN PANTALLA 
 let windowHeight1 = window.innerHeight;
 let windowWidth1 = window.innerWidth;
 console.log(windowHeight1);
 
 let windowProportion1 = windowHeight1 / windowWidth1 * 1000 / 2 + 100;



//GALERIA CLICK
let clickelement = document.querySelectorAll(".clickelement");
let imgcontainerempty = document.getElementById("imgcontainerempty");
let boxcontainerempty = document.getElementById("boxcontainerempty");

for (let i = 0; i < clickelement.length; i++){
  clickelement[i].addEventListener('click', function(){
   
    var open = false;

    open = !open;

    if (open) {
      
        boxcontainerempty.style.visibility = "visible";
        imgcontainerempty.style.opacity = "1";
        imgcontainerempty.src = clickelement[i].src;
        console.log(clickelement[i].src);
      }  else {
        boxcontainerempty.style.visibility = "hidden";
        imgcontainerempty.style.opacity = "0";
        
      }

     

    

  })

  boxcontainerempty.addEventListener('click', function(){
    boxcontainerempty.style.visibility = "hidden";
    imgcontainerempty.style.opacity = "0";
  })


}































































//RESPONSIVE

            function imageresponsive1(x) {
              if (x.matches) { 
                console.log("SMALL");
                
                        document.getElementById("serifgradientexample1").innerHTML= `<img src="./assets/img/Tipografía/Serif-gradient-mobile.svg" alt="" class="serifgradientexample bjfiltercolor">`;
                      
                        document.getElementById("brandmenu").style.width = '100%';
                        
                        document.getElementById("brandmenu").style.zIndex = '1';
                        document.getElementById("brandmenu").classList.remove("bjborder-right");

                        document.getElementById("brandmenu").style.display = "none";
                        document.getElementById("titleblueguidelines").removeAttribute("href");
                       

                    //CLICK MENU RESPONSIVE
                        document.getElementById("botonMenu").onclick = function(){
                        
                          console.log("CLICK SMALL");
                        
                          if (document.getElementById("brandmenu").style.display == "block") {
                            document.getElementById("brandmenu").style.display = "none";
                          } else if (document.getElementById("brandmenu").style.display == "none") {
                            document.getElementById("brandmenu").style.display = "block";
                          } else {
                            console.log("ELSEDKW");
                          }
                        };
                        

                        let brandmenuitemclick = document.querySelectorAll(".brandmenu-items");

                        for (let i = 0; i < brandmenuitemclick.length; i++){

                              brandmenuitemclick[i].onclick = function(){

                              if (document.getElementById("brandmenu").style.display == "block") {
                                document.getElementById("brandmenu").style.display = "none";
                              } else if (document.getElementById("brandmenu").style.display == "none") {
                                document.getElementById("brandmenu").style.display = "block";
                              }

                            }
                        }






                        

                       

                        
              
              } else if (x.matches == false) {
                
                console.log("GREATER");
                        document.getElementById("serifgradientexample1").innerHTML= `<img src="./assets/img/Tipografía/Serif-gradient.svg" alt="" class="serifgradientexample bjfiltercolor">`;
                        document.getElementById("brandmenu").style.display = "block";
                        document.getElementById("titleblueguidelines").setAttribute('href', "#beginningguidelines");
                        document.getElementById("brandmenu").style.width = '20%';
                        document.getElementById("brandmenu").classList.add("bjborder-right");
                        document.getElementById("brandmenu").style.zIndex = '0';

                        
                    //CLICK MENU NORMAL

                  
                    
                      
                  
                        document.getElementById("botonMenu").onclick = function(){
                          console.log("CLICK BIG");
                               
                          
                         };

                         let brandmenuitemclick = document.querySelectorAll(".brandmenu-items");
                         for (let i = 0; i < brandmenuitemclick.length; i++){

                          brandmenuitemclick[i].onclick = function(){

                            console.log("CLICKITEM BIG");

                        }
                    }

              }
            }
            
            var x = window.matchMedia("(max-width: 998px)");
            imageresponsive1(x) // Call listener function at run time
            x.addListener(imageresponsive1) // Attach listener function on state changes



            


         
//RESPONSIVE 2

            function imageresponsive2(x) {
              if (x.matches) { 
                console.log("RES2");
                document.getElementById("Guide").innerHTML = "GUIDELINES";
                document.getElementById("Shop").innerHTML = `<span class="menutopserif">ISSUES</span>!`;
                document.getElementById("logofixedId").innerHTML = `<div class="logosmall" id="logosmall">
                <img src="./assets/img/LOGO/Logo_Small.svg" alt="" id="logosmallimg">
                </div>`;



              } else if (x.matches == false) {
                console.log("RESPON2");
                document.getElementById("Guide").innerHTML = `<span class="menutopserif">BLUE</span> GUIDELINES`;
                document.getElementById("Shop").innerHTML = `NEW <span class="menutopserif">ISSUES</span>!`;

                document.getElementById("logofixedId").innerHTML = `<a href="#novisible" class="logosmall" id="logosmall">
                <img src="./assets/img/LOGO/Logo_Small.svg" alt="" id="logosmallimg">
                </a>`;



              }
            }
            
            var x = window.matchMedia("(max-width: 998px)");
            imageresponsive2(x) // Call listener function at run time
            x.addListener(imageresponsive2) // Attach listener function on state changes



//RESPONSIVE 479px 

            function imageresponsive479(x) {
              if (x.matches) { 
                
                document.getElementById("logofixedId").innerHTML = `<div class="logosmall" id="logosmall">
                <img src="./assets/img/LOGO/Isotipo_Small.svg" alt="" id="logosmallimg">
                </div>`;

                document.getElementById("gifcabecera").setAttribute('src', "./assets/img/Ilustraciones/SHADERS/Paperback_Muestra_gif2.png");


              } else if (x.matches == false) {
                document.getElementById("logofixedId").innerHTML = `<div class="logosmall" id="logosmall">
                <img src="./assets/img/LOGO/Logo_Small.svg" alt="" id="logosmallimg">
                </div>`;
                document.getElementById("gifcabecera").setAttribute('src', "./assets/img/Ilustraciones/SHADERS/Paperback_Muestra_gif.png");

                

              }
            }
            
            var x = window.matchMedia("(max-width: 479px)");
            imageresponsive479(x) // Call listener function at run time
            x.addListener(imageresponsive479) // Attach listener function on state changes