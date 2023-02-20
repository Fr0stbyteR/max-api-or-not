declare namespace MaxAPI {
    type messageTypes = "ALL" | "BANG" | "DICT" | "NUMBER" | "LIST";
    type postLevels = "ERROR" | "INFO" | "WARN";
}

declare const MaxAPI: {
    /** Built-in message types used for generic event handling */
    MESSAGE_TYPES: Record<MaxAPI.messageTypes, string>;
    /** Post/Log Levels */
    POST_LEVELS: Record<MaxAPI.postLevels, string>;
    /**
     * Set a handler/callback function for the given message
     *
     * @param msg The message identifier to set the handler for
     * @param handler The message handler to add
     */
    addHandler(msg: string, handler: (...args: any) => any): void;
    /**
     * Bulk register a set of handlers provided in an object fashion
     *
     * @param handlers The handler objects
     */
    addHandlers(handlers: Record<string, (...args: any) => any>): void;
    /**
     * Access the contents of a dictionary in Max
     *
     * @param id The identifier of the dictionary
     * @returns Return the dictionary if resolved or an Error if rejected
     */
    getDict(id: string): Promise<Record<string, any>>;
    /**
     * Outlets the given value of the object's outlet in Max
     *
     * @param anything The value to output
     * @returns Returns null if resolved or an Error if rejected
     */
    outlet(...anything: any[]): Promise<null>;
    /**
     * Sends a bang out of the object's outlet
     *
     * @returns Returns null if resolved or an Error if rejected
     */
    outletBang(): Promise<null>;
    /**
     * Print the given value to the Max console
     *
     * @param anything The value to post (The last argument for the log level of the post)
     * @returns Returns null if resolved or an Error if rejected
     */
    post(...anything: any[]): Promise<null>;
    /**
     * Registers a shutdown function that will be called before the process exits. Use this to perform any clean up tasks
     *
     * @param fct The function to call before the process exits
     */
    registerShutdownHook(fct: (...args: any) => any): void;
    /**
     * Set a handler/callback function for the given message
     *
     * @param msg The message identifier to remove the handler for
     * @param handler The message handler to remove
     */
    removeHandler(msg: string, handler: (...args: any) => any): void;
    /**
     * Remove all inlet handlers for the given MessageIdentifier. If no identifer is provided this function call removes *all* inlet handlers for *all* messages
     *
     * @param msg The message identifier to remove the handler for
     */
    removeHandlers(msg: string): void;
    /**
     * Overrides the *entire* content of a dictionary in Max
     *
     * @param id The identifier of the dictionary
     * @param content The new content of the dictionary
     * @returns Return the updated dictionary if resolved or an Error if rejected
     */
    setDict(id: string, content: Record<string, any>): Promise<Record<string, any>>;
    /**
     * Updates the content of a dictionary in Max at the given path with the given value
     *
     * @param id The identifier of the dictionary
     * @param path The path of the value change within the dictionary
     * @param value The value to set at this path
     * @returns Return the updated dictionary if resolved or an Error if rejected
     */
    updateDict(id: string, path: string, value: any): Promise<Record<string, any>>;
};

export = MaxAPI;
