// ES6 Solution
var scroll_links = Array.from(document.querySelectorAll(".bdt-news-ticker .bdt-news-ticker-content ul li a").forEach(function(link) {
    while (link.firstChild) {
        link.parentNode.insertBefore(link.firstChild, link);
    }
    link.parentNode.removeChild(link);
}));