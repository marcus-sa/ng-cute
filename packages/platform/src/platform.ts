import { ɵplatformCoreDynamic as platformCoreDynamic } from '@angular/platform-browser-dynamic';
import { createPlatformFactory } from '@angular/core';

import { NGQ_COMPILER_PROVIDERS, NGQ_INTERNAL_PLATFORM_PROVIDERS } from './providers';
// import { NGQPlatformRef } from './platform-ref';

export const platformNGQ = createPlatformFactory(
  platformCoreDynamic,
  'platformNGQDynamic',
  [
    ...NGQ_INTERNAL_PLATFORM_PROVIDERS,
    ...NGQ_COMPILER_PROVIDERS,
  ],
);

/*export function platformNGQ(extraProviders?: any[]): NGQPlatformRef {
  return new NGQPlatformRef(_platformNGQDynamic(extraProviders));
}*/

export const platformDesktop = platformNGQ;