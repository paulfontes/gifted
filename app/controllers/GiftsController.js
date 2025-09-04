import { AppState } from "../AppState.js"
import { giftSandboxService } from "../services/GiftsSandboxService.js"
import { Pop } from "../utils/Pop.js"

export class GiftsController {
    constructor() {
        // console.log('gift')
        AppState.on('identity', this.getGifts)
        this.drawGifts()
        AppState.on('gifts', this.drawGifts)
    }

    async getGifts() {
        try {

            await giftSandboxService.getGifts()
        } catch (error) {
            Pop.error(error)
            console.error('there was an error getting gifts');

        }
    }

    drawGifts() {
        const giftElem = document.getElementById('gift-list')
        let template = ''
        AppState.gifts.forEach((gift) => template += gift.giftTempate)
        giftElem.innerHTML = template
        console.log(template)
    }



    async openGift() {
        try {
            await giftSandboxService.openGift()
        } catch (error) {
            Pop.error
            console.error('failed to open', error)
        }
    }

}












