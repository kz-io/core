/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 *
 * The `@kz/core/exception` module provides commonly-used exceptions.
 *
 * @module exception
 */

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
