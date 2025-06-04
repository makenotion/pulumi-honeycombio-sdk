import * as pulumi from "@pulumi/pulumi";
export declare class DerivedColumn extends pulumi.CustomResource {
    /**
     * Get an existing DerivedColumn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DerivedColumnState, opts?: pulumi.CustomResourceOptions): DerivedColumn;
    /**
     * Returns true if the given object is an instance of DerivedColumn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DerivedColumn;
    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    readonly alias: pulumi.Output<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    readonly dataset: pulumi.Output<string | undefined>;
    readonly derivedColumnId: pulumi.Output<string>;
    /**
     * A description of the derived column.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    readonly expression: pulumi.Output<string>;
    /**
     * Create a DerivedColumn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DerivedColumnArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DerivedColumn resources.
 */
export interface DerivedColumnState {
    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    alias?: pulumi.Input<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    derivedColumnId?: pulumi.Input<string>;
    /**
     * A description of the derived column.
     */
    description?: pulumi.Input<string>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    expression?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DerivedColumn resource.
 */
export interface DerivedColumnArgs {
    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    alias: pulumi.Input<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    derivedColumnId?: pulumi.Input<string>;
    /**
     * A description of the derived column.
     */
    description?: pulumi.Input<string>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    expression: pulumi.Input<string>;
}
