// namespace widget

class IssueWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType() {
        return 'github-issue';
    }

    /**
     * Return the data used to render the widget
     *
     * @returns {Array}
     */
    getData() {
        return [];
    }
}

module.exports = new IssueWidget();
