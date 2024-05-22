/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the NotFoundException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  Exception,
  InvalidException,
  NotFoundException,
  ValueException,
} from './mod.ts';

describe('NotFoundException', () => {
  const CODE = 43;
  const NAME = 'NotFoundException';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new NotFoundException('An error occurred.');
    it('should extend the Error, Exception, InvalidException, and ValueException class', () => {
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'Cannot find the requested resource.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new NotFoundException(MSG);

    it('should create a new NotFoundException instance with the specified message description', () => {
      assertInstanceOf(exc, NotFoundException);
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
