$(document).ready(function () {
    chosen.init();
    list.init();
    setTimeout(function () { load('js/chosen_two.js'); } , 4000);

});

function load(url) {
    var script = document.createElement('script');
    var scripts = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = url;
    scripts.parentNode.insertBefore(script, scripts);
}
