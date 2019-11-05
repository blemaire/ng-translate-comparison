import { NgModule, Provider, APP_INITIALIZER } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

// angular-l10n integration
import { TranslationModule } from "angular-l10n";
import { l10nConfig, InitAngularl10n } from "./l10n-settings";

// transloco interation
import {TranslocoModule} from "@ngneat/transloco";
import { InitTransloco } from "./transloco-settings";

@NgModule({
  imports: [BrowserModule, FormsModule, TranslationModule.forRoot(l10nConfig), TranslocoModule],
  declarations: [AppComponent],
  providers: [InitAngularl10n, ...InitTransloco],
  bootstrap: [AppComponent]
})
export class AppModule {}
