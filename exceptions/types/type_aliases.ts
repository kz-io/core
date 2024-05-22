/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Type aliases for the module.
 */

import type { IndeterminateObject } from '../../types/mod.ts';

// import type { Exception } from '../exception.ts';

/**
 * Describes the data common to all exceptions.
 *
 * @example
 * ```ts
 * import type { CommonExceptionData } from './type_aliases.ts';
 *
 * try {
 *   throw new Error('Just felt like breaking.');
 * } catch (cause) {
 *   const data: CommonExceptionData = { cause };
 * }
 * ```
 */
export type CommonExceptionData = IndeterminateObject & {
  cause?: Error /*| Exception*/; // Uncomment once Exception is defined.
};

/**
 * Utility type to describe the additional, relevant data for an exception.
 *
 * @template T - The type of the additional data.
 *
 * @example
 * ```ts
 * import type { BaseExceptionData } from './type_aliases.ts';
 *
 * const data: BaseExceptionData<{ foreignCode: number }> = { foreignCode: 0x123fe4 };
 * ```
 */
export type BaseExceptionData<
  T extends IndeterminateObject = IndeterminateObject,
> = CommonExceptionData & T;
