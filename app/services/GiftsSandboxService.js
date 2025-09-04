import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "../utils/Axios.js"


class GiftSandboxService {
    openGift() {
        ;
    }
    async getGifts() {
        const response = await api.get('api/gifts')
        console.log('we got response', response.data);
        const gifts = response.data.map((g) => new Gift(g))
        AppState.gifts = gifts



    }

}
export const giftSandboxService = new GiftSandboxService()







