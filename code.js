var scroll_links = document.querySelector(".bdt-news-ticker-content ul li a");

for (var i=0; i<scroll_links.length; i++) {
    scroll_links[i].removeAttribute("href");
}