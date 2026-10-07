const tabs = document.querySelectorAll(".navTab");
const home_page = document.getElementById("home");
const marketplace = document.getElementById("marketplace");
const hiw = document.getElementById("how-it-works");
const priceInsights = document.getElementById("price-insight");
const about = document.getElementById("about-us");
const whyFS = document.getElementById("why-farmsetu");
home_page.style.display = "block";
whyFS.style.display = "block";
marketplace.style.display ="none";
priceInsights.style.display ="none";
about.style.display ="none";
hiw.style.display = "none";
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        if(tab.id === "homeT") {
            home_page.style.display = "block";
            whyFS.style.display = "block";
            marketplace.style.display ="none";
            priceInsights.style.display ="none";
            about.style.display ="none";
            hiw.style.display = "none";
        } else if(tab.id === "hiwT") {
            home_page.style.display = "none";
            whyFS.style.display = "none";
            marketplace.style.display ="none";
            priceInsights.style.display ="none";
            about.style.display ="none";
            hiw.style.display = "block";
        } else if(tab.id === "marketplaceT") {
            whyFS.style.display = "none";
            home_page.style.display = "none";
            marketplace.style.display ="block";
            priceInsights.style.display ="none";
            about.style.display ="none";
            hiw.style.display = "none";
        } else if(tab.id === "priceT") {
            whyFS.style.display = "none";
            home_page.style.display = "none";
            marketplace.style.display ="none";
            priceInsights.style.display ="block";
            about.style.display ="none";
            hiw.style.display = "none";
        } else if(tab.id === "aboutT") {
            whyFS.style.display = "none";
            home_page.style.display = "none";
            marketplace.style.display ="none";
            priceInsights.style.display ="none";
            about.style.display ="block";
            hiw.style.display = "none";
        }
        tabs.forEach(t => {
            t.classList.remove("active");
        });
        tab.classList.add("active");
    });
});