import { Component, OnInit } from '@angular/core';
import { TvNetworkService } from '../../services/tv-network.service';
import { ToastrService } from 'ngx-toastr';
import { TvNetwork } from '../../models/tv-network';

@Component({
  selector: 'app-tv-network-list',
  templateUrl: './tv-network-list.component.html',
  styleUrls: ['./tv-network-list.component.scss']
})
export class TvNetworkListComponent implements OnInit {

  tvNetworks: TvNetwork[];

  constructor(
    private tvNetworkServices: TvNetworkService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.tvNetworkServices.getTvNetworks().subscribe(result => {
      this.tvNetworks = result;
      console.log(this.tvNetworks);
    }, err => {
      console.error(err);
    });
  }

  toggleExpand(t: TvNetwork) {
    t['expanded'] = !t['expanded'];
  }

  delete(item: TvNetwork) {
    if (confirm('确认删除?')) {
      this.tvNetworkServices.delete(item.id).subscribe(() => {
        const index = this.tvNetworks.indexOf(item);
        if (index > -1) {
          this.tvNetworks.splice(index, 1);
        }
        this.toastr.success('删除成功');
      }, err => {
        console.error(err);
        this.toastr.error('删除失败');
      });
    }
  }

}
