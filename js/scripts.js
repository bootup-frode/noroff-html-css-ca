function getPage(thePage)
{
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "../subpages/" & thePage & ".html", false );
xmlHttp.send( null );
return xmlHttp.responseText;
}