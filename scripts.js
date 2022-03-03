
/**
 *Clase que representa un proceso(P)
 */
class Proceso {
    constructor(idProceso, tiempoProceso) {
        this.idProceso = idProceso; //identificador del proceso
        this.tiempoProceso = tiempoProceso;//tiempo que tarda el proceso
    }
    
}

class Control {
    constructor(cantProcesos) {
        this.cantProcesos = cantProcesos;
        this.procesos = [];
        this.arrayFSJ=[];
    }



    mostrarIdProcesos() {
        //let cantProcesos = document.getElementById('cantidadProcesos').value;

        let divIdProceso = document.getElementById("idProceso");

        let numero = this.cantProcesos;
        let identificador = "Proceso numero" + numero;
        let HTMLString = "<h3>identificador</h3>";



        console.log(this.cantProcesos);
    }

    crearProcesos() {
        let tiempo = 0;
        tiempo = document.getElementById('tiempoProceso').value;
        let identificador = 'P' + this.procesos.length;
        if (this.procesos.length != this.cantProcesos) {
            let p = new Proceso(identificador, tiempo);
            this.procesos.push(p);
        } else {
            console.log(this.procesos);
            prompt("ya se ingresaron los tiempos de los procesos, elija una manera de procesar");
            return;
        }
        console.log("tamaño array procesos", this.procesos.length)
    }

    calcularTE(tipo) {
        this.llenarArrayFSJ();
        let suma = 0;
        let promedioTE = 0;
        let acumulador=0;
        switch (tipo) {
            case 'FCFS':
                acumulador=0;
                for (let index = 0; index < this.procesos.length; index++) {
                    if (index == 0) {

                        continue;
                    }
                    console.log(this.procesos[index - 1].tiempoProceso);
                    acumulador+=Number(this.procesos[index - 1].tiempoProceso);
                    suma += acumulador;
                }
               
            break;
            case 'SJF':
               acumulador=0;
                for (let index = 0; index < this.arrayFSJ.length; index++) {
                    if(index==0) continue;
                   
                    console.log(this.arrayFSJ[index - 1]);
                    acumulador +=Number(this.arrayFSJ[index -1]);
                    suma+=acumulador;
                }
            break;
        }
        promedioTE = suma / this.procesos.length;
        console.log('promedio TE', promedioTE);
        document.getElementById('tiempoEspera').value = promedioTE;
        return promedioTE;


    }
    calcularTR(tipo) {
        let suma = 0;
        let promedioTR
        let acumulador=0;
        switch (tipo) {
        case 'FCFS':
            acumulador=0;
        for (let index = 0; index < this.procesos.length; index++) {
            acumulador +=Number(this.procesos[index].tiempoProceso);
            suma += acumulador;

        }
        
        break;
        case 'SJF':
             acumulador=0;
            for (let index = 0; index < this.arrayFSJ.length; index++) {
                acumulador +=Number(this.arrayFSJ[index]);
                suma += acumulador;
                
    
            }
        break;
        }
        promedioTR = suma / this.arrayFSJ.length;
        
        console.log('tiempoRetorno ', promedioTR);
        document.getElementById('tiempoRetorno').value = promedioTR;
        return promedioTR;
    }

    calcularTP(TE, TR) {

        let tiempoProm = (TE + TR) / 2;
        document.getElementById('tiempoPromedio').value = tiempoProm;

    }

    llenarArrayFSJ(){
        for (let index = 0; index < this.procesos.length; index++) {
            this.arrayFSJ[index]  = this.procesos[index].tiempoProceso;
            
        }
        
        console.log(this.arrayFSJ);  
        let min=Math.min(...this.arrayFSJ);
        this.arrayFSJ.unshift(min);
        console.log(min);
        for (let index = 0; index < this.arrayFSJ.length; index++) {
            if(index==0) continue;
            if ( this.arrayFSJ[index] == min) {
                this.arrayFSJ.splice(index,1);
                continue;
            }
    }
    console.log(this.arrayFSJ); 

}
}

let c = new Control();
let TE = 0;
let TR = 0;
function iniciar() {
    numProcesos = document.getElementById('cantidadProcesos').value;
    c.cantProcesos = numProcesos;
    console.log(c.procesos);
    c.mostrarIdProcesos();
}
function crearProceso() {
    console.log("voy a crear un objeto proceso")
    c.crearProcesos();
    tiempoProceso.value = "";

}

function calcularTE(tipo) {
    TE = c.calcularTE(tipo);
}
function calcularTR(tipo) {
    TR = c.calcularTR(tipo);
}
function calcularTP() {
    c.calcularTP(TE, TR);
}

function hacerGrafico() {
    //<div class="progress">
        //<div class="progress-bar  bg-danger" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
   // </div>
}