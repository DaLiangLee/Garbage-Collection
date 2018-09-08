import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-garbage-analysis',
  templateUrl: './garbage-analysis.component.html',
  styleUrls: ['./garbage-analysis.component.scss']
})
export class GarbageAnalysisComponent implements OnInit {
  generalCategoryList = [];
  subcategoryList = [];
  selectedItems = [];
  settings = {};
  formModel = {
    generalCate: [],
    subCate: [],
    searchDate: new Date()
  };
  showCategory = true;
  showDate = true;
  constructor(
    private route: ActivatedRoute,
    private router: Router ) {}

  ngOnInit() {
  const condition = this.route.snapshot.paramMap.get('condition');
  console.log(condition);
  if(condition) {
    switch (condition) {
      case 'category':
        this.showCategory = false;
        break;
        case 'date':
        this.showDate = false;
        break;
    }
  }


    this.generalCategoryList = [
      {'id': 1 , 'itemName': '可回收垃圾'},
      {'id': 2 , 'itemName': '厨余垃圾'},
      {'id': 3 , 'itemName': '有害垃圾'},
      {'id': 4 , 'itemName': '其他垃圾'}
    ];

    this.subcategoryList = [
      {'id': 1 , 'itemName': '废纸(废纸盒<黄板纸、花纸>)'},
      {'id': 2 , 'itemName': '废塑料'},
      {'id': 3 , 'itemName': '废金属'},
      {'id': 4 , 'itemName': '废玻璃'},
      {'id': 5 , 'itemName': '纺织物'}
    ];

    // this.selectedItems = [
    //       {"id":1,"itemName":"India"}];
    this.settings = {singleSelection: true, text: 'Select Category'};
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
  }
  onSelectAll(items:  any) {
    console.log(items);
  }
   onDeSelectAll(items: any) {
    console.log(items);
  }
  search() {
    console.log(this.formModel);

    if (this.showCategory) {
      // this.router.navigate(['/histogram'], queryParams: { date: this.formModel.searDate}  );
      this.router.navigate(['histogram'], {
        queryParams: {
          searchDate: this.formModel.searchDate.toLocaleDateString()
        }
      });
    } else{
      this.router.navigate(['lineChart'], {
        queryParams: {
            category: this.formModel.subCate
        }
      });
    }
  }
}
