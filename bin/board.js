"use strict";
// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const pulumi = require("@pulumi/pulumi");
const utilities = require("./utilities");
class Board extends pulumi.CustomResource {
    /**
     * Get an existing Board resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name, id, state, opts) {
        return new Board(name, state, Object.assign(Object.assign({}, opts), { id: id }));
    }
    /**
     * Returns true if the given object is an instance of Board.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj) {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Board.__pulumiType;
    }
    constructor(name, argsOrState, opts) {
        let resourceInputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState;
            resourceInputs["boardUrl"] = state ? state.boardUrl : undefined;
            resourceInputs["columnLayout"] = state ? state.columnLayout : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["queries"] = state ? state.queries : undefined;
            resourceInputs["slos"] = state ? state.slos : undefined;
            resourceInputs["style"] = state ? state.style : undefined;
        }
        else {
            const args = argsOrState;
            resourceInputs["columnLayout"] = args ? args.columnLayout : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["queries"] = args ? args.queries : undefined;
            resourceInputs["slos"] = args ? args.slos : undefined;
            resourceInputs["style"] = args ? args.style : undefined;
            resourceInputs["boardUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Board.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}
exports.Board = Board;
/** @internal */
Board.__pulumiType = 'honeycombio:index/board:Board';
//# sourceMappingURL=board.js.map