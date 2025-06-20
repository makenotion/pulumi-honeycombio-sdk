"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatasetDefinition = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class DatasetDefinition extends pulumi.CustomResource {
    /**
     * Get an existing DatasetDefinition resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new DatasetDefinition(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of DatasetDefinition.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatasetDefinition.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["column"] = state ? state.column : undefined;
            resourceInputs["columnType"] = state ? state.columnType : undefined;
            resourceInputs["dataset"] = state ? state.dataset : undefined;
            resourceInputs["datasetDefinitionId"] = state ? state.datasetDefinitionId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            if ((!args || args.column === undefined) && !opts.urn) {
                throw new Error("Missing required property 'column'");
            }
            if ((!args || args.dataset === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dataset'");
            }
            resourceInputs["column"] = args ? args.column : undefined;
            resourceInputs["dataset"] = args ? args.dataset : undefined;
            resourceInputs["datasetDefinitionId"] = args ? args.datasetDefinitionId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["columnType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatasetDefinition.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.DatasetDefinition = DatasetDefinition;
/** @internal */
DatasetDefinition.__pulumiType = 'honeycombio:index/datasetDefinition:DatasetDefinition';
//# sourceMappingURL=datasetDefinition.js.map