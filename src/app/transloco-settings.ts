import { Injectable, Provider } from "@angular/core";
import {
  TRANSLOCO_CONFIG,
  TranslocoConfig,
  TRANSLOCO_LOADER,
  TranslocoLoader
} from "@ngneat/transloco";
import { of } from "rxjs";
import { translationEn } from "./assets/locale-en";

@Injectable({ providedIn: "root" })
export class LanguageLoader implements TranslocoLoader {
  public getTranslation(lang: string) {
    return of(translationEn);
  }
}

export const InitTransloco: Provider[] = [
  {
    provide: TRANSLOCO_CONFIG,
    useValue: {
      availableLangs: ["en", "it"],
      defaultLang: "en"
    } as TranslocoConfig
  },
  { provide: TRANSLOCO_LOADER, useClass: LanguageLoader }
];
