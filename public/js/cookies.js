function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
  var c = ca[i];
  while (c.charAt(0)==' ') c = c.substring(1);
  if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
  }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user) {
  //alert("Welcome again " + user);
    }
    var msg = getCookie("message");
    if (msg) {
  //alert(msg);
  deleteCookie("message");
    }
}

function deleteCookie(cname) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}