import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/for-all/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIng(newIng);
  }

}
