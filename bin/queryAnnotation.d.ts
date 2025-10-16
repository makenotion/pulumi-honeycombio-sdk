import * as pulumi from "@pulumi/pulumi";
export declare class QueryAnnotation extends pulumi.CustomResource {
    /**
     * Get an existing QueryAnnotation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: QueryAnnotationState, opts?: pulumi.CustomResourceOptions): QueryAnnotation;
    /**
     * Returns true if the given object is an instance of QueryAnnotation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is QueryAnnotation;
    /**
     * The dataset this query annotation is added to. If not set, an Environment-wide query annotation will be created.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * The description to display as the query annotation.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The name to display as the query annotation.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the query that the annotation will be created on. Note that a query can have more than one annotation.
     */
    readonly queryId: pulumi.Output<string>;
    /**
     * Create a QueryAnnotation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: QueryAnnotationArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering QueryAnnotation resources.
 */
export interface QueryAnnotationState {
    /**
     * The dataset this query annotation is added to. If not set, an Environment-wide query annotation will be created.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The description to display as the query annotation.
     */
    description?: pulumi.Input<string>;
    /**
     * The name to display as the query annotation.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the query that the annotation will be created on. Note that a query can have more than one annotation.
     */
    queryId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a QueryAnnotation resource.
 */
export interface QueryAnnotationArgs {
    /**
     * The dataset this query annotation is added to. If not set, an Environment-wide query annotation will be created.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The description to display as the query annotation.
     */
    description?: pulumi.Input<string>;
    /**
     * The name to display as the query annotation.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the query that the annotation will be created on. Note that a query can have more than one annotation.
     */
    queryId: pulumi.Input<string>;
}
