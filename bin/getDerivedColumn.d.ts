import * as pulumi from "@pulumi/pulumi";
export declare function getDerivedColumn(args: GetDerivedColumnArgs, opts?: pulumi.InvokeOptions): Promise<GetDerivedColumnResult>;
/**
 * A collection of arguments for invoking getDerivedColumn.
 */
export interface GetDerivedColumnArgs {
    alias: string;
    dataset?: string;
}
/**
 * A collection of values returned by getDerivedColumn.
 */
export interface GetDerivedColumnResult {
    readonly alias: string;
    readonly dataset?: string;
    readonly description: string;
    readonly expression: string;
    readonly id: string;
}
export declare function getDerivedColumnOutput(args: GetDerivedColumnOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDerivedColumnResult>;
/**
 * A collection of arguments for invoking getDerivedColumn.
 */
export interface GetDerivedColumnOutputArgs {
    alias: pulumi.Input<string>;
    dataset?: pulumi.Input<string>;
}
