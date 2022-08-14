import { Ingredient } from "../for-all/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingChange = new Subject<Ingredient[]>;
    private ingredients: Ingredient[] = [
        new Ingredient('Espresso', '2'),
        new Ingredient('Sugar', '3 ts'),
    ];

    getIng() {
        return this.ingredients.slice();
    }

    addIng(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingChange.next(this.ingredients.slice());
    }

    addIngs(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingChange.next(this.ingredients.slice())
    }
}