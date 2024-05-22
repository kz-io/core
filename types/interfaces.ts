/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Interfaces for the module. For type aliases, see ./type_aliases.ts.
 */

import type { Converter } from './type_aliases.ts';

/**
 * An interface providing a URL to an implemented object's help resource.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { IHelpful } from './interfaces.ts';
 *
 * class MyException extends Error implements IHelpful {
 *   protected _helpUrl: string;
 *   constructor(message: string) {
 *     super(message);
 *
 *     this._helpUrl = this.generateHelpUrl();
 *   }
 *
 *   protected generateHelpUrl(): string {
 *     const { name, message } = this;
 *     const encodedName = encodeURIComponent(name);
 *     const encodedMessage = encodeURIComponent(message);
 *     const url =
 *       `https://example.com/help/${encodedName}?message=${encodedMessage}`;
 *
 *     return url;
 *   }
 *
 *   public get helpUrl(): string {
 *     return this._helpUrl;
 *   }
 * }
 *
 * const exception = new MyException('Something went wrong!');
 * const expected = 'https://example.com/help/Error?message=Something%20went%20wrong!';
 *
 * assertEquals(exception.helpUrl, expected);
 * ```
 */
export interface IHelpful {
  /**
   * The URL to the help resource.
   */
  helpUrl: string;
}

/**
 * An interface providing a value representing the hash of an implemented object's data.
 *
 * This interface is not meant to provide cryptographically secure hashing, but instead for
 * providing a unique value representing the data of an object.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { IHashable } from './interfaces.ts';
 *
 * class MyClass implements IHashable {
 *   constructor(
 *     protected name: string,
 *     protected age: number,
 *   ) {}
 *
 *   protected hashData(): number {
 *     const { name, age } = this;
 *     const object = { name, age };
 *     const json = JSON.stringify(object);
 *     const chars = [...json];
 *
 *     const hash = chars.reduce((acc, char) => {
 *       const code = char.charCodeAt(0);
 *       return ((acc << 5) - acc) + code;
 *     }, 0);
 *
 *     return hash;
 *   }
 *
 *   public getHash(): number {
 *     return this.hashData();
 *   }
 * }
 *
 * const instance = new MyClass('Alice', 30);
 *
 * assertEquals(instance.getHash(), 89027321);
 * ```
 */
export interface IHashable {
  /**
   * The hash value representing the object's data.
   */
  getHash(): number;
}

/**
 * An interface providing a method to clone an implemented object.
 *
 * @template T - The type of the object to clone. This is for utility and should always be the same as the implementing class.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { TCloneable } from './interfaces.ts';
 *
 * class MyClass implements TCloneable<MyClass> {
 *   constructor(public name: string, public age: number) {}
 *
 *   public clone(): MyClass {
 *     return new MyClass(this.name, this.age);
 *   }
 * }
 *
 * const instance = new MyClass('Alice', 30);
 * const clone = instance.clone();
 *
 * assertEquals(clone.name, instance.name);
 * assertEquals(clone.age, instance.age);
 * ```
 */
export interface TCloneable<T> {
  /**
   * Clones the object.
   */
  clone(): T;
}

/**
 * An interface providing methods to convert an implemented object to primitive value types.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import type { IPrimitiveConvertible } from './interfaces.ts';
 *
 * const exampleSymbol = Symbol('example');
 *
 * class MyClass implements IPrimitiveConvertible {
 *   constructor(public name: string, public age: number) {}
 *
 *   public [Symbol.toPrimitive](hint: string): string | number {
 *     if (hint === 'number') {
 *       return this.toNumber();
 *     }
 *
 *     return this.toString();
 *   }
 *
 *   public toBoolean(): boolean {
 *     return this.age < 150;
 *   }
 *
 *   public toNumber(): number {
 *     return this.age;
 *   }
 *
 *   public toBigInt(): bigint {
 *     return BigInt(this.age);
 *   }
 *
 *   public toSymbol(): symbol {
 *     return exampleSymbol;
 *   }
 *
 *   public toString(): string {
 *     return this.name;
 *   }
 *
 *   public valueOf(): number {
 *     return this.age;
 *   }
 * }
 *
 * const instance = new MyClass('Alice', 30);
 *
 * assertEquals(instance.toString(), 'Alice');
 * assertEquals(instance.toBoolean(), true);
 * assertEquals(instance.toBigInt(), BigInt(30));
 * assertEquals(instance.toSymbol(), exampleSymbol);
 * ```
 */
export interface IPrimitiveConvertible {
  /**
   * Converts the object to a primitive value.
   *
   * This is rarely called directly, but is used by JavaScript when converting an object to a primitive value.
   *
   * @param hint - The hint for the conversion.
   */
  [Symbol.toPrimitive](hint: string): string | number;

  /**
   * Converts the object to a boolean value.
   */
  toBoolean(): boolean;

