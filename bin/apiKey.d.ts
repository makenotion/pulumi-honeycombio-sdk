import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class ApiKey extends pulumi.CustomResource {
    /**
     * Get an existing ApiKey resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApiKeyState, opts?: pulumi.CustomResourceOptions): ApiKey;
    /**
     * Returns true if the given object is an instance of ApiKey.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is ApiKey;
    /**
     * Whether the API key is disabled.
     */
    readonly disabled: pulumi.Output<boolean>;
    /**
     * The Environment ID the API key is scoped to.
     */
    readonly environmentId: pulumi.Output<string>;
    /**
     * The API key as a string. This is only available when creating a new key.
     */
    readonly key: pulumi.Output<string>;
    /**
     * The name of the API Key.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Permissions control what actions the API key can perform.
     */
    readonly permissions: pulumi.Output<outputs.ApiKeyPermission[] | undefined>;
    /**
     * The secret portion of the API key. This is only available when creating a new key.
     */
    readonly secret: pulumi.Output<string>;
    /**
     * The type of the API key.
     */
    readonly type: pulumi.Output<string>;
    /**
     * Create a ApiKey resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApiKeyArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ApiKey resources.
 */
export interface ApiKeyState {
    /**
     * Whether the API key is disabled.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The Environment ID the API key is scoped to.
     */
    environmentId?: pulumi.Input<string>;
    /**
     * The API key as a string. This is only available when creating a new key.
     */
    key?: pulumi.Input<string>;
    /**
     * The name of the API Key.
     */
    name?: pulumi.Input<string>;
    /**
     * Permissions control what actions the API key can perform.
     */
    permissions?: pulumi.Input<pulumi.Input<inputs.ApiKeyPermission>[]>;
    /**
     * The secret portion of the API key. This is only available when creating a new key.
     */
    secret?: pulumi.Input<string>;
    /**
     * The type of the API key.
     */
    type?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a ApiKey resource.
 */
export interface ApiKeyArgs {
    /**
     * Whether the API key is disabled.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The Environment ID the API key is scoped to.
     */
    environmentId: pulumi.Input<string>;
    /**
     * The name of the API Key.
     */
    name?: pulumi.Input<string>;
    /**
     * Permissions control what actions the API key can perform.
     */
    permissions?: pulumi.Input<pulumi.Input<inputs.ApiKeyPermission>[]>;
    /**
     * The type of the API key.
     */
    type: pulumi.Input<string>;
}
