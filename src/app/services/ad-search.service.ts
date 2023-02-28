import { Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MobileAd } from '../models/mobile-ad';

@Injectable({
  providedIn: 'root'
})
export class AdSearchService {

  constructor() { }

  async getAdsByTitleAndCity(title: string, city: string): Promise<MobileAd[]> {
    const response = await fetch('http://localhost:8080/mobime/mobilead?title=samsung');
    const mobileAds = await response.json();
    return mobileAds;
  }

}
