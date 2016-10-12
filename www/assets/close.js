var ref = window.open(encodeURI(url), '_blank', options);
ref.addEventListener('loadstop', function(event) {
    if (event.url.match("mobile/close")) {
        ref.close();
    }
});
