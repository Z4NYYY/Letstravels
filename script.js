const carousel = document.querySelector(".locations");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -300, behavior: "smooth" });
});

nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: 300, behavior: "smooth" });
});

let mapInitialized = false;

function initMap() {
    const location = { lat: 13.7563, lng: 100.5018 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12, 
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Bangkok", 
    });
}

document.querySelector(".tabs button:last-child").addEventListener("click", () => {
    const mapContainer = document.getElementById("map-container");
    const mapButton = document.querySelector(".tabs button:last-child");

    if (mapContainer.style.display === "none" || !mapContainer.style.display) {
        mapContainer.style.display = "block"; 
        mapButton.classList.add("active"); 
        if (!mapInitialized) {
            initMap(); 
            mapInitialized = true;
        }
    } else {
        mapContainer.style.display = "none"; 
        mapButton.classList.remove("active"); 
    }
});

