import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AdPhoto } from '../models/ad-photo';
import { MobileAd } from '../models/mobile-ad';
import { AdSearchService } from '../services/ad-search.service';


@Component({
  selector: 'app-ad-search',
  templateUrl: './ad-search.component.html',
  styleUrls: ['./ad-search.component.css']
})
export class AdSearchComponent {

  mobileAds?: MobileAd[] | undefined;

  constructor(private activatedRoute: ActivatedRoute, 
    private adSearchService: AdSearchService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(async (params: Params) => {
      this.mobileAds = await this.adSearchService.getAdsByTitleAndCity(params['title'], '');
    });
  
  }
}