  /**
   * Converts the object to a number value.
   */
  toNumber(): number;

  /**
   * Converts the object to a bigint value.
   */
  toBigInt(): bigint;

  /**
   * Converts the object to a symbol value.
   */
  toSymbol(): symbol;

  /**
   * Converts the object to a string value.
   */
  toString(): string;

  /**
   * Converts the object to a number value.
   */
  valueOf(): number;
}

/**
 * An interface providing a method to convert a value from one type to another.
 *
 * @template F - The type to convert from.
 * @template T - The type to convert to.
 *
 * @example
 * ```ts
 * import { assertEquals, assertInstanceOf } from '@std/assert';
 * import type { TConverter } from './interfaces.ts';
 *
 * class MyClass {
 *   constructor(public name: string, public age: number) {}
 * }
 *
 * class MyOtherClass {
 *   constructor(public name: string, public age: number) {}
 * }
 *
 * const converter: TConverter<MyClass, MyOtherClass> = {
 *   convert(instance: MyClass): MyOtherClass {
 *     return new MyOtherClass(instance.name, instance.age);
 *   }
 * };
 *
 * const instance = new MyClass('Alice', 30);
 * const converted = converter.convert(instance);
 *
 * assertEquals(converted.name, instance.name);
 * assertEquals(converted.age, instance.age);
 * assertInstanceOf(instance, MyClass);
 * assertInstanceOf(converted, MyOtherClass);
 * ```
 */
export interface TConverter<F, T> {
  /**
   * Converts a value from one type to another.
   *
   * @param value - The value to convert.
   */
  convert(value: F): T;
}

/**
 * An interface providing a method to convert a value from one type to another, either using a named conversion or a {@link Converter}.
 *
 * @template F - The mapping of conversion names to the types they convert to.
 *
 * @example
 * ```ts
 * import { assertEquals, assertInstanceOf } from '@std/assert';
 * import type { TConvertible } from './interfaces.ts';
 * import type { Converter } from './type_aliases.ts';
 *
 * class MyOtherClass {
 *   constructor(public name: string, public age: number) {}
 * }
 *
 * class MyOtherOtherClass {
 *   constructor(public name: string, public age: number) {}
 * }
 *
 * interface OtherClasses {
 *   other: MyOtherClass;
 *   other2: MyOtherOtherClass;
 * }
 *
 * const exampleSymbol = Symbol('example');
 *
 * class MyClass implements TConvertible<OtherClasses> {
 *   constructor(public name: string, public age: number) {}
 *
 *   public [Symbol.toPrimitive](hint: string): string | number {
 *     if (hint === 'number') {
 *       return this.toNumber();
 *     }
 *
 *     return this.toString();
 *   }
 *
 *   public toBoolean(): boolean {
 *     return this.age < 150;
 *   }
 *
 *   public toNumber(): number {
 *     return this.age;
 *   }
 *
 *   public toBigInt(): bigint {
 *     return BigInt(this.age);
 *   }
 *
 *   public toSymbol(): symbol {
 *     return exampleSymbol;
 *   }
 *
 *   public toString(): string {
 *     return this.name;
 *   }
 *
 *   public valueOf(): number {
 *     return this.age;
 *   }
 *
 *   convert<T>(converter: Converter<this, T>): T {
 *     if (typeof converter === 'function') {
 *       return converter(this);
 *     }
 *
 *     return converter.convert(this);
 *   }
 *
 *   convertTo<S extends keyof OtherClasses>(type: S): OtherClasses[S] {
 *     switch (type) {
 *       case 'other':
 *         return new MyOtherClass(this.name, this.age) as OtherClasses[S];
 *       default:
 *         return new MyOtherOtherClass(this.name, this.age) as OtherClasses[S];
 *     }
 *   }
 * }
 *
 * const instance = new MyClass('Alice', 30);
 * const converted = instance.convertTo('other');
 * const converted2 = instance.convertTo('other2');
 * const convertedWithConverter = instance.convert<string>((instance: MyClass) => {
 *   return `${instance.name} is ${instance.age} years old.`;
 * });
 *
 * assertEquals(converted.name, instance.name);
 * assertInstanceOf(converted, MyOtherClass);
 * assertEquals(converted2.name, instance.name);
 * assertInstanceOf(converted2, MyOtherOtherClass);
 * assertEquals(convertedWithConverter, 'Alice is 30 years old.');
 * ```
 */
// deno-lint-ignore no-explicit-any
export interface TConvertible<T extends Record<string, any>>
  extends IPrimitiveConvertible {
  /**
   * Converts the object to a named conversion type.
   *
   * @template S - The named conversion names.
   *
   * @param type The named conversion to use.
   */
  convertTo<S extends keyof T>(type: S): T[S];

  /**
   * Converts the object to a value of the specified type using a {@link Converter}.
   *
   * @param converter The converter to use.
   */
  convert<T>(converter: Converter<this, T>): T;
}
