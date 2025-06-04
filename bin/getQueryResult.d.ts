import * as pulumi from "@pulumi/pulumi";
export declare function getQueryResult(args: GetQueryResultArgs, opts?: pulumi.InvokeOptions): Promise<GetQueryResultResult>;
/**
 * A collection of arguments for invoking getQueryResult.
 */
export interface GetQueryResultArgs {
    dataset?: string;
    id?: string;
    queryJson: string;
}
/**
 * A collection of values returned by getQueryResult.
 */
export interface GetQueryResultResult {
    readonly dataset?: string;
    readonly graphImageUrl: string;
    readonly id: string;
    readonly queryId: string;
    readonly queryJson: string;
    readonly queryUrl: string;
    readonly results: {
        [key: string]: string;
    }[];
}
export declare function getQueryResultOutput(args: GetQueryResultOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetQueryResultResult>;
/**
 * A collection of arguments for invoking getQueryResult.
 */
export interface GetQueryResultOutputArgs {
    dataset?: pulumi.Input<string>;
    id?: pulumi.Input<string>;
    queryJson: pulumi.Input<string>;
}
