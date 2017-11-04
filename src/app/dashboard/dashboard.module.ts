import { NavigationComponent } from "./navigation/navigation.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemComponent } from "./item-list/item/item.component";
import { MaterialModules } from "../material/material.module";
import { SettingsModule } from "../settings/settings.module";
import { DashboardComponent } from "./dashboard.component";
import { FilterComponent } from "./filter/filter.component";
import { UIRouterModule } from "@uirouter/angular";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MockProduct } from "../mockBackend/mockProducts.service";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
    declarations: [
        DashboardComponent,
        ItemListComponent,
        ItemComponent,
        NavigationComponent,
        FilterComponent
    ],
    imports: [
        MaterialModules,
        SettingsModule,
        UIRouterModule,
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule
    ],
    providers: [
        MockProduct
    ],
    exports: [DashboardComponent]
})

export class DashboardModule {

}

