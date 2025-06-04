import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class BurnAlert extends pulumi.CustomResource {
    /**
     * Get an existing BurnAlert resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BurnAlertState, opts?: pulumi.CustomResourceOptions): BurnAlert;
    /**
     * Returns true if the given object is an instance of BurnAlert.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is BurnAlert;
    /**
     * The alert type of this Burn Alert.
     */
    readonly alertType: pulumi.Output<string>;
    /**
     * The percent the budget has decreased over the budget rate window.
     */
    readonly budgetRateDecreasePercent: pulumi.Output<number | undefined>;
    /**
     * The time period, in minutes, over which a budget rate will be calculated.
     */
    readonly budgetRateWindowMinutes: pulumi.Output<number | undefined>;
    /**
     * The dataset this Burn Alert is associated with. Will be deprecated in a future release.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * A description for this Burn Alert.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The amount of time, in minutes, remaining before the SLO's error budget will be exhausted and the alert will fire.
     */
    readonly exhaustionMinutes: pulumi.Output<number | undefined>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    readonly recipients: pulumi.Output<outputs.BurnAlertRecipient[] | undefined>;
    /**
     * The ID of the SLO that this Burn Alert is associated with.
     */
    readonly sloId: pulumi.Output<string>;
    /**
     * Create a BurnAlert resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BurnAlertArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering BurnAlert resources.
 */
export interface BurnAlertState {
    /**
     * The alert type of this Burn Alert.
     */
    alertType?: pulumi.Input<string>;
    /**
     * The percent the budget has decreased over the budget rate window.
     */
    budgetRateDecreasePercent?: pulumi.Input<number>;
    /**
     * The time period, in minutes, over which a budget rate will be calculated.
     */
    budgetRateWindowMinutes?: pulumi.Input<number>;
    /**
     * The dataset this Burn Alert is associated with. Will be deprecated in a future release.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A description for this Burn Alert.
     */
    description?: pulumi.Input<string>;
    /**
     * The amount of time, in minutes, remaining before the SLO's error budget will be exhausted and the alert will fire.
     */
    exhaustionMinutes?: pulumi.Input<number>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    recipients?: pulumi.Input<pulumi.Input<inputs.BurnAlertRecipient>[]>;
    /**
     * The ID of the SLO that this Burn Alert is associated with.
     */
    sloId?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a BurnAlert resource.
 */
export interface BurnAlertArgs {
    /**
     * The alert type of this Burn Alert.
     */
    alertType?: pulumi.Input<string>;
    /**
     * The percent the budget has decreased over the budget rate window.
     */
    budgetRateDecreasePercent?: pulumi.Input<number>;
    /**
     * The time period, in minutes, over which a budget rate will be calculated.
     */
    budgetRateWindowMinutes?: pulumi.Input<number>;
    /**
     * The dataset this Burn Alert is associated with. Will be deprecated in a future release.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A description for this Burn Alert.
     */
    description?: pulumi.Input<string>;
    /**
     * The amount of time, in minutes, remaining before the SLO's error budget will be exhausted and the alert will fire.
     */
    exhaustionMinutes?: pulumi.Input<number>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    recipients?: pulumi.Input<pulumi.Input<inputs.BurnAlertRecipient>[]>;
    /**
     * The ID of the SLO that this Burn Alert is associated with.
     */
    sloId: pulumi.Input<string>;
}
