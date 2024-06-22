/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the AbstractPrimitiveConvertible class.
 */

import { describe, it } from '@std/testing/bdd';
import { assert, assertEquals } from '@std/assert';

import { AbstractPrimitiveConvertible } from './mod.ts';

describe('AbstractPrimitiveConvertible', () => {
  class MyNumber extends AbstractPrimitiveConvertible {
    constructor(private value: number) {
      super();
    }

    public toString(): string {
      return this.value.toString();
    }

    public valueOf(): number {
      return this.value;
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

  describe('toNumber', () => {
    it('should return a number representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.toNumber(), 42);
    });
  });

  describe('toBigInt', () => {
    it('should return a BigInt representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.toBigInt(), 42n);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    it('should return a primitive representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(+myNumber, 42);
      assertEquals(`${myNumber}`, '42');
    });
  });

  describe('toBoolean', () => {
    it('should return a boolean representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber.toBoolean(), true);
    });
  });

  describe('toSymbol', () => {
    it('should return a symbol representation of the object', () => {
      const myNumber = new MyNumber(42);

      assert(typeof myNumber.toSymbol() === 'symbol');
    });
  });
});
