function ordenar(){
    const paises = document.getElementsByClassName("pais");
    const paisesNombre = [];
    for(x = 0; x < paises.length; x++){
        paisesNombre.push(paises[x].innerHTML);
    }
    paisesNombre.sort();

    console.log(paises);
    console.log(paisesNombre);

    for(i = 0; i < paises.length; i++){
        paises[i].innerText = paisesNombre[i];
    }
}


/*
PROBLEMA 2

El caballo de Pedro es mas oscuro que el de Juan,
pero más rápido y más viejo  que el de Luis, que es 
aún mas lento que el de Willy, que es mas joven que el de Pedro, 
que es mas viejo que el de juan, Que es mas claro que el de Willy,
aunque el de Luis es mas lento y mas oscuro que el de Juan.
cual es el mas viejo, mas lento  y el mas claro?

        vejez      lentitud      claridad
__________________________________________
Pedro   vejez(2)   lentitud(1)   claridad(1)
Juan    vejez(1)   lentitud(1)   claridad(2)
Luis    vejez(1)   lentitud(2)   claridad(1)
Willy   vejez(1)   lentitud(1)   claridad(1)


El mas viejo es Pedro
El mas lento es Luis
El mas claro es Juan
*/