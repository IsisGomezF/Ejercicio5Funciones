const semaforo = ["rojo","amarillo","verde"]
const contenedor = document.getElementById("container");
let index = 0;

function colores (){
        if(semaforo[index]==="verde"){
            contenedor.innerHTML="<img src ='https://as1.ftcdn.net/v2/jpg/02/51/29/04/1000_F_251290437_bHYTygvYA70Kq3v1FurshY8KD3wivW4M.jpg'>";
        }
        else if (semaforo[index]==="amarillo"){
            contenedor.innerHTML="<img src='https://as1.ftcdn.net/v2/jpg/02/51/29/04/1000_F_251290422_RYHiF6h1vRljormdOguiqpJ3hW8afHdw.jpg'>";
        }
        else if (semaforo[index]==="rojo"){
            contenedor.innerHTML="<img src ='https://as2.ftcdn.net/v2/jpg/02/51/29/03/1000_F_251290398_rHBsAbkXK9CdGSFPNCIK2TruvWlxE0uv.jpg'>";
        }
        index = (index + 1) % semaforo.length;
        setTimeout(colores, 1000);
    }

colores()

