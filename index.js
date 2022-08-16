var url = " https://randomuser.me/api/ ";

document.getElementById("male").addEventListener("click", function () {
  url = "https://randomuser.me/api/?gender=male";
});

document.getElementById("female").addEventListener("click", function () {
  url = "https://randomuser.me/api/?gender=female";
});

let avatar = document.getElementById("avatar");
let fullname = document.getElementById("fullname");
let username = document.getElementById("username");
let email = document.getElementById("email");
let city = document.getElementById("city");
let country = document.getElementById("country");
let postcode = document.getElementById("postcode");
let dob = document.getElementById("dob");
let phone = document.getElementById("phone");
let btn = document.getElementById("btn");
let btnPrev = document.getElementById("btn-prev");




btn.addEventListener("click", function () {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

btnPrev.addEventListener("click", function () {
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printError);
});

function handleErrors(res) {
  if (!res.ok) {
    throw error(res.status);
  }
  console.log(res);
  return res;
}

function parseJSON(res) {
  return res.json();
}

function updateProfile(profile) {
    avTr= profile.results[0].picture.medium;
    fullName = profile.results[0].name.first + " " + profile.results[0].name.last;
    userName = profile.results[0].login.username;
    emaiL = profile.results[0].email;
    citY = profile.results[0].location.city;
    countrY = profile.results[0].location.country;
    postcodE = profile.results[0].location.postcode;
    doB = profile.results[0].dob.age;
    phonE = profile.results[0].phone;

  avatar.src = avTr
  fullname.innerHTML = fullName
  username.innerHTML = userName
  email.innerHTML = emaiL
  city.innerHTML = citY
  country.innerHTML = countrY
  postcode.innerHTML = postcodE
  dob.innerHTML = doB
  phone.innerHTML = phonE
  return 1;
}

// trying previous user

function updatePrevProfile(profile) {
    avatar.src = avTr
    fullname.innerHTML = fullName
    username.innerHTML = userName
    email.innerHTML = emaiL
    city.innerHTML = citY
    country.innerHTML = countrY
    postcode.innerHTML = postcodE
    dob.innerHTML = doB
    phone.innerHTML = phonE
    return 1;
  }

function printError(error) {
  console.log(error);
}
