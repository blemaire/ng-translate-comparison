import { Provider, APP_INITIALIZER } from "@angular/core";
import {
  L10nLoader,
  L10nConfig,
  TranslationModule,
  LogLevel,
  StorageStrategy,
  ProviderType
} from "angular-l10n";

import { translationEn } from "./assets/locale-en";

export const l10nConfig: L10nConfig = {
  logger: { level: LogLevel.Log },
  locale: {
    languages: [{ code: "en", dir: "ltr" }, { code: "it", dir: "ltr" }],
    defaultLocale: { languageCode: "en", countryCode: "GB" },
    currency: "GBP",
    storage: StorageStrategy.Session
  },
  translation: {
    translationData: [{ languageCode: "en", data: translationEn }],
    // providers: [
    //     { type: ProviderType.Static, prefix: './assets/locale-' }
    // ],
    caching: true,
    composedKeySeparator: ".",
    missingValue: "No key"
  }
};

export function languageInitializer(l10nLoader: L10nLoader) {
  return () => l10nLoader.load();
}

export const InitAngularl10n: Provider = {
  provide: APP_INITIALIZER,
  useFactory: languageInitializer,
  deps: [L10nLoader],
  multi: true
};
