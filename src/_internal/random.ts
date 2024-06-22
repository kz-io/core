/**
 * @copyright 2020-2024 integereleven. All rights reserved. MIT license.
 * @file Exports the utilities for the Random class.
 */

const H1 = 0x6a09e667;
const H2 = 0xbb67ae85;
const H3 = 0x3c6ef372;
const H4 = 0xa54ff53a;
const F1 = 0x239b961b;
const F2 = 0xab0e9789;
const F3 = 0x38b34ae5;
const F4 = 0xa1e38b93;
const K1 = 0x12;
const K2 = 0x16;
const K3 = 0x11;
const K4 = 0x13;

function hashBlock(
  seed: Uint32Array,
  hash: Uint32Array,
  buffer: Uint32Array,
): void {
  let a = hash[0];
  let b = hash[1];
  let c = hash[2];
  let d = hash[3];

  a += seed[0];
  b += seed[1];
  c += seed[2];
  d += seed[3];

  a += buffer[0];
  b += buffer[1];
  c += buffer[2];
  d += buffer[3];

  a += buffer[4];
  b += buffer[5];
  c += buffer[6];
  d += buffer[7];

  a += buffer[8];
  b += buffer[9];
  c += buffer[10];
  d += buffer[11];

  a += buffer[12];
  b += buffer[13];
  c += buffer[14];
  d += buffer[15];

  a = (a << K1) | (a >>> (32 - K1));
  d ^= a;
  d = (d << K2) | (d >>> (32 - K2));
  c ^= d;
  c = (c << K3) | (c >>> (32 - K3));
  b ^= c;
  b = (b << K4) | (b >>> (32 - K4));
  a ^= b;

  hash[0] = a;
  hash[1] = b;
  hash[2] = c;
  hash[3] = d;
}

export function getRandomSeedValue(): string {
  const buffer = new Uint8Array(16);

  crypto.getRandomValues(buffer);

  return String.fromCharCode(...buffer);
}

export function createSeed(
  seedString: string,
): [number, number, number, number] {
  const seed = new Uint32Array(4);
  const view = new DataView(seed.buffer);

  view.setUint32(0, F1, true);
  view.setUint32(4, F2, true);
  view.setUint32(8, F3, true);
  view.setUint32(12, F4, true);

  const hash = new Uint32Array(4);
  const hashView = new DataView(hash.buffer);

  hashView.setUint32(0, H1, true);
  hashView.setUint32(4, H2, true);
  hashView.setUint32(8, H3, true);
  hashView.setUint32(12, H4, true);

  const buffer = new Uint32Array(16);

  for (let i = 0; i < seedString.length; i++) {
    buffer[i % 16] = seedString.charCodeAt(i);
    if (i % 16 === 15) {
      hashBlock(seed, hash, buffer);
    }
  }

  buffer[seedString.length % 16] = 0x80;

  buffer[14] = seedString.length * 8;

  hashBlock(seed, hash, buffer);

  return [hash[0], hash[1], hash[2], hash[3]];
}
