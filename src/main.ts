/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    if (WA.player.tags.includes('bma')) {
        WA.player.setOutlineColor(255, 0, 255)
    }
    if (WA.player.tags.includes('hr')) {
        WA.player.setOutlineColor(0, 0, 255)
    }
    if (WA.player.tags.includes('tech')) {
        WA.player.setOutlineColor(255, 0, 0)
    }


    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

export {};
