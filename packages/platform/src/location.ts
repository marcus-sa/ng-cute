import { Injectable } from '@angular/core';
import { LocationChangeListener, PlatformLocation } from '@angular/common';

// Should've extended ServerPlatformLocation but it's private
@Injectable()
export class QPlatformLocation implements PlatformLocation {
  readonly hash: string;
  readonly hostname: string;
  readonly href: string;
  readonly pathname: string;
  readonly port: string;
  readonly protocol: string;
  readonly search: string;

  back(): void {
  }

  forward(): void {
  }

  getBaseHrefFromDOM(): string {
    return "";
  }

  getState(): unknown {
    return undefined;
  }

  onHashChange(fn: LocationChangeListener): void {
  }

  onPopState(fn: LocationChangeListener): void {
  }

  pushState(state: any, title: string, url: string): void {
  }

  replaceState(state: any, title: string, url: string): void {
  }
}