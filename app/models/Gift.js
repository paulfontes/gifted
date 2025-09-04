
export class Gift {
    constructor(data) {
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
    }


    get giftTempate() {
        if (!this.opened) {
            return `
            <div class="col-4">
            <div class="card">
              <div class="card-img-top">
                <img class="gift-img"
                  src="https://plus.unsplash.com/premium_photo-1672059168057-d33d8d276c27?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="gift image">
              </div>
              <div class="card-body text-center">
                <button onclick="app.GiftsController.openGift()" class="btn btn-outline-danger mb-0 ">Open Gift</button>
              </div>
            </div>
          </div>
          `
        }
        return `
        <div class="col-4">
            <div class="card">
              <div class="card-img-top">
                <img class="gift-img"
                  src="${this.url}"
                  alt="gift image">
              </div>
              <div class="card-body mb-3">
                ${this.tag}
              </div>
            </div>
          </div>
          `

    }




}