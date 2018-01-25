// Only want to track real traffic and not development page loads!!

// StatCounter tracking function
function trackViews() {
    var sc_project = 11592789;
    var sc_invisible = 1;
    var sc_security = "05bd10b3";
    var scJsHost = (("https:" == document.location.protocol) ?
        "https://secure." : "http://www.");
    document.write("<sc"+"ript type='text/javascript' src='" 
        + scJsHost + "statcounter.com/counter/counter.js'></"+"script>");
}

if (window.location.protocol === 'file:') {
    console.log('Not tracking when using file: protocol for local dev');
} else {
    trackViews();
}
