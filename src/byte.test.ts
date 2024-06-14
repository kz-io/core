/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Byte class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertThrows } from '@std/assert';

import { Byte } from './mod.ts';
import { $IPrimitiveConvertible } from '../types/mod.ts';

describe('Byte', () => {
  describe('Byte.MIN', () => {
    it('should be 0', () => {
      assertEquals(Byte.MIN, 0);
    });
  });

  describe('Byte.MAX', () => {
    it('should be 255', () => {
      assertEquals(Byte.MAX, 255);
    });
  });

  describe('<constructor>', () => {
    it('should create a Byte instance with the specified value', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte.valueOf(), 0b10101010);
    });

    it('should raise a RangeException if the value is less than Byte.MIN', () => {
      assertThrows(() => new Byte(-1));
    });

    it('should raise a RangeException if the value is greater than Byte.MAX', () => {
      assertThrows(() => new Byte(256));
    });
  });

  describe('setBit', () => {
    it('should set the bit at the specified index to the specified value', () => {
      const byte = new Byte(0b10101010);

      byte.setBit(0, 1);

      assertEquals(byte.valueOf(), 0b10101011);
    });

    it('should raise a RangeException if the index is less than 0', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.setBit(-1, 1));
    });

    it('should raise a RangeException if the index is greater than 7', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.setBit(8, 1));
    });
  });

  describe('getBit', () => {
    it('should return the value of the bit at the specified index', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte.getBit(0), 0);
      assertEquals(byte.getBit(1), 1);
      assertEquals(byte.getBit(2), 0);
      assertEquals(byte.getBit(3), 1);
      assertEquals(byte.getBit(4), 0);
      assertEquals(byte.getBit(5), 1);
      assertEquals(byte.getBit(6), 0);
      assertEquals(byte.getBit(7), 1);
    });

    it('should raise a RangeException if the index is less than 0', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.getBit(-1));
    });

    it('should raise a RangeException if the index is greater than 7', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.getBit(8));
    });
  });

  describe('toggleBit', () => {
    it('should toggle the bit at the specified index', () => {
      const byte = new Byte(0b10101010);

      byte.toggleBit(0);

      assertEquals(byte.valueOf(), 0b10101011);

      byte.toggleBit(0);

      assertEquals(byte.valueOf(), 0b10101010);
    });

    it('should raise a RangeException if the index is less than 0', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.toggleBit(-1));
    });

    it('should raise a RangeException if the index is greater than 7', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.toggleBit(8));
    });
  });

  describe('setValue', () => {
    it('should set the value of the byte', () => {
      const byte = new Byte(0b10101010);

      byte.setValue(0b11001100);

      assertEquals(byte.valueOf(), 0b11001100);
    });

    it('should raise a RangeException if the value is less than Byte.MIN', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.setValue(-1));
    });

    it('should raise a RangeException if the value is greater than Byte.MAX', () => {
      const byte = new Byte(0b10101010);

      assertThrows(() => byte.setValue(256));
    });
  });

  describe('getValue', () => {
    it('should return the value of the byte', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte.getValue(), 0b10101010);
    });
  });

  describe('toString', () => {
    it('should return the string representation of the byte', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte.toString(), '10101010');
    });
  });

  describe('valueOf', () => {
    it('should return the numeric value of the byte', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte.valueOf(), 0b10101010);
    });
  });

  describe('[Symbol.iterator]', () => {
    it('should return an iterator that iterates over the bits of the byte', () => {
      const byte = new Byte(0b10101010);

      const bits = [...byte];

      assertEquals(bits, [0, 1, 0, 1, 0, 1, 0, 1]);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    describe('hint: string', () => {
      it('should return the string representation of the byte', () => {
        const byte = new Byte(0b10101010);

        assertEquals(`${byte}`, '10101010');
      });
    });

    describe('hint: number', () => {
      it('should return the numeric value of the byte', () => {
        const byte = new Byte(0b10101010);

        assertEquals(+byte, 0b10101010);
      });
    });
  });

  describe('[$IPrimitiveConvertible.toBoolean]', () => {
    it('should return false when the byte is 0', () => {
      const byte = new Byte(0);

      assertEquals(!!byte[$IPrimitiveConvertible.toBoolean](), false);
    });

    it('should return true when the byte is not 0', () => {
      const byte = new Byte(1);

      assertEquals(!!byte[$IPrimitiveConvertible.toBoolean](), true);
    });
  });

  describe('[$IPrimitiveConvertible.toBigInt]', () => {
    it('should return the numeric value of the byte', () => {
      const byte = new Byte(0b10101010);

      assertEquals(byte[$IPrimitiveConvertible.toBigInt](), BigInt(0b10101010));
    });
  });

  describe('[$IPrimitiveConvertible.toSymbol]', () => {
    it('should return the numeric value of the byte', () => {
      const byte = new Byte(0b10101010);

      assertEquals(typeof byte[$IPrimitiveConvertible.toSymbol](), 'symbol');
    });
  });
});
