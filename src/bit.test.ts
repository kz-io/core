/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Bit class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { Bit } from './mod.ts';
import { $IPrimitiveConvertible } from '../types/mod.ts';

describe('Bit', () => {
  describe('Bit.MIN', () => {
    it('should be 0', () => {
      assertEquals(Bit.MIN, 0);
    });
  });

  describe('Bit.MAX', () => {
    it('should be 1', () => {
      assertEquals(Bit.MAX, 1);
    });
  });

  describe('Bit.on', () => {
    it('should return a Bit instance that is on', () => {
      const bit = Bit.on;

      assertEquals(bit.valueOf(), 1);
    });
  });

  describe('Bit.off', () => {
    it('should return a Bit instance that is off', () => {
      const bit = Bit.off;

      assertEquals(bit.valueOf(), 0);
    });
  });

  describe('constructor', () => {
    it('should create a Bit instance that is off', () => {
      const bit = new Bit();

      assertEquals(bit.valueOf(), 0);
    });

    it('should create a Bit instance that is on', () => {
      const bit = new Bit(1);

      assertEquals(bit.valueOf(), 1);
    });
  });

  describe('on', () => {
    it('should turn the bit on', () => {
      const bit = new Bit();

      bit.on();

      assertEquals(bit.valueOf(), 1);
    });
  });

  describe('off', () => {
    it('should turn the bit off', () => {
      const bit = new Bit(1);

      bit.off();

      assertEquals(bit.valueOf(), 0);
    });
  });

  describe('toggle', () => {
    it('should toggle the bit from off to on', () => {
      const bit = new Bit();

      bit.toggle();

      assertEquals(bit.valueOf(), 1);
    });

    it('should toggle the bit from on to off', () => {
      const bit = new Bit(1);

      bit.toggle();

      assertEquals(bit.valueOf(), 0);
    });
  });

  describe('toString', () => {
    it('should return "0" when the bit is off', () => {
      const bit = new Bit();

      assertEquals(bit.toString(), '0');
    });

    it('should return "1" when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(bit.toString(), '1');
    });
  });

  describe('valueOf', () => {
    it('should return 0 when the bit is off', () => {
      const bit = new Bit();

      assertEquals(bit.valueOf(), 0);
    });

    it('should return 1 when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(bit.valueOf(), 1);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    describe('hint: string', () => {
      it('should return "0" when the bit is off', () => {
        const bit = new Bit();

        assertEquals(bit[Symbol.toPrimitive]('string'), '0');
      });

      it('should return "1" when the bit is on', () => {
        const bit = new Bit(1);

        assertEquals(bit[Symbol.toPrimitive]('string'), '1');
      });
    });

    describe('hint: number', () => {
      it('should return 0 when the bit is off', () => {
        const bit = new Bit();

        assertEquals(bit[Symbol.toPrimitive]('number'), 0);
      });

      it('should return 1 when the bit is on', () => {
        const bit = new Bit(1);

        assertEquals(bit[Symbol.toPrimitive]('number'), 1);
      });
    });
  });

  describe('[$IPrimitiveConvertible.toBoolean]', () => {
    it('should return false when the bit is off', () => {
      const bit = new Bit();

      assertEquals(bit[$IPrimitiveConvertible.toBoolean](), false);
    });

    it('should return true when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(bit[$IPrimitiveConvertible.toBoolean](), true);
    });
  });

  describe('[$IPrimitiveConvertible.toNumber]', () => {
    it('should return 0 when the bit is off', () => {
      const bit = new Bit();

      assertEquals(bit[$IPrimitiveConvertible.toNumber](), 0);
    });

    it('should return 1 when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(bit[$IPrimitiveConvertible.toNumber](), 1);
    });
  });

  describe('[$IPrimitiveConvertible.toBigInt]', () => {
    it('should return 0n when the bit is off', () => {
      const bit = new Bit();

      assertEquals(bit[$IPrimitiveConvertible.toBigInt](), 0n);
    });

    it('should return 1n when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(bit[$IPrimitiveConvertible.toBigInt](), 1n);
    });
  });

  describe('[$IPrimitiveConvertible.toSymbol]', () => {
    it('should return the off symbol when the bit is off', () => {
      const bit = new Bit();

      assertEquals(typeof bit[$IPrimitiveConvertible.toSymbol](), 'symbol');
    });

    it('should return the on symbol when the bit is on', () => {
      const bit = new Bit(1);

      assertEquals(typeof bit[$IPrimitiveConvertible.toSymbol](), 'symbol');
    });
  });
});
