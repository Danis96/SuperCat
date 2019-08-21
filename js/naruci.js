// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB263dVvRKn2AoL6t1ZthJG_pj3hraocQU",
    authDomain: "supercat-c7f48.firebaseapp.com",
    databaseURL: "https://supercat-c7f48.firebaseio.com",
    projectId: "supercat-c7f48",
    storageBucket: "",
    messagingSenderId: "1034294586682",
    appId: "1:1034294586682:web:6a8d4eecdc2db1b8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  firebaseDBRef = firebase.database().ref().child('NarudzbeP');

  const txtEmail = document.querySelector('#materialContactFormName');
  const txtLink  = document.querySelector('#materialContactFormLink');
  const txtQuant = document.querySelector('#materialContactFormQ');
  const selectService = document.querySelector('#options');
  const selectPackage = document.querySelector('#choices');
  const btnNaruci = document.querySelector('#btnNaruci');

  btnNaruci.addEventListener('click', dodajPaket);
  function dodajPaket(e) {
    
       e.preventDefault();

       const formFields = document.getElementsByClassName('formas');
       let newPaket = {};


       for(let i = 0, len = formFields.length; i < len; i++)
       {
           let key = formFields[i].getAttribute('data-key');
           let value = formFields[i].value;

           newPaket[key] = value;

       }

       if(txtEmail.value !== '' && txtLink.value !== '' && txtQuant.value !== '') {
        firebaseDBRef.push(newPaket, function(){

          console.log('ADDED');
          console.log(newPaket);

       });
       checkDonee();
       } else {
         alert('Sva polja moraju biti popunjena');
       }

       txtEmail.value = '';
       txtLink.value = '';
       txtQuant.value = '';
  }



  function checkDonee() {

    const done = document.querySelector('#checkDoneee');
    done.style.display = 'block';
    setTimeout(hideDonee, 4000);
  
  }
  
  function hideDonee() {
  
    const ddone = document.querySelector('#checkDoneee');
    ddone.style.display = 'none';
  }