class ImageInfo {
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    this.$imageInfo = document.createElement("div");
    this.$imageInfo.className = "ImageInfo";
    $target.appendChild(this.$imageInfo);

    window.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        this.close();
      }
    });

    window.addEventListener("click", (e) => {
      e.target.className === "ImageInfo" ? this.close() : false;
    });

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  close() {
    this.$imageInfo.style.display = "none";
  }

  render() {
    if (this.data.visible) {
      const { name, url, temperament, origin } = this.data.image;

      this.$imageInfo.innerHTML = `
          <div class="content-wrapper" role="dialog" aria-modal="true" tabindex=0>
            <div class="title">
              <span>${name}</span>
              <div class="close" onClick="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <span>성격: ${temperament}</span>
              <span>태생: ${origin}</span>
            </div>
          </div>`;
      this.$imageInfo.style.display = "block";

      const $close = document.getElementsByClassName("close")[0];

      $close.addEventListener("click", () => {
        this.close();
      });
    } else {
      this.$imageInfo.style.display = "none";
    }
  }
}
