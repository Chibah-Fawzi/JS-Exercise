const names = ["Thor", "Wolverine", "Venom"];
const email = ["thor@gmail.com", "wolverine@gmail.com", "venom@gmail.com"];
const password = ["thor01", "wolverine02", "venom03"];

const users = [];

// il y'avais une petite erreur dans la condition c'est i < names.length au lieu de names.length
for (let i = 0; i<names.length; i++) { 
  const user = {
    name: names[i],
    email: email[i],
    password: password[i],
  };
  users.push(user);
}
console.log(users);



function Login() {
  var email = "thor@gmail.com".toLowerCase();
  var password = "thor01";

  const found = users.find(
    (element) => element.email == email && element.password == password
  );

  if (found) {
    alert("user connected!");
  } else {
    alert("user not found");
  }
}

// Exécuter la function Login
Login()


function Register() {
  var email = "thor@gmail.com".toLowerCase()
  var password = "test"
  var name = "said"

  const newUser = {
    name,
    email,
    password
  }

  const found = users.find(element => element.email == email)

  // ici on rajoute juste la condition :
  if(found){
    alert('user already existing') 
  } else {
    // ajouter le nouveau objet du user à la liste users
    users.push(newUser)
  }
}

// éxécuté la function Register
Register()