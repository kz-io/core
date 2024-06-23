/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the StringUtils utility class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';
import { StringUtils } from './mod.ts';

describe('StringUtils', () => {
  describe('EMPTY', () => {
    it('should be an empty string', () => {
      assertEquals(StringUtils.EMPTY, '');
    });
  });

  describe('getTemplateRenderer', () => {
    it('should return a function that renders a template string', () => {
      const template = StringUtils.getTemplateRenderer<
        { name: string }
      >`Hello, ${'name'}. How are you?`;
      const actual = template({ name: 'world' });
      const expected = 'Hello, world. How are you?';

      assertEquals(actual, expected);
    });

    it('should return a function that renders a template string with a callback', () => {
      const template = StringUtils.getTemplateRenderer<
        { name: string }
      >`Hello, ${(data) => data.name}. How are you?`;
      const actual = template({ name: 'world' });
      const expected = 'Hello, world. How are you?';

      assertEquals(actual, expected);
    });

    it('should return a function that renders a template string with multiple keys', () => {
      const template = StringUtils.getTemplateRenderer<
        { name: string; greeting: string }
      >`Hello, ${'name'}. ${'greeting'}`;
      const actual = template({ name: 'world', greeting: 'How are you?' });
      const expected = 'Hello, world. How are you?';

      assertEquals(actual, expected);
    });

    it('should handle an empty template string', () => {
      const template = StringUtils.getTemplateRenderer<
        { name: string }
      >``;
      const actual = template({ name: 'world' });
      const expected = '';

      assertEquals(actual, expected);
    });
  });

  describe('escapeHtml', () => {
    it('should escape HTML characters into their respective entities', () => {
      const actual = StringUtils.escapeHtml(
        '<p>Hello, world. How are you?</p>',
      );
      const expected = '&lt;p&gt;Hello, world. How are you?&lt;/p&gt;';

      assertEquals(actual, expected);
    });
  });

  describe('unescapeHtml', () => {
    it('should unescape HTML entities', () => {
      const actual = StringUtils.unescapeHtml(
        '&lt;p&gt;Hello, world. How are you?&lt;/p&gt;',
      );
      const expected = '<p>Hello, world. How are you?</p>';

      assertEquals(actual, expected);
    });
  });

  describe('escapeRegExp', () => {
    it('should escape regular expression characters', () => {
      const actual = StringUtils.escapeRegExp('Hello, world. How are you?');
      const expected = 'Hello, world\\. How are you\\?';

      assertEquals(actual, expected);
    });
  });

  describe('isEmptyOrWhitespace', () => {
    it('should return true if the string is empty or whitespace', () => {
      const actual = StringUtils.isEmptyOrWhitespace('  ');
      const expected = true;

      assertEquals(actual, expected);
    });

    it('should return false if the string is not empty or whitespace', () => {
      const actual = StringUtils.isEmptyOrWhitespace(
        'Hello, world. How are you?',
      );
      const expected = false;

      assertEquals(actual, expected);
    });
  });

  describe('isEmpty', () => {
    it('should return true if the string is empty', () => {
      const actual = StringUtils.isEmpty('');
      const expected = true;

      assertEquals(actual, expected);
    });

    it('should return false if the string is not empty', () => {
      const actual = StringUtils.isEmpty('Hello, world. How are you?');
      const expected = false;

      assertEquals(actual, expected);
    });
  });

  describe('getLines', () => {
    it('should return an array of lines from a string', () => {
      const actual = StringUtils.getLines('Hello, world.\nHow are you?');
      const expected = ['Hello, world.', 'How are you?'];

      assertEquals(actual, expected);
    });
  });

  describe('collapseWhitespace', () => {
    it('should collapse whitespace into a single space', () => {
      const actual = StringUtils.collapseWhitespace(
        'Hello,   world. How are you?',
      );
      const expected = 'Hello, world. How are you?';

      assertEquals(actual, expected);
    });
  });

  describe('normalizeNewLines', () => {
    it('should normalize new lines to LF', () => {
      const actual = StringUtils.normalizeNewLines(
        'Hello, world.\r\nHow are you?',
      );
      const expected = 'Hello, world.\nHow are you?';

      assertEquals(actual, expected);
    });
  });
});
