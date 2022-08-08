import { EventEmitter } from "@angular/core";
import { Ingredient } from "../for-all/ingredient.model";

export class ShoppingListService {
    ingChange = new EventEmitter<Ingredient[]>;
    private ingredients: Ingredient[] = [
        new Ingredient('Espresso', '2'),
        new Ingredient('Sugar', '3 ts'),
    ];

    getIng() {
        return this.ingredients.slice();
    }

    addIng(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingChange.emit(this.ingredients.slice());
    }

    addIngs(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingChange.emit(this.ingredients.slice());
    }
}