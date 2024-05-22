/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests code assignments in the registrar against their implementations.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import {
  ConnectionWarning,
  DeprecationWarning,
  DiskWarning,
  FutureWarning,
  MemoryWarning,
  OSWarning,
  PendingDeprecationWarning,
  ProcessWarning,
  StabilityWarning,
  Warning,
} from './mod.ts';

const warningMap = new Map([
  [ConnectionWarning, 77],
  [DeprecationWarning, 91],
  [DiskWarning, 75],
  [FutureWarning, 88],
  [MemoryWarning, 74],
  [OSWarning, 73],
  [PendingDeprecationWarning, 90],
  [ProcessWarning, 76],
  [StabilityWarning, 89],
  [Warning, 72],
]);

describe('Warning code assignment check', () => {
  for (const [warning, code] of warningMap) {
    it(`should have the correct code for ${warning.name}`, () => {
      const instance = new warning('Test message');

      assertEquals(instance.code, code);
    });
  }
});
