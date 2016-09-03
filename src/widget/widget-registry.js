// namespace widget

class WidgetRegistry {
    constructor() {
        this.widgets = [];
    }

    /**
     * Check if the element exists.
     *
     * @param key (string)
     * @returns {boolean}
     */
    has(key) {
        return this.widgets[key] !== undefined;
    }

    /**
     * Add an unique element
     *
     * @param {string} key
     * @param {Widget} element
     */
    register(key, element) {
        if (!this.has(key)) {
            this.widgets[key] = element;
        }
    }

    /**
     * Remove an element
     *
     * @param {string} key
     */
    remove(key) {
        if (this.exists(key)) {
            delete this.widgets[key]
        }
    }

    /**
     * Get an element
     *
     * @param {string} key
     * @returns {Widget}
     */
    get(key) {
        return this.widgets[key]
    }
}

module.exports = new WidgetRegistry();
