/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file exports the base Exception class and its related exception data type.
 */

import {
  hashExceptionData,
  I11N_DOCS_HOST,
  I11N_EX2_PATH,
} from './_internal/mod.ts';

import type { IHashable, IHelpful } from '../types/mod.ts';
import type { BaseExceptionData } from './types/mod.ts';

/**
 * Additional, relevant data for {@link Exception} instances.
 *
 * @example
 * ```ts
 * import type { ExceptionData } from './exception.ts';
 *
 * const data: ExceptionData = {
 *   prev: 'Execution failure',
 * };
 * ```
 */
export type ExceptionData = BaseExceptionData;

/**
 * A generic exception class and base class for all kz exceptions.
 *
 * @param T - The type of the additional, relevant data for the exception.
 *
 * @example
 * ```ts
 * import { assertEquals } from '@std/assert';
 * import { Exception } from './exception.ts';
 *
 * const exception = new Exception('An error occurred.');
 *
 * assertEquals(exception.message, 'An error occurred.');
 * ```
 */
export class Exception<T extends ExceptionData = ExceptionData> extends Error
  implements IHelpful, IHashable {
  /**
   * Additional, relevant data for the exception.
   */
  protected exceptionProps: T;

  /**
   * Creates a new instance of the `Exception` class with the specified message description.
   *
   * @param message - The exception message description.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   *
   * assertEquals(exception.message, 'An error occurred.');
   * ```
   */
  constructor(message: string);

  /**
   * Creates a new instance of the `Exception` class with the specified message description and additional, relevant data.
   *
   * @param message The exception message description.
   * @param data Additional, relevant data for the exception.
   */
  constructor(message: string, data: T);

  /**
   * @ignore implementation
   */
  constructor(message: string, data?: T) {
    super(message);

    const props = data || {} as T;

    this.exceptionProps = props;
  }

  /**
   * The exception code.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   *
   * assertEquals(exception.code, 0);
   * ```
   */
  public readonly code: number = 0x0;

  /**
   * The exception name.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   *
   * assertEquals(exception.name, 'Exception');
   * ```
   */
  public get name(): string {
    const { name } = this.constructor;

    return name;
  }

  /**
   * Returns a numeric hash of the exception's data.
   *
   * @example
   * ```ts
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   * const hash = exception.getHash();
   *
   * console.log(hash);
   * ```
   */
  public getHash(): number {
    return hashExceptionData(this);
  }

  /**
   * The URL to the exception's help documentation.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.', { prev: 'Execution failure' });
   *
   * const url = 'https://docs.integereleven.com/tools/ex2/0x0?message=An%20error%20occurred&data=%7B%22prev%22%3A%22Execution%20failure%22%7D'
   *
   * assertEquals(exception.helpUrl, url);
   * ```
   */
  public get helpUrl(): string {
    const { message } = this;

    const baseUrl = this.getHelpBaseUrl();
    const encodedData = this.getUrlEncodedData();
    const encodedCause = this.getUrlEncodedCause();

    const encodedMessage = encodeURIComponent(message);

    const messageParam = encodedMessage ? `message=${encodedMessage}` : '';
    const dataParam = encodedData ? `data=${encodedData}` : '';
    const causeParam = encodedCause ? `cause=${encodedCause}` : '';

    const parts = [messageParam, dataParam, causeParam];
    const clearedParts = parts.filter((part) => part);
    const hasParams = clearedParts.length > 0;

    if (!hasParams) {
      return baseUrl;
    }

    const urlParams = clearedParts.join('&');
    const helpUrl = `${baseUrl}?${urlParams}`;

    return helpUrl;
  }

  /**
   * Returns the base URL for the exception's help documentation.
   *
   * @returns The base URL for the exception's help documentation.
   */
  protected getHelpBaseUrl(): string {
    const { code } = this;
    const codeHex = code.toString(16);
    const codeHexString = `0x${codeHex}`;
    const baseUrl = `${I11N_DOCS_HOST}/${I11N_EX2_PATH}/${codeHexString}`;

    return baseUrl;
  }

  /**
   * Returns the URL-encoded data for the exception.
   *
   * @returns The URL-encoded data for the exception.
   */
  protected getUrlEncodedData(): string {
    const { data } = this;
    const dataString = data ? JSON.stringify(data) : '';
    const encodedData = encodeURIComponent(dataString);

    return encodedData;
  }

  /**
   * Returns the URL-encoded cause for the exception.
   *
   * @returns The URL-encoded cause for the exception.
   */
  protected getUrlEncodedCause(): string {
    const { cause } = this;

    if (!cause) {
      return '';
    }

    if (cause instanceof Exception) {
      const causeString = JSON.stringify({ helpUrl: cause.helpUrl });
      const encodedCause = encodeURIComponent(causeString);

      return encodedCause;
    }

    const causeString = JSON.stringify({
      message: cause.message,
      cause: cause.cause,
    });
    const encodedCause = encodeURIComponent(causeString);

    return encodedCause;
  }

  /**
   * The exception cause.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const cause = new Error('Execution failure');
   * const exception = new Exception('An error occurred.', { cause });
   *
   * assertEquals(exception.cause, cause);
   * ```
   */
  public get cause(): Error | undefined {
    const { cause } = this.exceptionProps;

    return cause;
  }

  /**
   * The exception data.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.', { prev: 'Execution failure' });
   *
   * assertEquals(exception.data, { prev: 'Execution failure' });
   * ```
   */
  public get data(): Omit<T, 'cause'> | undefined {
    const { cause: _cause, ...data } = this.exceptionProps;

    const hasData = Object.keys(data).length > 0;
    const result = hasData ? data : undefined;

    return result;
  }

  /**
   * Returns the numeric value of the exception (`code`).
   *
   * @returns The numeric value of the exception (`code`).
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   *
   * assertEquals(exception.valueOf(), 0);
   * assertEquals(+exception, 0);
   * ```
   */
  public valueOf(): number {
    const { code } = this;

    return code;
  }

  /**
   * Returns a string representation of the exception.
   *
   * @returns A string representation of the exception.
   *
   * @example
   * ```ts
   * import { assertEquals } from '@std/assert';
   * import { Exception } from './exception.ts';
   *
   * const exception = new Exception('An error occurred.');
   *
   * assertEquals(exception.toString(), 'Exception: An error occurred.');
   * assertEquals(`${exception}`, 'Exception: An error occurred.');
   * ```
   */
  public toString(): string {
    const { name, message } = this;
    const result = `${name}: ${message}`;

    return result;
  }
}
