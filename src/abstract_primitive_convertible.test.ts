/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the AbstractPrimitiveConvertible class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { AbstractPrimitiveConvertible } from './mod.ts';
import { $IPrimitiveConvertible } from '../types/mod.ts';

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

  describe('[$IPrimitiveConvertible.toNumber]', () => {
    it('should return a number representation of the object', () => {
      const myNumber = new MyNumber(42);

      assertEquals(myNumber[$IPrimitiveConvertible.toNumber](), 42);
    });
  });
});
