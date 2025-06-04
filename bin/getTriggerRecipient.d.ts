import * as pulumi from "@pulumi/pulumi";
export declare function getTriggerRecipient(args: GetTriggerRecipientArgs, opts?: pulumi.InvokeOptions): Promise<GetTriggerRecipientResult>;
/**
 * A collection of arguments for invoking getTriggerRecipient.
 */
export interface GetTriggerRecipientArgs {
    dataset: string;
    id?: string;
    target?: string;
    type: string;
}
/**
 * A collection of values returned by getTriggerRecipient.
 */
export interface GetTriggerRecipientResult {
    readonly dataset: string;
    readonly id: string;
    readonly target?: string;
    readonly type: string;
}
export declare function getTriggerRecipientOutput(args: GetTriggerRecipientOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetTriggerRecipientResult>;
/**
 * A collection of arguments for invoking getTriggerRecipient.
 */
export interface GetTriggerRecipientOutputArgs {
    dataset: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    target?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
