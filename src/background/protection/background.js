/*
Licensed per https://github.com/privacy-tech-lab/gpc-optmeowt/blob/main/LICENSE.md
privacy-tech-lab, https://www.privacytechlab.org/
*/



/*
background.js
================================================================================
background.js is the main background script handling OptMeowt's
main opt-out functionality
*/




// delete all modes.readiness
// 


import { enableListeners, disableListeners } from "./listeners-$BROWSER.js"
import { stores, storage } from "../storage.js"
import { modes } from "../../data/modes.js";
import { defaultSettings } from "../../data/defaultSettings.js"
import { initCookiesOnInstall } from "./cookiesOnInstall.js"


// We could alt. use this in place of "building" for chrome/ff, just save it to settings in storage
var userAgent = window.navigator.userAgent.indexOf("Firefox") > -1 ? "moz" : "chrome";


/******************************************************************************/


/**
 * Enables extension functionality and sets site listeners
 * Information regarding the functionality and timing of webRequest and webNavigation 
 * can be found on Mozilla's & Chrome's API docuentation sites (also linked above)
 * 
 * The actual listeners are located in `listeners-(chosen browser).js`
 * The functions called on event occurance are located in `events.js`
 * 
 * HIERARCHY:   manifest.json --> background.js --> listeners-$BROWSER.js --> events.js
 */
// function enable() {
//   enableListeners();
// }

/**
 * Disables extension functionality
 */
// function disable() {
//   disableListeners();
// }


/******************************************************************************/


function preinit() {};

/**
 * Initializes the extension
 * Place all initialization necessary, as high level as can be, here:
 * (1) Sets settings defaults (if not done so), by comparing to whatever
 *     is already placed in the settings store via `storage.js`
 * (2) Places Do Not Sell cookies to be placed on install
 * (3) Sets correct extension on/off mode
 */
async function init() {
  // let settingsDB = storage.getStore(stores.settings);
  // for (let setting in defaultSettings) {
  //   if (!settingsDB[setting]) {
  //     await storage.set(stores.settings, defaultSettings[setting], setting);
  //   }
  // }

  initCookiesOnInstall();

  // const mode = defaultSettings.MODE;
  // // const mode = 
  // if (mode === modes.readiness.enabled || mode === modes.readiness.domainlisted) {
    // enable();
  // } else {
  //   disable();
  // }
  enableListeners();
}

function postinit() {};

function halt() { disableListeners(); };


/******************************************************************************/


export const background = {
  preinit,
  init,
  postinit,
  halt,
}