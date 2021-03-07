import ShowcaseBuider from "./ShowcaseBuider.js"
import produto from "../data/Produtos.js"


const showcasebuilder = new ShowcaseBuider()


export default class Showcases{
    constructor(){
        this.pratos = document.querySelector(".pratos")
        this.modalDetail = document.querySelector("section")
        this.lanches = document.querySelector(".lanches")

    }
    lanchesShowCase(){
        const obj = produto.lanches;      
        showcasebuilder.createPorcoesTags(this.pratos,  'porcoes', obj)
    }

    pratosShowCase(){
        
        const obj = produto.pratos;      
        showcasebuilder.createPorcoesTags(this.modalDetail,  'pratos', obj)
    }

    porcoesShowCase(){
        const obj = produto.porcoes;      
        showcasebuilder.createPorcoesTags(this.lanches,  'porcoes', obj)
    }

    init(){
        this.lanchesShowCase()
        this.pratosShowCase()
        this.porcoesShowCase()
       
    }
}