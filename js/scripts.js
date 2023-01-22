function loadPage(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.write(xmlHttp.responseText);


const pages = ["home", "portfolio", "contact"];
const titles = ["Home", "Portfolio", "Contact"];



var navigationCode = "";

document.getElementById("navigationUL").innerHTML= navigationCode;
}