export default class Slide{
    constructor(){
        this.img = document.querySelectorAll('[data-img] img')
    }

    addEvent(){
        this.img.forEach(item => {
            item.classList.add('hide')
        })

    }
     


    init(){
       this.addEvent()
        console.log(this.img)
    }
}
