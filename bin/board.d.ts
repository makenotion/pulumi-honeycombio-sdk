import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class Board extends pulumi.CustomResource {
    /**
     * Get an existing Board resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BoardState, opts?: pulumi.CustomResourceOptions): Board;
    /**
     * Returns true if the given object is an instance of Board.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is Board;
    /**
     * The URL of the Board in the Honeycomb UI.
     */
    readonly boardUrl: pulumi.Output<string>;
    /**
     * The number of columns to layout on the Board.
     */
    readonly columnLayout: pulumi.Output<string>;
    /**
     * The description of the Board. Supports Markdown.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The name of the Board.
     */
    readonly name: pulumi.Output<string>;
    /**
     * A query to be displayed on the Board.
     */
    readonly queries: pulumi.Output<outputs.BoardQuery[] | undefined>;
    /**
     * An SLO to be displayed on the Board.
     */
    readonly slos: pulumi.Output<outputs.BoardSlo[] | undefined>;
    /**
     * How the Board should be displayed in the UI.
     *
     * @deprecated Deprecated
     */
    readonly style: pulumi.Output<string>;
    /**
     * Create a Board resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: BoardArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering Board resources.
 */
export interface BoardState {
    /**
     * The URL of the Board in the Honeycomb UI.
     */
    boardUrl?: pulumi.Input<string>;
    /**
     * The number of columns to layout on the Board.
     */
    columnLayout?: pulumi.Input<string>;
    /**
     * The description of the Board. Supports Markdown.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Board.
     */
    name?: pulumi.Input<string>;
    /**
     * A query to be displayed on the Board.
     */
    queries?: pulumi.Input<pulumi.Input<inputs.BoardQuery>[]>;
    /**
     * An SLO to be displayed on the Board.
     */
    slos?: pulumi.Input<pulumi.Input<inputs.BoardSlo>[]>;
    /**
     * How the Board should be displayed in the UI.
     *
     * @deprecated Deprecated
     */
    style?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a Board resource.
 */
export interface BoardArgs {
    /**
     * The number of columns to layout on the Board.
     */
    columnLayout?: pulumi.Input<string>;
    /**
     * The description of the Board. Supports Markdown.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Board.
     */
    name?: pulumi.Input<string>;
    /**
     * A query to be displayed on the Board.
     */
    queries?: pulumi.Input<pulumi.Input<inputs.BoardQuery>[]>;
    /**
     * An SLO to be displayed on the Board.
     */
    slos?: pulumi.Input<pulumi.Input<inputs.BoardSlo>[]>;
    /**
     * How the Board should be displayed in the UI.
     *
     * @deprecated Deprecated
     */
    style?: pulumi.Input<string>;
}
