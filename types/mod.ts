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

export type {
  IHashable,
  IHelpful,
  IPrimitiveConvertible,
  TCloneable,
  TConverter,
  TConvertible,
} from './interfaces.ts';

export type {
  Codebase,
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
