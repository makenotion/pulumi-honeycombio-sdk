import * as pulumi from "@pulumi/pulumi";
export declare class SlackRecipient extends pulumi.CustomResource {
    /**
     * Get an existing SlackRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlackRecipientState, opts?: pulumi.CustomResourceOptions): SlackRecipient;
    /**
     * Returns true if the given object is an instance of SlackRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is SlackRecipient;
    /**
     * The Slack channel or username to send the notification to. Must begin with `#` or `@` or be a valid channel id e.g.
     * `CABC123DEF.
     */
    readonly channel: pulumi.Output<string>;
    readonly slackRecipientId: pulumi.Output<string>;
    /**
     * Create a SlackRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SlackRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering SlackRecipient resources.
 */
export interface SlackRecipientState {
    /**
     * The Slack channel or username to send the notification to. Must begin with `#` or `@` or be a valid channel id e.g.
     * `CABC123DEF.
     */
    channel?: pulumi.Input<string>;
    slackRecipientId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a SlackRecipient resource.
 */
export interface SlackRecipientArgs {
    /**
     * The Slack channel or username to send the notification to. Must begin with `#` or `@` or be a valid channel id e.g.
     * `CABC123DEF.
     */
    channel: pulumi.Input<string>;
    slackRecipientId?: pulumi.Input<string>;
}
