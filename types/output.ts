// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ApiKeyPermission {
    /**
     * Allow this key to create missing datasets when sending telemetry.
     */
    createDatasets: boolean;
}

export interface BoardQuery {
    /**
     * Descriptive text to contextualize the Query within the Board. Supports Markdown.
     */
    caption: string;
    /**
     * The Dataset this Query is associated with.
     *
     * @deprecated Deprecated
     */
    dataset: string;
    /**
     * Manages the settings for this query's graph on the board.
     * See [Display Settings](https://docs.honeycomb.io/investigate/query/customize-results/#display-settings-menu) in the documentation for more information.
     */
    graphSettings?: outputs.BoardQueryGraphSetting[];
    /**
     * The ID of the Query Annotation to associate with this Query.
     */
    queryAnnotationId?: string;
    /**
     * The ID of the Query to run.
     */
    queryId: string;
    /**
     * How the query should be displayed within the Board.
     */
    queryStyle: string;
}

export interface BoardQueryGraphSetting {
    /**
     * Disable the overlay of Markers on the graph.
     */
    hideMarkers: boolean;
    /**
     * Set the graph's Y-axis to a logarithmic scale.
     */
    logScale: boolean;
    /**
     * Enable interpolatation between datapoints when the intervening time buckets have no matching events.
     */
    omitMissingValues: boolean;
    /**
     * Allow charts to be overlaid when using supported Visualize operators.
     */
    overlaidCharts: boolean;
    /**
     * Enable the display of groups as stacked colored area under their line graphs.
     */
    stackedGraphs: boolean;
    /**
     * Set the graph's X-axis to UTC.
     */
    utcXaxis: boolean;
}

export interface BoardSlo {
    /**
     * The ID of the SLO.
     */
    id: string;
}

export interface BurnAlertRecipient {
    /**
     * The ID of an existing recipient.
     */
    id: string;
    /**
     * Additional details to send along with the notification.
     */
    notificationDetails?: outputs.BurnAlertRecipientNotificationDetail[];
    /**
     * Target of the notification, this has another meaning depending on the type of recipient.
     */
    target: string;
    /**
     * The type of the notification recipient.
     */
    type: string;
}

export interface BurnAlertRecipientNotificationDetail {
    /**
     * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
     */
    pagerdutySeverity: string;
    /**
     * The variables to set with the webhook notification.
     */
    variables?: outputs.BurnAlertRecipientNotificationDetailVariable[];
}

export interface BurnAlertRecipientNotificationDetailVariable {
    /**
     * The name of the variable
     */
    name: string;
    /**
     * The value of the variable
     */
    value: string;
}

export interface GetAuthMetadataApiKeyAccess {
    /**
     * Whether this API key can create and manage Boards.
     */
    boards: boolean;
    /**
     * Whether this API key can create and manage Queries, Columns, Derived Columns, and Query Annotations.
     */
    columns: boolean;
    /**
     * Whether this API key can create and manage Datasets.
     */
    datasets: boolean;
    /**
     * Whether this API key can send events to Honeycomb.
     */
    events: boolean;
    /**
     * Whether this API key can create and manage Markers.
     */
    markers: boolean;
    /**
     * Whether this API key can execute existing Queries via the Query Data API.
     */
    queries: boolean;
    /**
     * Whether this API key can create and manage Recipients.
     */
    recipients: boolean;
    /**
     * Whether this API key can create and manage SLOs and Burn Alerts.
     */
    slos: boolean;
    /**
     * Whether this API key can create and manage Triggers.
     */
    triggers: boolean;
}

export interface GetAuthMetadataEnvironment {
    /**
     * Whether the Environment is a Classic Environment.
     */
    classic: boolean;
    /**
     * The name of the Environment. For Classic environments, this will be null.
     */
    name: string;
    /**
     * The slug of the Environment. For Classic environments, this will be null.
     */
    slug: string;
}

export interface GetAuthMetadataTeam {
    /**
     * The name of the Team.
     */
    name: string;
    /**
     * The slug of the Team.
     */
    slug: string;
}

