function pageLoader()
{
// Set "home" as default page:

var thePage = "home";


// Check if other page is specified in the URL:

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('page'))
  {
  thePage = urlParams.get('page');
  }


// Load page content:

var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "mainpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.getElementById("pageContent").innerHTML = xmlHttp.responseText;


// Create navigation dynamically:

const pageFiles = ["home", "games", "about", "contact"];
const pageNames = ["Home", "Games", "About", "Contact"];

var navigationCode = "";
let i = 0;

while (i < pageFiles.length)
{
  if (thePage == pageFiles[i])
  {
    navigationCode += "<li><span class='navItemCurrent'>" + pageNames[i] + "</span></li>";
    document.title="Game Hub - " + pageNames[i];
  }
  else
  {
    navigationCode += "<li><a href='index.html?page=" + pageFiles[i] + "'>" + pageNames[i] + "</a></li>";
  }
  i++;
}
document.getElementById("navItemsDesktop").innerHTML=navigationCode;
document.getElementById("navItemsMobile").innerHTML=navigationCode;
}