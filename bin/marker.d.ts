import * as pulumi from "@pulumi/pulumi";
export declare class Marker extends pulumi.CustomResource {
    /**
     * Get an existing Marker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MarkerState, opts?: pulumi.CustomResourceOptions): Marker;
    /**
     * Returns true if the given object is an instance of Marker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Marker;
    /**
     * The dataset where this marker is placed. If not set, it will be Environment-wide.
     */
    readonly dataset: pulumi.Output<string | undefined>;
    readonly markerId: pulumi.Output<string>;
    /**
     * A message that appears above the marker and can be used to describe the marker.
     */
    readonly message: pulumi.Output<string | undefined>;
    /**
     * The type of the marker (e.g. "deploy", "job-run")
     */
    readonly type: pulumi.Output<string | undefined>;
    /**
     * A target URL for the Marker. Rendered as a link in the UI.
     */
    readonly url: pulumi.Output<string | undefined>;
    /**
     * Create a Marker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: MarkerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Marker resources.
 */
export interface MarkerState {
    /**
     * The dataset where this marker is placed. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    markerId?: pulumi.Input<string>;
    /**
     * A message that appears above the marker and can be used to describe the marker.
     */
    message?: pulumi.Input<string>;
    /**
     * The type of the marker (e.g. "deploy", "job-run")
     */
    type?: pulumi.Input<string>;
    /**
     * A target URL for the Marker. Rendered as a link in the UI.
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Marker resource.
 */
export interface MarkerArgs {
    /**
     * The dataset where this marker is placed. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    markerId?: pulumi.Input<string>;
    /**
     * A message that appears above the marker and can be used to describe the marker.
     */
    message?: pulumi.Input<string>;
    /**
     * The type of the marker (e.g. "deploy", "job-run")
     */
    type?: pulumi.Input<string>;
    /**
     * A target URL for the Marker. Rendered as a link in the UI.
     */
    url?: pulumi.Input<string>;
}
