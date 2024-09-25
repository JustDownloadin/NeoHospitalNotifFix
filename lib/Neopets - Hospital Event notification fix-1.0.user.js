// ==UserScript==
// @name         Neopets - Hospital Event notification fix
// @namespace    https://github.com/JustDownloadin/NeoHospitalNotifFix
// @version      1.0
// @description  Fixes the Neohospital notification on the old site
// @author       Zana
// @match        *://*.neopets.com/*
// @icon         https://images.neopets.com/themes/h5/basic/images/alert/warning-icon.svg
// @grant        none
// @updateURL https://raw.githubusercontent.com/JustDownloadin/NeoHospitalNotifFix/refs/heads/main/lib/Neopets%20-%20Hospital%20Event%20notification%20fix-1.0.user.js
// @downloadURL https://raw.githubusercontent.com/JustDownloadin/NeoHospitalNotifFix/refs/heads/main/lib/Neopets%20-%20Hospital%20Event%20notification%20fix-1.0.user.js
// ==/UserScript==

/* globals jQuery, $, waitForKeyElements */

const oldSite = document.getElementById('neobdy');

function fixUpperBar () {
    const eventInUpperBar = document.querySelector('.eventIcon > a').getAttribute('href');

    if (eventInUpperBar.match(/\S+(volunteer.phtml?)\S+/)) {
        document.querySelector('.eventIcon > a > img').setAttribute('src', 'https://images.neopets.com/themes/h5/basic/images/alert/warning-icon.svg');
    }
};



function fixEventsPage () {
    const eventInEventPage = document.querySelectorAll('img[src="https://images.neopets.com/t/events/.gif"]');

    if (eventInEventPage) {
        for (var i=0; i < eventInEventPage.length; i++) {
            eventInEventPage[i].setAttribute('src', 'https://images.neopets.com/themes/h5/basic/images/alert/warning-icon.svg');
        }
    }

};

oldSite && fixUpperBar();
(oldSite && !!location.href.match(/(allevents.phtml?)\S+/)) && (fixUpperBar(), fixEventsPage());
