import * as pulumi from "@pulumi/pulumi";
export declare class MsteamsWorkflowRecipient extends pulumi.CustomResource {
    /**
     * Get an existing MsteamsWorkflowRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsteamsWorkflowRecipientState, opts?: pulumi.CustomResourceOptions): MsteamsWorkflowRecipient;
    /**
     * Returns true if the given object is an instance of MsteamsWorkflowRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MsteamsWorkflowRecipient;
    readonly msteamsWorkflowRecipientId: pulumi.Output<string>;
    /**
     * The name of the recipient.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a MsteamsWorkflowRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsteamsWorkflowRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MsteamsWorkflowRecipient resources.
 */
export interface MsteamsWorkflowRecipientState {
    msteamsWorkflowRecipientId?: pulumi.Input<string>;
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a MsteamsWorkflowRecipient resource.
 */
export interface MsteamsWorkflowRecipientArgs {
    msteamsWorkflowRecipientId?: pulumi.Input<string>;
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Teams Workflow URL to send the notification to.
     */
    url: pulumi.Input<string>;
}
