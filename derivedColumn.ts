// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DerivedColumn extends pulumi.CustomResource {
    /**
     * Get an existing DerivedColumn resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DerivedColumnState, opts?: pulumi.CustomResourceOptions): DerivedColumn {
        return new DerivedColumn(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'honeycombio:index/derivedColumn:DerivedColumn';

    /**
     * Returns true if the given object is an instance of DerivedColumn.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DerivedColumn {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DerivedColumn.__pulumiType;
    }

    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    public readonly alias!: pulumi.Output<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    public readonly dataset!: pulumi.Output<string | undefined>;
    public readonly derivedColumnId!: pulumi.Output<string>;
    /**
     * A description of the derived column.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    public readonly expression!: pulumi.Output<string>;

    /**
     * Create a DerivedColumn resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DerivedColumnArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DerivedColumnArgs | DerivedColumnState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DerivedColumnState | undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["dataset"] = state ? state.dataset : undefined;
            resourceInputs["derivedColumnId"] = state ? state.derivedColumnId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["expression"] = state ? state.expression : undefined;
        } else {
            const args = argsOrState as DerivedColumnArgs | undefined;
            if ((!args || args.alias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.expression === undefined) && !opts.urn) {
                throw new Error("Missing required property 'expression'");
            }
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["dataset"] = args ? args.dataset : undefined;
            resourceInputs["derivedColumnId"] = args ? args.derivedColumnId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["expression"] = args ? args.expression : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DerivedColumn.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DerivedColumn resources.
 */
export interface DerivedColumnState {
    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    alias?: pulumi.Input<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    derivedColumnId?: pulumi.Input<string>;
    /**
     * A description of the derived column.
     */
    description?: pulumi.Input<string>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    expression?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DerivedColumn resource.
 */
export interface DerivedColumnArgs {
    /**
     * The alias of the derived column. Must be unique within the dataset or environment.
     */
    alias: pulumi.Input<string>;
    /**
     * The dataset this derived column belongs to. If not set, it will be Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    derivedColumnId?: pulumi.Input<string>;
    /**
     * A description of the derived column.
     */
    description?: pulumi.Input<string>;
    /**
     * The formula of the derived column. See [Derived Column
     * Syntax](https://docs.honeycomb.io/reference/derived-column-formula/syntax/).
     */
    expression: pulumi.Input<string>;
}
