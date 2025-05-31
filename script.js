<!-- script.js -->
<script>
  document.querySelectorAll(".thumbnail").forEach(thumb => {
    thumb.addEventListener("click", () => {
      const type = thumb.dataset.type;
      const src = thumb.dataset.src;
      const mainImage = document.getElementById("main-image");
      const mainVideo = document.getElementById("main-video");

      if (type === "image") {
        mainVideo.style.display = "none";
        mainVideo.pause();
        mainImage.style.display = "block";
        mainImage.src = src;
      } else if (type === "video") {
        mainImage.style.display = "none";
        mainVideo.style.display = "block";
        mainVideo.src = src;
        mainVideo.play();
      }
    });
  });
</script>