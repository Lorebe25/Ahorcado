let palabras = Array("bolsa","remera","cangrejo","botella","ramillete","pantalon","herramienta","alquitran","enredadera","montaña","eclipse");
let palabra0culta=" ";
let palabraAAdivinar="";
let vidas=6;

document.getElementById("boton").addEventListener("click",comprobar);

iniciar();

function iniciar(){
 palabraOculta=palabras[Math.floor(Math.random()* palabras.length)];
 for (let i=0;i<palabraOculta.length;i++){
     palabraAAdivinar+="_ ";
 }
 document.getElementById("frase").innerHTML=palabraAAdivinar;
console.log(palabraOculta)
}

 
function comprobar (){
    let letra=document.getElementById("letra").value.toLowerCase();
    palabra0culta=palabraOculta.toLowerCase();
    let nuevo="";
    for(let i=0;i<palabraOculta.length;i++){
        if(letra==palabraOculta[i]){
            nuevo += letra+" ";
        }else{
            nuevo= nuevo + palabraAAdivinar[i*2]+" ";
        }
    }
    if(nuevo==palabraAAdivinar){
      vidas--;
      document.getElementById("vida").innerHTML="El nro de vida que quedan son "+ vidas;
       }
       
        if(vidas<=5){
            
        document.getElementById("img1").src='img/1.jpg';
        }
        if(vidas<=4){
            
            document.getElementById("img1").src='img/2.jpg';
            }
            if(vidas<=3){
            
                document.getElementById("img1").src='img/3.jpg';
                }
                if(vidas<=2){
            
                    document.getElementById("img1").src='img/4.jpg';
                    }
                    if(vidas<=1){
            
                        document.getElementById("img1").src='img/5.jpg';
                        }
                        

     palabraAAdivinar = nuevo;
     document.getElementById("frase").innerHTML=palabraAAdivinar

     if(vidas==0){
         document.getElementById("img1").src='img/6.jpg';
         alert ("perdiste");location.reload();
        
        
     }
     if(palabraAAdivinar.search("_")==-1){
        document.getElementById("img1").src='img/win.gif';
       alert("ganaste");
       
       
     }
     document.getElementById("letra").focus();
     document.getElementById("letra").value="";
     
    }
    


 


