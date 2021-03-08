//import produto from '../data/Produtos.js'

export default class Modal{
    constructor(){   
       
       
        this.body = document.querySelector("body")
    }

   
    createTags(container,label, obj ){        
       
        this.h4 = document.createElement('h4')
        this.h4.setAttribute('class','target sub')
        this.h4.innerHTML = label
       
        const div = document.createElement('div')
        div.setAttribute('class', `${label} hide`)          
        obj.forEach(item=>{
            this.li = `<div class='flex-int prod' img=${item.imagem}>
            <p style='display:none'>${item.fullDescription}
            </p><p>${item.nome}</p><span>${item.desc}</span>
            <p> Valor ${item.preco},00</p></div>`      
            div.innerHTML += this.li        
         })        
            container.appendChild(this.h4)          
            container.appendChild(div)    
    }
        
        

        createPorcoesTags(container,label, obj ){         
        
             this.div = document.createElement('div')
            this.div.setAttribute('class', `${label} hide`)          
            obj.forEach(item=>{
               this.li = `<div class='flex-int prod' img=${item.imagem}>
                <p style='display:none'>${item.fullDescription}
                </p><p>${item.nome}</p><span>${item.desc}</span>
                <p>${item.preco}</p></div>`      
                this.div.innerHTML += this.li     
             })             
            this.body.insertBefore( this.div,  container  )
           
            }



}