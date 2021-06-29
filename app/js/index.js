// Importing Helpers
import { NodeHelper, FuncsHelper } from './modules/Helpers';

// Getting Methods from Helpers
const { getNode, getNodes, addClass, removeClass, nextNode } = new NodeHelper();
const { imgLoadHelper } = new FuncsHelper();

// Invoking Functions from Helper

function fullPage() {
  new fullpage('#fullpage', {
    licenseKey: 'YOUR KEY HERE',
    // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],

    lockAnchors: false,
    anchors: ['page-1', 'page-2', 'page-3', 'page-4'],
    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['page-1', 'page-2', 'page-3', 'page-4'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
  });
}

function init() {
  fullPage();
}
init();
