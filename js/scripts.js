function pageLoader(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.getElementById("pageContent").innerHTML = xmlHttp.responseText;

const pageNames = ["Home", "Portfolio", "Contact"];
const pageFiles = ["home", "portfolio", "contact"];


// <li><span class="navItemCurrent">Home</span></li>
// <li><a href="#" onclick="loadPage('portfolio');">Portfolio</a></li>
// <li><a href="#" onclick="loadPage('contact');">Contact</a></li>

var navigationCode = "";

let i = 0;

while (i < pageNames.length)
{
  if (thePage == pageNames[i])
  {
    navigationCode += "<li><span class='navItemCurrent'>" + pageNames[i] + "</span></li>";
  }
  else
  {
    navigationCode += "<li><a href='#' onclick='loadPage(\"" + pageFiles[i] + "\");'>" + pageNames[i] + "</a></li>";
  }
  i++;
}
document.getElementById("navigationUL").innerHTML= navigationCode;
}