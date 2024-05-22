/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ExternalException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  Exception,
  ExternalException,
  type ExternalExceptionData,
  OperationException,
} from './mod.ts';

describe('ExternalException', () => {
  const CODE = 17;
  const NAME = 'ExternalException';
  const DEF_MSG = 'An external codebase raised an exception.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new ExternalException('An error occurred.');
    it('should extend the Error, Exception, and OperationException class', () => {
      assertInstanceOf(exc, OperationException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'An external library encountered an issue.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ExternalException(MSG);

    it('should create a new ExternalException instance with the specified message description', () => {
      assertInstanceOf(exc, ExternalException);
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
    describe('new({externalName})', () => {
      const DATA: ExternalExceptionData = { externalName: 'foo' };
      const MSG =
        `An external codebase, ${DATA.externalName}, raised an exception.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ExternalException(DATA);

      it('should create a new ExternalException instance with the specified data', () => {
        assertInstanceOf(exc, ExternalException);
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

    describe('new({externalType})', () => {
      const DATA: ExternalExceptionData = {
        externalType: 'library',
      };
      const MSG = `An external library raised an exception.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ExternalException(DATA);

      it('should create a new ExternalException instance with the specified data', () => {
        assertInstanceOf(exc, ExternalException);
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

    describe('new({externalName, externalType})', () => {
      const DATA: ExternalExceptionData = {
        externalName: 'foo',
        externalType: 'library',
      };
      const MSG =
        `An external library, ${DATA.externalName}, raised an exception.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ExternalException(DATA);

      it('should create a new ExternalException instance with the specified data', () => {
        assertInstanceOf(exc, ExternalException);
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
    const MSG = 'An external library encountered an issue.';
    const DATA: ExternalExceptionData = { externalName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ExternalException(MSG, DATA);

    it('should create a new ExternalException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, ExternalException);
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

    const exc = new ExternalException('');

    it('should create a new ExternalException instance with the default message description', () => {
      assertInstanceOf(exc, ExternalException);
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

    const exc = new ExternalException({});

    it('should create a new ExternalException instance with the default message description', () => {
      assertInstanceOf(exc, ExternalException);
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
    const DATA: ExternalExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ExternalException(DATA);

    it('should create a new ExternalException instance with the default message description', () => {
      assertInstanceOf(exc, ExternalException);
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
