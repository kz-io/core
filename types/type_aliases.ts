/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Type aliases for the module. For interfaces, see ./interfaces.ts.
 */

import type { TConverter } from './interfaces.ts';

/**
 * A value that can be used as a key in an object.
 *
 * @example
 * ```ts
 * import type { KeyPrimitive } from './type_aliases.ts';
 *
 * const key1: KeyPrimitive = 'key1';
 * const key2: KeyPrimitive = 2;
 * const key3: KeyPrimitive = Symbol('key3');
 * ```
 */
export type KeyPrimitive = string | number | symbol;

/**
 * Describes an object that has indeterminate property values keyed by {@link KeyPrimitive} values.
 *
 * @example
 * ```ts
 * import type { IndeterminateObject } from './type_aliases.ts';
 *
 * const obj: IndeterminateObject = {
 *   key1: 'value1',
 *   key2: 2,
 *   key3: Symbol('key3'),
 * };
 * ```
 */
export type IndeterminateObject = Record<KeyPrimitive, unknown>;

/**
 * Describes decorator targets.
 *
 * @example
 * ```ts
 * import type { DecoratorTarget } from './type_aliases.ts';
 *
 * const target: DecoratorTarget = 'class';
 * ```
 */
export type DecoratorTarget =
  | 'class'
  | 'method'
  | 'property'
  | 'parameter'
  | 'accessor';

/**
 * Describes the types of codebases.
 *
 * @ignore WIP
 */
export type Codebase = string;

/**
 * Describes the types of software operations.
 *
 * @ignore WIP
 */
export type SoftwareOperation = string;

/**
 * Describes a system operating system.
 *
 * @example
 * ```ts
 * import type { SystemOS } from './type_aliases.ts';
 *
 * const os: SystemOS = 'darwin'
 * ```
 */
export type SystemOS =
  | 'darwin'
  | 'linux'
  | 'android'
  | 'windows'
  | 'freebsd'
  | 'netbsd'
  | 'aix'
  | 'solaris'
  | 'illumos';

/**
 * Describes a system architecture.
 *
 * @example
 * ```ts
 * import type { SystemArchitecture } from './type_aliases.ts';
 *
 * const arch: SystemArchitecture = 'x86_64';
 * ```
 */
export type SystemArchitecture =
  | 'x86_64'
  | 'aarch64';

/**
 * Describes the scalar types, which are value types which can be represented by a single value.
 *
 * @example
 * ```ts
 * import type { Scalar } from './type_aliases.ts';
 *
 * const scalar: Scalar = 42;
 * ```
 */
export type Scalar = boolean | bigint | KeyPrimitive;

/**
 * Describes a type that if defined, is of type `T`, otherwise is `never`.
 *
 * @template T The type of the value if defined.
 *
 * @example
 * ```ts
 * import type { Defined } from './type_aliases.ts';
 *
 * let value: Defined<number>;
 *
 * value = 42;
 * ```
 */
export type Defined<T> = T extends undefined ? never : T;

/**
 * Describes a function that converts a value from one type to another.
 *
 * @template F The type to convert from.
 * @template T The type to convert to.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { ConverterFn } from './type_aliases.ts';
 *
 * const toNumber: ConverterFn<string, number> = (value) => parseInt(value);
 * const numberValue = toNumber('42');
 *
 * assertEquals(numberValue, 42);
 * ```
 */
export type ConverterFn<F, T> = (value: F) => T;

/**
 * Describes a function or object that converts a value from one type to another.
 *
 * @template F The type to convert from.
 * @template T The type to convert to.
 *
 * See also:
 * - {@link ConverterFn}
 * - {@link TConverter}
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { Converter } from './type_aliases.ts';
 *
 * const toNumber: Converter<string, number> = (value) => parseInt(value);
 * const toNumberAlso: Converter<string, number> = {
 *   convert(value): number {
 *     return parseInt(value);
 *   }
 * };
 * const numberValue = toNumber('42');
 * const numberValueAlso = toNumberAlso.convert('42');
 *
 * assertEquals(numberValue, 42);
 * assertEquals(numberValueAlso, 42);
 * ```
 */
export type Converter<F, T> = TConverter<F, T> | ConverterFn<F, T>;

/**
 * Describes a class constructor function.
 *
 * @template T The type of the class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { Constructor } from './type_aliases.ts';
 *
 * class MyClass {
 *   constructor(public name: string) {}
 * }
 *
 * const MyClassConstructor: Constructor<MyClass> = MyClass;
 *
 * const myClassInstance = new MyClassConstructor('My Class');
 *
 * assertEquals(myClassInstance.name, 'My Class');
 * ```
 */
// deno-lint-ignore no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;
