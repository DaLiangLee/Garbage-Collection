import { Component, OnInit, Input } from '@angular/core';
import { TvShow } from '../../models/tv-show';

@Component({
  selector: 'app-tv-shows-table',
  templateUrl: './tv-shows-table.component.html',
  styleUrls: ['./tv-shows-table.component.scss']
})
export class TvShowsTableComponent implements OnInit {

  private _shows: TvShow[] = [];

  @Input()
  set shows(value: TvShow[]) {
    this._shows = value;
  }

  get shows() {
    return this._shows;
  }

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.shows) {
      this.shows.push(new TvShow());
    }
  }

  remove(item: TvShow) {
    const index = this.shows.indexOf(item);
    if (index > -1) {
      this.shows.splice(index, 1);
    }
  }

  isValid() {
    console.log('validating......');
    return !this.shows || this.shows.length === 0 || this.shows.every(s => !!s.name);
  }
}
