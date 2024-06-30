/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/exceptions` module provides commonly used exceptions with intuitive APIs.
 *
 * All exceptions begin with the `Exception` base class, accepting a message, and optional
 * exception data. All exceptions have a single common exception data property, `cause`,
 * which acts as the inner exception or error, if one was unable to be handled gracefully.
 * Any data that is deemed relevant to the exception can be added to the exception data,
 * though some exceptions have named data properties which are especially relevant.
 *
 * ```ts
 * import { assertInstanceOf, assertEquals } from '@std/assert';
 * import { Exception, KeyException } from './mod.ts';
 *
 * const keyExc = new KeyException(
 *   `The 'name' key does not exist.`,
 *   {
 *     id: '82hffd03',
 *     action: 'hfjkdhak',
 *     key: 'key', //named property
 *  });
 *
 * assertInstanceOf(keyExc, KeyException);
 * assertInstanceOf(keyExc, Exception);
 *
 * assertEquals(keyExc.message, `The 'name' key does not exist.`);
 * ```
 *
 * When a message is provided, the exception data is simply along for the ride,
 * useful where developers see fit. Some exceptions can also accept only
 * exception data, of which the named data properties are used to construct the
 * exception message. For integereleven-created exceptions, they also provide
 * insight to the exception explainer tool.
 *
 * import { assertEquals } from '@std/assert';
 * import { KeyException } from './mod.ts';
 *
 * ```
 * import { assertEquals } from '@std/assert';
 * import { KeyException } from './mod.ts';
 *
 * const keyExc = new KeyException({
 * 	 key: 'name',
 * 	 validKeys: ['first', 'last']
 * });
 *
 * const expected = 'Unable to locate a property key, name, on an object. Valid property keys include: first, last.';
 *
 * assertEquals(keyExc.message, expected);
 * ```
 *
 * Exceptions are created in a hierarchy, and those on the outer branches have
 * the generated message functionality. we use the hierarchy to provide better
 * exception handling.
 *
 * ```ts
 * import { OSException, ConnectionException } from './mod.ts';
 *
 * try {
 * 	 //  Simulate external code
 * 	 throw new ConnectionException('Bad IP');
 * } catch(e) {
 * 	 if (typeof e !== 'object') throw e;
 *
 * 	 if (e instanceof OSException) {
 * 	 	 // Maybe we cannot handle this gracefully
 * 	 	 console.error(e.message);
 * 	 	 console.error(e.helpUrl);
 *
 * 	 	 Deno.exit(e.code);
 * 	 }
 * }
 * ```
 *
 * All exceptions and related types are also exported as part of the top-level
 * `@kz/core` module's public API, as well as `@kz/core/exceptions`.
 *
 * @module exception
 */

export * from './types/mod.ts';

export { Exception, type ExceptionData } from './exception.ts';
export {
  InvalidException,
  type InvalidExceptionData,
} from './invalid_exception.ts';
export {
  NotImplementedException,
  type NotImplementedExceptionData,
} from './not_implemented_exception.ts';
export {
  NotSupportedException,
  type NotSupportedExceptionData,
} from './not_supported_exception.ts';
export { ValueException, type ValueExceptionData } from './value_exception.ts';
export {
  ArgumentException,
  type ArgumentExceptionData,
} from './argument_exception.ts';
export {
  AssertionException,
  type AssertionExceptionData,
} from './assertion_exception.ts';
export {
  DecoratorException,
  type DecoratorExceptionData,
} from './decorator_exception.ts';
export {
  FormatException,
  type FormatExceptionData,
} from './format_exception.ts';
export {
  NotFoundException,
  type NotFoundExceptionData,
} from './not_found_exception.ts';
export {
  MethodException,
  type MethodExceptionData,
} from './method_exception.ts';
export { KeyException, type KeyExceptionData } from './key_exception.ts';
export { RangeException, type RangeExceptionData } from './range_exception.ts';
export { IndexException, type IndexExceptionData } from './index_exception.ts';
export {
  ArgumentIndexException,
  type ArgumentIndexExceptionData,
} from './argument_index_exception.ts';
export {
  OperationException,
  type OperationExceptionData,
} from './operation_exception.ts';
export {
  ExternalException,
  type ExternalExceptionData,
} from './external_exception.ts';
export {
  IterationException,
  type IterationExceptionData,
} from './iteration_exception.ts';
export {
  RecursionException,
  type RecursionExceptionData,
} from './recursion_exception.ts';
export {
  TimeoutException,
  type TimeoutExceptionData,
} from './timeout_exception.ts';
export { OSException, type OSExceptionData } from './os_exception.ts';
export {
  ConnectionException,
  type ConnectionExceptionData,
} from './connection_exception.ts';
export { DiskException, type DiskExceptionData } from './disk_exception.ts';
export {
  InterruptException,
  type InterruptExceptionData,
} from './interrupt_exception.ts';
export {
  MemoryException,
  type MemoryExceptionData,
} from './memory_exception.ts';
export {
  ProcessException,
  type ProcessExceptionData,
} from './process_exception.ts';
