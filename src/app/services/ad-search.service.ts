import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileAd } from '../models/mobile-ad';

@Injectable({
  providedIn: 'root'
})
export class AdSearchService {

  apiUrl: string = 'http://localhost:8080/mobime/mobilead';

  constructor() { }

  async getAdsByTitleAndCity(title: string, city: string): Promise<MobileAd[]> {
    const response = await fetch(`${this.apiUrl}?title=samsung`);
    const mobileAds = await response.json();
    return mobileAds;
  }

  async getMobileAd(id: string | null): Promise<MobileAd | undefined> {
    const response = await fetch(`${this.apiUrl}/${id}`)
    const mobileAd = await response.json();
    return mobileAd;
  }

}
