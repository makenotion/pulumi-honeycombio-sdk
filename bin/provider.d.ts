import * as pulumi from "@pulumi/pulumi";
/**
 * The provider type for the honeycombio package. By default, resources use package-wide configuration
 * settings, however an explicit `Provider` instance may be created and passed during resource
 * construction to achieve fine-grained programmatic control over provider settings. See the
 * [documentation](https://www.pulumi.com/docs/reference/programming-model/#providers) for more information.
 */
export declare class Provider extends pulumi.ProviderResource {
    /**
     * Returns true if the given object is an instance of Provider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Provider;
    /**
     * The Honeycomb API key to use. It can also be set via the `HONEYCOMB_API_KEY` or `HONEYCOMBIO_APIKEY` environment
     * variables.
     */
    readonly apiKey: pulumi.Output<string | undefined>;
    /**
     * The ID portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_ID` environment
     * variable.
     */
    readonly apiKeyId: pulumi.Output<string | undefined>;
    /**
     * The secret portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_SECRET`
     * environment variable.
     */
    readonly apiKeySecret: pulumi.Output<string | undefined>;
    /**
     * Override the URL of the Honeycomb API. Defaults to `https://api.honeycomb.io`. It can also be set via the
     * `HONEYCOMB_API_ENDPOINT` environment variable.
     */
    readonly apiUrl: pulumi.Output<string | undefined>;
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ProviderArgs, opts?: pulumi.ResourceOptions);
    /**
     * This function returns a Terraform config object with terraform-namecased keys,to be used with the Terraform Module Provider.
     */
    terraformConfig(): pulumi.Output<{
        [key: string]: any;
    }>;
}
/**
 * The set of arguments for constructing a Provider resource.
 */
export interface ProviderArgs {
    /**
     * The Honeycomb API key to use. It can also be set via the `HONEYCOMB_API_KEY` or `HONEYCOMBIO_APIKEY` environment
     * variables.
     */
    apiKey?: pulumi.Input<string>;
    /**
     * The ID portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_ID` environment
     * variable.
     */
    apiKeyId?: pulumi.Input<string>;
    /**
     * The secret portion of the Honeycomb Management API key to use. It can also be set via the `HONEYCOMB_KEY_SECRET`
     * environment variable.
     */
    apiKeySecret?: pulumi.Input<string>;
    /**
     * Override the URL of the Honeycomb API. Defaults to `https://api.honeycomb.io`. It can also be set via the
     * `HONEYCOMB_API_ENDPOINT` environment variable.
     */
    apiUrl?: pulumi.Input<string>;
    /**
     * Enable the API client's debug logs. By default, a `TF_LOG` setting of debug or higher will enable this.
     */
    debug?: pulumi.Input<boolean>;
}
export declare namespace Provider {
    /**
     * The results of the Provider.terraformConfig method.
     */
    interface TerraformConfigResult {
        readonly result: {
            [key: string]: any;
        };
    }
}
