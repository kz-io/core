/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the Version class.
 */

import {
  ComparisonResult,
  type ISemVerVersionDescriptor,
  type TComparable,
} from '../types/mod.ts';
import { AbstractPrimitiveConvertible } from './abstract_primitive_convertible.ts';
import { SemVerVersionComparer } from './sem_ver_version_comparer.ts';

const semVerRegex = /^(\d+)\.(\d+)\.(\d+)(?:-(.+))?(?:\+(.+))?$/;

/**
 * A class representing a version providing features for version comparison and manipulation.
 *
 * @example
 * ```ts
 * import { Version } from './version.ts';
 *
 * const version = new Version({ major: 1, minor: 0, patch: 0 });
 *
 * console.log(version.toString()); // '1.0.0'
 *
 * console.log(version.toNumber()); // 10000
 * ```
 */
export class Version extends AbstractPrimitiveConvertible
  implements TComparable<Version> {
  /**
   * Creates a new `Version` instance from a numeric value.
   *
   * @param value The numeric value of the version.
   * @returns The `Version` instance.
   */
  public static fromValue(value: number): Version {
    const major = Math.floor(value / 10000);
    const minor = Math.floor((value % 10000) / 100);
    const patch = value % 100;

    return new Version({ major, minor, patch });
  }

  /**
   * Parses a version string into a `Version`.
   *
   * @param version The version string to parse.
   *
   * @returns The parsed `Version`.
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
   * @param version The version object.
   */
  constructor(
    protected version: ISemVerVersionDescriptor = {
      major: 0,
      minor: 0,
      patch: 0,
    },
  ) {
    super();
  }

  /**
   * The major version.
   */
  public get major(): number {
    const { major } = this.version;

    return major;
  }

  /**
   * Sets the major version.
   *
   * @param value The value to set.
   */
  public set major(value: number) {
    const { version } = this;

    version.major = value;
  }

  /**
   * The minor version.
   */
  public get minor(): number {
    const { minor } = this.version;

    return minor;
  }

  /**
   * Sets the minor version.
   *
   * @param value The value to set.
   */
  public set minor(value: number) {
    const { version } = this;

    version.minor = value;
  }

  /**
   * The patch version.
   */
  public get patch(): number {
    const { patch } = this.version;

    return patch;
  }

  /**
   * Sets the patch version.
   *
   * @param value The value to set.
   */
  public set patch(value: number) {
    const { version } = this;

    version.patch = value;
  }

  /**
   * The pre-release version.
   */
  public get preRelease(): string {
    const { preRelease } = this.version;

    return preRelease || '';
  }

  /**
   * Sets the pre-release version.
   *
   * @param value The value to set.
   */
  public set preRelease(value: string) {
    const { version } = this;

    version.preRelease = value;
  }

  /**
   * The build version.
   */
  public get build(): string {
    const { build } = this.version;

    return build || '';
  }

  /**
   * Sets the build version.
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
   */
  public bumpMajor(): Version {
    const { major } = this.version;

    return new Version({ major: major + 1, minor: 0, patch: 0 });
  }

  /**
   * Bumps the version to the next minor version.
   *
   * @returns The next minor version.
   */
  public bumpMinor(): Version {
    const { major, minor } = this.version;

    return new Version({ major, minor: minor + 1, patch: 0 });
  }

  /**
   * Bumps the version to the next patch version.
   *
   * @returns The next patch version.
   */
  public bumpPatch(): Version {
    const { major, minor, patch } = this.version;

    return new Version({ major, minor, patch: patch + 1 });
  }

  /**
   * Returns the numeric value of the version.
   *
   * @returns The numeric value of the version.
   */
  public valueOf(): number {
    const { major, minor, patch } = this;
    const numberValue = major * 10000 + minor * 100 + patch;

    return numberValue;
  }

  /**
   * Returns the string representation of the version.
   *
   * @returns The string representation of the version.
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
   * Returns whether the version can be considered stable.
   *
   * @returns Whether the version can be considered stable.
   */
  public toBoolean(): boolean {
    return this.major > 0 && !this.preRelease;
  }

  /**
   * Compares this version with another version.
   *
   * @param other The other version to compare.
   * @param reverse Whether to reverse the comparison.
   * @returns The comparison result.
   */
  compare(other: Version, reverse: boolean = false): ComparisonResult {
    const comparer = new SemVerVersionComparer(reverse);

    return comparer.compare(this, other);
  }
}
