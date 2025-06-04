import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getEnvironment(args?: GetEnvironmentArgs, opts?: pulumi.InvokeOptions): Promise<GetEnvironmentResult>;
/**
 * A collection of arguments for invoking getEnvironment.
 */
export interface GetEnvironmentArgs {
    detailFilters?: inputs.GetEnvironmentDetailFilter[];
    id?: string;
}
/**
 * A collection of values returned by getEnvironment.
 */
export interface GetEnvironmentResult {
    readonly color: string;
    readonly deleteProtected: boolean;
    readonly description: string;
    readonly detailFilters?: outputs.GetEnvironmentDetailFilter[];
    readonly id: string;
    readonly name: string;
    readonly slug: string;
}
export declare function getEnvironmentOutput(args?: GetEnvironmentOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetEnvironmentResult>;
/**
 * A collection of arguments for invoking getEnvironment.
 */
export interface GetEnvironmentOutputArgs {
    detailFilters?: pulumi.Input<pulumi.Input<inputs.GetEnvironmentDetailFilterArgs>[]>;
    id?: pulumi.Input<string>;
}
