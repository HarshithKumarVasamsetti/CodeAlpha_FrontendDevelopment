let gallery = document.getElementById("gallery");

for (let i = 1; i <= 2000; i++) {
    let img = document.createElement("img");

    // Guaranteed working HD image
    img.src = `https://picsum.photos/seed/${i}/1000/700`;

    img.onclick = () => openLightbox(img.src);
    gallery.appendChild(img);
}

function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}
