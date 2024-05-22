/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the KeyException class and its related exception data type.
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
  KeyException,
  type KeyExceptionData,
  MethodException,
  NotFoundException,
  ValueException,
} from './mod.ts';

describe('KeyException', () => {
  const CODE = 45;
  const NAME = 'KeyException';
  const DEF_MSG = 'Unable to locate a property key on an object.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new KeyException('An error occurred.');
    it('should extend the Error, Exception, InvalidException, ValueException, NotFoundException, and MethodException class', () => {
      assertInstanceOf(exc, MethodException);
      assertInstanceOf(exc, NotFoundException);
      assertInstanceOf(exc, ValueException);
      assertInstanceOf(exc, InvalidException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'The name key was not found.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new KeyException(MSG);

    it('should create a new KeyException instance with the specified message description', () => {
      assertInstanceOf(exc, KeyException);
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
    describe('new({key})', () => {
      const DATA: KeyExceptionData = { key: 'foo' };
      const MSG = `Unable to locate a property key, ${DATA.key}, on an object.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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
      const DATA: KeyExceptionData = {
        valueName: 'quux',
      };
      const MSG =
        `Unable to locate a property key on an object, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({validKeys})', () => {
      const DATA: KeyExceptionData = {
        validKeys: ['bar', 'baz'],
      };
      const MSG =
        `Unable to locate a property key on an object. Valid property keys include: ${
          DATA.validKeys!.join(', ')
        }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({validKeys}) - empty', () => {
      const DATA: KeyExceptionData = { validKeys: [] };
      const MSG = `Unable to locate a property key on an object.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({key, valueName})', () => {
      const DATA: KeyExceptionData = {
        key: 'foo',
        valueName: 'quux',
      };
      const MSG =
        `Unable to locate a property key, ${DATA.key}, on an object, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({key, validKeys})', () => {
      const DATA: KeyExceptionData = {
        key: 'foo',
        validKeys: ['bar', 'baz'],
      };
      const MSG =
        `Unable to locate a property key, ${DATA.key}, on an object. Valid property keys include: ${
          DATA.validKeys!.join(', ')
        }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({key, validKeys}) - empty', () => {
      const DATA: KeyExceptionData = {
        key: 'foo',
        validKeys: [],
      };
      const MSG = `Unable to locate a property key, ${DATA.key}, on an object.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({valueName, validKeys})', () => {
      const DATA: KeyExceptionData = {
        valueName: 'quux',
        validKeys: ['bar', 'baz'],
      };
      const MSG =
        `Unable to locate a property key on an object, ${DATA.valueName}. Valid property keys include: ${
          DATA.validKeys!.join(', ')
        }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({valueName, validKeys}) - empty', () => {
      const DATA: KeyExceptionData = {
        valueName: 'quux',
        validKeys: [],
      };
      const MSG =
        `Unable to locate a property key on an object, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({key, valueName, validKeys})', () => {
      const DATA: KeyExceptionData = {
        key: 'foo',
        valueName: 'quux',
        validKeys: ['bar', 'baz'],
      };
      const MSG =
        `Unable to locate a property key, ${DATA.key}, on an object, ${DATA.valueName}. Valid property keys include: ${
          DATA.validKeys!.join(', ')
        }.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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

    describe('new({key, valueName, validKeys}) - empty', () => {
      const DATA: KeyExceptionData = {
        key: 'foo',
        valueName: 'quux',
        validKeys: [],
      };
      const MSG =
        `Unable to locate a property key, ${DATA.key}, on an object, ${DATA.valueName}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new KeyException(DATA);

      it('should create a new KeyException instance with the specified data', () => {
        assertInstanceOf(exc, KeyException);
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
    const MSG = 'The name key was not found.';
    const DATA: KeyExceptionData = { key: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new KeyException(MSG, DATA);

    it('should create a new KeyException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, KeyException);
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

    const exc = new KeyException('');

    it('should create a new KeyException instance with the default message description', () => {
      assertInstanceOf(exc, KeyException);
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

    const exc = new KeyException({});

    it('should create a new KeyException instance with the default message description', () => {
      assertInstanceOf(exc, KeyException);
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
    const DATA: KeyExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new KeyException(DATA);

    it('should create a new KeyException instance with the default message description', () => {
      assertInstanceOf(exc, KeyException);
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
