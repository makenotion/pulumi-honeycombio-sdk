import * as pulumi from "@pulumi/pulumi";
export declare class MsteamsRecipient extends pulumi.CustomResource {
    /**
     * Get an existing MsteamsRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MsteamsRecipientState, opts?: pulumi.CustomResourceOptions): MsteamsRecipient;
    /**
     * Returns true if the given object is an instance of MsteamsRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is MsteamsRecipient;
    readonly msteamsRecipientId: pulumi.Output<string>;
    /**
     * The name of the recipient.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The Incoming Webhook URL to send the notification to
     */
    readonly url: pulumi.Output<string>;
    /**
     * Create a MsteamsRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MsteamsRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering MsteamsRecipient resources.
 */
export interface MsteamsRecipientState {
    msteamsRecipientId?: pulumi.Input<string>;
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Incoming Webhook URL to send the notification to
     */
    url?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a MsteamsRecipient resource.
 */
export interface MsteamsRecipientArgs {
    msteamsRecipientId?: pulumi.Input<string>;
    /**
     * The name of the recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The Incoming Webhook URL to send the notification to
     */
    url: pulumi.Input<string>;
}
