import { ElementSchemaRegistry } from '@angular/compiler';
import { Injectable, SchemaMetadata } from '@angular/core';

import { isKnownWidget } from './widget-registry';

@Injectable()
export class NGQElementSchemaRegistry implements ElementSchemaRegistry {
  allKnownElementNames(): string[] {
    return [];
  }

  getDefaultComponentElementName(): string {
    return "";
  }

  getMappedPropName(propName: string): string {
    console.log(arguments);
    return "";
  }

  hasElement(tagName: string, schemaMetas: SchemaMetadata[]): boolean {
    console.log(arguments);
    return isKnownWidget(tagName);
  }

  hasProperty(tagName: string, propName: string, schemaMetas: SchemaMetadata[]): boolean {
    console.log(arguments);
    return false;
  }

  normalizeAnimationStyleProperty(propName: string): string {
    console.log(arguments);
    return "";
  }

  normalizeAnimationStyleValue(camelCaseProp: string, userProvidedProp: string, val: string | number): { error: string; value: string } {
    console.log(arguments);
    return { error: "", value: "" };
  }

  securityContext(elementName: string, propName: string, isAttribute: boolean): any {
    console.log(arguments);
  }

  validateAttribute(name: string): { error: boolean; msg?: string } {
    console.log(arguments);
    return { error: false };
  }

  validateProperty(name: string): { error: boolean; msg?: string } {
    console.log(arguments);
    return { error: false };
  }
}