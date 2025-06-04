import * as pulumi from "@pulumi/pulumi";
export declare class Query extends pulumi.CustomResource {
    /**
     * Get an existing Query resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueryState, opts?: pulumi.CustomResourceOptions): Query;
    /**
     * Returns true if the given object is an instance of Query.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Query;
    /**
     * The dataset this Query is associated with. If not set, it will be Environment-wide.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    readonly queryJson: pulumi.Output<string>;
    /**
     * Create a Query resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueryArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Query resources.
 */
export interface QueryState {
    /**
     * The dataset this Query is associated with. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Query resource.
 */
export interface QueryArgs {
    /**
     * The dataset this Query is associated with. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A JSON object describing the query according to the Query Specification. While the JSON can be constructed manually, it
     * is easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson: pulumi.Input<string>;
}
