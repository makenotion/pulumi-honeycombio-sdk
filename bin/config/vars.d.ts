/**
 * The Honeycomb API key to use. It can also be set via the `HONEYCOMB_API_KEY` or `HONEYCOMBIO_APIKEY` environment
 * variables.
 */
export declare const apiKey: string | undefined;
/**
 * The ID portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_ID` environment
 * variable.
 */
export declare const apiKeyId: string | undefined;
/**
 * The secret portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_SECRET`
 * environment variable.
 */
export declare const apiKeySecret: string | undefined;
/**
 * Override the URL of the Honeycomb API. Defaults to `https://api.honeycomb.io`. It can also be set via the
 * `HONEYCOMB_API_ENDPOINT` environment variable.
 */
export declare const apiUrl: string | undefined;
/**
 * Enable the API client's debug logs. By default, a `TF_LOG` setting of debug or higher will enable this.
 */
export declare const debug: boolean | undefined;
