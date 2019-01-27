require('core-js/es6/reflect');
require('core-js/es7/reflect');
require('core-js/stage/4');
require('zone.js/dist/zone.js');
require('zone.js/dist/proxy.js');
require('zone.js/dist/sync-test');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('jest-zone-patch');

import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import AngularSnapshotSerializer from 'jest-preset-angular/AngularSnapshotSerializer';
import HTMLCommentSerializer from 'jest-preset-angular/HTMLCommentSerializer';
import 'rxjs';

TestBed.initTestEnvironment(
  [BrowserDynamicTestingModule, NoopAnimationsModule],
  platformBrowserDynamicTesting(),
);

expect.addSnapshotSerializer(HTMLCommentSerializer);
expect.addSnapshotSerializer(AngularSnapshotSerializer);

// Mock for transform property for animations
Object.defineProperty(document.body.style, 'transform', {
  value: () => ({ enumerable: true, configurable: true }),
});
