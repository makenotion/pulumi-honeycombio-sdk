import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class WebhookRecipient extends pulumi.CustomResource {
    /**
     * Get an existing WebhookRecipient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebhookRecipientState, opts?: pulumi.CustomResourceOptions): WebhookRecipient;
    /**
     * Returns true if the given object is an instance of WebhookRecipient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is WebhookRecipient;
    /**
     * Custom headers for webhooks
     */
    readonly headers: pulumi.Output<outputs.WebhookRecipientHeader[] | undefined>;
    /**
     * The name of this Webhook recipient.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The secret to include when sending the notification to the webhook.
     */
    readonly secret: pulumi.Output<string | undefined>;
    /**
     * Template for custom webhook payloads
     */
    readonly templates: pulumi.Output<outputs.WebhookRecipientTemplate[] | undefined>;
    /**
     * The URL of the endpoint the notification will be sent to.
     */
    readonly url: pulumi.Output<string>;
    /**
     * Variables for webhook templates
     */
    readonly variables: pulumi.Output<outputs.WebhookRecipientVariable[] | undefined>;
    /**
     * Create a WebhookRecipient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebhookRecipientArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering WebhookRecipient resources.
 */
export interface WebhookRecipientState {
    /**
     * Custom headers for webhooks
     */
    headers?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientHeader>[]>;
    /**
     * The name of this Webhook recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The secret to include when sending the notification to the webhook.
     */
    secret?: pulumi.Input<string>;
    /**
     * Template for custom webhook payloads
     */
    templates?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientTemplate>[]>;
    /**
     * The URL of the endpoint the notification will be sent to.
     */
    url?: pulumi.Input<string>;
    /**
     * Variables for webhook templates
     */
    variables?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientVariable>[]>;
}
/**
 * The set of arguments for constructing a WebhookRecipient resource.
 */
export interface WebhookRecipientArgs {
    /**
     * Custom headers for webhooks
     */
    headers?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientHeader>[]>;
    /**
     * The name of this Webhook recipient.
     */
    name?: pulumi.Input<string>;
    /**
     * The secret to include when sending the notification to the webhook.
     */
    secret?: pulumi.Input<string>;
    /**
     * Template for custom webhook payloads
     */
    templates?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientTemplate>[]>;
    /**
     * The URL of the endpoint the notification will be sent to.
     */
    url: pulumi.Input<string>;
    /**
     * Variables for webhook templates
     */
    variables?: pulumi.Input<pulumi.Input<inputs.WebhookRecipientVariable>[]>;
}
