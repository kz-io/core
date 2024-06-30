/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the PropertyComparer class.
 */

import {
  type AnyObject,
  ComparisonResult,
  type TComparer,
} from '../types/mod.ts';

/**
 * A comparer that compares two objects by a property of type `T`.
 *
 * @template T The type of the objects to compare.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { PropertyComparer } from './property_comparer.ts';
 *
 * class Named {
 * 	 constructor(public name: string) { }
 * }
 *
 * class User extends Named {
 * 	 speak(): void {
 * 	 	 console.log('Hello, world!');
 * 	 }
 * }
 *
 * class Dog extends Named {
 * 	 bark(): void {
 * 	 	 console.log('Woof woof!');
 * 	 }
 * }
 *
 * const items: Named[] = [
 * 	 new User('John'),
 * 	 new Dog('Fido'),
 * 	 new User('Alexis'),
 * 	 new Dog('Akita'),
 * ];
 *
 * const comparer = PropertyComparer.for<Named>('name');
 * const arraySort = comparer.compare.bind(comparer);
 *
 * items.sort(arraySort);
 *
 * console.log(items[0].name); // 'Akita'
 * ```
 */
export class PropertyComparer<T extends AnyObject> implements TComparer<T> {
  /**
   * Returns a PropertyComparer for the specified property on `T`.
   *
   * @template T The type of the objects to compare.
   *
   * @param property The property to compare by.
   * @param reverse Whether to reverse the comparison.
   *
   * @returns A new `PropertyComparer` instance.
   *
   * @example
   * ```ts
   * import { PropertyComparer } from './property_comparer.ts';
   *
   * interface IUser {
   * 	 name: string;
   * }
   *
   * const comparer = PropertyComparer.for<IUser>('name');
   * const akira: IUser = { name: 'Akira' };
   * const tae: IUser = { name: 'Tae' };
   *
   * const result = comparer.compare(akira, tae, true);
   *
   * console.log(result); // ComparisonResult.Greater
   * ```
   */
  public static for<T extends AnyObject>(
    property: keyof T,
    reverse = false,
  ): PropertyComparer<T> {
    return new PropertyComparer<T>(property, reverse);
  }

  /**
   * Creates a new `PropertyComparer` instance.
   *
   * @param property The property to compare by.
   * @param reverse Whether to reverse the comparison.
   */
  constructor(
    protected readonly property: keyof T,
    protected readonly reverse: boolean = false,
  ) {}

  /**
   * Compares two objects by the instance comparison property.
   *
   * @param a The first object to compare.
   * @param b The second object to compare.
   * @param reverse Whether to reverse the comparison.
   *
   * @returns The comparison result.
   */
  public compare(a: T, b: T, reverse = this.reverse): ComparisonResult {
    const { property } = this;
    const aValue = a[property];
    const bValue = b[property];

    const [aCompare, bCompare] = reverse ? [bValue, aValue] : [aValue, bValue];

    if (aCompare === bCompare) {
      return ComparisonResult.Equal;
    }

    return aCompare < bCompare
      ? ComparisonResult.Lesser
      : ComparisonResult.Greater;
  }
}
