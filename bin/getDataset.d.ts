import * as pulumi from "@pulumi/pulumi";
export declare function getDataset(args: GetDatasetArgs, opts?: pulumi.InvokeOptions): Promise<GetDatasetResult>;
/**
 * A collection of arguments for invoking getDataset.
 */
export interface GetDatasetArgs {
    slug: string;
}
/**
 * A collection of values returned by getDataset.
 */
export interface GetDatasetResult {
    readonly createdAt: string;
    readonly deleteProtected: boolean;
    readonly description: string;
    readonly expandJsonDepth: number;
    readonly id: string;
    readonly lastWrittenAt: string;
    readonly name: string;
    readonly slug: string;
}
export declare function getDatasetOutput(args: GetDatasetOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetDatasetResult>;
/**
 * A collection of arguments for invoking getDataset.
 */
export interface GetDatasetOutputArgs {
    slug: pulumi.Input<string>;
}
