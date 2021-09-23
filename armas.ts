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

let arma1 = new armas ("1235", "glock", )
console.log(arma1.getMostrarArmas());

let arma2 = new armas ("1865", "beretta", )
console.log(arma2.getMostrarArmas());

let arma3 = new armas ("5486", "smi tanfoglio", )
console.log(arma3.getMostrarArmas());