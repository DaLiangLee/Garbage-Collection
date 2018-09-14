import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from '../../models/tv-show';

@Component({
  selector: 'app-tv-network-detail',
  templateUrl: './tv-network-detail.component.html',
  styleUrls: ['./tv-network-detail.component.css']
})
export class TvNetworkDetailComponent implements OnInit {

  @Input() shows: TvShow[];

  constructor() { }

  ngOnInit() {
  }

}
