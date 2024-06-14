/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Type aliases for the module. For interfaces, see ./interfaces.ts.
 */

import { ComparisonResult } from './enums.ts';
import type { TComparer, TConverter } from './interfaces.ts';

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
 * Describes an object that has any property values keyed by {@link KeyPrimitive} values.
 */
// deno-lint-ignore no-explicit-any
export type AnyObject = Record<KeyPrimitive, any>;

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

/**
 * Describes a function that compares two objects.
 *
 * @template T - The type of the objects to compare.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { ComparisonResult } from './enums.ts';
 * import type { ComparerFn } from './type_aliases.ts';
 *
 * const comparer: ComparerFn<number> = (
 *   a: number,
 *   b: number,
 *   reverse = false,
 * ): ComparisonResult => {
 *    const [x, y] = reverse ? [b, a] : [a, b];
 *
 * return x < y
 *   ? ComparisonResult.Lesser
 *   : x > y
 *     ? ComparisonResult.Greater
 *     : ComparisonResult.Equal;
 * };
 *
 * const a = 1;
 * const b = 2;
 *
 * assertEquals(comparer(a, b, false), ComparisonResult.Lesser);
 * ```
 */
export type ComparerFn<T> = (a: T, b: T, reverse: boolean) => ComparisonResult;

/**
 * Describe a function or object that compares two objects.
 *
 * @template T - The type of the objects to compare.
 *
 * @see {@link TComparer}
 * @see {@link ComparerFn}
 */
export type Comparer<T> = TComparer<T> | ComparerFn<T>;

/**
 * Describes an empty tuple.
 */
type Nonary = [];

/**
 * Describes a tuple with one element.
 *
 * @template T1 The type of the first element.
 */
type Unary<T> = [T];

/**
 * Describes a tuple with two elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 */
type Binary<T1, T2> = [T1, T2];

/**
 * Describes a tuple with three elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 * @template T3 The type of the third element.
 */
type Ternary<T1, T2, T3> = [T1, T2, T3];

/**
 * Describes a tuple with four elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 * @template T3 The type of the third element.
 * @template T4 The type of the fourth element.
 */
type Quaternary<T1, T2, T3, T4> = [T1, T2, T3, T4];

/**
 * Describes an action that takes no arguments.
 */
type NullaryAction = () => void;

/**
 * Describes an action that takes one argument.
 *
 * @template T1 The type of the first argument.
 */
type UnaryAction1<T1> = (arg1: T1) => void;

/**
 * Describes an action that takes two arguments.
 *
 * @template T1 The type of the first argument.
 * @template T2 The type of the second argument.
 */
type BinaryAction2<T1, T2> = (arg1: T1, arg2: T2) => void;

/**
 * Describes an action that takes options.
 *
 * @template O The type of the options.
 */
type OptionAction<O extends AnyObject> = (opts: O) => void;

/**
 * Describes an action that takes one argument and options.
 *
 * @template T1 The type of the first argument.
 * @template O The type of the options.
 */
type UnaryOptionAction<T1, O extends AnyObject> = (arg1: T1, opts: O) => void;

/**
 * Describes an action that takes two arguments and options.
 *
 * @template T1 The type of the first argument.
 * @template T2 The type of the second argument.
 * @template O The type of the options.
 */
type BinaryOptionAction<T1, T2, O extends AnyObject> = (
  arg1: T1,
  arg2: T2,
  opts: O,
) => void;

/**
 * Describes a function that takes no arguments and returns a value.
 *
 * @template R The type of the return value.
 */
type NullaryFunc<R> = () => R;

/**
 * Describes a function that takes one argument and returns a value.
 *
 * @template T1 The type of the first argument.
 * @template R The type of the return value.
 */
type UnaryFunc1<T1, R> = (arg1: T1) => R;

/**
 * Describes a function that takes two arguments and returns a value.
 *
 * @template T1 The type of the first argument.
 * @template T2 The type of the second argument.
 * @template R The type of the return value.
 */
type BinaryFunc2<T1, T2, R> = (arg1: T1, arg2: T2) => R;

/**
 * Describes a function that takes options and returns a value.
 *
 * @template O The type of the options.
 * @template R The type of the return value.
 */
type OptionFunc<O extends AnyObject, R> = (opts: O) => R;

