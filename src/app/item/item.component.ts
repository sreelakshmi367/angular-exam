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

  constructor(
    private itemService:ItemService,
    public messageService:MessageService
  ) { }

  items:Item[];

  ngOnInit() {
    this.getItems();
  }

  getItems():void{
    this.itemService.getItems().subscribe(response => this.items = response.data.items);
  }

  sendPost(){
    let postData = {
      name : "Dish Oct 42" ,
      taxes_id : 17,
      units_id : 1,
      base : 750,
      is_perishable : true,
      is_negative : true,
      item_details : {
        price : 10,
        hsn_code : "abs",
        min : 2,
        max : 10,
        branches_id : 16,
        is_perishable :1
      },
      category_ids : [116]
    }
    
    this.itemService.sendPost(postData).subscribe(postResponse => this.getItems());
    
  }}