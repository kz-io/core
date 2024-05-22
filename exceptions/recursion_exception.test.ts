/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the RecursionException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  Exception,
  OperationException,
  RecursionException,
  type RecursionExceptionData,
} from './mod.ts';

describe('RecursionException', () => {
  const CODE = 18;
  const NAME = 'RecursionException';
  const DEF_MSG = 'An operation exceeded maximum recursion depth.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new RecursionException('An error occurred.');
    it('should extend the Error, Exception, and OperationException class', () => {
      assertInstanceOf(exc, OperationException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'A process reached the bottom.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new RecursionException(MSG);

    it('should create a new RecursionException instance with the specified message description', () => {
      assertInstanceOf(exc, RecursionException);
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
    describe('new({recursionDepth}) - 0', () => {
      const DATA: RecursionExceptionData = { recursionDepth: 0 };
      const MSG =
        `An operation exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth}) - 1', () => {
      const DATA: RecursionExceptionData = { recursionDepth: 1 };
      const MSG =
        `An operation exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth}) - 2', () => {
      const DATA: RecursionExceptionData = { recursionDepth: 2 };
      const MSG =
        `An operation exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({operationName})', () => {
      const DATA: RecursionExceptionData = { operationName: 'foo' };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded maximum recursion depth.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({operationType}) - consonant', () => {
      const DATA: RecursionExceptionData = { operationType: 'process' };
      const MSG = `A ${DATA.operationType} exceeded maximum recursion depth.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({operationType}) - vowel', () => {
      const DATA: RecursionExceptionData = { operationType: 'action' };
      const MSG = `An ${DATA.operationType} exceeded maximum recursion depth.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName}) - 0', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 0,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName}) - 1', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 1,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName}) - 2', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 2,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 0, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 0,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 1, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 1,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 2, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 2,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 0, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 0,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 1, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 1,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationType}) - 2, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 2,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({operationName, operationType}) - consonant', () => {
      const DATA: RecursionExceptionData = {
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({operationName, operationType}) - vowel', () => {
      const DATA: RecursionExceptionData = {
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 0, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 0,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 1, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 1,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 2, consonant', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 2,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 0, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 0,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 1, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 1,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} level.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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

    describe('new({recursionDepth, operationName, operationType}) - 2, vowel', () => {
      const DATA: RecursionExceptionData = {
        recursionDepth: 2,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded maximum recursion depth of ${DATA.recursionDepth} levels.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new RecursionException(DATA);

      it('should create a new RecursionException instance with the specified data', () => {
        assertInstanceOf(exc, RecursionException);
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
    const MSG = 'A process reached the bottom.';
    const DATA: RecursionExceptionData = { operationName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new RecursionException(MSG, DATA);

    it('should create a new RecursionException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, RecursionException);
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

    const exc = new RecursionException('');

    it('should create a new RecursionException instance with the default message description', () => {
      assertInstanceOf(exc, RecursionException);
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

    const exc = new RecursionException({});

    it('should create a new RecursionException instance with the default message description', () => {
      assertInstanceOf(exc, RecursionException);
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
    const DATA: RecursionExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new RecursionException(DATA);

    it('should create a new RecursionException instance with the default message description', () => {
      assertInstanceOf(exc, RecursionException);
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
