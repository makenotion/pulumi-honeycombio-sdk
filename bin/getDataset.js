"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatasetOutput = exports.getDataset = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
function getDataset(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("honeycombio:index/getDataset:getDataset", {
        "slug": args.slug,
    }, opts, utilities.getPackage());
}
exports.getDataset = getDataset;
function getDatasetOutput(args, opts) {
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("honeycombio:index/getDataset:getDataset", {
        "slug": args.slug,
    }, opts, utilities.getPackage());
}
exports.getDatasetOutput = getDatasetOutput;
//# sourceMappingURL=getDataset.js.map