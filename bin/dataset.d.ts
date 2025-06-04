import * as pulumi from "@pulumi/pulumi";
export declare class Dataset extends pulumi.CustomResource {
    /**
     * Get an existing Dataset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetState, opts?: pulumi.CustomResourceOptions): Dataset;
    /**
     * Returns true if the given object is an instance of Dataset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Dataset;
    /**
     * ISO8601-formatted time the dataset was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The current delete protection status of the Dataset. Cannot be set to false on creation.
     */
    readonly deleteProtected: pulumi.Output<boolean>;
    /**
     * The Dataset's description.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The maximum unpacking depth of nested JSON fields.
     */
    readonly expandJsonDepth: pulumi.Output<number>;
    /**
     * ISO8601-formatted time the dataset was last written to (received event data).
     */
    readonly lastWrittenAt: pulumi.Output<string>;
    /**
     * The name of the Dataset.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The slug of the Dataset.
     */
    readonly slug: pulumi.Output<string>;
    /**
     * Create a Dataset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DatasetArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Dataset resources.
 */
export interface DatasetState {
    /**
     * ISO8601-formatted time the dataset was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The current delete protection status of the Dataset. Cannot be set to false on creation.
     */
    deleteProtected?: pulumi.Input<boolean>;
    /**
     * The Dataset's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The maximum unpacking depth of nested JSON fields.
     */
    expandJsonDepth?: pulumi.Input<number>;
    /**
     * ISO8601-formatted time the dataset was last written to (received event data).
     */
    lastWrittenAt?: pulumi.Input<string>;
    /**
     * The name of the Dataset.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the Dataset.
     */
    slug?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Dataset resource.
 */
export interface DatasetArgs {
    /**
     * The current delete protection status of the Dataset. Cannot be set to false on creation.
     */
    deleteProtected?: pulumi.Input<boolean>;
    /**
     * The Dataset's description.
     */
    description?: pulumi.Input<string>;
    /**
     * The maximum unpacking depth of nested JSON fields.
     */
    expandJsonDepth?: pulumi.Input<number>;
    /**
     * The name of the Dataset.
     */
    name?: pulumi.Input<string>;
}
