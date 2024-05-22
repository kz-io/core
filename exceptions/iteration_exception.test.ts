/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the IterationException class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';

import {
  Exception,
  IterationException,
  type IterationExceptionData,
  OperationException,
} from './mod.ts';

describe('IterationException', () => {
  const CODE = 19;
  const NAME = 'IterationException';
  const DEF_MSG = 'An operation exceeded the maximum number of iterations.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new IterationException('An error occurred.');
    it('should extend the Error, Exception, and OperationException class', () => {
      assertInstanceOf(exc, OperationException);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'A process encountered an infinite loop.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new IterationException(MSG);

    it('should create a new IterationException instance with the specified message description', () => {
      assertInstanceOf(exc, IterationException);
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
    describe('new({iterationCount}) - 0', () => {
      const DATA: IterationExceptionData = { iterationCount: 0 };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount}) - 1', () => {
      const DATA: IterationExceptionData = { iterationCount: 1 };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount}) - 2', () => {
      const DATA: IterationExceptionData = { iterationCount: 2 };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
      const DATA: IterationExceptionData = { operationName: 'foo' };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
      const DATA: IterationExceptionData = { operationType: 'process' };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
      const DATA: IterationExceptionData = { operationType: 'action' };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({repeatingValues})', () => {
      const DATA: IterationExceptionData = { repeatingValues: true };
      const MSG =
        `An operation exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName}) - 0', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName}) - 1', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName}) - 2', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 0, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 1, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 2, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 0, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 1, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType}) - 2, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, repeatingValues}) - 0', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        repeatingValues: true,
      };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, repeatingValues}) - 1', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        repeatingValues: true,
      };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, repeatingValues}) - 2', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        repeatingValues: true,
      };
      const MSG =
        `An operation exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
      const DATA: IterationExceptionData = {
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
      const DATA: IterationExceptionData = {
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({operationName, repeatingValues})', () => {
      const DATA: IterationExceptionData = {
        operationName: 'foo',
        repeatingValues: true,
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({operationType, repeatingValues}) - consonant', () => {
      const DATA: IterationExceptionData = {
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({operationType, repeatingValues}) - vowel', () => {
      const DATA: IterationExceptionData = {
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    //  iterationCount - 0, operationName, operationType - consonant
    //  iterationCount - 1, operationName, operationType - consonant
    //  iterationCount - 2, operationName, operationType - consonant
    //  iterationCount - 0, operationName, operationType - vowel
    //  iterationCount - 1, operationName, operationType - vowel
    //  iterationCount - 2, operationName, operationType - vowel

    describe('new({iterationCount, operationName, operationType}) - 0, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType}) - 1, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType}) - 2, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
        operationType: 'process',
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType}) - 0, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType}) - 1, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType}) - 2, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
        operationType: 'action',
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, repeatingValues}) - 0', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
        repeatingValues: true,
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, repeatingValues}) - 1', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
        repeatingValues: true,
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, repeatingValues}) - 2', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
        repeatingValues: true,
      };
      const MSG =
        `An operation, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 0, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 1, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 2, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 0, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 1, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationType, repeatingValues}) - 2, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType} exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({operationName, operationType, repeatingValues}) - consonant', () => {
      const DATA: IterationExceptionData = {
        operationName: 'foo',
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({operationName, operationType, repeatingValues}) - vowel', () => {
      const DATA: IterationExceptionData = {
        operationName: 'foo',
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 0, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 1, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 2, consonant', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
        operationType: 'process',
        repeatingValues: true,
      };
      const MSG =
        `A ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 0, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 0,
        operationName: 'foo',
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 1, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 1,
        operationName: 'foo',
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iteration on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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

    describe('new({iterationCount, operationName, operationType, repeatingValues}) - 2, vowel', () => {
      const DATA: IterationExceptionData = {
        iterationCount: 2,
        operationName: 'foo',
        operationType: 'action',
        repeatingValues: true,
      };
      const MSG =
        `An ${DATA.operationType}, ${DATA.operationName}, exceeded the maximum number of ${DATA.iterationCount} iterations on consecutive repeating values.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const exc = new IterationException(DATA);

      it('should create a new IterationException instance with the specified data', () => {
        assertInstanceOf(exc, IterationException);
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
    const MSG = 'A process encountered an infinite loop.';
    const DATA: IterationExceptionData = { externalName: 'foo' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new IterationException(MSG, DATA);

    it('should create a new IterationException instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, IterationException);
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

    const exc = new IterationException('');

    it('should create a new IterationException instance with the default message description', () => {
      assertInstanceOf(exc, IterationException);
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

    const exc = new IterationException({});

    it('should create a new IterationException instance with the default message description', () => {
      assertInstanceOf(exc, IterationException);
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
    const DATA: IterationExceptionData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new IterationException(DATA);

    it('should create a new IterationException instance with the default message description', () => {
      assertInstanceOf(exc, IterationException);
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
