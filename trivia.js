//variables
let userAnswer;
let rightanswer;
let score = 0;
let questnumber = 0;

$('.score').hide();
$('.contribute').hide();

// questions

class task {
  constructor(quest, answ) {

    this._quest = quest;
    this._answ = answ;
  }

  get answ () {
    return this._answ;
  }

  get quest () {
    return this._quest;
  }

  addanswers(newanswer) {
    this.answ.push(newanswer);
  }
}

const quest1 = new task ('Hvor høyt er Eiffeltårnet i Paris?',['295 meter', '451 meter', '376 meter', '324 meter'] );
const quest2 = new task ('I hvilket land ligger hovedkontoret til flyselskapet Ryanair?', ['Tyskland', 'England', 'Italia', 'Irland']);
const quest3 = new task ('I hvilken amerikansk delstat ligger Grand Canyon', ['California', 'Texas', 'New York', 'Arizona']);

let questions = [quest1, quest2, quest3];
let randomNumber = Math.floor(Math.random()*questions.length);

//randomise answers + set questions
function randomanswers(taskan) {
  let taska = taskan.answ;
  let currentIndex = taska.length;
  let temporaryValue;
  let randomIndex;
  rightanswer = taska[3];
  questions.splice(taskan, 1);

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;

    temporaryValue = taska[currentIndex];
    taska[currentIndex] = taska[randomIndex];
    taska[randomIndex] = temporaryValue;
    }

    // assign question

    document.getElementById('spm').innerHTML = taskan.quest;

    // assign answeroptions

    document.getElementById('alt1').innerHTML = taska[0];
    document.getElementById('alt2').innerHTML = taska[1];
    document.getElementById('alt3').innerHTML = taska[2];
    document.getElementById('alt4').innerHTML = taska[3];
    document.getElementById('alt1_').value = taska[0];
    document.getElementById('alt2_').value = taska[1];
    document.getElementById('alt3_').value = taska[2];
    document.getElementById('alt4_').value = taska[3];
}

function setquestions() {

}


//get answer from user + store them + game over

function submit() {
//store answers
  userAnswer = jQuery('#answers input:radio:checked').val();

  if (userAnswer === rightanswer) {
  score += 1;
  questnumber += 1;
  localStorage.setItem('oppgave '+[questnumber], 'riktig');

  }

    else {
      questnumber +=1;

      localStorage.setItem('oppgave '+[questnumber], 'feil');

    }

//game over?
    if (questnumber>=3) {
        $('.answers').hide();
        $('.question').hide();
        $('.score').show();
        document.getElementById('scoretext').innerHTML = 'Du fikk ' + score + ' poeng!';

        $('.contribute').show();
    }

    // avoid same question twise by removing it

    console.log(x);
    //keep playing

    randomanswers(questions[Math.floor(Math.random()*questions.length)]);

  }


randomanswers(questions[Math.floor(Math.random()*questions.length)]);
