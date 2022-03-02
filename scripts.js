
/**
 *Clase que representa un proceso(P)
 */ 
 class Proceso{
    constructor(idProceso, tiempoProceso){
        this.idProceso=idProceso; //identificador del proceso
        this.tiempoProceso = tiempoProceso;//tiempo que tarda el proceso
    }
}

class Control{
        constructor(cantProcesos){
            this.cantProcesos= cantProcesos;
            this.procesos=[];
        }
    
    
    
mostrarIdProcesos(){
    //let cantProcesos = document.getElementById('cantidadProcesos').value;
    
    let divIdProceso= document.getElementById("idProceso");
     
         let numero=this.cantProcesos;
         let identificador="Proceso numero"+numero;
         let HTMLString= "<h3>identificador</h3>";
         
     
     
     console.log(this.cantProcesos);
 }

 crearProcesos(){
     let tiempo=0;
      tiempo=document.getElementById('tiempoProceso').value;
     let identificador='P'+this.procesos.length;
     if(this.procesos.length!=this.cantProcesos){
    let p = new Proceso(identificador,tiempo);
     this.procesos.push(p);
     }else{
         console.log(this.procesos);
         prompt("ya se ingresaron los tiempos de los procesos, elija una manera de procesar");
         return;
     }
     console.log("tamaño array procesos", this.procesos.length)
 }

 calcularTE(){
   
     let suma=0;
     let promedioTE=0;
 for (let index = 0; index < this.procesos.length; index++) {
     if (index==0) {
        
         continue;
     }
     console.log(this.procesos[index-1].tiempoProceso);
    suma = suma+Number(this.procesos[index-1].tiempoProceso);
    
 }
    console.log('suma: ',suma);
    promedioTE=suma/this.procesos.length;
    console.log('promedio TE', promedioTE);
    document.getElementById('tiempoEspera').value = promedioTE;
    return promedioTE;
 }
 calcularTR(){
    let suma=0;
    let promedioTR;
    for (let index = 0; index < this.procesos.length; index++) {

        suma+=Number(this.procesos[index].tiempoProceso);
         
     }
     promedioTR=suma/this.procesos.length;
     document.getElementById('tiempoRetorno').value = promedioTR;
    console.log('tiempoRetorno ',promedioTR);
    return promedioTR;
 }

 calcularTP(TE,TR){

   let tiempoProm=(TE+TR)/2; 
    document.getElementById('tiempoPromedio').value = tiempoProm;

 }


}

let c = new Control();
let TE =0;
let TR =0;
function iniciar(){
    numProcesos = document.getElementById('cantidadProcesos').value;
 c.cantProcesos=numProcesos;
 console.log(c.procesos);
c.mostrarIdProcesos();
}
function crearProceso(){
    console.log("voy a crear un objeto proceso")
    c.crearProcesos();
    tiempoProceso.value="";

}

function calcularTE(){
  TE=  c.calcularTE();
}
function calcularTR(){
   TR= c.calcularTR();
}
function calcularTP(){
    c.calcularTP(TE,TR);
}