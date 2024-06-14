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

export * as $IPrimitiveConvertible from './constants.ts';
export { ComparisonResult, ListPosition, Parity } from './enums.ts';

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
