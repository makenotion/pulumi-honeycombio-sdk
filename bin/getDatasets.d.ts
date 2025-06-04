import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getDatasets(args?: GetDatasetsArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetsResult>;
/**
 * A collection of arguments for invoking getDatasets.
 */
export interface GetDatasetsArgs {
    detailFilters?: inputs.GetDatasetsDetailFilter[];
    /**
     * @deprecated Deprecated
     */
    startsWith?: string;
}
/**
 * A collection of values returned by getDatasets.
 */
export interface GetDatasetsResult {
    readonly detailFilters?: outputs.GetDatasetsDetailFilter[];
    readonly id: string;
    readonly names: string[];
    readonly slugs: string[];
    /**
     * @deprecated Deprecated
     */
    readonly startsWith?: string;
}
export declare function getDatasetsOutput(args?: GetDatasetsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatasetsResult>;
/**
 * A collection of arguments for invoking getDatasets.
 */
export interface GetDatasetsOutputArgs {
    detailFilters?: pulumi.Input<pulumi.Input<inputs.GetDatasetsDetailFilterArgs>[]>;
    /**
     * @deprecated Deprecated
     */
    startsWith?: pulumi.Input<string>;
}
