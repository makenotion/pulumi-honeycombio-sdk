import * as pulumi from "@pulumi/pulumi";
export declare function getColumns(args: GetColumnsArgs, opts?: pulumi.InvokeOptions): Promise<GetColumnsResult>;
/**
 * A collection of arguments for invoking getColumns.
 */
export interface GetColumnsArgs {
    dataset: string;
    id?: string;
    startsWith?: string;
}
/**
 * A collection of values returned by getColumns.
 */
export interface GetColumnsResult {
    readonly dataset: string;
    readonly id: string;
    readonly names: string[];
    readonly startsWith?: string;
}
export declare function getColumnsOutput(args: GetColumnsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetColumnsResult>;
/**
 * A collection of arguments for invoking getColumns.
 */
export interface GetColumnsOutputArgs {
    dataset: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    startsWith?: pulumi.Input<string>;
}
