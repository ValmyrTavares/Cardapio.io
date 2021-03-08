import ShowcaseBuider from "./ShowcaseBuider.js"
import produto from "../data/Produtos.js"


const showcasebuilder = new ShowcaseBuider()

export default class BeberageShowcase{
    constructor(){      
        this.modalDetail = document.querySelector("section")    
        this.bebidas = document.querySelector(".bebidas") 

    }

    beerShowCase(){        
        const obj = produto.bebidas.cerveja;      
        showcasebuilder.createTags(this.bebidas,'cerveja', obj)
   }
    

    distilledShowCase(){
        const obj = produto.bebidas.destilados;      
        showcasebuilder.createTags(this.bebidas,  'destilados', obj)       
    }

    juiceShowCase(){
        const obj = produto.bebidas.sucos;      
        showcasebuilder.createTags(this.bebidas,  'sucos', obj)
    }

    drinkShowCase(){
        const obj = produto.bebidas.drink;      
        showcasebuilder.createTags(this.bebidas,  'drinks', obj)
    }
    refrigeranteShowCase(){
        const obj = produto.bebidas.refrigerante;      
        showcasebuilder.createTags(this.bebidas,  'refrigerante', obj)
    }







    init(){
        this.beerShowCase()
        this. distilledShowCase()
        this.juiceShowCase()   
        this. drinkShowCase()  
        this.refrigeranteShowCase()    
    }

}