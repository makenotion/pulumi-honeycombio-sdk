import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getEnvironments(args?: GetEnvironmentsArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentsResult>;
/**
 * A collection of arguments for invoking getEnvironments.
 */
export interface GetEnvironmentsArgs {
    detailFilters?: inputs.GetEnvironmentsDetailFilter[];
}
/**
 * A collection of values returned by getEnvironments.
 */
export interface GetEnvironmentsResult {
    readonly detailFilters?: outputs.GetEnvironmentsDetailFilter[];
    readonly id: string;
    readonly ids: string[];
}
export declare function getEnvironmentsOutput(args?: GetEnvironmentsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnvironmentsResult>;
/**
 * A collection of arguments for invoking getEnvironments.
 */
export interface GetEnvironmentsOutputArgs {
    detailFilters?: pulumi.Input<pulumi.Input<inputs.GetEnvironmentsDetailFilterArgs>[]>;
}
