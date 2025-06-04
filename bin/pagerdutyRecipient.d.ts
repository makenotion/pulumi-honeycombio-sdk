import * as pulumi from "@pulumi/pulumi";
export declare class PagerdutyRecipient extends pulumi.CustomResource {
    /**
     * Get an existing PagerdutyRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PagerdutyRecipientState, opts?: pulumi.CustomResourceOptions): PagerdutyRecipient;
    /**
     * Returns true if the given object is an instance of PagerdutyRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is PagerdutyRecipient;
    /**
     * The key of the PagerDuty Integration to send the notification to
     */
    readonly integrationKey: pulumi.Output<string>;
    /**
     * The name of the PagerDuty Integration to send the notification to
     */
    readonly integrationName: pulumi.Output<string>;
    readonly pagerdutyRecipientId: pulumi.Output<string>;
    /**
     * Create a PagerdutyRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PagerdutyRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering PagerdutyRecipient resources.
 */
export interface PagerdutyRecipientState {
    /**
     * The key of the PagerDuty Integration to send the notification to
     */
    integrationKey?: pulumi.Input<string>;
    /**
     * The name of the PagerDuty Integration to send the notification to
     */
    integrationName?: pulumi.Input<string>;
    pagerdutyRecipientId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a PagerdutyRecipient resource.
 */
export interface PagerdutyRecipientArgs {
    /**
     * The key of the PagerDuty Integration to send the notification to
     */
    integrationKey: pulumi.Input<string>;
    /**
     * The name of the PagerDuty Integration to send the notification to
     */
    integrationName: pulumi.Input<string>;
    pagerdutyRecipientId?: pulumi.Input<string>;
}
