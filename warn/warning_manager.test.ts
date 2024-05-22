/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the WarningManager class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertSpyCalls, spy } from '@std/testing/mock';
import { assertEquals, assertExists, assertInstanceOf } from '@std/assert';

import { ConsoleWarningObserver, Warning, WarningManager } from './mod.ts';

describe('WarningManager', () => {
  describe('new()', () => {
    const warn = new WarningManager();

    it('should create a new WarningManager instance', () => {
      assertInstanceOf(warn, WarningManager);
      assertEquals(warn.length, 0);
    });
  });

  describe('warn()', () => {
    describe('(message)', () => {
      it('should add a warning message to the collection with the default Warning type', () => {
        const warn = new WarningManager();
        warn.warn('This is a warning message.');

        assertEquals(warn.length, 1);
        assertInstanceOf(warn.getWarnings()[0], Warning);
      });
    });

    describe('(warning)', () => {
      const warn = new WarningManager();
      const warning = new Warning('This is a warning message.');

      it('should add a warning instance to the collection', () => {
        warn.warn(warning);

        assertEquals(warn.length, 1);

        const warnings = warn.getWarnings();

        assertEquals(warnings[0], warning);
      });
    });

    describe('(message, type)', () => {
      const warn = new WarningManager();

      it('should add a warning message to the collection with the specified Warning type', () => {
        class CustomWarning extends Warning {}
        warn.warn('This is a warning message.', CustomWarning);

        assertEquals(warn.length, 1);

        const warnings = warn.getWarnings();

        assertInstanceOf(warnings[0], CustomWarning);
      });
    });
  });

  describe('getWarnings()', () => {
    const warn = new WarningManager();
    class CustomWarning extends Warning {}

    warn.warn('This is a warning message.');
    warn.warn('This is another warning message.', CustomWarning);
    warn.warn('This is yet another warning message.', CustomWarning);

    describe('()', () => {
      it('should return the collection of warnings', () => {
        const warnings = warn.getWarnings();

        assertEquals(warnings.length, 3);
      });
    });

    describe('(msg)', () => {
      it('should return the collection of warnings that include the specified message', () => {
        const warnings = warn.getWarnings('another');

        assertEquals(warnings.length, 2);
      });
    });

    describe('(type)', () => {
      it('should return the collection of warnings that are of the specified type', () => {
        const warnings = warn.getWarnings(CustomWarning);

        assertEquals(warnings.length, 2);
      });
    });
  });

  describe('groupWarnings()', () => {
    const warn = new WarningManager();
    class CustomWarning extends Warning {}

    warn.warn('This is a warning message.');
    warn.warn('This is another warning message.', CustomWarning);
    warn.warn('This is yet another warning message.', CustomWarning);

    it('should return the collection of warnings grouped by type', () => {
      const grouped = warn.groupWarnings();

      assertEquals(grouped.size, 2);

      const warnings = grouped.get('Warning');
      const customWarnings = grouped.get('CustomWarning');

      assertExists(warnings);
      assertExists(customWarnings);

      assertEquals(warnings.length, 1);
      assertEquals(customWarnings.length, 2);
    });
  });

  describe('clear()', () => {
    const warn = new WarningManager();
    class CustomWarning extends Warning {}

    warn.warn('This is a warning message.');
    warn.warn('This is another warning message.', CustomWarning);
    warn.warn('This is yet another warning message.', CustomWarning);

    it('should clear the collection of warnings', () => {
      warn.clear();

      assertEquals(warn.length, 0);
    });
  });

  describe('observers', () => {
    const warn = new WarningManager();
    const observer = new ConsoleWarningObserver();

    warn.subscribe(observer);

    it('should notify observers when a warning is added', () => {
      const consoleSpy = spy(console, 'warn');

      warn.warn('This is a warning message.');

      assertSpyCalls(consoleSpy, 1);

      consoleSpy.restore();
    });

    it('should clear observers when completed', () => {
      warn.complete();

      const consoleSpy = spy(console, 'warn');

      warn.warn('This is a warning message.');

      assertSpyCalls(consoleSpy, 0);

      consoleSpy.restore();
    });
  });
});
