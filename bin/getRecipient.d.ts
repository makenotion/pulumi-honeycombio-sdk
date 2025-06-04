import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getRecipient(args: GetRecipientArgs, opts?: pulumi.InvokeOptions): Promise<GetRecipientResult>;
/**
 * A collection of arguments for invoking getRecipient.
 */
export interface GetRecipientArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: string;
    detailFilter?: inputs.GetRecipientDetailFilter;
    id?: string;
    /**
     * @deprecated Deprecated
     */
    target?: string;
    type: string;
}
/**
 * A collection of values returned by getRecipient.
 */
export interface GetRecipientResult {
    readonly address: string;
    readonly channel: string;
    /**
     * @deprecated Deprecated
     */
    readonly dataset?: string;
    readonly detailFilter?: outputs.GetRecipientDetailFilter;
    readonly id: string;
    readonly integrationKey: string;
    readonly integrationName: string;
    readonly name: string;
    readonly secret: string;
    /**
     * @deprecated Deprecated
     */
    readonly target?: string;
    readonly type: string;
    readonly url: string;
}
export declare function getRecipientOutput(args: GetRecipientOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetRecipientResult>;
/**
 * A collection of arguments for invoking getRecipient.
 */
export interface GetRecipientOutputArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: pulumi.Input<string>;
    detailFilter?: pulumi.Input<inputs.GetRecipientDetailFilterArgs>;
    id?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    target?: pulumi.Input<string>;
    type: pulumi.Input<string>;
}
