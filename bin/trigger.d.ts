import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Trigger extends pulumi.CustomResource {
    /**
     * Get an existing Trigger resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: TriggerState, opts?: pulumi.CustomResourceOptions): Trigger;
    /**
     * Returns true if the given object is an instance of Trigger.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Trigger;
    /**
     * Control when the Trigger will send a notification.
     */
    readonly alertType: pulumi.Output<string>;
    /**
     * A configuration block that allows you to receive notifications when the delta between values in your data, compared to a
     * previous time period, cross thresholds you configure.
     */
    readonly baselineDetails: pulumi.Output<outputs.TriggerBaselineDetail[] | undefined>;
    /**
     * The dataset this Trigger is associated with.
     */
    readonly dataset: pulumi.Output<string>;
    /**
     * A description of the Trigger.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The state of the Trigger. If true, the Trigger will not be run.
     */
    readonly disabled: pulumi.Output<boolean>;
    /**
     * The schedule that determines when the trigger is run. When the time is within the scheduled window, the trigger will be
     * run at the specified frequency. Outside of the window, the trigger will not be run.If no schedule is specified, the
     * trigger will be run at the specified frequency at all times.
     */
    readonly evaluationSchedules: pulumi.Output<outputs.TriggerEvaluationSchedule[] | undefined>;
    /**
     * The interval (in seconds) in which to check the results of the query's calculation against the threshold. This value
     * must be divisible by 60, between 60 and 86400 (between 1 minute and 1 day), and not be more than 4 times the query's
     * duration.
     */
    readonly frequency: pulumi.Output<number>;
    /**
     * The name of the Trigger.
     */
    readonly name: pulumi.Output<string>;
    /**
     * The ID of the Query that the Trigger will execute.
     */
    readonly queryId: pulumi.Output<string | undefined>;
    /**
     * The QuerySpec JSON for the query that the Trigger will execute. Providing the QuerySpec JSON directly allows for
     * additional validation that the QuerySpec is valid as a Trigger Query. While the JSON can be constructed manually, it is
     * easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    readonly queryJson: pulumi.Output<string | undefined>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    readonly recipients: pulumi.Output<outputs.TriggerRecipient[] | undefined>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * A block describing the threshold for the Trigger to fire.
     */
    readonly thresholds: pulumi.Output<outputs.TriggerThreshold[] | undefined>;
    /**
     * Create a Trigger resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: TriggerArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Trigger resources.
 */
export interface TriggerState {
    /**
     * Control when the Trigger will send a notification.
     */
    alertType?: pulumi.Input<string>;
    /**
     * A configuration block that allows you to receive notifications when the delta between values in your data, compared to a
     * previous time period, cross thresholds you configure.
     */
    baselineDetails?: pulumi.Input<pulumi.Input<inputs.TriggerBaselineDetail>[]>;
    /**
     * The dataset this Trigger is associated with.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A description of the Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * The state of the Trigger. If true, the Trigger will not be run.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The schedule that determines when the trigger is run. When the time is within the scheduled window, the trigger will be
     * run at the specified frequency. Outside of the window, the trigger will not be run.If no schedule is specified, the
     * trigger will be run at the specified frequency at all times.
     */
    evaluationSchedules?: pulumi.Input<pulumi.Input<inputs.TriggerEvaluationSchedule>[]>;
    /**
     * The interval (in seconds) in which to check the results of the query's calculation against the threshold. This value
     * must be divisible by 60, between 60 and 86400 (between 1 minute and 1 day), and not be more than 4 times the query's
     * duration.
     */
    frequency?: pulumi.Input<number>;
    /**
     * The name of the Trigger.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Query that the Trigger will execute.
     */
    queryId?: pulumi.Input<string>;
    /**
     * The QuerySpec JSON for the query that the Trigger will execute. Providing the QuerySpec JSON directly allows for
     * additional validation that the QuerySpec is valid as a Trigger Query. While the JSON can be constructed manually, it is
     * easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson?: pulumi.Input<string>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    recipients?: pulumi.Input<pulumi.Input<inputs.TriggerRecipient>[]>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A block describing the threshold for the Trigger to fire.
     */
    thresholds?: pulumi.Input<pulumi.Input<inputs.TriggerThreshold>[]>;
}
/**
 * The set of arguments for constructing a Trigger resource.
 */
export interface TriggerArgs {
    /**
     * Control when the Trigger will send a notification.
     */
    alertType?: pulumi.Input<string>;
    /**
     * A configuration block that allows you to receive notifications when the delta between values in your data, compared to a
     * previous time period, cross thresholds you configure.
     */
    baselineDetails?: pulumi.Input<pulumi.Input<inputs.TriggerBaselineDetail>[]>;
    /**
     * The dataset this Trigger is associated with.
     */
    dataset?: pulumi.Input<string>;
    /**
     * A description of the Trigger.
     */
    description?: pulumi.Input<string>;
    /**
     * The state of the Trigger. If true, the Trigger will not be run.
     */
    disabled?: pulumi.Input<boolean>;
    /**
     * The schedule that determines when the trigger is run. When the time is within the scheduled window, the trigger will be
     * run at the specified frequency. Outside of the window, the trigger will not be run.If no schedule is specified, the
     * trigger will be run at the specified frequency at all times.
     */
    evaluationSchedules?: pulumi.Input<pulumi.Input<inputs.TriggerEvaluationSchedule>[]>;
    /**
     * The interval (in seconds) in which to check the results of the query's calculation against the threshold. This value
     * must be divisible by 60, between 60 and 86400 (between 1 minute and 1 day), and not be more than 4 times the query's
     * duration.
     */
    frequency?: pulumi.Input<number>;
    /**
     * The name of the Trigger.
     */
    name?: pulumi.Input<string>;
    /**
     * The ID of the Query that the Trigger will execute.
     */
    queryId?: pulumi.Input<string>;
    /**
     * The QuerySpec JSON for the query that the Trigger will execute. Providing the QuerySpec JSON directly allows for
     * additional validation that the QuerySpec is valid as a Trigger Query. While the JSON can be constructed manually, it is
     * easiest to use the `honeycombio.getQuerySpecification` data source.
     */
    queryJson?: pulumi.Input<string>;
    /**
     * Zero or more recipients to notify when the resource fires.
     */
    recipients?: pulumi.Input<pulumi.Input<inputs.TriggerRecipient>[]>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
    /**
     * A block describing the threshold for the Trigger to fire.
     */
    thresholds?: pulumi.Input<pulumi.Input<inputs.TriggerThreshold>[]>;
}
