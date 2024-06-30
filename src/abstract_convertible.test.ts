/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the AbstractConvertible class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { AbstractConvertible } from './mod.ts';

describe('AbstractConvertible', () => {
  type ConvertibleMap = {
    pct: string;
  };
  class MyNumber extends AbstractConvertible<number, ConvertibleMap> {
    constructor(private value: number) {
      super();
    }

    [Symbol.toPrimitive](hint: string): string | number {
      if (hint === 'number') {
        return this.valueOf();
      }

      return `${this.valueOf()}`;
    }

    public valueOf(): number {
      return this.value;
    }

    public convertTo<K extends keyof ConvertibleMap>(_t: K): ConvertibleMap[K] {
      return `${this.value}%` as ConvertibleMap[K];
    }
  }

  describe('toString', () => {
    it('should return a string representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.toString(), '42');
    });
  });

  describe('valueOf', () => {
    it('should return a number representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.valueOf(), 42);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    it('should return a primitive representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(+myNumber, 42);
      assertEquals(`${myNumber}`, '42');
    });
  });

  describe('convertTo', () => {
    it('should return a converted value', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.convertTo('pct'), '42%');
    });
  });

  describe('convert', () => {
    it('should return a converted value', () => {
      const myNumber = new MyNumber(42);

      const result = myNumber.convert((val) => val.toString());

      assertEquals(result, '42');
    });

    it('should return a converted value', () => {
      const myNumber = new MyNumber(42);

      const result = myNumber.convert({
        convert(val): string {
          return val.toString();
        },
      });

      assertEquals(result, '42');
    });
  });
});
