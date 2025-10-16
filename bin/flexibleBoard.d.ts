import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
export declare class FlexibleBoard extends pulumi.CustomResource {
    /**
     * Get an existing FlexibleBoard resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FlexibleBoardState, opts?: pulumi.CustomResourceOptions): FlexibleBoard;
    /**
     * Returns true if the given object is an instance of FlexibleBoard.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    static isInstance(obj: any): obj is FlexibleBoard;
    /**
     * The URL of the Board in the Honeycomb UI.
     */
    readonly boardUrl: pulumi.Output<string>;
    /**
     * The description of the Board. Supports Markdown.
     */
    readonly description: pulumi.Output<string>;
    /**
     * The name of the Board.
     */
    readonly name: pulumi.Output<string>;
    /**
     * List of panels to render on the board.
     */
    readonly panels: pulumi.Output<outputs.FlexibleBoardPanel[] | undefined>;
    /**
     * A map of tags to assign to the resource.
     */
    readonly tags: pulumi.Output<{
        [key: string]: string;
    }>;
    /**
     * Create a FlexibleBoard resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FlexibleBoardArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering FlexibleBoard resources.
 */
export interface FlexibleBoardState {
    /**
     * The URL of the Board in the Honeycomb UI.
     */
    boardUrl?: pulumi.Input<string>;
    /**
     * The description of the Board. Supports Markdown.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Board.
     */
    name?: pulumi.Input<string>;
    /**
     * List of panels to render on the board.
     */
    panels?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanel>[]>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
/**
 * The set of arguments for constructing a FlexibleBoard resource.
 */
export interface FlexibleBoardArgs {
    /**
     * The description of the Board. Supports Markdown.
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the Board.
     */
    name?: pulumi.Input<string>;
    /**
     * List of panels to render on the board.
     */
    panels?: pulumi.Input<pulumi.Input<inputs.FlexibleBoardPanel>[]>;
    /**
     * A map of tags to assign to the resource.
     */
    tags?: pulumi.Input<{
        [key: string]: pulumi.Input<string>;
    }>;
}
