/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the PendingDeprecationWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '../../exceptions/mod.ts';

import {
  FutureWarning,
  PendingDeprecationWarning,
  type PendingDeprecationWarningData,
  Warning,
} from './mod.ts';

describe('PendingDeprecationWarning', () => {
  const CODE = 90;
  const NAME = 'PendingDeprecationWarning';
  const DEF_MSG = 'A feature is pending deprecation.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new PendingDeprecationWarning('An error occurred.');
    it('should extend the Error, Exception, Warning, and FutureWarning class', () => {
      assertInstanceOf(exc, FutureWarning);
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'This feature will be removed.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new PendingDeprecationWarning(MSG);

    it('should create a new PendingDeprecationWarning instance with the specified message description', () => {
      assertInstanceOf(exc, PendingDeprecationWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });

  describe('new(data)', () => {
    describe('({aboutUrl})', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
      };
      const MSG =
        `A feature is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({featureType}) - vowel', () => {
      const DATA: PendingDeprecationWarningData = {
        featureType: 'action',
      };
      const MSG = `An ${DATA.featureType} is pending deprecation.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({featureType}) - consonant', () => {
      const DATA: PendingDeprecationWarningData = {
        featureType: 'class',
      };
      const MSG = `A ${DATA.featureType} is pending deprecation.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({featureName})', () => {
      const DATA: PendingDeprecationWarningData = {
        featureName: 'foo',
      };
      const MSG = `A feature, ${DATA.featureName}, is pending deprecation.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({aboutUrl, featureName})', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({featureName, featureType}) - vowel', () => {
      const DATA: PendingDeprecationWarningData = {
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, is pending deprecation.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({featureName, featureType}) - consonant', () => {
      const DATA: PendingDeprecationWarningData = {
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, is pending deprecation.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({aboutUrl, featureType}) - vowel', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({aboutUrl, featureType}) - consonant', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({aboutUrl, featureName, featureType}) - vowel', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });

    describe('({aboutUrl, featureName, featureType}) - consonant', () => {
      const DATA: PendingDeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, is pending deprecation. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new PendingDeprecationWarning(DATA);

      it('should create a new PendingDeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, PendingDeprecationWarning);
        assertInstanceOf(warn, Error);
        assertEquals(warn.message, MSG);
        assertEquals(warn.name, NAME);
        assertEquals(warn.code, CODE);
        assertEquals(warn.toString(), STR);
        assertEquals(`${warn}`, STR);
        assertEquals(warn.valueOf(), CODE);
        assertEquals(+warn, CODE);
        assertStringIncludes(warn.helpUrl, URL);
        assertEquals(warn.cause, CAUSE);
        assertEquals(warn.data, DATA);
      });
    });
  });

  describe('new(message) - empty string', () => {
    const MSG = DEF_MSG;
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new PendingDeprecationWarning('');

    it('should create a new PendingDeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, PendingDeprecationWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });

  describe('new(data) - empty object', () => {
    const DATA = undefined;
    const MSG = DEF_MSG;
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new PendingDeprecationWarning({});

    it('should create a new PendingDeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, PendingDeprecationWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });

  describe('new(data) - irrelevant data', () => {
    const MSG = DEF_MSG;
    const DATA: PendingDeprecationWarningData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new PendingDeprecationWarning(DATA);

    it('should create a new PendingDeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, PendingDeprecationWarning);
      assertInstanceOf(exc, Error);
      assertEquals(exc.message, MSG);
      assertEquals(exc.name, NAME);
      assertEquals(exc.code, CODE);
      assertEquals(exc.toString(), STR);
      assertEquals(`${exc}`, STR);
      assertEquals(exc.valueOf(), CODE);
      assertEquals(+exc, CODE);
      assertStringIncludes(exc.helpUrl, URL);
      assertEquals(exc.cause, CAUSE);
      assertEquals(exc.data, DATA);
    });
  });
});
