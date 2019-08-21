var firebaseConfig = {
  apiKey: "AIzaSyB263dVvRKn2AoL6t1ZthJG_pj3hraocQU",
  authDomain: "supercat-c7f48.firebaseapp.com",
  databaseURL: "https://supercat-c7f48.firebaseio.com",
  projectId: "supercat-c7f48",
  storageBucket: "supercat-c7f48.appspot.com",
  messagingSenderId: "1034294586682",
  appId: "1:1034294586682:web:6a8d4eecdc2db1b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const priEmail = document.querySelector('#defaultForm-email');
const priPass = document.querySelector('#defaultForm-pass');
const btnPri = document.querySelector('#pri');

btnPri.addEventListener('click', e => {

  e.preventDefault();
  const email = priEmail.value;
  const pass = priPass.value;
  const auth = firebase.auth();

  const promise = auth.signInWithEmailAndPassword(email, pass);

  promise.catch(e => alert(e.message));

  checkDonee();
  priEmail.value = '';
  priPass.value = '';

});

const regIme = document.querySelector('#orangeForm-name');
const regEmail = document.querySelector('#orangeForm-email');
const regPass = document.querySelector('#orangeForm-pass');
const btnReg = document.querySelector('#reg');

btnReg.addEventListener('click', e => {

  e.preventDefault();
  const name = regIme.value;
  const emailR = regEmail.value;
  const passR = regPass.value;
  const auth = firebase.auth();


  const promise = auth.createUserWithEmailAndPassword(emailR, passR);

  promise.catch(e => alert(e.message));

  checkDonee();
  regIme.value = '';
  regEmail.value = '';
  regPass.value = '';

});

const postL = document.querySelector('#post');

firebase.auth().onAuthStateChanged(firebaseUser => {

  if (firebaseUser) {
    if (firebaseUser.email == 'prela.info@gmail.com'){
      postL.classList.remove('hide');
      console.log(firebaseUser);
    }
    console.log(firebaseUser);
  } else {
    console.log('not logged');
  }
});


const btnLogO = document.querySelector('#logout');

btnLogO.addEventListener('click', e => {

  firebase.auth().signOut();
  alert('Odjavljeni ste!');


});


//  SUBSCRIBE

const firebaseDBRef = firebase.database().ref().child('Subscribers');

const btnpretplata = document.querySelector('#pretplatio');
const txtemail = document.querySelector('#form30');

btnpretplata.addEventListener('click', pretplatiSe);
function pretplatiSe(e) {
  e.preventDefault();

  const subscribeInputs = document.getElementsByClassName('subs');

  let newSubscribers = {};

  for (let i = 0, len = subscribeInputs.length; i < len; i++) {

    let key = subscribeInputs[i].getAttribute('data-key');
    let value = subscribeInputs[i].value;

    newSubscribers[key] = value;

  }

  if (txtemail.value !== '') {
    firebaseDBRef.push(newSubscribers, function () {
      console.log('Subscribed');
      console.log(newSubscribers);
    });

    checkDone();
  } else {
    alert('Polje ne smije biti prazno');
  }

  txtemail.value = '';

}
function checkDone() {

  const done = document.querySelector('#checkDone');
  done.style.display = 'block';
  setTimeout(hideDone, 4000);

}

function hideDone() {

  const ddone = document.querySelector('#checkDone');
  ddone.style.display = 'none';


}

//  PRI I REG KONFIRMACIJA

function checkDonee() {

  const done = document.querySelector('#checkDonee');
  done.style.display = 'block';
  setTimeout(hideDonee, 4000);

}

function hideDonee() {

  const ddone = document.querySelector('#checkDonee');
  ddone.style.display = 'none';
}








