/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the ObjectUtils utility class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';
import { ObjectUtils } from './mod.ts';

describe('ObjectUtils', () => {
  type ObjectData = {
    a: {
      b: {
        c: string;
        d: number;
        e: boolean;
        f?: {
          g: string;
        };
      };
    };
  };

  describe('readPath', () => {
    it('should read a value from an object at a specified path', () => {
      const object: ObjectData = {
        a: {
          b: {
            c: 'value',
            d: 123,
            e: true,
          },
        },
      };

      const bValue = ObjectUtils.readPath(object, 'a.b');
      const cValue = ObjectUtils.readPath(object, 'a.b.c');
      const dValue = ObjectUtils.readPath(object, 'a.b.d');
      const eValue = ObjectUtils.readPath(object, 'a.b.e');
      const fValue = ObjectUtils.readPath(object, 'a.b.f');
      const gValue = ObjectUtils.readPath(object, 'a.b.f.g');

      assertEquals(bValue, object.a.b);
      assertEquals(cValue, 'value');
      assertEquals(dValue, 123);
      assertEquals(eValue, true);
      assertEquals(fValue, undefined);
      assertEquals(gValue, undefined);
    });
  });

  describe('writePath', () => {
    it('should write a value to an object at a specified path', () => {
      const object: ObjectData = {
        a: {
          b: {
            c: 'value',
            d: 123,
            e: true,
          },
        },
      };

      assertEquals(object.a.b.f, undefined);

      ObjectUtils.writePath(object, 'a.b.c', 'new value');
      ObjectUtils.writePath(object, 'a.b.d', 456);
      ObjectUtils.writePath(object, 'a.b.e', false);
      ObjectUtils.writePath(object, 'a.b.f.g', 'hello');

      assertEquals(object.a.b.c, 'new value');
      assertEquals(object.a.b.d, 456);
      assertEquals(object.a.b.e, false);
      assertEquals(object.a.b.f!.g, 'hello');
    });
  });

  describe('createTemplateRenderer', () => {
    it('should return a template renderer', () => {
      const object = {
        name: 'world',
        greeting: 'How are you?',
      } as const;

      const renderer = ObjectUtils.createTemplateRenderer<
        { name: string; greeting: string }
      >(object);

      const result = renderer`Hello, ${'name'}. ${'greeting'}`;

      assertEquals(result, 'Hello, world. How are you?');
    });
  });
});
