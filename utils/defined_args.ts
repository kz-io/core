/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the definedArgs function.
 */

/**
 * Checks if all arguments are defined.
 *
 * @param args The arguments list.
 * @returns Whether all the arguments are defined.
 */
export function definedArgs(...args: unknown[]): boolean {
  for (const arg of args) {
    if (typeof arg === 'number') continue;

    if (!(arg ?? false)) {
      return false;
    }
  }

  return true;
}
