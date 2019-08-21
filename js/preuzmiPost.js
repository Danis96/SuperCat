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

  const firebaseDBReff = firebase.database().ref().child('Objave');

  const cont = document.querySelector('#kartice1');

firebaseDBReff.on('child_added', snap => {

    let post = snap.val();


    let $div1 = document.createElement('div');
     $div1.classList.add('card');
     $div1.classList.add('card-narrower');
     $div1.setAttribute('id', 'detaljnocard');

    let $div2 = document.createElement('div');
     $div2.classList.add('view');
     $div2.classList.add('view-cascade');
     $div2.classList.add('overlay');

    let $img = document.createElement('img');
     let imeImg = post.Image;
     let ime = imeImg.split('\\').pop().split('/').pop();
     let firebaseImgDB = firebase.storage().ref('VijestiImg/' + ime);
     firebaseImgDB.getDownloadURL()
        .then(function (url) {

            let test = url;
            $img.src = test;

        }).catch(function (err) {
            console.log(err);
        });
      $img.classList.add('card-img-top');
      $img.setAttribute('id', 'prvi');
      $img.setAttribute('alt', 'postImg');

    let $a = document.createElement('a');
     
    let $div3 = document.createElement('div');
     $div3.classList.add('mask');
     $div3.classList.add('rgba-white-slight');
     $div3.classList.add('waves-effect');
     $div3.classList.add('waves-light');


    let $div4 = document.createElement('div');
     $div4.classList.add('card-body');
     $div4.classList.add('card-body-cascade');
    
    let $h5 = document.createElement('h5');
     $h5.classList.add('pink-text');
     $h5.classList.add('pb-2');
     $h5.classList.add('pt-1');
     $h5.innerHTML = '#supercat';
     

    let $h4 = document.createElement('h4');
     $h4.classList.add('font-weight-bold');
     $h4.classList.add('card-title');
     $h4.classList.add('newF');
     $h4.innerHTML = post.Naslov;
     
    
    let $p = document.createElement('p');
     $p.classList.add('card-text');
     $p.classList.add('newF');
     $p.classList.add('noviF');
     $p.innerHTML = post.Tekst;

     cont.append($div1);
     $div1.append($div2);
     $div2.append($img);
     $div2.append($a);
     $a.append($div3);
     $div1.append($div4);
     $div4.append($h5);
     $div4.append($h4);
     $div4.append($p);



    
});