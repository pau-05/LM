/*BUCLE DO-WHILE*/ 
document.getElementById("boton1").onclick = function(){
    respuestaCorrecta = 6
    do{
        x = parseInt(prompt("Adivina mi nota en programación"))
        //ParseInt convierte a numero
        if(x!=respuestaCorrecta)
            b=confirm("¿Quieres volver a intentarlo?")
    }while(x!=respuestaCorrecta && b)
    if(x==respuestaCorrecta){
        alert("Enhorabuena!")
    }else{
        alert("Te has rendido.")
    }  
}
    /*Bucle for: debe recibir siempre 3 parametros:
        1a posición: valor inicial de i
        2a posición: condición para que el bucle SIGA
        3a posición: de cúanto en cúanto avanza i*/ 
for(let i = 1; i<=100; i++){
    document.write("<p>"+i+"</p>")
} 
/*Crear 6 encabezados, del h1 al h6, en los que ponga: párrafo 1, párrafo 2,...*/
for(let i=1; i<=6; i++){
    document.write("<h"+i+">Párrafo "+i+"</h"+i+">")
}
var x = 1
for(let i=1; i<=6; i--){
    document.write("<h"+i+">Párrafo "+x+"</h"+i+">")
    x++
}
//Switch agrupando casos
var y = parseInt(prompt("Dime un número"))
switch(y){
    case 0,1,2,3,4: 
        alert("Suspendo")
        break
    case 5,6:
        alert("Aprobado")
        break
    case 7,8:  
        alert("Notable") 
        break  
    default:  
        alert("Sobresaliente")  
}
//Switch con expresiones booleanas
switch(true){
    case y<5:
        alert("Suspenso")
        break
    case y>5:
        alert("Aprobado")
}