// Only want to track real traffic and not development page loads!!

// StatCounter tracking function
function trackViews() {

  // First write the details of the project.
  document.write('<script type="text/javascript">'
    + ' var sc_project=11592789;'
    + ' var sc_invisible=1;'
    + ' var sc_security="05bd10b3";'
    + ' var scJsHost = (("https:" == document.location.protocol) ?'
    + ' "https://secure." : "http://www.");'
    + '</script>'
  );

  // Then call the StatCounter script.
  document.write('<script type="text/javascript" '
    + 'src="https://www.statcounter.com/counter/counter.js">'
    + '</script>'
  );
}

if (window.location.protocol === 'file:') {
    console.log('Not tracking when using file: protocol for local dev');
} else {
    trackViews();
}
