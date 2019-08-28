import { Inject, Injectable, NgZone, RendererFactory2, RendererType2 } from '@angular/core';
import { APP_ROOT_VIEW, AppRootView } from '@ng-qt/platform';
import { NodeWidget } from '@nodegui/nodegui';

import { NgQtSharedStylesHost } from './shared-styles-host';
import { NgQtRenderer } from './renderer';

@Injectable({
  providedIn: 'root',
})
export class NgQtRendererFactory implements RendererFactory2 {
  private readonly rendererByCompId = new Map<string, NgQtRenderer>();
  private defaultRenderer = new NgQtRenderer(this.ngZone, this.rootView);

  constructor(
    private readonly sharedStylesHost: NgQtSharedStylesHost,
    private readonly ngZone: NgZone,
    @Inject(APP_ROOT_VIEW)
    private readonly rootView: AppRootView,
  ) {}

  createRenderer(hostWidget: NodeWidget, type: RendererType2 | null): NgQtRenderer {
    if (!hostWidget || !type) {
      return this.defaultRenderer;
    }

    if (!this.rendererByCompId.has(type.id)) {
      this.sharedStylesHost.addStyles(hostWidget, type);
      this.rendererByCompId.set(type.id, this.defaultRenderer);
    }

    return this.rendererByCompId.get(type.id);
  }

  end(): void {}

  begin(): void {}
}
