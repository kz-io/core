/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/utils` module provides commonly used utilities used across
 * kz libraries.
 *
 * ```tsx
 * import { assert } from '@std/assert';
 * import { definedArgs } from './mod.ts';
 *
 * const result = definedArgs(true, false, 25, 0, 'Hello', '');
 *
 * assert(result); // true
 * ```
 *
 * Utilities in the `@kz/core/utils` module are re-exported as `utils` in the
 * top-level `@kz/core` module’s public API, as well as `@kz/core/utils`.
 *
 * @module utils
 */

export { definedArgs } from './defined_args.ts';
