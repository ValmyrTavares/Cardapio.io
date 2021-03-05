export default class OpenSession{
    constructor(){
        this.target = document.querySelectorAll('.target')      
    }
    
    addEvent(){
        this.target.forEach((item, index) => [
            item.addEventListener('click',()=>{
                this.showHide(index)
            })
        ])
    }

    showHide(index){
     const teste1 = this.target[index].nextElementSibling.classList.toggle('hide')      
    }   

    init(){
        this.addEvent()      
    }
}