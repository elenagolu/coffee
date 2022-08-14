import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CupsComponent } from './cups/cups.component';
import { CupListComponent } from './cups/cup-list/cup-list.component';
import { CupDetailComponent } from './cups/cup-detail/cup-detail.component';
import { CupItemComponent } from './cups/cup-list/cup-item/cup-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { FirstCupComponent } from './cups/first-cup/first-cup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CupsComponent,
    CupListComponent,
    CupDetailComponent,
    CupItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    FirstCupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
