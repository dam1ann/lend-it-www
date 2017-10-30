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

