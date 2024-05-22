/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the definedArgs internal function.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals } from '@std/assert';

import { definedArgs } from './defined_args.ts';

describe('definedArgs', () => {
  describe('definedArgs(...args)', () => {
    it('should return true if all the arguments are defined', () => {
      assertEquals(definedArgs(1, 'a', true), true);
    });

    it('should return false if any of the arguments are not defined', () => {
      assertEquals(definedArgs(1, 'a', true, undefined), false);
    });

    it('should return false if any of the arguments are null', () => {
      assertEquals(definedArgs(1, 'a', true, null), false);
    });

    it('should return false if any of the arguments are false', () => {
      assertEquals(definedArgs(1, 'a', true, false), false);
    });

    it('should return false if any of the arguments are an empty string', () => {
      assertEquals(definedArgs(1, 'a', true, ''), false);
    });
  });
});
