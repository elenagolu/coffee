import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() coffeeSelected = new EventEmitter<string>();

    onSelect(coffee: string) {
        this.coffeeSelected.emit(coffee);
    }
}