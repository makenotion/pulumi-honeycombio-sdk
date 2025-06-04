import * as pulumi from "@pulumi/pulumi";
export declare class MarkerSetting extends pulumi.CustomResource {
    /**
     * Get an existing MarkerSetting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MarkerSettingState, opts?: pulumi.CustomResourceOptions): MarkerSetting;
    /**
     * Returns true if the given object is an instance of MarkerSetting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MarkerSetting;
    /**
     * The color set for the marker as a hex color code.
     */
    readonly color: pulumi.Output<string>;
    /**
     * Timestamp when the marker setting was created.
     */
    readonly createdAt: pulumi.Output<string>;
    /**
     * The dataset this marker setting belongs to. If not set, it will be Environment-wide.
     */
    readonly dataset: pulumi.Output<string | undefined>;
    readonly markerSettingId: pulumi.Output<string>;
    /**
     * The type of marker setting. (e.g. "deploy", "job-run")
     */
    readonly type: pulumi.Output<string>;
    /**
     * Timestamp when the marker setting was last modified.
     */
    readonly updatedAt: pulumi.Output<string>;
    /**
     * Create a MarkerSetting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MarkerSettingArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MarkerSetting resources.
 */
export interface MarkerSettingState {
    /**
     * The color set for the marker as a hex color code.
     */
    color?: pulumi.Input<string>;
    /**
     * Timestamp when the marker setting was created.
     */
    createdAt?: pulumi.Input<string>;
    /**
     * The dataset this marker setting belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    markerSettingId?: pulumi.Input<string>;
    /**
     * The type of marker setting. (e.g. "deploy", "job-run")
     */
    type?: pulumi.Input<string>;
    /**
     * Timestamp when the marker setting was last modified.
     */
    updatedAt?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a MarkerSetting resource.
 */
export interface MarkerSettingArgs {
    /**
     * The color set for the marker as a hex color code.
     */
    color: pulumi.Input<string>;
    /**
     * The dataset this marker setting belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    markerSettingId?: pulumi.Input<string>;
    /**
     * The type of marker setting. (e.g. "deploy", "job-run")
     */
    type: pulumi.Input<string>;
}
