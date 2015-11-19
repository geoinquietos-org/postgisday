
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-56908901-1', 'auto');
ga('send', 'pageview');


function fixNavbarIssue(){

/*  Quick & dirt draft fix for the bootstrap's navbar-fixed-top issue.
Overview
When you call a given section of a document (e.g. via <a href="#section"> or domain.com/page#section1) browsers show that section at the top of window. Bootstrap's navbar-fixed-top, _since it's fixed_, *overlays* first lines of content.
This function catches all of the <a> tags pointing to a section of the page and rewrites them to properly display content.
Works fine even if a # section is called from URL.
Usage
Paste this function wherever you want in your document and append _fixNavbarIssue()_ to your <body>'s onload attribute.
Bugs:
www.claudiodangelis.it
claudiodangelis@gmail.com
*/

if($(document).width()>979){  // Required if "viewport" content is "width=device-width, initial-scale=1.0": navbar is not fixed on lower widths.

  var hash = window.location.hash;

  // Code below fixes the issue if you land directly onto a page section (http://domain/page.html#section1)

  if(hash!=""){
    $(document).scrollTop(($(hash).offset().top) - $(".navbar-fixed-top").height());
  }

  // This adds any <a> element
  var locationHref = window.location.protocol + '//' + window.location.host + $(window.location).attr('pathname');
  var anchorsList = $('a').get();

  for(i=0;i<anchorsList.length;i++){
    var hash = anchorsList[i].href.replace(locationHref,'');
    if (hash[0] == "#" && hash != "#"){
      var originalOnClick = anchorsList[i].onclick; // Retain your pre-defined onClick functions
      setNewOnClick(originalOnClick,hash);
    }
  }
}

function setNewOnClick(originalOnClick,hash){
  anchorsList[i].onclick=function(){
    $(originalOnClick);
    $(document).scrollTop(($(hash).offset().top) - $(".navbar-fixed-top").height());
    return false;
  };
}
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

$( document ).ready(function() {
	fixNavbarIssue();


	/* add more carousel meme images to this array */
	shuffle([
		{
			"img":"http://i.imgur.com/6Bjx592.jpg",
			"alt":" Tomorrow is %23PostGISDay"
		},{
			"img": "http://i.imgur.com/Hro7gQj.jpg",
			"alt": "Import into PostGIS Database"
		},{
			"img": "http://i.imgur.com/0sL4Qk1.jpg",
			"alt": "Standards compliant"
		},{
			"img": "http://i.imgur.com/IsiRvui.jpg",
			"alt": "It's my day"
		},{
			"img": "https://pbs.twimg.com/media/B246tykCQAAoDxI.jpg",
			"alt": "Happy Birthday!"
		},{
			"img": "https://pbs.twimg.com/media/B23mrQlCcAEmXbd.jpg",
			"alt": "GISDay is over"
		},{
			"img": "http://cdn.meme.am/instances/500x/56388462.jpg",
			"alt": "Intruder!"
		},{
			"img": "https://pbs.twimg.com/media/B23_eD-IYAA2gTj.jpg:large",
			"alt": "We use PostGIS!"
		},{
			"img": "https://pbs.twimg.com/media/B24EWcyIMAAN52t.jpg:large",
			"alt": "Batman"
		},{
			"img": "http://cdn.meme.am/instances/500x/56388376.jpg",
			"alt": "Welcome to the party!"
		},{
			"img": "https://pbs.twimg.com/media/B24WRfCIgAA-US7.jpg:large",
			"alt": "I'm an elephant"
		},{
			"img": "https://pbs.twimg.com/media/CUKC6x6XIAAnP0A.jpg:large",
			"alt": "time to show up"
		},{
			"img": "https://pbs.twimg.com/media/CUMTGXcWoAApfd1.jpg:small",
			"alt": "esri"
		}
	]).forEach(function(obj){
		$('.carousel-inner').append(
				'<div class="item"><img src="' + obj.img + '" alt="' + obj.alt + '"></div>');
	});
});
