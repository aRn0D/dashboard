// namespace widget

class GithubIssueWidget {
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
        let issues = [];
        for (let i = 0;i < 10;i++) {
            issues.push({
                'icon': {
                    'icon': 'github',
                    'size': 'large',
                    'color': 'black'
                },
                'title': 'Call to undefined function in ApcCache.php',
                'description': '#4829 opened 5 days ago by mepdr',
                'url': ''
            });
        }

        return issues;
    }
}

module.exports = new GithubIssueWidget();
