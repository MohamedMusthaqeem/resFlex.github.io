var car = {
  name: "toyoto",
  engine: "12cc",
  torque: "14nm",
  braking: "abs",
  color: ["red", "blue", "orange", "yellow"],
};
var list = [
  {
    name: "user1",
    password: "uranus",
  },
  {
    name1: "user2",
    password: "din",
  },
];

var database = [
  {
    username: "Musthu",
    password: "Supersecret",
  },
  {
    username: "Loshitha",
    password: "1234",
  },
  {
    username: "Niga",
    password: "5678",
  },
];
var newsfeed = [
  {
    name: "mohamed",
    feed: "i am messed up with this code",
  },
  {
    name: "loshitha",
    feed: "I love coding ",
  },
];
var userName = prompt("Enter user name :");
var passWord = prompt("Enter password :");

function userValid(usname, passwrd) {
  for (i = 0; i < database.length; i++) {
    if (usname === database[i].username && passwrd === database[i].password) {
      return true;
    }
  }
  return false;
}

const signIn = (user, pass) => {
  if (userValid(userName, passWord)) {
    for (var i = 0; i < newsfeed.length; i++) {
      console.log(newsfeed[i]);
    }
  } else {
    alert("Wrong email id or password");
  }
};
signIn(userName, passWord);
