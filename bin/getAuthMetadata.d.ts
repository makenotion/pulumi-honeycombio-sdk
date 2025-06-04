import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare function getAuthMetadata(args?: GetAuthMetadataArgs, opts?: pulumi.InvokeOptions): Promise<GetAuthMetadataResult>;
/**
 * A collection of arguments for invoking getAuthMetadata.
 */
export interface GetAuthMetadataArgs {
    apiKeyAccess?: inputs.GetAuthMetadataApiKeyAccess;
    environment?: inputs.GetAuthMetadataEnvironment;
    team?: inputs.GetAuthMetadataTeam;
}
/**
 * A collection of values returned by getAuthMetadata.
 */
export interface GetAuthMetadataResult {
    readonly apiKeyAccess?: outputs.GetAuthMetadataApiKeyAccess;
    readonly environment?: outputs.GetAuthMetadataEnvironment;
    /**
     * The provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
    readonly team?: outputs.GetAuthMetadataTeam;
}
export declare function getAuthMetadataOutput(args?: GetAuthMetadataOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<GetAuthMetadataResult>;
/**
 * A collection of arguments for invoking getAuthMetadata.
 */
export interface GetAuthMetadataOutputArgs {
    apiKeyAccess?: pulumi.Input<inputs.GetAuthMetadataApiKeyAccessArgs>;
    environment?: pulumi.Input<inputs.GetAuthMetadataEnvironmentArgs>;
    team?: pulumi.Input<inputs.GetAuthMetadataTeamArgs>;
}
