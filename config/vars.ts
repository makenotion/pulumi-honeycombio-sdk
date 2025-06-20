// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

declare var exports: any;
const __config = new pulumi.Config("honeycombio");

/**
 * The Honeycomb API key to use. It can also be set via the `HONEYCOMB_API_KEY` or `HONEYCOMBIO_APIKEY` environment
 * variables.
 */
export declare const apiKey: string | undefined;
Object.defineProperty(exports, "apiKey", {
    get() {
        return __config.get("apiKey");
    },
    enumerable: true,
});

/**
 * The ID portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_ID` environment
 * variable.
 */
export declare const apiKeyId: string | undefined;
Object.defineProperty(exports, "apiKeyId", {
    get() {
        return __config.get("apiKeyId");
    },
    enumerable: true,
});

/**
 * The secret portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_SECRET`
 * environment variable.
 */
export declare const apiKeySecret: string | undefined;
Object.defineProperty(exports, "apiKeySecret", {
    get() {
        return __config.get("apiKeySecret");
    },
    enumerable: true,
});

/**
 * Override the URL of the Honeycomb API. Defaults to `https://api.honeycomb.io`. It can also be set via the
 * `HONEYCOMB_API_ENDPOINT` environment variable.
 */
export declare const apiUrl: string | undefined;
Object.defineProperty(exports, "apiUrl", {
    get() {
        return __config.get("apiUrl");
    },
    enumerable: true,
});

/**
 * Enable the API client's debug logs. By default, a `TF_LOG` setting of debug or higher will enable this.
 */
export declare const debug: boolean | undefined;
Object.defineProperty(exports, "debug", {
    get() {
        return __config.getObject<boolean>("debug");
    },
    enumerable: true,
});

