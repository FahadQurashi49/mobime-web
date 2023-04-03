import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MobileAd } from '../models/mobile-ad';
import { AdSearchService } from '../services/ad-search.service';


@Component({
  selector: 'app-ad-search',
  templateUrl: './ad-search.component.html',
  styleUrls: ['./ad-search.component.css']
})
export class AdSearchComponent {

  mobileAds?: MobileAd[] | undefined;
  searchTitle: string = '';

  constructor(private activatedRoute: ActivatedRoute, 
    private adSearchService: AdSearchService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(async (params: Params) => {
      this.searchTitle = params['title'];
      this.mobileAds = await this.adSearchService.getAdsByTitleAndCity(this.searchTitle, '');
    });
  
  }
}
