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
    readonly columnId: pulumi.Output<string>;
    readonly createdAt: pulumi.Output<string>;
    readonly dataset: pulumi.Output<string>;
    readonly description: pulumi.Output<string | undefined>;
    readonly hidden: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated
     */
    readonly keyName: pulumi.Output<string>;
    readonly lastWrittenAt: pulumi.Output<string>;
    readonly name: pulumi.Output<string>;
    readonly type: pulumi.Output<string | undefined>;
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
    columnId?: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    dataset?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    hidden?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    keyName?: pulumi.Input<string>;
    lastWrittenAt?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    updatedAt?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Column resource.
 */
export interface ColumnArgs {
    columnId?: pulumi.Input<string>;
    dataset: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    hidden?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    keyName?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
