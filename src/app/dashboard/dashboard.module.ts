import { NgModule } from "@angular/core";
import { MaterialModules } from "../material/material.module";
import { DashboardComponent } from "./dashboard.component";
import { UIRouterModule } from "@uirouter/angular";
import { SettingsModule } from "../settings/settings.module";
import { ItemListComponent } from "./item-list/item-list.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ItemComponent } from "./item-list/item/item.component";
import { CommonModule } from "@angular/common";
import { FilterComponent } from "./filter/filter.component";

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
        CommonModule
    ],
    providers: [],
    exports: [DashboardComponent]
})

export class DashboardModule {

}

