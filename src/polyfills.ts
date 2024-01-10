/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * NativeScript Polyfills
 */

// Install @nativescript/core polyfills (XHR, setTimeout, requestAnimationFrame)
import "@nativescript/core/globals";
// Install @nativescript/angular specific polyfills
import "@nativescript/angular/polyfills";

import { installPolyfills } from "@nativescript/core/globals";

// Angular 17 uses performance.mark in @angular/core
const loadTime = Date.now();
const globalPolyfills = {
    performance: {
        now() {
            return Date.now() - loadTime;
        },
        mark(name: string, options: any) {
            // Note: we could add impl
        }
    }
};
global.registerModule("performance", () => globalPolyfills);
installPolyfills("performance", ["performance"]);

/**
 * Zone.js and patches
 */
// Add pre-zone.js patches needed for the NativeScript platform
import "@nativescript/zone-js/dist/pre-zone-polyfills";

// Zone JS is required by default for Angular itself
import "zone.js";

// Add NativeScript specific Zone JS patches
import "@nativescript/zone-js";
