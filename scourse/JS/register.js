function signup(e) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
   
   
    var user = {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
    };


    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("dang ky thanh cong");
  }
  // function signup(e) {
  //   event.preventDefault();
  //   var username = document.getElementById("username").value;
  //   var email = document.getElementById("email").value;
  //   var password = document.getElementById("password").value;
  //   var user = {
  //     username: username,
  //     email: email,
  //     password: password,
  //   };
  //   var json = JSON.stringify(user);
  //   localStorage.setItem(username, json);
  //   alert("dang ky thanh cong");
  // }
  function login(e) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if (!user) {
      alert("vui long nhap username password");
    } else if (
      username == data.username &&
      password1 == data.password1 &&
      password2 == data.password2
    ) {
      alert("dang nhap thanh cong");
      window.location.href = "index.html";
    } else {
      alert("dang nhap that bai");
    }
  }