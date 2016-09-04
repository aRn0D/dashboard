// namespace widget

class GithubPullRequestWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType () {
        return 'github-pull-request';
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

module.exports = new GithubPullRequestWidget();
