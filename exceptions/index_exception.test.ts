/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the IndexException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  Exception,
  IndexException,
  type IndexExceptionData,
  RangeException,
  ValueException,
} from './mod.ts';

describe('IndexException', () => {
  const CODE = 41;
  const NAME = 'IndexException';
  const DEF_MSG = 'An index is outside the bounds of an array.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new IndexException('An error occurred.');
    it('should extend the Error, Exception, ValueException, and RangeException class', () => {
      assertInstanceOf(exc, RangeException);
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'The index is invalid.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new IndexException(MSG);

    it('should create a new IndexException instance with the specified message description', () => {
      assertInstanceOf(exc, IndexException);
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
      const DATA: IndexExceptionData = { index: 25 };
      const MSG = `An index, ${DATA.index}, is outside the bounds of an array.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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

    describe('new({valueName})', () => {
      const DATA: IndexExceptionData = { valueName: 'foo' };
      const MSG =
        `An index is outside the bounds of an array, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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
      const DATA: IndexExceptionData = { upperBound: 10 };
      const MSG =
        `An index is outside the bounds of an array. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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

    describe('new({index, valueName})', () => {
      const DATA: IndexExceptionData = { index: 25, valueName: 'foo' };
      const MSG =
        `An index, ${DATA.index}, is outside the bounds of an array, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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
      const DATA: IndexExceptionData = { index: 11, upperBound: 10 };
      const MSG =
        `An index, ${DATA.index}, is outside the bounds of an array. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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

    describe('new({valueName, upperBound})', () => {
      const DATA: IndexExceptionData = { valueName: 'foo', upperBound: 10 };
      const MSG =
        `An index is outside the bounds of an array, ${DATA.valueName}. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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

    describe('new({index, valueName, upperBound})', () => {
      const DATA: IndexExceptionData = {
        index: 11,
        valueName: 'foo',
        upperBound: 10,
      };
      const MSG =
        `An index, ${DATA.index}, is outside the bounds of an array, ${DATA.valueName}. It must be between 0 and ${DATA.upperBound}, inclusive.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IndexException(DATA);

      it('should create a new IndexException instance with the specified data', () => {
        assertInstanceOf(exc, IndexException);
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
    const MSG = 'The index is invalid.';
    const DATA: IndexExceptionData = { valueName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new IndexException(MSG, DATA);

    it('should create a new IndexException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, IndexException);
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

    const exc = new IndexException('');

    it('should create a new IndexException instance with the default message description', () => {
      assertInstanceOf(exc, IndexException);
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

    const exc = new IndexException({});

    it('should create a new IndexException instance with the default message description', () => {
      assertInstanceOf(exc, IndexException);
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
    const DATA: IndexExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new IndexException(DATA);

    it('should create a new IndexException instance with the default message description', () => {
      assertInstanceOf(exc, IndexException);
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
