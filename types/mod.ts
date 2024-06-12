/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/types` module provides commonly used enums, type aliases and interfaces.
 *
 * ```ts
 * import type { IHelpful } from './mod.ts';
 *
 * const helpful: IHelpful = {
 *   helpUrl: 'https://example.com/help',
 * };
 * ```
 * @module types
 */

export * as PrimitiveSymbols from './constants.ts';
export { ComparisonResult } from './enums.ts';

export type {
  IHashable,
  IHelpful,
  IPrimitiveConvertible,
  TCloneable,
  TComparable,
  TComparer,
  TConverter,
  TConvertible,
  TSortable,
} from './interfaces.ts';

export type {
  AnyObject,
  Codebase,
  Comparer,
  ComparerFn,
  Constructor,
  Converter,
  ConverterFn,
  DecoratorTarget,
  Defined,
  IndeterminateObject,
  KeyPrimitive,
  Scalar,
  SoftwareOperation,
  SystemArchitecture,
  SystemOS,
} from './type_aliases.ts';
