sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'ristmanagement/risks/test/integration/FirstJourney',
		'ristmanagement/risks/test/integration/pages/RisksList',
		'ristmanagement/risks/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('ristmanagement/risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);