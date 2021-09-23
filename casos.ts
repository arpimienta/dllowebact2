//objeto
interface Casos{
    codigo:number;
    juzgado:string;
    prinCar:string;
}
//Caso 1
const caso1:Casos = {
    codigo: 1221,
    juzgado:"Ana Betancour",
    prinCar: "Agresion fisica"


}

console.log(`Nombre del juzgado:${caso1.juzgado}, codigo del caso:${caso1.codigo} y cargo principal:${caso1.prinCar}`)


//Caso 2
const caso2:Casos = {
    codigo: 2112,
    juzgado:"Roberto Marlon",
    prinCar: "Robo"


}

console.log(`Nombre del juzgado:${caso2.juzgado}, codigo del caso:${caso2.codigo} y cargo principal:${caso2.prinCar}`)