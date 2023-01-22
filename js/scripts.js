function pageLoader(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.getElementById("pageContent").innerHTML = xmlHttp.responseText;

const pageFiles = ["home", "portfolio", "contact"];
const pageNames = ["Home", "Portfolio", "Contact"];


// <li><span class="navItemCurrent">Home</span></li>
// <li><a href="#" onclick="pageLoader('portfolio');">Portfolio</a></li>
// <li><a href="#" onclick="pageLoader('contact');">Contact</a></li>

var navigationCode = "";

let i = 0;

while (i < pageFiles.length)
{
  if (thePage == pageFiles[i])
  {
    navigationCode += "<li><span class='navItemCurrent'>" + pageNames[i] + "</span></li>";
  }
  else
  {
    navigationCode += "<li><a href='#' onclick='pageLoader(\"" + pageFiles[i] + "\");'>" + pageNames[i] + "</a></li>";
  }
  i++;
}
document.getElementById("navigationUL").innerHTML= navigationCode;
}