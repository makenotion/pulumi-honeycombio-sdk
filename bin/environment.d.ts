import * as pulumi from "@pulumi/pulumi";
export declare class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentState, opts?: pulumi.CustomResourceOptions): Environment;
    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Environment;
    /**
     * The color of the Environment. If one is not provided, a random color will be assigned.
     */
    readonly color: pulumi.Output<string>;
    /**
     * The current delete protection status of the Environment. Cannot be set to false on creation.
     */
    readonly deleteProtected: pulumi.Output<boolean>;
    /**
     * The Environment's description.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The name of the Environment.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the Environment.
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: EnvironmentArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Environment resources.
 */
export interface EnvironmentState {
    /**
     * The color of the Environment. If one is not provided, a random color will be assigned.
     */
    color?: pulumi.Input<string>;
    /**
     * The current delete protection status of the Environment. Cannot be set to false on creation.
     */
    deleteProtected?: pulumi.Input<boolean>;
    /**
     * The Environment's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Environment.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the Environment.
     */
    slug?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * The color of the Environment. If one is not provided, a random color will be assigned.
     */
    color?: pulumi.Input<string>;
    /**
     * The current delete protection status of the Environment. Cannot be set to false on creation.
     */
    deleteProtected?: pulumi.Input<boolean>;
    /**
     * The Environment's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Environment.
     */
    name?: pulumi.Input<string>;
}
