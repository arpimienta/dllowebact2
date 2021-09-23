
//objeto
interface Policia{
    nombre:string;
    cedula:number;
    tipoCat:string;
}
//policia 1
const policia1:Policia = {
    nombre: "Juan Moreno",
    cedula:123456789,
    tipoCat: "Agente"


}

console.log(`Nombre del policia:${policia1.nombre}, cedula del policia:${policia1.cedula} y Categoria del policia:${policia1.tipoCat}`)

//policia 2
const policia2:Policia = {
    nombre: "Rafael Quintero",
    cedula:190872635,
    tipoCat: "Administrativo"


}

console.log(`Nombre del policia:${policia2.nombre}, cedula del policia:${policia2.cedula} y Categoria del policia:${policia2.tipoCat}`)

//policia 3
const policia3:Policia = {
    nombre: "Sofia Bojorquez",
    cedula:192347586,
    tipoCat: "Patrullero"


}

console.log(`Nombre del policia:${policia3.nombre}, cedula del policia:${policia3.cedula} y Categoria del policia:${policia3.tipoCat}`)