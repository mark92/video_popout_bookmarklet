javascript: document.addEventListener("click", pictureInPicture); function pictureInPicture(event){var element = event.target; if(element.tagName !== "VIDEO") {element = element.querySelector("video"); } element.requestPictureInPicture(); document.removeEventListener("click", pictureInPicture); }
