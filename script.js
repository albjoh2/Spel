'use strict';

//buttons
const btnIgen = document.querySelector('.igen');

//Textfields
const visaPi = document.querySelector('.pi');
const visaNuvarandeNivå = document.querySelector('.antal_decimaler');
const visaHighscore = document.querySelector('.highscore');

//Index = number of completed decimals and what level is active.
let index = 0;

//Define Pi
let rättPi =
  '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788659361533818279682303019520353018529689957736225994138912497217752834791315155748572424541506959508295331168617';

// Eventhandler
document.addEventListener('keydown', function (e) {
  //check if pressed key is a number
  if (
    (e.keyCode >= 48 && e.keyCode <= 57) ||
    (e.keyCode >= 96 && e.keyCode <= 105)
  ) {
    //check if numpad or numbers on top of the keyboard was used
    let pressedKey = e.keyCode > 59 ? e.keyCode - 96 : e.keyCode - 48;
    //make a space between every 4 number to make pi easyer to read.
    if (index % 4 === 0 && index > 0) {
      visaPi.textContent += ' ';
    }
    //go to the next pi decimal if input is correct and render it to the view
    if (pressedKey == rättPi[index]) {
      index++;
      visaPi.textContent += pressedKey;
      visaNuvarandeNivå.textContent = `Decimaler: ${index}`;
    } else {
      //restart the game if input is wrong
      omstart();
    }
  }
});

//Restart the game
const omstart = function () {
  //Show what the right number would have been
  visaNuvarandeNivå.textContent = `Siffran var ${rättPi[index]}, kör igen`;
  visaPi.textContent = '3.';
  //define highscore and set it = to index when game is restarted
  let highscore = 0;
  if (index > highscore) {
    highscore = index;
    //render the highscore to the view
    visaHighscore.textContent = `Highscore: ${highscore}`;
  }
  //reset the index
  index = 0;
};
//Make the restartbutton reset the game
btnIgen.addEventListener('click', omstart);
