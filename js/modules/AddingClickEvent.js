import produto from '../data/Produtos.js'


export default class AddEvent{
    constructor(){
        this.itens = document.querySelectorAll(".prod")
        this.modal = document.querySelector('section')
        this.btn = document.querySelector('section button')
    }

    adicionaEvento(){
        this.itens.forEach((item,index)=>{           
            item.addEventListener('click',()=>{           
                this.showDetail(index)
            })  
        })

        this.btn.addEventListener('click',()=>{
            this.CloseModal()
        })
    }

    showDetail(index){       
        this.modal.classList.add("show-modal")
        const fullDescription = this.itens[index].children[0].innerHTML
        const titulo = this.itens[index].children[1].innerHTML
        const descricao = this.itens[index].children[2].innerHTML;      
        const preco = this.itens[index].children[3].innerHTML
        const imagem = this.itens[index].getAttribute('img')         
        this.container = document.createElement('div')  
        const cont =` <h2>${titulo}</h1>
        <img src=${imagem} alt="teste">
        <p>${fullDescription}</p>
        <p>$ ${preco},00</p> `        
       
      
        this.container.innerHTML = cont  
        
        this.modal.appendChild(this.container)
    }
    CloseModal(){
        this.modal.classList.remove('show-modal')
        this.container.innerHTML = " "
        this.modal.removeChild(this.container)
    }

    init(){
        this.adicionaEvento()
    }
}