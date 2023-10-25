sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'ristmanagement.risks',
            componentId: 'RisksObjectPage',
            contextPath: '/Risks'
        },
        CustomPageDefinitions
    );
});