var thePage = "home";

if (urlParams.get('page'))
  {
  thePage = urlParams.get('page');
  }

function pageLoader()
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.getElementById("pageContent").innerHTML = xmlHttp.responseText;
document.getElementById("hamburger-checkbox").checked = false;


// ----------------------------
// Create menu dynamically. :)
// ----------------------------

const pageFiles = ["home", "games", "about", "contact"];
const pageNames = ["Home", "Games", "About", "Contact"];
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
    navigationCode += "<li><a href='index.html?page=" + pageFiles[i] + "'>" + pageNames[i] + "</a></li>";
  }
  i++;
}
document.getElementById("navigationUL").innerHTML=navigationCode;
}