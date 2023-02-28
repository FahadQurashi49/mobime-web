import { AdPhoto } from "./ad-photo";
import { User } from "./user";

export class MobileAd {
    constructor(public id: number, public title: string, public brand: string, public state: string, 
        public description: string, public price: number, public createdAt: Date, public city: string, 
        public area: string, public user: User, public photos: AdPhoto[]) {}
}