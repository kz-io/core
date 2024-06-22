/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the SemVerVersionComparer class.
 */

import {
  ComparisonResult,
  type ISemVerVersionDescriptor,
  type TComparer,
} from '../types/mod.ts';

/**
 * A comparer that compares two semantic version version descriptors.
 *
 * @example
 * ```ts
 * import { SemVerVersionComparer } from './sem_ver_version_comparer.ts';
 *
 * const comparer = new SemVerVersionComparer();
 *
 * console.log(comparer.compare({ major: 1, minor: 0, patch: 0 }, { major: 1, minor: 0, patch: 1 })); // ComparisonResult.Lesser
 * ```
 */
export class SemVerVersionComparer
  implements TComparer<ISemVerVersionDescriptor> {
  /**
   * Creates a new `SemVerVersionComparer` instance.
   *
   * @param reverse Whether to reverse the comparison.
   *
   * @returns A new `SemVerVersionComparer` instance.
   */
  constructor(
    protected readonly reverse: boolean = false,
  ) {}

  /**
   * Compares two semantic version version descriptors.
   *
   * @param a The first version descriptor.
   * @param b The second version descriptor.
   * @param reverse Whether to reverse the comparison.
   *
   * @returns The comparison result.
   */
  public compare(
    a: ISemVerVersionDescriptor,
    b: ISemVerVersionDescriptor,
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
