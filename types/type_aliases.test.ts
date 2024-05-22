/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Tests the documentation examples in the type_aliases.ts file.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import type { Converter, ConverterFn } from './mod.ts';

describe('Examples - type aliases', () => {
  describe('ConverterFn<F, T>', () => {
    const toNumber: ConverterFn<string, number> = (value) => parseInt(value);

    it('should convert a string to a number', () => {
      const numberValue = toNumber('42');

      assertEquals(numberValue, 42);
    });
  });

  describe('Converter<F, T>', () => {
    const toNumber: Converter<string, number> = (value) => parseInt(value);
    const toNumberAlso: Converter<string, number> = {
      convert(value): number {
        return parseInt(value);
      },
    };

    it('should convert a string to a number', () => {
      const numberValue = toNumber('42');
      const numberValueAlso = toNumberAlso.convert('42');

      assertEquals(numberValue, 42);
      assertEquals(numberValueAlso, 42);
    });
  });
});
