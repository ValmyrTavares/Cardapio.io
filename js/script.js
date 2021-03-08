import Slide from './modules/Slide.js'

import AddEvent from './modules/AddingClickEvent.js'

import OpenSession from './modules/OpenSession.js'

//import Showcases from './modules/ShowCases.js';

import BeverageShowcase from './modules/BeverageShowcase.js';



const slide = new Slide()
slide.init();



const beverage = new BeverageShowcase();
beverage.init();

// const showcase = new Showcases()
// showcase.init()

const ev = new AddEvent()
ev.init()

const open = new OpenSession();
open.init()





