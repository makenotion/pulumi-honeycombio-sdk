import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getRecipients(args?: GetRecipientsArgs, opts?: pulumi.InvokeOptions): Promise<GetRecipientsResult>;
/**
 * A collection of arguments for invoking getRecipients.
 */
export interface GetRecipientsArgs {
    detailFilter?: inputs.GetRecipientsDetailFilter;
    id?: string;
    type?: string;
}
/**
 * A collection of values returned by getRecipients.
 */
export interface GetRecipientsResult {
    readonly detailFilter?: outputs.GetRecipientsDetailFilter;
    readonly id: string;
    readonly ids: string[];
    readonly type?: string;
}
export declare function getRecipientsOutput(args?: GetRecipientsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRecipientsResult>;
/**
 * A collection of arguments for invoking getRecipients.
 */
export interface GetRecipientsOutputArgs {
    detailFilter?: pulumi.Input<inputs.GetRecipientsDetailFilterArgs>;
    id?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
