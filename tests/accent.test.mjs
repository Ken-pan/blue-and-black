// SPDX-License-Identifier: MIT
import test from 'node:test';import assert from 'node:assert/strict';import {recolorAccentPixels,normalizeAccent} from '../accent-engine.js';
test('recolor changes cobalt while preserving neutral, alpha and transparent pixels',()=>{const source=new Uint8Array([47,91,255,255,40,40,40,255,255,255,255,100,47,91,255,0]);const result=recolorAccentPixels(source.slice(),'#bd365b');assert.deepEqual([...result.slice(0,4)],[189,54,91,255]);assert.deepEqual([...result.slice(4)],[...source.slice(4)]);assert.deepEqual([...recolorAccentPixels(source.slice(),'#2f5bff')],[...source]);});
test('rejects invalid color inputs',()=>{for(const value of ['red','#fff','#ggffff','rgb(0,0,0)'])assert.throws(()=>normalizeAccent(value));});
