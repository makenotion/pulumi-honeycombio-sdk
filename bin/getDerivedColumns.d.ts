import * as pulumi from "@pulumi/pulumi";
export declare function getDerivedColumns(args?: GetDerivedColumnsArgs, opts?: pulumi.InvokeOptions): Promise<GetDerivedColumnsResult>;
/**
 * A collection of arguments for invoking getDerivedColumns.
 */
export interface GetDerivedColumnsArgs {
    dataset?: string;
    startsWith?: string;
}
/**
 * A collection of values returned by getDerivedColumns.
 */
export interface GetDerivedColumnsResult {
    readonly dataset?: string;
    readonly id: string;
    readonly names: string[];
    readonly startsWith?: string;
}
export declare function getDerivedColumnsOutput(args?: GetDerivedColumnsOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDerivedColumnsResult>;
/**
 * A collection of arguments for invoking getDerivedColumns.
 */
export interface GetDerivedColumnsOutputArgs {
    dataset?: pulumi.Input<string>;
    startsWith?: pulumi.Input<string>;
}
