// VIDEO POPUP
const btn = document.querySelector("#video-button");
const videoContainer = document.querySelector(".video-container");
const closer = document.querySelector(".close");
const video = document.querySelector("video");

var stopVideo = function () {
    var iframe = document.querySelector('iframe');
    var video = document.querySelector('video');
    if (iframe) {
        var iframeSrc = iframe.src;
        iframe.src = iframeSrc;
    }
    if (video) {
        video.pause();
    }
};

function toggle() {
    videoContainer.classList.toggle("active");
    stopVideo();
}

btn.addEventListener("click", toggle);
closer.addEventListener("click", toggle);

// FILTER PORTFOLIOs
const list = document.querySelectorAll(".filter-button");
const itemBox = document.querySelectorAll(".filter-box");

for (let i = 0; i < list.length; i++) {
    list[i].addEventListener("click", function () {
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");

        let dataFilter = this.getAttribute("data-filter");

        for (let k = 0; k < itemBox.length; k++) {
            itemBox[k].classList.remove("active");
            itemBox[k].classList.add("hide");

            if (itemBox[k].getAttribute("data-item") == dataFilter || dataFilter == "all") {
                itemBox[k].classList.add("active");
                itemBox[k].classList.remove("hide");
            }
        }
    });
}
