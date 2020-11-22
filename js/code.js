/* var scroll_links = document.querySelector(".bdt-news-ticker-content ul li a");

for (var i=0; i<scroll_links.length; i++) {
    scroll_links[i].removeAttribute("href");
} */

// ES6 Solution
var scroll_links = Array.from(document.querySelectorAll(".bdt-news-ticker .bdt-news-ticker-content ul li a").forEach(function(link) {
    while (link.firstChild) {
        link.parentNode.insertBefore(link.firstChild, link);
    }
    link.parentNode.removeChild(link);
}));