export interface GetDatasetsDetailFilter {
    /**
     * The name of the detail field to filter by. Currently only 'name' is supported.
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface GetEnvironmentDetailFilter {
    /**
     * The name of the detail field to filter by. Currently only 'name' is supported.
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface GetEnvironmentsDetailFilter {
    /**
     * The name of the detail field to filter by. Currently only 'name' is supported.
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface GetQuerySpecificationCalculatedField {
    /**
     * The formula to use for the Calculated Field.
     */
    expression: string;
    /**
     * The name of the Calculated Field.
     */
    name: string;
}

export interface GetQuerySpecificationCalculation {
    /**
     * The column to apply the operator on. Not allowed with "COUNT" or "CONCURRENCY", required for all other operators.
     */
    column?: string;
    /**
     * The operatior to apply.
     */
    op: string;
}

export interface GetQuerySpecificationFilter {
    /**
     * The column to filter on.
     */
    column: string;
    /**
     * The operator to apply.
     */
    op: string;
    /**
     * The value used for the filter. Not needed if op is "exists" or "not-exists".
     */
    value?: string;
}

export interface GetQuerySpecificationHaving {
    /**
     * The operator to apply.
     */
    calculateOp: string;
    /**
     * The column to filter on. Not allowed with "COUNT".
     */
    column?: string;
    /**
     * The operator to apply.
     */
    op: string;
    /**
     * The value used for the filter.
     */
    value: number;
}

export interface GetQuerySpecificationOrder {
    /**
     * Either a column present in "breakdown" or a column that "op" applies to.
     */
    column?: string;
    /**
     * The operator to apply.
     */
    op?: string;
    /**
     * The sort order to apply.
     */
    order?: string;
}

export interface GetRecipientDetailFilter {
    /**
     * The name of the detail field to filter by
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface GetRecipientsDetailFilter {
    /**
     * The name of the detail field to filter by
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface GetSlosDetailFilter {
    /**
     * The name of the detail field to filter by. Currently only 'name' is supported.
     */
    name: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}

export interface TriggerBaselineDetail {
    /**
     * What previous time period to evaluate against: 1 hour, 1 day, 1 week, or 4 weeks.
     */
    offsetMinutes: number;
    /**
     * Whether to use an absolute value or percentage delta.
     */
    type: string;
}

export interface TriggerEvaluationSchedule {
    /**
     * The days of the week to evaluate the trigger on
     */
    daysOfWeeks: string[];
    /**
     * UTC time to stop evaluating the trigger in HH:mm format
     */
    endTime: string;
    /**
     * UTC time to start evaluating the trigger in HH:mm format
     */
    startTime: string;
}

export interface TriggerRecipient {
    /**
     * The ID of an existing recipient.
     */
    id: string;
    /**
     * Additional details to send along with the notification.
     */
    notificationDetails?: outputs.TriggerRecipientNotificationDetail[];
    /**
     * Target of the notification, this has another meaning depending on the type of recipient.
     */
    target: string;
    /**
     * The type of the notification recipient.
     */
    type: string;
}

export interface TriggerRecipientNotificationDetail {
    /**
     * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
     */
    pagerdutySeverity: string;
    /**
     * The variables to set with the webhook notification.
     */
    variables?: outputs.TriggerRecipientNotificationDetailVariable[];
}

export interface TriggerRecipientNotificationDetailVariable {
    /**
     * The name of the variable
     */
    name: string;
    /**
     * The value of the variable
     */
    value: string;
}

export interface TriggerThreshold {
    /**
     * The number of times the threshold is met before an alert is sent. Defaults to 1.
     */
    exceededLimit: number;
    /**
     * The operator to apply.
     */
    op: string;
    /**
     * The value to be used with the operator.
     */
    value: number;
}

export interface WebhookRecipientHeader {
    /**
     * The name or key for the header
     */
    name: string;
    /**
     * Value for the header
     */
    value: string;
}

export interface WebhookRecipientTemplate {
    /**
     * JSON formatted string of the webhook payload
     */
    body: string;
    /**
     * The type of the webhook template
     */
    type: string;
}

export interface WebhookRecipientVariable {
    /**
     * An optional default value for the variable
     */
    defaultValue: string;
    /**
     * The name of the variable
     */
    name: string;
}

