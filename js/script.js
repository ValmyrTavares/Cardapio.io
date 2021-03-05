//import Modal from './modules/Modal.js'
import AddEvent from './modules/AddingClickEvent.js'
import OpenSession from './modules/OpenSession.js'
import Showcases from './modules/ShowCases.js';
import BeverageShowcase from './modules/BeverageShowcase.js';



// const modal = new Modal()
// modal.init();

const beverage = new BeverageShowcase();
beverage.init();

const showcase = new Showcases()
showcase.init()

const ev = new AddEvent()
ev.init()

const open = new OpenSession();
open.init()

console.log("Rolando")



