/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the StabilityWarning class and its related warning data type.
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
  StabilityWarning,
  type StabilityWarningData,
  Warning,
} from './mod.ts';

describe('StabilityWarning', () => {
  const CODE = 89;
  const NAME = 'StabilityWarning';
  const DEF_MSG =
    'A feature is unstable and should not be used in production environments.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new StabilityWarning('An error occurred.');
    it('should extend the Error, Exception, Warning, and FutureWarning class', () => {
      assertInstanceOf(exc, FutureWarning);
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'This feature is unstable.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new StabilityWarning(MSG);

    it('should create a new StabilityWarning instance with the specified message description', () => {
      assertInstanceOf(exc, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
      };
      const MSG =
        `A feature is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} is unstable and should not be used in production environments.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} is unstable and should not be used in production environments.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, is unstable and should not be used in production environments.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, is unstable and should not be used in production environments.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, is unstable and should not be used in production environments.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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
      const DATA: StabilityWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, is unstable and should not be used in production environments. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new StabilityWarning(DATA);

      it('should create a new StabilityWarning instance with the specified data', () => {
        assertInstanceOf(warn, StabilityWarning);
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

    const exc = new StabilityWarning('');

    it('should create a new StabilityWarning instance with the default message description', () => {
      assertInstanceOf(exc, StabilityWarning);
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

    const exc = new StabilityWarning({});

    it('should create a new StabilityWarning instance with the default message description', () => {
      assertInstanceOf(exc, StabilityWarning);
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
    const DATA: StabilityWarningData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new StabilityWarning(DATA);

    it('should create a new StabilityWarning instance with the default message description', () => {
      assertInstanceOf(exc, StabilityWarning);
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
