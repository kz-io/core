/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ConsoleWarningObserver class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertSpyCalls, spy } from '@std/testing/mock';
import { assertInstanceOf } from '@std/assert';

import { ConsoleWarningObserver, Warning } from './mod.ts';

describe('ConsoleWarningObserver', () => {
  describe('new()', () => {
    const warn = new ConsoleWarningObserver();

    it('should create a new ConsoleWarningObserver instance', () => {
      assertInstanceOf(warn, ConsoleWarningObserver);
    });
  });

  describe('error()', () => {
    it('should log the error message to the console', () => {
      const warn = new ConsoleWarningObserver();
      const error = new Error('This is an error message.');

      const consoleSpy = spy(console, 'error');

      warn.error(error);

      assertSpyCalls(consoleSpy, 1);

      consoleSpy.restore();
    });
  });

  describe('next()', () => {
    it('should log the warning message to the console', () => {
      const warn = new ConsoleWarningObserver();
      const warning = new Warning('This is a warning message.');

      const consoleSpy = spy(console, 'warn');

      warn.next(warning);

      assertSpyCalls(consoleSpy, 1);

      consoleSpy.restore();
    });
  });
});
