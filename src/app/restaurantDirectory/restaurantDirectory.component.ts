
import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Restaurent } from './Restaurent';
import { isNullOrUndefined } from 'util';
import { empty } from 'rxjs';
import { notEqual } from 'assert';

@Component({
  selector: 'restaurant-directory',
  templateUrl: './restaurantDirectory.component.html',
  styleUrls: ['./restaurantDirectory.component.scss']
})
export class RestaurantDirectory implements OnInit {

  restaurents:any = []
  restaurent:Restaurent = new Restaurent();
  ngOnInit() {

  }

  add(addForm: NgForm):void{
    console.log("AddForm "+addForm.value);

    if(addForm.value){
      this.restaurent = <Restaurent> addForm.value;
      console.log("form ",addForm.value);
      this.restaurents.push(this.restaurent);
      addForm.reset();
    }
}


}