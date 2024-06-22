/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the SemVerVersionComparer class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { SemVerVersionComparer } from './mod.ts';

import { ComparisonResult } from '../types/mod.ts';

describe('SemVerVersionComparer', () => {
  it('should compare two version descriptors', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0 };
    const b = { major: 1, minor: 0, patch: 1 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(a, a), ComparisonResult.Equal);
    assertEquals(comparer.compare(a, a, true), ComparisonResult.Equal);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Lesser);
  });

  it('should compare two major version descriptors', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 2, minor: 0, patch: 0 };
    const b = { major: 1, minor: 0, patch: 0 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Greater);
  });

  it('should compare two version descriptors in reverse', () => {
    const comparer = new SemVerVersionComparer(true);

    const a = { major: 1, minor: 0, patch: 0 };
    const b = { major: 1, minor: 0, patch: 1 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(a, b, false), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a, false), ComparisonResult.Greater);
  });

  it('should compare two minor version descriptors', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 1, patch: 0 };
    const b = { major: 1, minor: 0, patch: 0 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Greater);
  });

  it('should compare two patch version descriptors', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 1 };
    const b = { major: 1, minor: 0, patch: 0 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
  });

  it('should compare two version descriptors with pre-release', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'beta' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
  });

  it('should compare two version descriptors with build', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, build: '1' };
    const b = { major: 1, minor: 0, patch: 0, build: '2' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Equal);
    assertEquals(comparer.compare(b, a), ComparisonResult.Equal);
  });

  it('should compare two version descriptors with pre-release and build', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha', build: '1' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'beta', build: '2' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
  });

  it('should compare a pre-release version with a non-pre-release version', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha' };
    const b = { major: 1, minor: 0, patch: 0 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
  });

  it('should compare a pre-release version with a non-pre-release version in reverse', () => {
    const comparer = new SemVerVersionComparer(true);

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha' };
    const b = { major: 1, minor: 0, patch: 0 };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
  });

  it('should compare complex pre-release versions - same length & format', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.1' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.2' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Lesser);
  });

  it('should compare complex pre-release versions - different length, same format', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.1' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'alpha' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Lesser);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a), ComparisonResult.Greater);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Lesser);
  });

  it('should compare complex pre-release versions - different length, different format', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.1' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.beta' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Greater);
  });

  it('should compare complex pre-release versions - strings', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.gamma' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: 'alpha.beta' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Greater);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a), ComparisonResult.Lesser);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Greater);
  });

  it('should compare complex pre-release versions - same', () => {
    const comparer = new SemVerVersionComparer();

    const a = { major: 1, minor: 0, patch: 0, preRelease: '1.1' };
    const b = { major: 1, minor: 0, patch: 0, preRelease: '1.1' };

    assertEquals(comparer.compare(a, b), ComparisonResult.Equal);
    assertEquals(comparer.compare(a, b, true), ComparisonResult.Equal);
    assertEquals(comparer.compare(b, a), ComparisonResult.Equal);
    assertEquals(comparer.compare(b, a, true), ComparisonResult.Equal);
  });
});
