import {NgModule} from "@angular/core";
import {
    CompatibilityModule,
    MatAutocompleteModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule, MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule, MatTabsModule, MatToolbarModule, MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule
} from "@angular/material";
import {OverlayModule} from "@angular/cdk/overlay";
import {PortalModule} from "@angular/cdk/portal";
import {PlatformModule} from "@angular/cdk/platform";

const materialModules = [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatChipsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    OverlayModule,
    PortalModule,
    PlatformModule,
    CompatibilityModule,
    MatExpansionModule,
    MatFormFieldModule
];

@NgModule({
    declarations: [],
    imports: [
        materialModules
    ],
    exports: [
        materialModules
    ]
})

export class MaterialModules {

}
