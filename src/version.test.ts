/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Version class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertThrows } from '@std/assert';

import { Version } from './mod.ts';

describe('Version', () => {
  describe('Version.fromValue', () => {
    it('should create a version from a numeric value', () => {
      const version = Version.fromValue(10203);

      assertEquals(version.major, 1);
      assertEquals(version.minor, 2);
      assertEquals(version.patch, 3);
    });
  });

  describe('Version.parse', () => {
    it('should parse a version string', () => {
      const version = Version.parse('1.2.3');

      assertEquals(version.major, 1);
      assertEquals(version.minor, 2);
      assertEquals(version.patch, 3);
      assertEquals(version.preRelease, '');
      assertEquals(version.build, '');
    });

    it('should throw an error for an invalid version string', () => {
      assertThrows(() => {
        Version.parse('1.2.beta');
      });
    });
  });

  describe('major', () => {
    it('should return the major version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(version.major, 1);
    });

    it('should set the major version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      version.major = 2;

      assertEquals(version.major, 2);
    });
  });

  describe('minor', () => {
    it('should return the minor version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(version.minor, 2);
    });

    it('should set the minor version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      version.minor = 3;

      assertEquals(version.minor, 3);
    });
  });

  describe('patch', () => {
    it('should return the patch version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(version.patch, 3);
    });

    it('should set the patch version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      version.patch = 4;

      assertEquals(version.patch, 4);
    });
  });

  describe('preRelease', () => {
    it('should return the pre-release version', () => {
      const version = new Version({
        major: 1,
        minor: 2,
        patch: 3,
        preRelease: 'beta',
      });

      assertEquals(version.preRelease, 'beta');
    });

    it('should set the pre-release version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      version.preRelease = 'beta';

      assertEquals(version.preRelease, 'beta');
    });
  });

  describe('build', () => {
    it('should return the build version', () => {
      const version = new Version({
        major: 1,
        minor: 2,
        patch: 3,
        build: 'build',
      });

      assertEquals(version.build, 'build');
    });

    it('should set the build version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      version.build = 'build';

      assertEquals(version.build, 'build');
    });
  });

  describe('bumpMajor', () => {
    it('should bump the major version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      const bumped = version.bumpMajor();

      assertEquals(bumped.major, 2);
      assertEquals(bumped.minor, 0);
      assertEquals(bumped.patch, 0);
    });
  });

  describe('bumpMinor', () => {
    it('should bump the minor version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      const bumped = version.bumpMinor();

      assertEquals(bumped.major, 1);
      assertEquals(bumped.minor, 3);
      assertEquals(bumped.patch, 0);
    });
  });

  describe('bumpPatch', () => {
    it('should bump the patch version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      const bumped = version.bumpPatch();

      assertEquals(bumped.major, 1);
      assertEquals(bumped.minor, 2);
      assertEquals(bumped.patch, 4);
    });
  });

  describe('toString', () => {
    it('should return the version string', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(version.toString(), '1.2.3');
    });

    it('should return the version string with pre-release', () => {
      const version = new Version({
        major: 1,
        minor: 2,
        patch: 3,
        preRelease: 'beta',
      });

      assertEquals(version.toString(), '1.2.3-beta');
    });

    it('should return the version string with build', () => {
      const version = new Version({
        major: 1,
        minor: 2,
        patch: 3,
        build: 'build',
      });

      assertEquals(version.toString(), '1.2.3+build');
    });

    it('should return the version string with pre-release and build', () => {
      const version = new Version({
        major: 1,
        minor: 2,
        patch: 3,
        preRelease: 'beta',
        build: 'build',
      });

      assertEquals(version.toString(), '1.2.3-beta+build');
    });
  });

  describe('valueOf', () => {
    it('should return the numeric version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(version.valueOf(), 10203);
    });
  });

  describe('compareTo', () => {
    it('should compare two versions', () => {
      const a = new Version({ major: 1, minor: 2, patch: 3 });
      const b = new Version({ major: 1, minor: 2, patch: 4 });

      assertEquals(a.compareTo(b), -1);
    });

    it('should compare two versions in reverse', () => {
      const a = new Version({ major: 1, minor: 2, patch: 4 });
      const b = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(a.compareTo(b, true), -1);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    it('should return the version string', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(`${version}`, '1.2.3');
    });

    it('should return the numeric version', () => {
      const version = new Version({ major: 1, minor: 2, patch: 3 });

      assertEquals(+version, 10203);
    });
  });
});
