// namespace widget

class GithubRepositoryWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType() {
        return 'github-repository';
    }

    /**
     * Return the data used to render the widget
     *
     * @returns {Array}
     */
    getData() {
        return [
            {
                'icon': {
                    'icon': 'code',
                    'size': 'large',
                    'color': 'purple'
                },
                'title': 'akeneo/pim-community-dev',
                'description': 'The open source Product Information Management (PIM)',
                'url': 'https://github.com/akeneo/pim-community-dev'
            },
            {
                'icon': {
                    'icon': 'code',
                    'size': 'large',
                    'color': 'purple'
                },
                'title': 'akeneo/pim-enterprise-dev',
                'description': 'The open source Product Information Management (PIM)',
                'url': 'https://github.com/akeneo/pim-enterprise-dev'
            },
        ]
    }
}

module.exports = new GithubRepositoryWidget();
