import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-garbage',
  templateUrl: './add-garbage.component.html',
  styleUrls: ['./add-garbage.component.scss']
})
export class AddGarbageComponent implements OnInit {

  generalCategoryList = [];
  subcategoryList = [];
  selectedItems = [];
  settings = {};
  formModel = {
    generalCate: [],
    subCate: [],
    searDate: new Date()
};
  constructor() { }

  ngOnInit() {
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

}
