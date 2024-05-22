/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file This file tests the DeprecationWarning class and its related warning data type.
 */

import { describe, it } from '@std/testing/bdd';
import {
  assertEquals,
  assertInstanceOf,
  assertStringIncludes,
} from '@std/assert';
import { Exception } from '../../exceptions/mod.ts';

import {
  DeprecationWarning,
  type DeprecationWarningData,
  FutureWarning,
  Warning,
} from './mod.ts';

describe('DeprecationWarning', () => {
  const CODE = 91;
  const NAME = 'DeprecationWarning';
  const DEF_MSG = 'A feature has been deprecated.';
  const URI_BASE = `/0x${CODE.toString(16)}`;

  describe('inheritance', () => {
    const exc = new DeprecationWarning('An error occurred.');
    it('should extend the Error, Exception, Warning, and FutureWarning class', () => {
      assertInstanceOf(exc, FutureWarning);
      assertInstanceOf(exc, Warning);
      assertInstanceOf(exc, Exception);
      assertInstanceOf(exc, Error);
    });
  });

  describe('new(message)', () => {
    const MSG = 'This feature has been removed.';
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const DATA = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}`;

    const exc = new DeprecationWarning(MSG);

    it('should create a new DeprecationWarning instance with the specified message description', () => {
      assertInstanceOf(exc, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
      };
      const MSG =
        `A feature has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName})', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
      };
      const MSG =
        `A feature has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        featureType: 'action',
      };
      const MSG = `An ${DATA.featureType} has been deprecated.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        featureType: 'class',
      };
      const MSG = `A ${DATA.featureType} has been deprecated.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        featureName: 'foo',
      };
      const MSG = `A feature, ${DATA.featureName}, has been deprecated.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName})', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
      };
      const MSG =
        `A feature has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName, featureName})', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName, featureType}) - vowel', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName, featureType}) - consonant', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, has been deprecated.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, has been deprecated.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName, featureName, featureType}) - vowel', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({alternativeFeatureName, featureName, featureType}) - consonant', () => {
      const DATA: DeprecationWarningData = {
        alternativeFeatureName: 'bar',
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName, featureType}) - vowel', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType} has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName, featureType}) - consonant', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType} has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName, featureName})', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
        featureName: 'foo',
      };
      const MSG =
        `A feature, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName, featureName, featureType}) - vowel', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
        featureName: 'foo',
        featureType: 'action',
      };
      const MSG =
        `An ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    describe('({aboutUrl, alternativeFeatureName, featureName, featureType}) - consonant', () => {
      const DATA: DeprecationWarningData = {
        aboutUrl: 'https://example.com',
        alternativeFeatureName: 'bar',
        featureName: 'foo',
        featureType: 'class',
      };
      const MSG =
        `A ${DATA.featureType}, ${DATA.featureName}, has been deprecated. Use ${DATA.alternativeFeatureName} instead. Read more at ${DATA.aboutUrl}.`;
      const STR = `${NAME}: ${MSG}`;
      const CAUSE = undefined;
      const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
        encodeURIComponent(JSON.stringify(DATA))
      }`;

      const warn = new DeprecationWarning(DATA);

      it('should create a new DeprecationWarning instance with the specified data', () => {
        assertInstanceOf(warn, DeprecationWarning);
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

    const exc = new DeprecationWarning('');

    it('should create a new DeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, DeprecationWarning);
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

    const exc = new DeprecationWarning({});

    it('should create a new DeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, DeprecationWarning);
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
    const DATA: DeprecationWarningData = { foo: 'bar' };
    const STR = `${NAME}: ${MSG}`;
    const CAUSE = undefined;
    const URL = `${URI_BASE}?message=${encodeURIComponent(MSG)}&data=${
      encodeURIComponent(JSON.stringify(DATA))
    }`;

    const exc = new DeprecationWarning(DATA);

    it('should create a new DeprecationWarning instance with the default message description', () => {
      assertInstanceOf(exc, DeprecationWarning);
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
