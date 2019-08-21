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



  const firebaseDBRef = firebase.database().ref().child('Subscribers');

  const btnpretplata = document.querySelector('#pretplatio');
  const txtemail = document.querySelector('#form30');

  btnpretplata.addEventListener('click', pretplatiSe);
  function pretplatiSe(e) {
      e.preventDefault();

      const subscribeInputs = document.getElementsByClassName('subs');

      let newSubscribers = {};

      for(let i = 0, len = subscribeInputs.length; i < len; i++){

          let key = subscribeInputs[i].getAttribute('data-key');
          let value = subscribeInputs[i].value;

          newSubscribers[key] = value;

      }
      
      firebaseDBRef.push(newSubscribers, function(){
              console.log('Subscribed');
              console.log(newSubscribers);
      });

      txtemail.value = '';

      checkDone();


      

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

  

