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

const txtAuthor = document.querySelector('#materialContactFormName');
const txtTitle = document.querySelector('#materialContactFormTitle');
const txtImage = document.querySelector('#fileBtn');
const txtUploader = document.querySelector('#uploader');
const txtMsg = document.querySelector('#materialContactFormMessage');

const btnUpload = document.querySelector('#btnUpload');

btnUpload.addEventListener('click', objaviPost);
function objaviPost(e) {
    e.preventDefault();

    const inputiF = document.getElementsByClassName('po');

    let newPost = {};

    for (let i = 0, len = inputiF.length; i < len; i++) {

        let key = inputiF[i].getAttribute('data-key');
        let value = inputiF[i].value;

        newPost[key] = value;
    }

    firebaseDBReff.push(newPost, function () {


        console.log(newPost);
        console.log('Vijest je uploadovana');

    });

    txtAuthor.value = '';
    txtTitle.value = '';
    txtImage.value = '';
    txtUploader.value = '';
    txtMsg.value = '';

    checkDonee();

}

txtImage.addEventListener('change', function (e) {

    e.preventDefault();

    //  uzimanje file-a
    let file = e.target.files[0];

    // kreiranje ref an bazu
    let databaseRef = firebase.storage().ref('VijestiImg/' + file.name);

    // upload file-a
    let task = databaseRef.put(file);


    // update progress bar
    task.on('state_changed',

        function progress(snapshot) {

            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            txtUploader.value = percentage;

        },

        function error(err) {


            console.log(err);
        },

        function complete() {

            console.log('i slika je uploadovana');

        }

    );

});




function checkDonee() {

    const done = document.querySelector('#checkDoneeee');
    done.style.display = 'block';
    setTimeout(hideDonee, 4000);
  
  }
  
  function hideDonee() {
  
    const ddone = document.querySelector('#checkDoneeee');
    ddone.style.display = 'none';
  }