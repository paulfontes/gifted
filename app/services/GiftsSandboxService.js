import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"


class GiftSandboxService {
    async openGift(giftId) {
        const openedGift = AppState.gifts.find((gift) => gift.id == giftId)
        openedGift.opened = true
        const response = await api.put(`api/gifts/${giftId}`, openedGift)
        console.log(response.data);


    }
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('we got response', response.data);
        const gifts = response.data.map((g) => new Gift(g))
        AppState.gifts = gifts



    }

}
export const giftSandboxService = new GiftSandboxService()







