function getPage(theUrl)
  {
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "subpages/" + theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }