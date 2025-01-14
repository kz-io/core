/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the Index class.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertThrows } from '@std/assert';

import { Index } from './mod.ts';
import { ListPosition, Parity } from '../types/mod.ts';

describe('Index', () => {
  describe('Index.end', () => {
    it('should return an Index instance representing the last index in a list', () => {
      const index = Index.end(5);
      assertEquals(index.valueOf(), 4);
      assertEquals(index.length, 5);
    });
  });

  describe('Index.start', () => {
    it('should return an Index instance representing the first index in a list', () => {
      const index = Index.start(5);
      assertEquals(index.valueOf(), 0);
      assertEquals(index.length, 5);
    });
  });

  describe('Index.of', () => {
    it('should return an Index instance representing the given index in a list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.valueOf(), 2);
      assertEquals(index.length, 5);
    });
  });

  describe('constructor', () => {
    it('should throw a RangeException if the index is less than 0', () => {
      assertThrows(() => {
        new Index(-1, 5);
      });
    });

    it('should throw a RangeException if the index is greater than or equal to the list size', () => {
      assertThrows(() => {
        new Index(5, 5);
      });
    });
  });

  describe('toString', () => {
    it('should return a string representation of the index', () => {
      const index = Index.of(2, 5);
      assertEquals(index.toString(), '40%');
      assertEquals(index.toString(2), '40.00%');
    });

    it('should throw a RangeException if the precision is less than 0', () => {
      const index = Index.of(2, 5);
      assertThrows(() => {
        index.toString(-1);
      });
    });

    it('should throw a RangeException if the precision is greater than 20', () => {
      const index = Index.of(2, 5);
      assertThrows(() => {
        index.toString(21);
      });
    });
  });

  describe('valueOf', () => {
    it('should return the index', () => {
      const index = Index.of(2, 5);
      assertEquals(index.valueOf(), 2);
    });
  });

  describe('parity', () => {
    it('should return the parity of the index', () => {
      const index = Index.of(2, 5);
      assertEquals(index.parity, Parity.Even);

      const index2 = Index.of(3, 5);
      assertEquals(index2.parity, Parity.Odd);
    });
  });

  describe('isEven', () => {
    it('should return true if the index is even', () => {
      const index = Index.of(2, 5);
      assertEquals(index.isEven, true);
    });

    it('should return false if the index is odd', () => {
      const index = Index.of(3, 5);
      assertEquals(index.isEven, false);
    });
  });

  describe('isOdd', () => {
    it('should return true if the index is odd', () => {
      const index = Index.of(3, 5);
      assertEquals(index.isOdd, true);
    });

    it('should return false if the index is even', () => {
      const index = Index.of(2, 5);
      assertEquals(index.isOdd, false);
    });
  });

  describe('isFirst', () => {
    it('should return true if the index is the first index in a list', () => {
      const index = Index.start(5);
      assertEquals(index.isFirst, true);
    });

    it('should return false if the index is not the first index in a list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.isFirst, false);
    });
  });

  describe('isLast', () => {
    it('should return true if the index is the last index in a list', () => {
      const index = Index.end(5);
      assertEquals(index.isLast, true);
    });

    it('should return false if the index is not the last index in a list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.isLast, false);
    });
  });

  describe('isMiddle', () => {
    it('should return true if the index is in the middle of a list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.isMiddle, true);
    });

    it('should return false if the index is not in the middle of a list', () => {
      const index = Index.start(5);
      assertEquals(index.isMiddle, false);
    });
  });

  describe('position', () => {
    it('should return the position of the index in the list', () => {
      const index = Index.start(5);
      assertEquals(index.position, ListPosition.First);

      const index2 = Index.of(2, 5);
      assertEquals(index2.position, ListPosition.Middle);

      const index3 = Index.end(5);
      assertEquals(index3.position, ListPosition.Last);
    });
  });

  describe('length', () => {
    it('should return the length of the list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.length, 5);
    });
  });

  describe('Index.of', () => {
    it('should return the index', () => {
      const index = Index.of(2, 5);
      assertEquals(index.value, 2);
    });
  });

  describe('Index.createIndexer', () => {
    it('should return a function that creates an index', () => {
      const createIndex = Index.createIndexer(5);
      const index = createIndex(2);

      assertEquals(index.value, 2);
      assertEquals(index.length, 5);
    });
  });

  describe('fromEnd', () => {
    it('should return the distance of the index from the end of the list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.fromEnd, 2);
    });
  });

  describe('fromStart', () => {
    it('should return the distance of the index from the start of the list', () => {
      const index = Index.of(2, 5);
      assertEquals(index.fromStart, 2);
    });
  });

  describe('[Symbol.toPrimitive]', () => {
    it('should return the index as a number', () => {
      const index = Index.of(2, 5);
      assertEquals(+index, 2);
    });

    it('should return the index as a string', () => {
      const index = Index.of(2, 5);
      assertEquals(`${index}`, '40%');
    });
  });

  describe('convertTo', () => {
    it('should return a converted value', () => {
      const index = Index.of(2, 5);
      assertEquals(index.convertTo('percent'), '40%');
      assertEquals(index.convertTo('number'), 2);
    });
  });
});
