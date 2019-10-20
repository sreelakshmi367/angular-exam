import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item';

import { MessageService } from '../message.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  public postData = {
    name : null ,
    taxes_id : null,
    units_id : null,
    base : null,
    is_perishable : true,
    is_negative : true,
    item_details : {
      price : null,
      hsn_code : null,
      min : null,
      max : null,
      branches_id : null,
      is_perishable :1
    },
    category_ids : [116]
  }

  constructor(
    private itemService:ItemService,
    public messageService:MessageService
  ) { }

  items:Item[];
  // additem:additems;

  ngOnInit() {
    this.getItems();
    this.sendPost();
  }

  getItems():void{
    this.itemService.getItems().subscribe(response => this.items = response.data.items);
  }

  // additem=this.
  //   name : String ;
  //   taxes_id : Number;
  //   units_id : Number;
  //   base : Number;
  //   is_perishable : boolean;
  //   is_negative : boolean;
  //   item_details : {
  //     price : number;
  //     hsn_code : string;
  //     // min : 2;
  //     // max : 10;
  //     branches_id : number;
  //     is_perishable :number
  //   };
  //   category_ids :number;



    
    sendPost(){
      
    this.itemService.sendPost(this.postData).subscribe(
      res=>{
        window.alert(res.message);
      },
      err=>{
        console.log(err)
      }
    );
    // this.itemService.sendPost(this.additem).subscribe(postResponse => this.getItems());
    }
}
  
    
  