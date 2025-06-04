import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getSlos(args?: GetSlosArgs, opts?: pulumi.InvokeOptions): Promise<GetSlosResult>;
/**
 * A collection of arguments for invoking getSlos.
 */
export interface GetSlosArgs {
    dataset?: string;
    detailFilters?: inputs.GetSlosDetailFilter[];
}
/**
 * A collection of values returned by getSlos.
 */
export interface GetSlosResult {
    readonly dataset?: string;
    readonly detailFilters?: outputs.GetSlosDetailFilter[];
    readonly id: string;
    readonly ids: string[];
}
export declare function getSlosOutput(args?: GetSlosOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetSlosResult>;
/**
 * A collection of arguments for invoking getSlos.
 */
export interface GetSlosOutputArgs {
    dataset?: pulumi.Input<string>;
    detailFilters?: pulumi.Input<pulumi.Input<inputs.GetSlosDetailFilterArgs>[]>;
}
