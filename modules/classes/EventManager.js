const Event = require('./Event');
const Possibility = require('./Possibility');
const EventsData = require('../utils/Events');
const Tools = require('../utils/Tools');

class EventManager {


    /**
     * Load an event from the event file
     * @param {Number} id - The id of the event that has to be loaded
     * @returns {*} - The event loaded
     */
    loadEvent(id) {
        let event = new Event(id, EventsData.event[id])
        return event;
    }


    /**
     * Load one of the possibilities of the event
     * @param {Number} idEvent - The event the player is curently facing
     * @param {String} emoji  - The emoji the player selected
     * @param {Number} id  - The random id generated to select a posibility
     * @return {*} - The possibility loaded
     */
    loadPossibility(idEvent, emoji, id) {
        let possibility = new Possibility(idEvent, emoji, id, EventsData.possibility[idEvent][emoji][id].timeLost, EventsData.possibility[idEvent][emoji][id].healthPointsChange, EventsData.possibility[idEvent][emoji][id].newEffect, EventsData.possibility[idEvent][emoji][id].xpGained, EventsData.possibility[idEvent][emoji][id].moneyGained, EventsData.possibility[idEvent][emoji][id].item)
        return possibility;
    }


    /**
     * Select a random possibility id from the list of the avalables one for a selected event
     * @param {Number} idEvent - The id of the event that the player is confronting to
     * @param {String} emojiSelected - The emoji that has been selected
     * @returns {Number} - The id of a possibility
     */
    chooseARandomPossibility(idEvent, emojiSelected) {
        let maxLimit = Object.keys(EventsData.possibility[idEvent][emojiSelected]).length;
        return Tools.generateRandomNumber(1,maxLimit);
    };


    /**
     * Select a random event id from the list of the avalables one
     * @returns {Number} - The id of an event
     */
    chooseARandomEvent() {
        let maxLimit = Object.keys(EventsData.event).length - 1;
        return Tools.generateRandomNumber(1,maxLimit);
    };
}

module.exports = EventManager;