/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports exceptions and related symbols for the module.
 */

export { Warning, type WarningData } from './warning.ts';
export { OSWarning, type OSWarningData } from './os_warning.ts';
export { ProcessWarning, type ProcessWarningData } from './process_warning.ts';
export {
  ConnectionWarning,
  type ConnectionWarningData,
} from './connection_warning.ts';
export { DiskWarning, type DiskWarningData } from './disk_warning.ts';
export { MemoryWarning, type MemoryWarningData } from './memory_warning.ts';
export { FutureWarning, type FutureWarningData } from './future_warning.ts';
export {
  StabilityWarning,
  type StabilityWarningData,
} from './stability_warning.ts';
export {
  DeprecationWarning,
  type DeprecationWarningData,
} from './deprecation_warning.ts';
export {
  PendingDeprecationWarning,
  type PendingDeprecationWarningData,
} from './pending_deprecation_warning.ts';
