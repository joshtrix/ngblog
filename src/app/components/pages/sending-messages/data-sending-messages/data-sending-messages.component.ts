import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-data-sending-messages',
  templateUrl: './data-sending-messages.component.html',
  styleUrls: ['./data-sending-messages.component.scss']
})
export class DataSendingMessagesComponent implements OnInit {

  // dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};

  // searchCriteria: string = 'Canada';

  // settings = {
  //   labelKey: 'countryName'
  // }

  // searchField:string = 'Russia';

  // constructor() { }

  // ngOnInit() {
  //   this.dropdownList = [
  //     { "id": 1, "countryName": "India" },
  //     { "id": 2, "countryName": "Singapore" },
  //     { "id": 3, "countryName": "Australia" },
  //     { "id": 4, "countryName": "Canada" },
  //     { "id": 5, "countryName": "South Korea" },
  //     { "id": 6, "countryName": "Germany" },
  //     { "id": 7, "countryName": "France" },
  //     { "id": 8, "countryName": "Russia" },
  //     { "id": 9, "countryName": "Italy" },
  //     { "id": 10, "countryName": "Sweden" }
  //   ];
  //   // setTimeout(() => {
  //   //   this.selectedItems = [
  //   //     { "id": 2, "countryName": "Singapore" },
  //   //     { "id": 3, "countryName": "Australia" },
  //   //     { "id": 4, "countryName": "Canada" },
  //   //     { "id": 5, "countryName": "South Korea" }
  //   //   ];
  //   // }, 2000)
    
  //   this.dropdownSettings = {
  //     singleSelection: false,
  //     text: "Select Countries",
  //     selectAllText: 'Select All',
  //     unSelectAllText: 'UnSelect All',
  //     enableSearchFilter: true,
  //     labelKey: 'countryName',
  //     classes: "myclass custom-class",
  //     badgeShowLimit: 3
  //   };

  //   setTimeout(() => {
  //     this.filterRecords(this.searchField);
  //   }, 2000)

  // }

  // onItemSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItems);
  // }
  // OnItemDeSelect(item: any) {
  //   console.log(item);
  //   console.log(this.selectedItems);
  // }
  // onSelectAll(items: any) {
  //   console.log(items);
  // }
  // onDeSelectAll(items: any) {
  //   console.log(items);
  // }

  // resetForm(f: NgForm) {
  //   f.reset();
  //   setTimeout(() => {
  //     this.searchField = 'Russia';
  //     this.filterRecords(this.searchField)
  //   }, 1000)
    
  // }

  // onSearch(evt: any) {
  //   console.log(evt.target.value);
  //   // this.selectedItems = [
  //   //   { "id": 2, "countryName": "Singapore" },
  //   // ];
  //   this.filterRecords(evt.target.value);
  // }

  // filterRecords(textToSearch: string) {
  //   let tempArray = [];
  //   this.dropdownList.forEach((item, index) => {
  //     console.log(item, textToSearch)
  //     if(item.countryName.toLowerCase().indexOf(textToSearch.toLowerCase()) > -1) {
  //       tempArray.push(item);
  //     }
  //   })
  //   console.log(tempArray);
  //   if(tempArray.length > 0){
  //     this.selectedItems = tempArray;
  //   }
  // }
  dropDownListMessages = [];

  dropdownList = [];
  selectedItems = [];
  selectedItemsM = [];
  dropdownSettings = {};
  dropdownSettingsMessages = {};

  ngOnInit(){
      this.dropdownList = [
                            {"id":1,"itemName":"Falla General"},
                            {"id":2,"itemName":"Falla General Corporativo"},
                            {"id":3,"itemName":"Falla General Empresarial"},
                            {"id":4,"itemName":"CHARGING MANAGER"},
                            {"id":5,"itemName":"falla internet"},
                            {"id":6,"itemName":"FALLA DE ACTIVACIÓN TSF"},
                            {"id":7,"itemName":"BUZON PRONDE"},
                            {"id":8,"itemName":"QUERY DESBORDE"},
                            {"id":9,"itemName":"AMBIENTAL"},
                            {"id":10,"itemName":"BUZONES ANEXA"}
                          ];
      this.dropDownListMessages = [
        {"id":1,"itemName":"SMS HEY!"},
        {"id":2,"itemName":"alta tsf"},
        {"id":3,"itemName":"PRODUCTIVIDAD CARSO"},
        {"id":4,"itemName":"CB ANEXAVI"},
        {"id":5,"itemName":"BUZON PRONDE"},
        {"id":6,"itemName":"FALLA DE ACTIVACIÓN TSF"},
        {"id":7,"itemName":"QUERY DESBORDE"},
        {"id":8,"itemName":"QUERY DESBORDE"},
        {"id":9,"itemName":"AMBIENTAL"},
        {"id":10,"itemName":"BUZONES ANEXA"}
      ];
      // this.selectedItems = [
      //                         {"id":2,"itemName":"Singapore"},
      //                         {"id":3,"itemName":"Australia"},
      //                         {"id":4,"itemName":"Canada"},
      //                         {"id":5,"itemName":"South Korea"}
      //                     ];
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Selecciona él/los grupo(s)",
                                selectAllText:'Seleccionar todos',
                                unSelectAllText:'Deseleccionar todos',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                              };
      this.dropdownSettingsMessages = { 
        singleSelection: true, 
        text:"Selecciona el mensaje",
        selectAllText:'Seleccionar todos',
        unSelectAllText:'Deseleccionar todos',
        enableSearchFilter: true,
        classes:"myclass custom-class"
      };            
  }
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onItemSelectM(item:any){
    console.log(item);
    console.log(this.selectedItemsM);
}
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelectM(item:any){
    console.log(item);
    console.log(this.selectedItemsM);
}
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }
}
