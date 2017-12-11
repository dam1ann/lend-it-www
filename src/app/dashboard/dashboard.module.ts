import { NavigationComponent } from "./navigation/navigation.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemComponent } from "./item-list/item/item.component";
import { MaterialModules } from "../material/material.module";
import { SettingsModule } from "../settings/settings.module";
import { DashboardComponent } from "./dashboard.component";
import { UIRouterModule } from "@uirouter/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ProductComponent } from "./product/product.component";
import { MoviesManager } from "../manager/movie.manager";
import { CartManager } from "../manager/cart.manager";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        DashboardComponent,
        ItemListComponent,
        ItemComponent,
        NavigationComponent,
        ProductComponent
    ],
    imports: [
        MaterialModules,
        SettingsModule,
        UIRouterModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        MoviesManager,
        CartManager
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule {
}
