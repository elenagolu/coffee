import { Injectable } from "@angular/core";
import { Ingredient } from "../for-all/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Cup } from "./cup.model";

@Injectable()
export class CupService {
    private cups: Cup[] = [
        new Cup(
            'Black Coffee',
            'Strong black coffee with sugar.',
            'https://yeswechem.org/wp-content/uploads/2021/04/pexels-freestocksorg-130865-1536x1024.jpg',
            [
                new Ingredient('Coffee beans', 'some'),
                new Ingredient('Sugar', '3 ts')
            ]),
        new Cup(
            'Coffee with milk',
            'This is a nice cup of coffee with milk',
            'https://ne-kurim.ru/forum/attachments/04-eating-habits-cholesterol-milk-1224x816-jpg.563534/',
            [
                new Ingredient('Coffee beans', 'some'),
                new Ingredient('Milk', '200 ml'),
                new Ingredient('Sugar', '3')
            ])
    ];

    constructor(private shoppingListService: ShoppingListService) { }

    getCup() {
        return this.cups.slice();
    }

    getCups(index: number) {
        return this.cups[index];
    }

    addIngToSL(ing: Ingredient[]) {
        this.shoppingListService.addIngs(ing);
    }
}