/**
 * Describes a function that takes one argument and options and returns a value.
 *
 * @template T1 The type of the first argument.
 * @template O The type of the options.
 * @template R The type of the return value.
 */
type UnaryOptionFunc<T1, O extends AnyObject, R> = (arg1: T1, opts: O) => R;

/**
 * Describes a function that takes two arguments and options and returns a value.
 *
 * @template T1 The type of the first argument.
 * @template T2 The type of the second argument.
 * @template O The type of the options.
 * @template R The type of the return value.
 */
type BinaryOptionFunc<T1, T2, O extends AnyObject, R> = (
  arg1: T1,
  arg2: T2,
  opts: O,
) => R;

/**
 * Describes an empty tuple.
 */
export type Empty = Nonary;

/**
 * Describes a tuple with one element.
 *
 * @template T The type of the first element.
 */
export type Single<T> = Unary<T>;

/**
 * Describes a tuple with two elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 */
export type Couple<T1, T2> = Binary<T1, T2>;

/**
 * Describes a tuple with three elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 * @template T3 The type of the third element.
 */
export type Triple<T1, T2, T3> = Ternary<T1, T2, T3>;

/**
 * Describes a tuple with four elements.
 *
 * @template T1 The type of the first element.
 * @template T2 The type of the second element.
 * @template T3 The type of the third element.
 * @template T4 The type of the fourth element.
 */
export type Quadruple<T1, T2, T3, T4> = Quaternary<T1, T2, T3, T4>;

/**
 * Describes an action that takes `T` arguments, optionally followed by options of type `O`.
 *
 * This is used across kz code to help developers conform to style guidelines. This is obviously not enforced for other.
 *
 * This type is used with the `None`, `Single`, and `Couple` types. `Triple` and `Quadruple` are limited to follow integereleven guidelines.
 *
 * @template T The tuple of argument types.
 * @template O The type of the options.
 *
 * @example
 * ```ts
 * import type { Action, Couple } from './type_aliases.ts';
 *
 * const action: Action<Couple<string, number>> = (arg1, arg2) => {
 *    console.log(arg1, arg2);
 * };
 *
 * action('Hellow, world!', 42);
 * ```
 */
export type Action<
  T extends unknown[],
  O extends AnyObject = Record<string | number | symbol, never>,
> = O extends Record<string | number | symbol, never>
  ? T extends Nonary ? NullaryAction
  : T extends Unary<infer T1> ? UnaryAction1<T1>
  : T extends Binary<infer T1, infer T2> ? BinaryAction2<T1, T2>
  : never
  : T extends Nonary ? OptionAction<O>
  : T extends Unary<infer T1> ? UnaryOptionAction<T1, O>
  : T extends Binary<infer T1, infer T2> ? BinaryOptionAction<T1, T2, O>
  : never;

/**
 * Describes a function that takes `T` arguments, optionally followed by options of type `O`.
 *
 * This is used across kz code to help developers conform to style guidelines. This is obviously not enforced for other.
 *
 * This type is used with the `None`, `Single`, and `Couple` types. `Triple` and `Quadruple` are limited to follow integereleven guidelines.
 *
 * @template T The tuple of argument types.
 * @template R The type of the return value.
 * @template O The type of the options.
 *
 * @example
 * ```ts
 * import type { Func, Single } from './type_aliases.ts';
 *
 * const func: Func<Single<number>, number> = (arg1) => {
 *   return arg1 * 28;
 * };
 *
 * const result = func(42);
 *
 * console.log(result); // 1176
 * ```
 */
export type Func<
  T extends unknown[],
  R,
  O extends AnyObject = Record<string | number | symbol, never>,
> = O extends Record<string | number | symbol, never>
  ? T extends Nonary ? NullaryFunc<R>
  : T extends Unary<infer T1> ? UnaryFunc1<T1, R>
  : T extends Binary<infer T1, infer T2> ? BinaryFunc2<T1, T2, R>
  : never
  : T extends Nonary ? OptionFunc<O, R>
  : T extends Unary<infer T1> ? UnaryOptionFunc<T1, O, R>
  : T extends Binary<infer T1, infer T2> ? BinaryOptionFunc<T1, T2, O, R>
  : never;

/**
 * Describes a bit.
 * 
 * @example
 * ```ts
 * import type { Bit } from './type_aliases.ts';
 * 
 * const bit: Bit = 1;
 * ```
 */
export type Bit = 0 | 1;
