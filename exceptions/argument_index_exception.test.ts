/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ArgumentIndexException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  ArgumentIndexException,
  type ArgumentIndexExceptionData,
  Exception,
  IndexException,
  InvalidException,
  RangeException,
  ValueException,
} from './mod.ts';

describe('ArgumentIndexException', () => {
  const CODE = 42;
  const NAME = 'ArgumentIndexException';
  const DEF_MSG = 'An index is outside the bounds of an arguments array.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new ArgumentIndexException('An error occurred.');
    it('should extend the Error, Exception, InvalidException, ValueException, RangeException, and IndexException class', () => {
      assertInstanceOf(exc, IndexException);
      assertInstanceOf(exc, RangeException);
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'The index is outside the arguments array range.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ArgumentIndexException(MSG);

    it('should create a new ArgumentIndexException instance with the specified message description', () => {
      assertInstanceOf(exc, ArgumentIndexException);
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

  describe('new(data)', () => {
    describe('new({index})', () => {
      const DATA: ArgumentIndexExceptionData = { index: 10 };
      const MSG =
        `An index, ${DATA.index}, is outside the bounds of an arguments array.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentIndexException(DATA);

      it('should create a new ArgumentIndexException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentIndexException);
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

    describe('new({upperBound})', () => {
      const DATA: ArgumentIndexExceptionData = { upperBound: 5 };
      const MSG =
        `An index is outside the bounds of an arguments array. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentIndexException(DATA);

      it('should create a new ArgumentIndexException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentIndexException);
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

    describe('new({index, upperBound})', () => {
      const DATA: ArgumentIndexExceptionData = { index: 10, upperBound: 5 };
      const MSG =
        `An index, ${DATA.index}, is outside the bounds of an arguments array. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentIndexException(DATA);

      it('should create a new ArgumentIndexException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentIndexException);
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

  describe('new(message, data)', () => {
    const MSG = 'The index is outside the arguments array range.';
    const DATA: ArgumentIndexExceptionData = { decoratorName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ArgumentIndexException(MSG, DATA);

    it('should create a new ArgumentIndexException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, ArgumentIndexException);
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

  describe('new(message) - empty string', () => {
    const MSG = DEF_MSG;
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ArgumentIndexException('');

    it('should create a new ArgumentIndexException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentIndexException);
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

  describe('new(data) - empty object', () => {
    const DATA = undefined;
    const MSG = DEF_MSG;
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ArgumentIndexException({});

    it('should create a new ArgumentIndexException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentIndexException);
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

  describe('new(data) - irrelevant data', () => {
    const MSG = DEF_MSG;
    const DATA: ArgumentIndexExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ArgumentIndexException(DATA);

    it('should create a new ArgumentIndexException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentIndexException);
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
