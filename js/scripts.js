function loadPage(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.write(xmlHttp.responseText);


const pages = ["home", "portfolio", "contact"];
const titles = ["Home", "Portfolio", "Contact"];


// <li><span class="navItemCurrent">Home</span></li>
// <li><a href="#" onclick="loadPage('portfolio');">Portfolio</a></li>
// <li><a href="#" onclick="loadPage('contact');">Contact</a></li>

var navigationCode = "";

document.getElementById("navigationUL").innerHTML= navigationCode;
}