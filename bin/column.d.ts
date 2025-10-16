import * as pulumi from "@pulumi/pulumi";
export declare class Column extends pulumi.CustomResource {
    /**
     * Get an existing Column resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ColumnState, opts?: pulumi.CustomResourceOptions): Column;
    /**
     * Returns true if the given object is an instance of Column.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Column;
    /**
     * The time the Column was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The dataset this Column belongs to.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * The Column's description.
     */
    readonly description: pulumi.Output<string>;
    /**
     * Whether the Column is hidden or not.
     */
    readonly hidden: pulumi.Output<boolean>;
    /**
     * The time the Column was last written to.
     */
    readonly lastWrittenAt: pulumi.Output<string>;
    /**
     * The name of the Column.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Column's type. Valid values are `string`, `integer`, `float`, `boolean`.
     */
    readonly type: pulumi.Output<string>;
    /**
     * The time the Column was last updated.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a Column resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ColumnArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Column resources.
 */
export interface ColumnState {
    /**
     * The time the Column was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The dataset this Column belongs to.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The Column's description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the Column is hidden or not.
     */
    hidden?: pulumi.Input<boolean>;
    /**
     * The time the Column was last written to.
     */
    lastWrittenAt?: pulumi.Input<string>;
    /**
     * The name of the Column.
     */
    name?: pulumi.Input<string>;
    /**
     * The Column's type. Valid values are `string`, `integer`, `float`, `boolean`.
     */
    type?: pulumi.Input<string>;
    /**
     * The time the Column was last updated.
     */
    updatedAt?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Column resource.
 */
export interface ColumnArgs {
    /**
     * The dataset this Column belongs to.
     */
    dataset: pulumi.Input<string>;
    /**
     * The Column's description.
     */
    description?: pulumi.Input<string>;
    /**
     * Whether the Column is hidden or not.
     */
    hidden?: pulumi.Input<boolean>;
    /**
     * The name of the Column.
     */
    name?: pulumi.Input<string>;
    /**
     * The Column's type. Valid values are `string`, `integer`, `float`, `boolean`.
     */
    type?: pulumi.Input<string>;
}
