let defaultUploaderPhoto = "2_css/images/cloud-computing.png";
let uploader = document.getElementById("uploader");
let upload = document.getElementById("upload");
let gallery = document.getElementById("gallery");

function addToGallery(src) {
    let img = new Image();
    img.src = src;
    img.classList.add("gallery-img");
    gallery.appendChild(img);
}

uploader.addEventListener("click", () => {
    upload.click();
});

upload.addEventListener("change", (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
        let photo = event.target.files[i];
        let reader = new FileReader();
        reader.addEventListener("load", (event) => {
            addToGallery(event.target.result);
        });
        reader.readAsDataURL(photo);
    }
});
