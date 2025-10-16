import * as pulumi from "@pulumi/pulumi";
export declare class Slo extends pulumi.CustomResource {
    /**
     * Get an existing Slo resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SloState, opts?: pulumi.CustomResourceOptions): Slo;
    /**
     * Returns true if the given object is an instance of Slo.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Slo;
    /**
     * The dataset this SLO is created in. Will be deprecated in a future release. Must be the same dataset as the SLI unless
     * the SLI Derived Column is Environment-wide.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * The datasets the SLO is evaluated on.
     */
    readonly datasets: pulumi.Output<string[]>;
    /**
     * A description of the SLO's intent and context.
     */
    readonly description: pulumi.Output<string | undefined>;
    /**
     * The name of the SLO.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The alias of the Derived Column that will be used as the SLI to indicate event success. The derived column used as the
     * SLI must be in the same dataset as the SLO. Additionally, the column evaluation should consistently return nil, true, or
     * false, as these are the only valid values for an SLI.
     */
    readonly sli: pulumi.Output<string>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * The percentage of qualified events that you expect to succeed during the `time_period`.
     */
    readonly targetPercentage: pulumi.Output<number>;
    /**
     * The time period, in days, over which your SLO will be evaluated.
     */
    readonly timePeriod: pulumi.Output<number>;
    /**
     * Create a Slo resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SloArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Slo resources.
 */
export interface SloState {
    /**
     * The dataset this SLO is created in. Will be deprecated in a future release. Must be the same dataset as the SLI unless
     * the SLI Derived Column is Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The datasets the SLO is evaluated on.
     */
    datasets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description of the SLO's intent and context.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the SLO.
     */
    name?: pulumi.Input<string>;
    /**
     * The alias of the Derived Column that will be used as the SLI to indicate event success. The derived column used as the
     * SLI must be in the same dataset as the SLO. Additionally, the column evaluation should consistently return nil, true, or
     * false, as these are the only valid values for an SLI.
     */
    sli?: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The percentage of qualified events that you expect to succeed during the `time_period`.
     */
    targetPercentage?: pulumi.Input<number>;
    /**
     * The time period, in days, over which your SLO will be evaluated.
     */
    timePeriod?: pulumi.Input<number>;
}
/**
 * The set of arguments for constructing a Slo resource.
 */
export interface SloArgs {
    /**
     * The dataset this SLO is created in. Will be deprecated in a future release. Must be the same dataset as the SLI unless
     * the SLI Derived Column is Environment-wide.
     */
    dataset?: pulumi.Input<string>;
    /**
     * The datasets the SLO is evaluated on.
     */
    datasets?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * A description of the SLO's intent and context.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the SLO.
     */
    name?: pulumi.Input<string>;
    /**
     * The alias of the Derived Column that will be used as the SLI to indicate event success. The derived column used as the
     * SLI must be in the same dataset as the SLO. Additionally, the column evaluation should consistently return nil, true, or
     * false, as these are the only valid values for an SLI.
     */
    sli: pulumi.Input<string>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * The percentage of qualified events that you expect to succeed during the `time_period`.
     */
    targetPercentage: pulumi.Input<number>;
    /**
     * The time period, in days, over which your SLO will be evaluated.
     */
    timePeriod: pulumi.Input<number>;
}
