/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests code assignments in the registrar against their implementations.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import {
  ArgumentException,
  ArgumentIndexException,
  AssertionException,
  ConnectionException,
  DecoratorException,
  DiskException,
  Exception,
  ExternalException,
  FormatException,
  IndexException,
  InterruptException,
  InvalidException,
  IterationException,
  KeyException,
  MemoryException,
  MethodException,
  NotFoundException,
  NotImplementedException,
  NotSupportedException,
  OperationException,
  OSException,
  ProcessException,
  RangeException,
  RecursionException,
  TimeoutException,
  ValueException,
} from './mod.ts';

const exceptionMap = new Map([
  [Exception, 0],
  [OSException, 1],
  [MemoryException, 2],
  [DiskException, 3],
  [ProcessException, 4],
  [ConnectionException, 5],
  [InterruptException, 6],
  [OperationException, 16],
  [ExternalException, 17],
  [RecursionException, 18],
  [IterationException, 19],
  [TimeoutException, 20],
  [InvalidException, 32],
  [NotSupportedException, 33],
  [NotImplementedException, 34],
  [ValueException, 35],
  [AssertionException, 36],
  [FormatException, 37],
  [DecoratorException, 38],
  [ArgumentException, 39],
  [RangeException, 40],
  [IndexException, 41],
  [ArgumentIndexException, 42],
  [NotFoundException, 43],
  [MethodException, 44],
  [KeyException, 45],
  // [ReadonlyException, 46],
  // [CapacityException, 47],
  // [FixedSizeException, 48],
  // [DisposedObjectException, 64],
]);

describe('Exception code assignment check', () => {
  for (const [exception, code] of exceptionMap) {
    it(`should have the correct code for ${exception.name}`, () => {
      const instance = new exception('Test message');

      assertEquals(instance.code, code);
    });
  }
});
