/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Version class.
 */

import {
  ComparisonResult,
  type IVersionDescriptor,
  type TBase,
  type TComparable,
} from '../types/mod.ts';
import { VersionComparer } from './version_comparer.ts';

const semVerRegex = /^(\d+)\.(\d+)\.(\d+)(?:-(.+))?(?:\+(.+))?$/;

/**
 * A class representing and manipulating a semantic version.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Version } from './version.ts';
 * import { ComparisonResult } from '../types/mod.ts';
 *
 * const versionA = Version.fromValue(10203);
 * const versionB = Version.fromValue(10204);
 *
 * const result = versionA.compareTo(versionB);
 *
 * assertEquals(versionA.toString(), '1.2.3');
 * assertEquals(versionB.toString(), '1.2.4');
 * assertEquals(result, ComparisonResult.Lesser);
 * ```
 */
export class Version implements TComparable<Version>, TBase<number> {
  /**
   * Returns a `Version` instance from a numeric value.
   *
   * Only supports `major`, `minor`, and `patch` versions, using modulus
   * of `10,000` for `major`, `1,000` for `minor`, and `100` for `patch`.
   *
   * @param value The numeric value of the version.
   * @returns The `Version` instance.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   * const version = Version.fromValue(10203);
   *
   * console.log(version.toString()); // 1.2.3
   * ```
   */
  public static fromValue(value: number): Version {
    const major = Math.floor(value / 10000);
    const minor = Math.floor((value % 10000) / 100);
    const patch = value % 100;

    return new Version({ major, minor, patch });
  }

  /**
   * Returns a `Version` from parsing a string representation of a version.
   *
   * @param version The version string to parse.
   *
   * @returns The parsed `Version`.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   * const version = Version.parse('1.2.3-rc1.2+123');
   *
   * console.log(version.major); // 1;
   * console.log(version.minor); // 2;
   * console.log(version.patch); // 3;
   * console.log(version.preRelease); // rc1.2;
   * console.log(version.build); // 123;
   * ```
   */
  public static parse(version: string): Version {
    if (!semVerRegex.test(version)) {
      throw new Error('Invalid version string.');
    }

    const [versionPreReleaseString, build] = version.split('+');
    const [versionString, preRelease] = versionPreReleaseString.split('-');
    const [major, minor, patch] = versionString.split('.').map(Number);

    return new Version({ major, minor, patch, preRelease, build });
  }

  /**
   * Creates a new `Version` instance.
   *
   * @param version The object describing the version.
   */
  constructor(
    protected version: IVersionDescriptor = {
      major: 0,
      minor: 0,
      patch: 0,
    },
  ) {}

  /**
   * The major version of the version.
   */
  public get major(): number {
    const { major } = this.version;

    return major;
  }

  /**
   * Sets the major version of the version.
   *
   * @param value The value to set.
   */
  public set major(value: number) {
    const { version } = this;

    version.major = value;
  }

  /**
   * The minor version of the version.
   */
  public get minor(): number {
    const { minor } = this.version;

    return minor;
  }

  /**
   * Sets the minor version of the version.
   *
   * @param value The value to set.
   */
  public set minor(value: number) {
    const { version } = this;

    version.minor = value;
  }

  /**
   * The patch version of the version.
   */
  public get patch(): number {
    const { patch } = this.version;

    return patch;
  }

  /**
   * Sets the patch version of the version.
   *
   * @param value The value to set.
   */
  public set patch(value: number) {
    const { version } = this;

    version.patch = value;
  }

  /**
   * The pre-release of the version.
   */
  public get preRelease(): string {
    const { preRelease } = this.version;

    return preRelease || '';
  }

  /**
   * Sets the pre-release of the version.
   *
   * @param value The value to set.
   */
  public set preRelease(value: string) {
    const { version } = this;

    version.preRelease = value;
  }

  /**
   * The build of the version.
   */
  public get build(): string {
    const { build } = this.version;

    return build || '';
  }

  /**
   * Sets the build of the version.
   *
   * @param value The value to set.
   */
  public set build(value: string) {
    const { version } = this;

    version.build = value;
  }

  /**
   * Bumps the version to the next major version.
   *
   * @returns The next major version.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   *
   * const version = Version.parse('1.2.3');
   * const bumped = version.bumpMajor();
   *
   * console.log(bumped.toString()); // 2.0.0
   * ```
   */
  public bumpMajor(): Version {
    const { major } = this.version;

    return new Version({ major: major + 1, minor: 0, patch: 0 });
  }

  /**
   * Bumps the version to the next minor version.
   *
   * @returns The next minor version.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   *
   * const version = Version.parse('1.2.3');
   * const bumped = version.bumpMinor();
   *
   * console.log(bumped.toString()); // 1.3.0
   * ```
   */
  public bumpMinor(): Version {
    const { major, minor } = this.version;

    return new Version({ major, minor: minor + 1, patch: 0 });
  }

  /**
   * Bumps the version to the next patch version.
   *
   * @returns The next patch version.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   *
   * const version = Version.parse('1.2.3');
   * const bumped = version.bumpPatch();
   *
   * console.log(bumped.toString()); // 1.2.4
   * ```
   */
  public bumpPatch(): Version {
    const { major, minor, patch } = this.version;

    return new Version({ major, minor, patch: patch + 1 });
  }

  /**
   * Returns a primitive value representing the object value, either a `string` or `number`, depending on the hint.
   *
   * @param hint The type of primitive value to return.
   * @returns Returns a `string` if hint is `'string'` or `'default'`, otherwise a `number`.
   */
  [Symbol.toPrimitive](hint: string): string | number {
    if (hint === 'number') {
      return this.valueOf();
    }

    return this.toString();
  }

  /**
   * Returns the numeric value of the `Version`.
   *
   * @returns The numeric value of the `Version`.
   */
  public valueOf(): number {
    const { major, minor, patch } = this;
    const numberValue = major * 10000 + minor * 100 + patch;

    return numberValue;
  }

  /**
   * Returns the string representation of the `Version`.
   *
   * @returns The string representation of the `Version`.
   */
  public toString(): string {
    const { major, minor, patch, preRelease, build } = this.version;

    let versionString = `${major}.${minor}.${patch}`;

    if (preRelease) {
      versionString += `-${preRelease}`;
    }

    if (build) {
      versionString += `+${build}`;
    }

    return versionString;
  }

  /**
   * Compares this `Version` instance with another, optionally reversing the comparison.
   *
   * @param other The other `Version` to compare to.
   * @param reverse Whether to reverse the comparison.
   * @returns The comparison result.
   *
   * @example
   * ```ts
   * import { Version } from './version.ts';
   *
   * const versionA = Version.fromValue(10203);
   * const versionB = Version.fromValue(10204);
   * const result = versionA.compareTo(versionB);
   *
   * console.log(result); // ComparisonResult.Lesser
   * ```
   */
  compareTo(other: Version, reverse: boolean = false): ComparisonResult {
    const comparer = new VersionComparer(reverse);

    return comparer.compare(this, other);
  }
}
