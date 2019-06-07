
function requestMocky(){
var xHtml = new XMLHttpRequest();
xHtml.open('GET', "https://cors.io/?http://www.mocky.io/v2/5b152dbd3200006000b8a251", true);
xHtml.send();
 
xHtml.onreadystatechange = processRequest;

function processRequest(e) {
    if (xHtml.readyState == 4 && xHtml.status == 200) {
       var response = JSON.parse(xHtml.responseText);
        alert("uzytkownik o id " +response.id+ " został stworzony");
    }
}
}