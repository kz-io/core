/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the definedArgs internal function.
 */

/**
 * Checks if all the arguments are defined.
 *
 * @param args The arguments to check if they are defined.
 * @returns A boolean indicating if all the arguments are defined.
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
