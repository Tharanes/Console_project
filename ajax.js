function calltoregister() {

  var x = document.getElementById("registerForm").elements[0].value;

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    alert(x);

    if (this.readyState == 4 && this.status == 200) {

    }
  };
  xhttp.open("GET", "register.php?g=" + x, true);

  xhttp.send();

}
