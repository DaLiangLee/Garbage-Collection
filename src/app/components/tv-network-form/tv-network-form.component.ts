import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { TvNetworkService } from '../../services/tv-network.service';
import { TvNetworkUpdate } from '../../models/tv-network-update';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Subscription, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tv-network-form',
  templateUrl: './tv-network-form.component.html',
  styleUrls: ['./tv-network-form.component.scss']
})
export class TvNetworkFormComponent implements OnInit {

  model = {
    name: '',
    TvShows: [
      {
        id: 1,
        name: 'CCTV1',
        tvNetworkId: '1'
      }
    ]
  };
  busy: Subscription;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tvNetworkService: TvNetworkService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    console.log(this.model);

    // this.route.paramMap.pipe(switchMap((params: ParamMap) => {
    //   this.id = params.get('id');
    //   console.log(this.id);

    //   if (this.id) {
    //     return this.tvNetworkService.getById(this.id);
    //   } else {
    //     this.model = new TvNetworkUpdate();
    //     return of(new TvNetworkUpdate({ tvShows: [] }));
    //   }
    // }));
    // this.route.params.pipe(switchMap((params: Params) => {
    //   this.id = params.get('id');
    //   if (this.id) {
    //     return this.tvNetworkService.getById(this.id);
    //   } else {
    //     this.model = new TvNetworkUpdate();
    //     return  new TvNetworkUpdate({ tvShows: [] });
    //   }
    // })).subscribe((m: any) => this.model = m);

    // this.route.params.pipe(switchMap((params: Params) => {
    //   this.id = params.get('id');
    //   if (this.id) {
    //     return this.tvNetworkService.getById(this.id);
    //   } else {
    //     this.model = new TvNetworkUpdate();
    //     return  new TvNetworkUpdate({ tvShows: [] });
    //   }
    // })).subscribe((m: any) => {
    //   this.model = m;
    // }, err => {
    //   this.toastr.error('读取数据时发生了错误');
    // });
  }

  submit(form: NgForm) {
    console.log(form.value);
    const op = this.tvNetworkService.create(this.model);
    this.busy = op.subscribe(result => {
      console.log(result);
      this.toastr.success('操作成功');
      if (this.id) {
        this.router.navigate(['../..'], { relativeTo: this.route });
      } else {
        this.router.navigate(['..'], { relativeTo: this.route });
      }
    }, err => {
      console.error(err);
      this.toastr.error('发生了错误');
    });
  }

}
