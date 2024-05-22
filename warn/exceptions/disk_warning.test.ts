/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the DiskWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '../../exceptions/mod.ts';

import { DiskWarning, OSWarning, Warning } from './mod.ts';

describe('DiskWarning', () => {
  const CODE = 75;
  const NAME = 'DiskWarning';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new DiskWarning('An error occurred.');
    it('should extend the Error, Exception, Warning, and OSWarning class', () => {
      assertInstanceOf(exc, OSWarning);
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'Available disk space at 15%.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new DiskWarning(MSG);

    it('should create a new DiskWarning instance with the specified message description', () => {
      assertInstanceOf(exc, DiskWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
