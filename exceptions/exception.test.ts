/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the base Exception class and its related exception data type.
 */

import { describe, it } from '@std/testing/bdd';
import { assert, assertEquals, assertInstanceOf } from '@std/assert';

import { I11N_DOCS_HOST, I11N_EX2_PATH } from './_internal/mod.ts';

import { Exception } from './exception.ts';

describe('Exception', () => {
  const CODE = 0;
  const NAME = 'Exception';
  const URI_BASE = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new Exception('An error occurred.');

    it('should extend the Error class', () => {
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'An error occurred.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new Exception(MSG);

    it('should create a new Exception instance with the specified message description', () => {
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertEquals(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
      assert(typeof exc.getHash() === 'number');
    });
  });

  describe('new(message, data)', () => {
    const MSG = 'An error occurred.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = new Error('Execution failure');
    const DATA = { prev: 'Execution failure' };
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }&cause=${
      encodeURIComponent(
        JSON.stringify({ message: CAUSE.message, cause: CAUSE.cause }),
      )
    }`;

    const exc = new Exception(MSG, { ...DATA, cause: CAUSE });

    it('should create a new Exception instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertEquals(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });

  describe('new(message) - empty string', () => {
    const MSG = '';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/0x${CODE.toString(16)}`;

    const exc = new Exception(MSG);

    it('should create a new Exception instance with the specified message description', () => {
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertEquals(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });

  describe('helpUrl - nested Exceptions', () => {
    const MSG = 'An error occurred.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = new Exception('Execution failure');
    const DATA = { prev: 'Execution failure' };
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }&cause=${encodeURIComponent(JSON.stringify({ helpUrl: CAUSE.helpUrl }))}`;

    const exc = new Exception(MSG, { ...DATA, cause: CAUSE });

    it('should create a new Exception instance with the specified message description and additional, relevant data', () => {
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertEquals(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
