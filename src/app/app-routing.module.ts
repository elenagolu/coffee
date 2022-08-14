import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CupDetailComponent } from "./cups/cup-detail/cup-detail.component";
import { CupsComponent } from "./cups/cups.component";
import { FirstCupComponent } from "./cups/first-cup/first-cup.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/cups', pathMatch: 'full' },
    {
        path: 'cups', component: CupsComponent, children: [
            { path: '', component: FirstCupComponent },
            { path: ':id', component: CupDetailComponent }
        ]
    },
    { path: 'shopping-list', component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}