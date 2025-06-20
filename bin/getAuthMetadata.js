"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthMetadataOutput = exports.getAuthMetadata = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getAuthMetadata(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("honeycombio:index/getAuthMetadata:getAuthMetadata", {
        "apiKeyAccess": args.apiKeyAccess,
        "environment": args.environment,
        "team": args.team,
    }, opts, utilities.getPackage());
}
exports.getAuthMetadata = getAuthMetadata;
function getAuthMetadataOutput(args, opts) {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("honeycombio:index/getAuthMetadata:getAuthMetadata", {
        "apiKeyAccess": args.apiKeyAccess,
        "environment": args.environment,
        "team": args.team,
    }, opts, utilities.getPackage());
}
exports.getAuthMetadataOutput = getAuthMetadataOutput;
//# sourceMappingURL=getAuthMetadata.js.map