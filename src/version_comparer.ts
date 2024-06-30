/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the VersionComparer class.
 */

import {
  ComparisonResult,
  type IVersionDescriptor,
  type TComparer,
} from '../types/mod.ts';

/**
 * A comparer class that compares two `Version`s.
 *
 * @example
 * ```ts
 * import { Version } from './version.ts';
 * import { VersionComparer } from './version_comparer.ts';
 *
 * const versions: Version[] = [
 * 	 Version.parse('1.2.3'),
 * 	 Version.fromValue(10101),
 * 	 Version.parse('0.0.3-rc1.2'),
 * 	 Version.parse('0.0.3-rc1.1'),
 * ];
 *
 * const comparer = new VersionComparer();
 * const arraySort = comparer.compare.bind(comparer);
 *
 * versions.sort(arraySort);
 *
 * console.log(versions[0].toString()); // '0.0.3-rc1.1'
 * ```
 */
export class VersionComparer implements TComparer<IVersionDescriptor> {
  /**
   * Creates a new `VersionComparer` instance.
   *
   * @param reverse Whether to reverse the comparison.
   *
   * @returns A new `VersionComparer` instance.
   */
  constructor(
    protected readonly reverse: boolean = false,
  ) {}

  /**
   * Compares two versions, optionally reversing the comparison.
   *
   * @param a The first `Version` of the comparison.
   * @param b The second `Version` of the comparison.
   * @param reverse Whether to reverse the comparison.
   *
   * @returns The comparison result.
   */
  public compare(
    a: IVersionDescriptor,
    b: IVersionDescriptor,
    reverse = this.reverse,
  ): ComparisonResult {
    if (a.major > b.major) {
      return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
    } else if (a.major < b.major) {
      return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
    }

    if (a.minor > b.minor) {
      return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
    } else if (a.minor < b.minor) {
      return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
    }

    if (a.patch > b.patch) {
      return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
    } else if (a.patch < b.patch) {
      return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
    }

    if (a.preRelease && !b.preRelease) {
      return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
    } else if (!a.preRelease && b.preRelease) {
      return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
    } else if (a.preRelease && b.preRelease) {
      const thisPreRelease = a.preRelease.split('.');
      const otherPreRelease = b.preRelease.split('.');
      const length = Math.max(thisPreRelease.length, otherPreRelease.length);

      for (let i = 0; i < length; i++) {
        const thisPart = thisPreRelease[i];
        const otherPart = otherPreRelease[i];

        if (thisPart && !otherPart) {
          return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
        } else if (!thisPart && otherPart) {
          return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
        } else if (thisPart && otherPart) {
          if (isNaN(Number(thisPart)) && !isNaN(Number(otherPart))) {
            return reverse ? ComparisonResult.Greater : ComparisonResult.Lesser;
          } else if (!isNaN(Number(thisPart)) && isNaN(Number(otherPart))) {
            return reverse ? ComparisonResult.Lesser : ComparisonResult.Greater;
          } else if (!isNaN(Number(thisPart)) && !isNaN(Number(otherPart))) {
            if (Number(thisPart) > Number(otherPart)) {
              return reverse
                ? ComparisonResult.Lesser
                : ComparisonResult.Greater;
            } else if (Number(thisPart) < Number(otherPart)) {
              return reverse
                ? ComparisonResult.Greater
                : ComparisonResult.Lesser;
            }
          } else {
            if (thisPart > otherPart) {
              return reverse
                ? ComparisonResult.Lesser
                : ComparisonResult.Greater;
            } else if (thisPart < otherPart) {
              return reverse
                ? ComparisonResult.Greater
                : ComparisonResult.Lesser;
            }
          }
        }
      }
    }

    return ComparisonResult.Equal;
  }
}
