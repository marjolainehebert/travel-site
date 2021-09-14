import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
// import Person from './modules/Person'

let mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept()
}



/* test below this line*/
// class Adult extends Person {
//   payTaxes () {
//     console.log (this.name + " now owes zero taxes.")
//   }
// }


// let john = new Person ("John Doe", "flashy orange");
// john.greet();

// let jane = new Adult ("Jane Smith", "Teal");
// jane.greet();
// jane.payTaxes();