import { Ingredient } from "../for-all/ingredient.model";

export class Cup {
    constructor(public name: string, public desc: string, public imagePath: string, public ing: Ingredient[]) { }
}
