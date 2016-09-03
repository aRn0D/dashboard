// namespace widget

class PimInstallWidget {
    /**
     * Return the type of the widget
     *
     * @returns {string}
     */
    getType() {
        return 'pim-installation';
    }

    /**
     * Return the data used to render the widget
     *
     * @returns {Array}
     */
    getData() {
        let installations = [];
        let versions = ['1.4', '1.5', '1.6', 'master'];
        let installationsTypes = ['default', 'behat'];

        for (let installationsType of installationsTypes) {
            for (let version of versions) {
                let applicationSuffix = 'behat' === installationsType ? '-behat' : '';
                let color = 'behat' === installationsType ? 'yellow' : 'purple';
                let formattedVersion = version.replace('.', '');

                formattedVersion = 'master' === formattedVersion ? '' : formattedVersion;

                installations.push({
                    'title': 'PIM ' + version,
                    'icon': 'code',
                    'color': color,
                    'links': [
                        {
                            'icon': 'database',
                            'label': 'ORM',
                            'url': 'http://pee' + applicationSuffix + formattedVersion + '.akeneo.local',
                        },
                        {
                            'icon': 'file',
                            'label': 'ODM',
                            'url': 'http://peem' + applicationSuffix + formattedVersion + '.akeneo.local',
                        }
                    ],
                    'type': installationsType
                });
            }
        }

        return installations;
    }
}

module.exports = new PimInstallWidget();
