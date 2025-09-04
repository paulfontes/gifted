import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"


class GiftSandboxService {
    async createGift(formData) {
        const response = await api.post('api/gifts', formData)
        console.log(response.data);

        // const createdGift = AppState.gifts.push((gift) => new Gift(formData))





    }
    async openGift(giftId) {
        const openedGift = AppState.gifts.find((gift) => gift.id == giftId)
        openedGift.opened = true
        const response = await api.put(`api/gifts/${giftId}`, openedGift)
        console.log(response.data);
        AppState.emit('gifts')


    }
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('we got response', response.data);
        const gifts = response.data.map((g) => new Gift(g))
        AppState.gifts = gifts



    }

}
export const giftSandboxService = new GiftSandboxService()







