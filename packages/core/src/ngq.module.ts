import {
  ErrorHandler,
  NgModule,
  NO_ERRORS_SCHEMA,
  Optional,
  RendererFactory2,
  SkipSelf,
  ApplicationModule,
  ɵAPP_ROOT as APP_ROOT,
} from '@angular/core';

import { throwIfAlreadyLoaded } from './utils';
import { errorHandlerFactory } from './error-handler';
import { NGQRendererFactory } from './renderer';

@NgModule({
  imports: [ApplicationModule],
  providers: [
    { provide: APP_ROOT, useValue: true },
    { provide: ErrorHandler, useFactory: errorHandlerFactory },
    { provide: RendererFactory2, useExisting: NGQRendererFactory },
  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [ApplicationModule],
})
export class NGQModule {
  constructor(@Optional() @SkipSelf() parentModule: NGQModule) {
    // Prevents NativeScriptModule from getting imported multiple times
    throwIfAlreadyLoaded(parentModule, 'NGQModule');
  }
}