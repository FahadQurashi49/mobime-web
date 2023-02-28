import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdPhoto } from '../models/ad-photo';
import { MobileAd } from '../models/mobile-ad';

@Component({
  selector: 'app-ad-search-grid-item',
  templateUrl: './ad-search-grid-item.component.html',
  styleUrls: ['./ad-search-grid-item.component.css']
})
export class AdSearchGridItemComponent implements OnInit {


  @Input() mobileAd: MobileAd | undefined;
  adPhoto: AdPhoto | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.mobileAdBehavior2?.subscribe(mobAd => {
    //   this.mobileAd = mobAd;
    //   this.mobileAdPhoto = this.mobileAd?.photos[0]?.url;
    //   console.log(this.mobileAdPhoto);
    // });
    this.adPhoto =  this.mobileAd?.photos[0];
  }

}
