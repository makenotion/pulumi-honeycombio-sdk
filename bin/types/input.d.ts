import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
export interface ApiKeyPermission {
    /**
     * Allow this key to create missing datasets when sending telemetry.
     */
    createDatasets?: pulumi.Input<boolean>;
}
export interface BoardQuery {
    /**
     * Descriptive text to contextualize the Query within the Board. Supports Markdown.
     */
    caption?: pulumi.Input<string>;
    /**
     * The Dataset this Query is associated with.
     *
     * @deprecated Deprecated
     */
    dataset?: pulumi.Input<string>;
    /**
     * Manages the settings for this query's graph on the board.
     * See [Display Settings](https://docs.honeycomb.io/investigate/query/customize-results/#display-settings-menu) in the documentation for more information.
     */
    graphSettings?: pulumi.Input<pulumi.Input<inputs.BoardQueryGraphSetting>[]>;
    /**
     * The ID of the Query Annotation to associate with this Query.
     */
    queryAnnotationId?: pulumi.Input<string>;
    /**
     * The ID of the Query to run.
     */
    queryId: pulumi.Input<string>;
    /**
     * How the query should be displayed within the Board.
     */
    queryStyle?: pulumi.Input<string>;
}
export interface BoardQueryGraphSetting {
    /**
     * Disable the overlay of Markers on the graph.
     */
    hideMarkers?: pulumi.Input<boolean>;
    /**
     * Set the graph's Y-axis to a logarithmic scale.
     */
    logScale?: pulumi.Input<boolean>;
    /**
     * Enable interpolatation between datapoints when the intervening time buckets have no matching events.
     */
    omitMissingValues?: pulumi.Input<boolean>;
    /**
     * Allow charts to be overlaid when using supported Visualize operators.
     */
    overlaidCharts?: pulumi.Input<boolean>;
    /**
     * Enable the display of groups as stacked colored area under their line graphs.
     */
    stackedGraphs?: pulumi.Input<boolean>;
    /**
     * Set the graph's X-axis to UTC.
     */
    utcXaxis?: pulumi.Input<boolean>;
}
export interface BoardSlo {
    /**
     * The ID of the SLO.
     */
    id: pulumi.Input<string>;
}
export interface BurnAlertRecipient {
    /**
     * The ID of an existing recipient.
     */
    id?: pulumi.Input<string>;
    /**
     * Additional details to send along with the notification.
     */
    notificationDetails?: pulumi.Input<pulumi.Input<inputs.BurnAlertRecipientNotificationDetail>[]>;
    /**
     * Target of the notification, this has another meaning depending on the type of recipient.
     */
    target?: pulumi.Input<string>;
    /**
     * The type of the notification recipient.
     */
    type?: pulumi.Input<string>;
}
export interface BurnAlertRecipientNotificationDetail {
    /**
     * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
     */
    pagerdutySeverity?: pulumi.Input<string>;
    /**
     * The variables to set with the webhook notification.
     */
    variables?: pulumi.Input<pulumi.Input<inputs.BurnAlertRecipientNotificationDetailVariable>[]>;
}
export interface BurnAlertRecipientNotificationDetailVariable {
    /**
     * The name of the variable
     */
    name: pulumi.Input<string>;
    /**
     * The value of the variable
     */
    value?: pulumi.Input<string>;
}
export interface FlexibleBoardPanel {
    /**
     * Manages the position of the panel on the board.
     */
    positions?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanelPosition>[]>;
    /**
     * A query panel to be displayed on the Board.
     */
    queryPanels?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanelQueryPanel>[]>;
    /**
     * A Service Level Objective(SLO) panel to be displayed on the Board.
     */
    sloPanels?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanelSloPanel>[]>;
    /**
     * The panel type, either "query" or "slo".
     */
    type: pulumi.Input<string>;
}
export interface FlexibleBoardPanelPosition {
    /**
     * The height of the panel.
     */
    height?: pulumi.Input<number>;
    /**
     * The width of the panel.
     */
    width?: pulumi.Input<number>;
    /**
     * The X coordinate of the panel.
     */
    xCoordinate?: pulumi.Input<number>;
    /**
     * The Y coordinate of the panel.
     */
    yCoordinate?: pulumi.Input<number>;
}
export interface FlexibleBoardPanelQueryPanel {
    /**
     * Query annotation ID.
     */
    queryAnnotationId: pulumi.Input<string>;
    /**
     * Query ID to be rendered in the panel.
     */
    queryId: pulumi.Input<string>;
    /**
     * The visual style of the query (e.g., 'graph', 'combo').
     */
    queryStyle?: pulumi.Input<string>;
    visualizationSettings?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanelQueryPanelVisualizationSetting>[]>;
}
export interface FlexibleBoardPanelQueryPanelVisualizationSetting {
    charts?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanelQueryPanelVisualizationSettingChart>[]>;
    /**
     * Hide comparison values.
     */
    hideCompare?: pulumi.Input<boolean>;
    /**
     * Disable Graph tooltips in the results display when hovering over a graph.
     */
    hideHovers?: pulumi.Input<boolean>;
    /**
     * Hide markers from appearing on graph.
     */
    hideMarkers?: pulumi.Input<boolean>;
    /**
     * Combine any visualized AVG, MIN, MAX, and PERCENTILE clauses into a single chart.
     */
    preferOverlaidCharts?: pulumi.Input<boolean>;
    /**
     * Display UTC Time X-Axis or Localtime X-Axis.
     */
    useUtcXaxis?: pulumi.Input<boolean>;
}
export interface FlexibleBoardPanelQueryPanelVisualizationSettingChart {
    /**
     * Index of the chart this configuration controls.
     */
    chartIndex?: pulumi.Input<number>;
    /**
     * Type of chart (e.g., 'line', 'bar').
     */
    chartType?: pulumi.Input<string>;
    /**
     * Omit missing values from the visualization.
     */
    omitMissingValues?: pulumi.Input<boolean>;
    /**
     * Use logarithmic scale on Y axis.
     */
    useLogScale?: pulumi.Input<boolean>;
}
export interface FlexibleBoardPanelSloPanel {
    /**
     * SLO ID to display in this panel.
     */
    sloId: pulumi.Input<string>;
}
export interface GetAuthMetadataApiKeyAccess {
    /**
     * Whether this API key can create and manage Boards.
     */
    boards?: boolean;
    /**
     * Whether this API key can create and manage Queries, Columns, Derived Columns, and Query Annotations.
     */
    columns?: boolean;
    /**
     * Whether this API key can create and manage Datasets.
     */
    datasets?: boolean;
    /**
     * Whether this API key can send events to Honeycomb.
     */
    events?: boolean;
    /**
     * Whether this API key can create and manage Markers.
     */
    markers?: boolean;
    /**
     * Whether this API key can execute existing Queries via the Query Data API.
     */
    queries?: boolean;
    /**
     * Whether this API key can create and manage Recipients.
     */
    recipients?: boolean;
    /**
     * Whether this API key can create and manage SLOs and Burn Alerts.
     */
    slos?: boolean;
    /**
     * Whether this API key can create and manage Triggers.
     */
    triggers?: boolean;
}
export interface GetAuthMetadataApiKeyAccessArgs {
    /**
     * Whether this API key can create and manage Boards.
     */
    boards?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage Queries, Columns, Derived Columns, and Query Annotations.
     */
    columns?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage Datasets.
     */
    datasets?: pulumi.Input<boolean>;
    /**
     * Whether this API key can send events to Honeycomb.
     */
    events?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage Markers.
     */
    markers?: pulumi.Input<boolean>;
    /**
     * Whether this API key can execute existing Queries via the Query Data API.
     */
    queries?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage Recipients.
     */
    recipients?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage SLOs and Burn Alerts.
     */
    slos?: pulumi.Input<boolean>;
    /**
     * Whether this API key can create and manage Triggers.
     */
    triggers?: pulumi.Input<boolean>;
}
export interface GetAuthMetadataEnvironment {
    /**
     * Whether the Environment is a Classic Environment.
     */
    classic?: boolean;
    /**
     * The name of the Environment. For Classic environments, this will be null.
     */
    name?: string;
    /**
     * The slug of the Environment. For Classic environments, this will be null.
     */
    slug?: string;
}
export interface GetAuthMetadataEnvironmentArgs {
    /**
     * Whether the Environment is a Classic Environment.
     */
    classic?: pulumi.Input<boolean>;
    /**
     * The name of the Environment. For Classic environments, this will be null.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the Environment. For Classic environments, this will be null.
     */
    slug?: pulumi.Input<string>;
}
export interface GetAuthMetadataTeam {
    /**
     * The name of the Team.
     */
    name?: string;
    /**
     * The slug of the Team.
     */
    slug?: string;
}
export interface GetAuthMetadataTeamArgs {
    /**
     * The name of the Team.
     */
    name?: pulumi.Input<string>;
    /**
     * The slug of the Team.
     */
    slug?: pulumi.Input<string>;
}
export interface GetDatasetsDetailFilter {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: string;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}
export interface GetDatasetsDetailFilterArgs {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: pulumi.Input<string>;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
}
export interface GetEnvironmentDetailFilter {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: string;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}
export interface GetEnvironmentDetailFilterArgs {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: pulumi.Input<string>;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
}
export interface GetEnvironmentsDetailFilter {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: string;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}
export interface GetEnvironmentsDetailFilterArgs {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: pulumi.Input<string>;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
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
export interface GetQuerySpecificationCalculatedFieldArgs {
    /**
     * The formula to use for the Calculated Field.
     */
    expression: pulumi.Input<string>;
    /**
     * The name of the Calculated Field.
     */
    name: pulumi.Input<string>;
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
export interface GetQuerySpecificationCalculationArgs {
    /**
     * The column to apply the operator on. Not allowed with "COUNT" or "CONCURRENCY", required for all other operators.
     */
    column?: pulumi.Input<string>;
    /**
     * The operatior to apply.
     */
    op: pulumi.Input<string>;
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
export interface GetQuerySpecificationFilterArgs {
    /**
     * The column to filter on.
     */
    column: pulumi.Input<string>;
    /**
     * The operator to apply.
     */
    op: pulumi.Input<string>;
    /**
     * The value used for the filter. Not needed if op is "exists" or "not-exists".
     */
    value?: pulumi.Input<string>;
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
export interface GetQuerySpecificationHavingArgs {
    /**
     * The operator to apply.
     */
    calculateOp: pulumi.Input<string>;
    /**
     * The column to filter on. Not allowed with "COUNT".
     */
    column?: pulumi.Input<string>;
    /**
     * The operator to apply.
     */
    op: pulumi.Input<string>;
    /**
     * The value used for the filter.
     */
    value: pulumi.Input<number>;
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
export interface GetQuerySpecificationOrderArgs {
    /**
     * Either a column present in "breakdown" or a column that "op" applies to.
     */
    column?: pulumi.Input<string>;
    /**
     * The operator to apply.
     */
    op?: pulumi.Input<string>;
    /**
     * The sort order to apply.
     */
    order?: pulumi.Input<string>;
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
export interface GetRecipientDetailFilterArgs {
    /**
     * The name of the detail field to filter by
     */
    name: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
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
export interface GetRecipientsDetailFilterArgs {
    /**
     * The name of the detail field to filter by
     */
    name: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
}
export interface GetSlosDetailFilter {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: string;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: string;
    /**
     * The value of the detail field to match on.
     */
    value?: string;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: string;
}
export interface GetSlosDetailFilterArgs {
    /**
     * The field to filter by (e.g., 'name', 'id', 'description', etc.).
     */
    name: pulumi.Input<string>;
    /**
     * The comparison operator. The default is 'equals'.
     */
    operator?: pulumi.Input<string>;
    /**
     * The value of the detail field to match on.
     */
    value?: pulumi.Input<string>;
    /**
     * A regular expression string to apply to the value of the detail field to match on.
     */
    valueRegex?: pulumi.Input<string>;
}
export interface TriggerBaselineDetail {
    /**
     * What previous time period to evaluate against: 1 hour, 1 day, 1 week, or 4 weeks.
     */
    offsetMinutes: pulumi.Input<number>;
    /**
     * Whether to use an absolute value or percentage delta.
     */
    type: pulumi.Input<string>;
}
export interface TriggerEvaluationSchedule {
    /**
     * The days of the week to evaluate the trigger on
     */
    daysOfWeeks: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * UTC time to stop evaluating the trigger in HH:mm format
     */
    endTime: pulumi.Input<string>;
    /**
     * UTC time to start evaluating the trigger in HH:mm format
     */
    startTime: pulumi.Input<string>;
}
export interface TriggerRecipient {
    /**
     * The ID of an existing recipient.
     */
    id?: pulumi.Input<string>;
    /**
     * Additional details to send along with the notification.
     */
    notificationDetails?: pulumi.Input<pulumi.Input<inputs.TriggerRecipientNotificationDetail>[]>;
    /**
     * Target of the notification, this has another meaning depending on the type of recipient.
     */
    target?: pulumi.Input<string>;
    /**
     * The type of the notification recipient.
     */
    type?: pulumi.Input<string>;
}
export interface TriggerRecipientNotificationDetail {
    /**
     * The severity to set with the PagerDuty notification. If no severity is provided, 'critical' is assumed.
     */
    pagerdutySeverity?: pulumi.Input<string>;
    /**
     * The variables to set with the webhook notification.
     */
    variables?: pulumi.Input<pulumi.Input<inputs.TriggerRecipientNotificationDetailVariable>[]>;
}
export interface TriggerRecipientNotificationDetailVariable {
    /**
     * The name of the variable
     */
    name: pulumi.Input<string>;
    /**
     * The value of the variable
     */
    value?: pulumi.Input<string>;
}
export interface TriggerThreshold {
    /**
     * The number of times the threshold is met before an alert is sent. Defaults to 1.
     */
    exceededLimit?: pulumi.Input<number>;
    /**
     * The operator to apply.
     */
    op: pulumi.Input<string>;
    /**
     * The value to be used with the operator.
     */
    value: pulumi.Input<number>;
}
export interface WebhookRecipientHeader {
    /**
     * The name or key for the header
     */
    name: pulumi.Input<string>;
    /**
     * Value for the header
     */
    value?: pulumi.Input<string>;
}
export interface WebhookRecipientTemplate {
    /**
     * JSON formatted string of the webhook payload
     */
    body: pulumi.Input<string>;
    /**
     * The type of the webhook template
     */
    type: pulumi.Input<string>;
}
export interface WebhookRecipientVariable {
    /**
     * An optional default value for the variable
     */
    defaultValue?: pulumi.Input<string>;
    /**
     * The name of the variable
     */
    name: pulumi.Input<string>;
}
