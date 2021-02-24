import firebase from 'firebase';

class fire {
  constructor() {
    this.init();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyDlYY3woChU6TbYoyYcEIrXW7QmW0v-LEQ",
        authDomain: "mnikhil.firebaseapp.com",
        databaseURL: "https://mnikhil-default-rtdb.firebaseio.com",
        projectId: "mnikhil",
        storageBucket: "mnikhil.appspot.com",
        messagingSenderId: "932387732944",
        appId: "1:932387732944:web:7460f24a7767ca8afb0dd5"
      });
    }
  };

  sendContactDetails = async (name, email, phone, message) => {
    try {
        if(firebase.database) {
            const contactDetails = firebase.database().ref('contact');
            await contactDetails.push({ name, email, phone, message });
        }
    } catch(err) {
        console.log(err)
    }
  }
}

export default new fire();