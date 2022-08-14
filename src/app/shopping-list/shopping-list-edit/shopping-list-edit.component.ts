import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/for-all/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') shoppingListForm: NgForm;
  subscription: Subscription;
  edit = false;
  editedIngIndex: number;
  editedIng: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.begingEditing.subscribe(
      (index: number) => {
        this.editedIngIndex = index;
        this.edit = true;
        this.editedIng = this.shoppingListService.getIngs(index);
        this.shoppingListForm.setValue({
          name: this.editedIng.name,
          amount: this.editedIng.amount,
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAdd(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.edit) {
      this.shoppingListService.updateIng(this.editedIngIndex, newIng);
    }
    else {
      this.shoppingListService.addIng(newIng);
    }
  }

}
