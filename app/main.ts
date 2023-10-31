interface Equalable<T>{
    isEqual(comparavel:T):boolean;
}

abstract class Veiculo {
    constructor(protected ligado:boolean, private _ano:number){}
    
    public get ano() {
        return this._ano;
    };

    public set ano(ano:number) {
        this._ano = ano;
    };


    public ligar() {
      this.ligado = true;
      console.log(`O veiculo foi ligado.`);
    }
  
    public desligar() {
      this.ligado = false;
      console.log(`O carro veiculo foi desligado.`);
    }
} 
  
class Carro extends Veiculo implements Equalable<Carro>{  
    constructor(private _marca: string,private _numeroPortas: number, private _cor: string, ano: number, ligado:boolean) {
        super(ligado,ano);
    }

    public get marca() {
        return this._marca;
    };

    public set marca(marca:string) {
        this._marca = marca;
    };

    public get numeroPortas() {
        return this._numeroPortas;
    };

    public set numeroPortas(numeroPortas:number) {
        this._numeroPortas = numeroPortas;
    };
    
    public get cor() {
        return this._cor;
    };

    public set cor(cor:string) {
        this._cor = cor;
    };

    isEqual(comparavel: Carro) {
        return this._marca===comparavel._marca &&
            this._numeroPortas===comparavel._numeroPortas &&
            this._cor===comparavel._cor;
    }
}
  
  
class Aviao extends Veiculo implements Equalable<Aviao>{
    constructor(private _protocolo: string, private _ciaAerea: string, ano: number, ligado:boolean) {
        super(ligado,ano);
    }

    public get protocolo() {
        return this._protocolo;
    };

    public set protocolo(protocolo:string) {
        this._protocolo = protocolo;
    };

    public get ciaAerea() {
        return this._ciaAerea;
    };

    public set ciaAerea(ciaAerea:string) {
        this._ciaAerea = ciaAerea;
    };

    isEqual(comparavel: Aviao) {
        return this._protocolo===comparavel._protocolo &&
            this._ciaAerea===comparavel._ciaAerea
    }
}

class Teste{
    main(){
        let veiculos :Veiculo[] = [];

        let aviao1 = new Aviao("1Aew2","GOL",1998,false);
        let aviao2 = new Aviao("1das85","AZUL",2015,false);
        let carro1 = new Carro("FIAT",4,"vermelho",2002,false);
        let carro2 = new Carro("CHEVROLET",4,"prata",2018,false);

        veiculos.push(aviao1);
        veiculos.push(aviao2);
        veiculos.push(carro1);
        veiculos.push(carro2);

        veiculos[0].ligar();
        console.log(veiculos[3].ano);
    }
}

new Teste().main();