import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdImage } from '../models/ad-image';
import { MobileAd } from '../models/mobile-ad';
import { AdSearchService } from '../services/ad-search.service';

@Component({
  selector: 'app-mobile-ad',
  templateUrl: './mobile-ad.component.html',
  styleUrls: ['./mobile-ad.component.css']
})
export class MobileAdComponent implements OnInit {

  id: string | null = null;
  mobileAd: MobileAd | undefined = undefined;
  photo: string | undefined = undefined;
  photos: any[] = [];
  photos2: any[] = [];
  adImages: AdImage[] = [];
 
  constructor(private activatedRoute: ActivatedRoute, private adSearchService: AdSearchService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(async param => {
      this.id = param.get('id');
      this.mobileAd = await this.adSearchService.getMobileAd(this.id);
      this.photo = this.mobileAd?.photos[0].url;
      this.photos = this.mobileAd?.photos as any[];
      // this.photos2 = this.photos.map(p n  => {image: p.url});
      this.photos2 =  this.photos.map(p => this.adImages.push({image: p.url, thumbImage: p.url, alt: '', title: ''}));
      console.log(this.adImages);
    });
  }
}
