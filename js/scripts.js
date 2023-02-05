function pageLoader(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.getElementById("pageContent").innerHTML = xmlHttp.responseText;


// ----------------------------
// A static menu would look like this:
// ----------------------------
// <li><span class="navItemCurrent">Home</span></li>
// <li><a href="#" onclick="pageLoader('portfolio');">Portfolio</a></li>
// <li><a href="#" onclick="pageLoader('contact');">Contact</a></li>
// ----------------------------
// But here we will create it dynamically. :)
// ----------------------------

const pageFiles = ["home", "portfolio", "playground", "contact"];
const pageNames = ["Home", "Portfolio", "Playground", "Contact"];
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