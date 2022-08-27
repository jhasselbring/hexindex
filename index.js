"use strict";
exports.__esModule = true;
exports.getHex = exports.getIndex = void 0;
var indexToHex = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': 'a',
    '11': 'b',
    '12': 'c',
    '13': 'd',
    '14': 'e',
    '15': 'f'
};
var hexToIndex = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    'a': '10',
    'b': '11',
    'c': '12',
    'd': '13',
    'e': '14',
    'f': '15'
};
var getIndex = function (hex) {
    return hexToIndex[hex];
};
exports.getIndex = getIndex;
var getHex = function (index) {
    return indexToHex[index];
};
exports.getHex = getHex;
