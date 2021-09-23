class armas {
    codigoarma: string;
    tipoarma: string;
    
    constructor(
      codigoarma: string,
      tipoarma: string,
      
    ){
        this.codigoarma= codigoarma;
        this.tipoarma= tipoarma;
        
    }
    getMostrarArmas(): void {
        console.log(`nombre: ${this.codigoarma}`);
        console.log(`direccion ${this.tipoarma}`);
     
    }
    

}

let arma1 = new armas ("1", "glock", )
console.log(arma1.getMostrarArmas());