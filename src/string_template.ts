/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the StringTemplate class.
 */

import {
  type ObjectPaths,
  StringUtils,
  type TemplateStringCallback,
} from '../utils/mod.ts';

import type { AnyObject } from '../types/mod.ts';

/**
 * A string template class that allows for dynamic string interpolation.
 *
 * @template T The type of the object.
 * @template S The paths of the object.
 *
 * @example //TODO(ebntly): Add an example from tests
 */
export class StringTemplate<
  T extends AnyObject,
  S extends ObjectPaths<T> = ObjectPaths<T>,
> {
  /**
   * Creates a new `StringTemplate` instance.
   *
   * @param strings The template strings.
   * @param keys The keys to interpolate.
   * @returns A new `StringTemplate` instance.
   *
   * @template T The type of the object.
   * @template S The paths of the object.
   */
  public static from<
    T extends AnyObject,
    S extends ObjectPaths<T> = ObjectPaths<T>,
  >(
    strings: TemplateStringsArray,
    ...keys: (S | TemplateStringCallback<T>)[]
  ): StringTemplate<T, S> {
    return new StringTemplate(strings, keys);
  }

  /**
   * The renderer function for the template.
   */
  protected renderer: TemplateStringCallback<T>;

  /**
   * Creates a new `StringTemplate` instance.
   *
   * @param strings The template strings.
   * @param keys The keys to interpolate.
   */
  constructor(
    strings: TemplateStringsArray,
    keys: (S | TemplateStringCallback<T>)[],
  ) {
    this.renderer = StringUtils.getTemplateRenderer(strings, ...keys);
  }

  /**
   * Renders the template with the provided data.
   *
   * @param data The data to interpolate.
   * @returns The interpolated string.
   */
  public render(data: T): string {
    const { renderer } = this;
    const result = renderer(data);

    return result;
  }
}
