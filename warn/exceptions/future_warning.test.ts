/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the FutureWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '../../exceptions/mod.ts';

import { FutureWarning, Warning } from './mod.ts';

describe('FutureWarning', () => {
  const CODE = 88;
  const NAME = 'FutureWarning';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new FutureWarning('An error occurred.');
    it('should extend the Error, Exception, and Warning class', () => {
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'This feature will change in the future.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new FutureWarning(MSG);

    it('should create a new FutureWarning instance with the specified message description', () => {
      assertInstanceOf(exc, FutureWarning);
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
