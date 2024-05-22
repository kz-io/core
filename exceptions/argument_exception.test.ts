/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ArgumentException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  ArgumentException,
  type ArgumentExceptionData,
  Exception,
  InvalidException,
  ValueException,
} from './mod.ts';

describe('ArgumentException', () => {
  const CODE = 39;
  const NAME = 'ArgumentException';
  const DEF_MSG = 'An argument does not satisfy its constraints.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new ArgumentException('An error occurred.');
    it('should extend the Error, Exception, InvalidException, and ValueException class', () => {
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'A value has the correct type, but is invalid.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new ArgumentException(MSG);

    it('should create a new ArgumentException instance with the specified message description', () => {
      assertInstanceOf(exc, ArgumentException);
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
    describe('new({argumentName})', () => {
      const DATA: ArgumentExceptionData = { argumentName: 'foo' };
      const MSG =
        `An argument, ${DATA.argumentName}, does not satisfy its constraints.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentException(DATA);

      it('should create a new ArgumentException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentException);
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

    describe('new({argumentConstraints})', () => {
      const DATA: ArgumentExceptionData = {
        argumentConstraints: ['must be a string', 'must be 20 characters long'],
      };
      const MSG = `An argument does not satisfy the following constraints: ${
        DATA.argumentConstraints!.join(', ')
      }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentException(DATA);

      it('should create a new ArgumentException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentException);
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

    describe('new({argumentConstraints}) - empty', () => {
      const DATA: ArgumentExceptionData = { argumentConstraints: [] };
      const MSG = `An argument does not satisfy its constraints.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentException(DATA);

      it('should create a new ArgumentException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentException);
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

    describe('new({argumentName, argumentConstraints})', () => {
      const DATA: ArgumentExceptionData = {
        argumentName: 'foo',
        argumentConstraints: ['must be a string', 'must be 20 characters long'],
      };
      const MSG =
        `An argument, ${DATA.argumentName}, does not satisfy the following constraints: ${
          DATA.argumentConstraints!.join(', ')
        }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentException(DATA);

      it('should create a new ArgumentException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentException);
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

    describe('new({argumentName, argumentConstraints}) - empty', () => {
      const DATA: ArgumentExceptionData = {
        argumentName: 'foo',
        argumentConstraints: [],
      };
      const MSG =
        `An argument, ${DATA.argumentName}, does not satisfy its constraints.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new ArgumentException(DATA);

      it('should create a new ArgumentException instance with the specified data', () => {
        assertInstanceOf(exc, ArgumentException);
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
    const MSG = 'A value has the correct type, but is invalid.';
    const DATA: ArgumentExceptionData = { argumentName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ArgumentException(MSG, DATA);

    it('should create a new ArgumentException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, ArgumentException);
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

    const exc = new ArgumentException('');

    it('should create a new ArgumentException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentException);
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

    const exc = new ArgumentException({});

    it('should create a new ArgumentException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentException);
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
    const DATA: ArgumentExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new ArgumentException(DATA);

    it('should create a new ArgumentException instance with the default message description', () => {
      assertInstanceOf(exc, ArgumentException);
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
