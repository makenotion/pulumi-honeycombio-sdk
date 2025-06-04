import * as pulumi from "@pulumi/pulumi";
export declare function getSlo(args: GetSloArgs, opts?: pulumi.InvokeOptions): Promise<GetSloResult>;
/**
 * A collection of arguments for invoking getSlo.
 */
export interface GetSloArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: string;
    id: string;
}
/**
 * A collection of values returned by getSlo.
 */
export interface GetSloResult {
    /**
     * @deprecated Deprecated
     */
    readonly dataset: string;
    readonly datasets: string[];
    readonly description: string;
    readonly id: string;
    readonly name: string;
    readonly sli: string;
    readonly targetPercentage: number;
    readonly timePeriod: number;
}
export declare function getSloOutput(args: GetSloOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSloResult>;
/**
 * A collection of arguments for invoking getSlo.
 */
export interface GetSloOutputArgs {
    /**
     * @deprecated Deprecated
     */
    dataset?: pulumi.Input<string>;
    id: pulumi.Input<string>;
}
