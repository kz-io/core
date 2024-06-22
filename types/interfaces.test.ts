/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Tests the documentation examples in the interfaces.ts file.
 */

import { describe, it } from '@std/testing/bdd';
import { assertEquals, assertInstanceOf } from '@std/assert';

import type {
  Converter,
  IHashable,
  IHelpful,
  IPrimitiveConvertible,
  TCloneable,
  TConverter,
  TConvertible,
} from './mod.ts';

describe('Examples - interfaces', () => {
  describe('IHelpful', () => {
    class MyException extends Error implements IHelpful {
      protected _helpUrl: string;
      constructor(message: string) {
        super(message);

        this._helpUrl = this.generateHelpUrl();
      }

      protected generateHelpUrl(): string {
        const { name, message } = this;
        const encodedName = encodeURIComponent(name);
        const encodedMessage = encodeURIComponent(message);
        const url =
          `httIPC://example.com/help/${encodedName}?message=${encodedMessage}`;

        return url;
      }

      public get helpUrl(): string {
        return this._helpUrl;
      }
    }
    it('should provide a URL to a help resource', () => {
      const exception = new MyException('Something went wrong!');
      const expected =
        'httIPC://example.com/help/Error?message=Something%20went%20wrong!';

      assertEquals(exception.helpUrl, expected);
    });
  });

  describe('IHashable', () => {
    class MyClass implements IHashable {
      constructor(
        protected name: string,
        protected age: number,
      ) {}

      protected hashData(): number {
        const { name, age } = this;
        const object = { name, age };
        const json = JSON.stringify(object);
        const chars = [...json];

        const hash = chars.reduce((acc, char) => {
          const code = char.charCodeAt(0);
          return ((acc << 5) - acc) + code;
        }, 0);

        return hash;
      }

      public getHash(): number {
        return this.hashData();
      }
    }
    it("should provide a value representing the hash of an object's data", () => {
      const instance = new MyClass('Alice', 30);

      assertEquals(instance.getHash(), 89027321);
    });
  });

  describe('TCloneable<T>', () => {
    it('should provide a method to clone an object', () => {
      class MyClass implements TCloneable<MyClass> {
        constructor(public name: string, public age: number) {}

        public clone(): MyClass {
          return new MyClass(this.name, this.age);
        }
      }

      const instance = new MyClass('Alice', 30);
      const clone = instance.clone();

      assertEquals(clone.name, instance.name);
      assertEquals(clone.age, instance.age);
    });
  });

  describe('IPrimitiveConvertible', () => {
    const exampleSymbol = Symbol('example');

    class MyClass implements IPrimitiveConvertible {
      constructor(public name: string, public age: number) {}

      public [Symbol.toPrimitive](hint: string): string | number {
        if (hint === 'number') {
          return this.toNumber();
        }

        return this.toString();
      }

      public toBoolean(): boolean {
        return this.age < 150;
      }

      public toNumber(): number {
        return this.age;
      }

      public toBigInt(): bigint {
        return BigInt(this.age);
      }

      public toSymbol(): symbol {
        return exampleSymbol;
      }

      public toString(): string {
        return this.name;
      }

      public valueOf(): number {
        return this.age;
      }
    }

    describe('explicit conversion', () => {
      it('should provide a method to convert an object to primitive values', () => {
        const instance = new MyClass('Alice', 30);

        assertEquals(instance.toString(), 'Alice');
        assertEquals(instance.toNumber(), 30);
        assertEquals(instance.toBoolean(), true);
        assertEquals(instance.toBigInt(), BigInt(30));
        assertEquals(instance.valueOf(), 30);
        assertEquals(instance.toSymbol(), exampleSymbol);
      });
    });

    describe('hinted conversion', () => {
      it('should provide a method to convert an object to primitive values', () => {
        const instance = new MyClass('Alice', 30);

        assertEquals(String(instance), 'Alice');
        assertEquals(`${instance}`, 'Alice');
        assertEquals(instance + '', 'Alice');
        assertEquals(Number(instance), 30);
        assertEquals(+instance, 30);
      });
    });
  });

  describe('TConverter<F, T>', () => {
    class MyClass {
      constructor(public name: string, public age: number) {}
    }

    class MyOtherClass {
      constructor(public name: string, public age: number) {}
    }

    const converter: TConverter<MyClass, MyOtherClass> = {
      convert(instance: MyClass): MyOtherClass {
        return new MyOtherClass(instance.name, instance.age);
      },
    };

    it('should provide a method to convert an object from one type to another', () => {
      const instance = new MyClass('Alice', 30);
      const converted = converter.convert(instance);

      assertEquals(converted.name, instance.name);
      assertEquals(converted.age, instance.age);
      assertInstanceOf(instance, MyClass);
      assertInstanceOf(converted, MyOtherClass);
    });
  });

  describe('TConvertible<T>', () => {
    class MyOtherClass {
      constructor(public name: string, public age: number) {}
    }

    class MyOtherOtherClass {
      constructor(public name: string, public age: number) {}
    }

    interface OtherClasses {
      other: MyOtherClass;
      other2: MyOtherOtherClass;
    }

    const exampleSymbol = Symbol('example');

    class MyClass implements TConvertible<OtherClasses> {
      constructor(public name: string, public age: number) {}

      public [Symbol.toPrimitive](hint: string): string | number {
        if (hint === 'number') {
          return this.toNumber();
        }

        return this.toString();
      }

      public toBoolean(): boolean {
        return this.age < 150;
      }

      public toNumber(): number {
        return this.age;
      }

      public toBigInt(): bigint {
        return BigInt(this.age);
      }

      public toSymbol(): symbol {
        return exampleSymbol;
      }

      public toString(): string {
        return this.name;
      }

      public valueOf(): number {
        return this.age;
      }

      convert<T>(converter: Converter<this, T>): T {
        if (typeof converter === 'function') {
          return converter(this);
        }

        return converter.convert(this);
      }

      convertTo<S extends keyof OtherClasses>(type: S): OtherClasses[S] {
        switch (type) {
          case 'other':
            return new MyOtherClass(this.name, this.age) as OtherClasses[S];
          default:
            return new MyOtherOtherClass(
              this.name,
              this.age,
            ) as OtherClasses[S];
        }
      }
    }

    it('should provide a method to convert an object from one type to another', () => {
      const instance = new MyClass('Alice', 30);
      const converted = instance.convertTo('other');
      const converted2 = instance.convertTo('other2');
      const convertedWithConverter = instance.convert<string>(
        (instance: MyClass) => {
          return `${instance.name} is ${instance.age} years old.`;
        },
      );

      assertEquals(converted.name, instance.name);
      assertInstanceOf(converted, MyOtherClass);
      assertEquals(converted2.name, instance.name);
      assertInstanceOf(converted2, MyOtherOtherClass);
      assertEquals(convertedWithConverter, 'Alice is 30 years old.');
    });
  });
});
