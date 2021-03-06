class ImageInfo {
  $target = null;
  $imageInfo = null;
  data = null;

  constructor({ $target, data }) {
    this.$target = $target;
    this.$imageInfo = document.createElement("div");
    this.$imageInfo.className = "ImageInfo";

    window.addEventListener("keyup", (e) => {
      if (e.code === "Escape") {
        this.close();
      }
    });

    window.addEventListener("click", (e) => {
      e.target.classList.contains("ImageInfo") ? this.close() : false;
    });

    this.data = data;

    this.render();
  }

  setState(nextData) {
    this.data = nextData;
    this.render();
  }

  open() {
    this.$imageInfo.classList.remove("fadeout");
    this.$target.appendChild(this.$imageInfo);
  }

  close() {
    this.$imageInfo.classList.add("fadeout");
    this.$imageInfo.addEventListener(
      "animationend",
      () => {
        this.$target.removeChild(this.$imageInfo);
      },
      { once: true }
    );
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

      this.open();

      const $close = document.getElementsByClassName("close")[0];

      $close.addEventListener("click", () => {
        this.close();
      });
    }
  }
}
