/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/types` module provides base type aliases, interfaces, and
 * enums for the core modules and others commonly used across kz libraries
 * and in general development.
 *
 * ```tsx
 * import type { IHelpful, Scalar } from './mod.ts';
 *
 * const help: IHelpful = {
 * 	 helpUrl: 'https://example.com',
 * };
 *
 * const pathId: Scalar = help.helpUrl;
 * ```
 *
 * Why are enums here?
 *
 * Enums, as integereleven uses them, only have numeric values. Because of
 * this, we can generally get away with using the enum only as a type and
 * provide a matching number without referencing the enum itself.
 *
 * We use the enums more as type documentation for developers.
 *
 * ```tsx
 * import { assertEquals } from '@std/assert';
 * import type { ComparisonResult } from './mod.ts';
 *
 * function compare(a: number, b: number): ComparisonResult {
 * 	 if (a === b) return 0;
 *
 * 	 return a > b ? 1 : -1;
 * }
 *
 * const result = compare(10, 9); // ComparisonResult.Greater
 *
 * assertEquals(result, 1);
 * ```
 *
 * All type aliases, interfaces, and enums are re-exported as part of the
 * top-level `@kz/core` module’s public API, as well as `@kz/core/types`.
 *
 * @module types
 */

export { ComparisonResult, ListPosition, Parity } from './enums.ts';

export type {
  IHashable,
  IHelpful,
  IVersionDescriptor,
  TBase,
  TCloneable,
  TComparable,
  TComparer,
  TConverter,
  TConvertible,
  TSortable,
} from './interfaces.ts';

export type {
  Action,
  AnyObject,
  Bit,
  Codebase,
  Comparer,
  ComparerFn,
  Constructor,
  Converter,
  ConverterFn,
  Couple,
  DecoratorTarget,
  Defined,
  Empty,
  Func,
  IndeterminateObject,
  KeyPrimitive,
  Quadruple,
  Scalar,
  Single,
  SoftwareOperation,
  SystemArchitecture,
  SystemOS,
  Triple,
} from './type_aliases.ts';
