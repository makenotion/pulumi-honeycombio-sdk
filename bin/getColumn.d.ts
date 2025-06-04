import * as pulumi from "@pulumi/pulumi";
export declare function getColumn(args: GetColumnArgs, opts?: pulumi.InvokeOptions): Promise<GetColumnResult>;
/**
 * A collection of arguments for invoking getColumn.
 */
export interface GetColumnArgs {
    dataset: string;
    id?: string;
    name: string;
}
/**
 * A collection of values returned by getColumn.
 */
export interface GetColumnResult {
    readonly createdAt: string;
    readonly dataset: string;
    readonly description: string;
    readonly hidden: boolean;
    readonly id: string;
    readonly lastWrittenAt: string;
    readonly name: string;
    readonly type: string;
    readonly updatedAt: string;
}
export declare function getColumnOutput(args: GetColumnOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetColumnResult>;
/**
 * A collection of arguments for invoking getColumn.
 */
export interface GetColumnOutputArgs {
    dataset: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    name: pulumi.Input<string>;
}
