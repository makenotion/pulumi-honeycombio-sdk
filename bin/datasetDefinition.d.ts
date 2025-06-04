import * as pulumi from "@pulumi/pulumi";
export declare class DatasetDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DatasetDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatasetDefinitionState, opts?: pulumi.CustomResourceOptions): DatasetDefinition;
    /**
     * Returns true if the given object is an instance of DatasetDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is DatasetDefinition;
    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    readonly column: pulumi.Output<string>;
    /**
     * The type of the column assigned to the definition. Either `column` or `derived_column`.
     */
    readonly columnType: pulumi.Output<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    readonly dataset: pulumi.Output<string>;
    readonly datasetDefinitionId: pulumi.Output<string>;
    /**
     * The name of the definition being set.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Create a DatasetDefinition resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatasetDefinitionArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering DatasetDefinition resources.
 */
export interface DatasetDefinitionState {
    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    column?: pulumi.Input<string>;
    /**
     * The type of the column assigned to the definition. Either `column` or `derived_column`.
     */
    columnType?: pulumi.Input<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    dataset?: pulumi.Input<string>;
    datasetDefinitionId?: pulumi.Input<string>;
    /**
     * The name of the definition being set.
     */
    name?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a DatasetDefinition resource.
 */
export interface DatasetDefinitionArgs {
    /**
     * The column to set the definition to. Must be the name of an existing Column or the alias of an existing Derived Column.
     */
    column: pulumi.Input<string>;
    /**
     * The dataset to set the Dataset Definition for.
     */
    dataset: pulumi.Input<string>;
    datasetDefinitionId?: pulumi.Input<string>;
    /**
     * The name of the definition being set.
     */
    name?: pulumi.Input<string>;
}
