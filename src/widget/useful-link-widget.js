// namespace widget

class UsefulLinkWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType() {
        return 'useful-link';
    }

    /**
     * Return the data used to render the widget
     *
     * @returns {Array}
     */
    getData() {
        return [
            {
                'title': 'Google drive',
                'icon': 'google',
                'color': 'green',
                'url': 'https://drive.google.com',
            },
            {
                'title': 'Google calendar',
                'icon': 'calendar',
                'color': 'blue',
                'url': 'https://calendar.google.com',
            },
            {
                'title': 'Jira',
                'icon': 'bar chart',
                'color': 'purple',
                'url': 'https://akeneo.atlassian.net/secure/Dashboard.jspa',
            },
            {
                'title': 'Confluence',
                'icon': 'newspaper',
                'color': 'purple',
                'url': 'https://akeneo.atlassian.net/wiki/dosearchsite.action',
            },
            {
                'title': 'Forum',
                'icon': 'code',
                'color': 'purple',
                'url': 'https://www.akeneo.com/fr/forums/',
            },
            {
                'title': 'Github',
                'icon': 'github',
                'color': 'black',
                'url': 'https://github.com',
            },
            {
                'title': 'Core CI',
                'icon': 'code',
                'color': 'orange',
                'url': 'http://core-ci.akeneo.com/',
            },
            {
                'title': 'PHPmyAdmin',
                'icon': 'database',
                'color': 'orange',
                'url': 'http://localhost/phpmyadmin/',
            }
        ];
    }
}

module.exports = new UsefulLinkWidget();
