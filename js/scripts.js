function loadPage(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "subpages/" + thePage + ".html", false );
xmlHttp.send( null );
document.write(xmlHttp.responseText);
}