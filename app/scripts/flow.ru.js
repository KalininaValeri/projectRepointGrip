/* global cegedim */
'use strict';

cegedim.flow.init({
    '00_0': {
        prev: false,
        next: false,
    },
    '01_1': {
        prev: '00_0',
        next: '02_1',
    },
    '02_1': {
        prev: '01_1',
        next: '03_1',
    },
    '03_1': {
        prev: '02_1',
        next: '04_1',
    },
    '04_1': {
        prev: '03_1',
        next: '05_1',
    },
    '05_1': {
        prev: '04_1',
        next: '06_1',
    },
    '06_1': {
        prev: '05_1',
        next: false,
    },
    '07_2': {
        prev: '00_0',
        next: '08_2',
    },
    '08_2': {
        prev: '07_2',
        next: '09_2',
    },
    '09_2': {
        prev: '08_2',
        next: '10_2',
    },
    '10_2': {
        prev: '09_2',
        next: '11_2',
    },
    '11_2': {
        prev: '10_2',
        next: '12_2',
    },
    '12_2': {
        prev: '11_2',
        next: false,
    },
    '13_3': {
        prev: false,
        next: '14_3',
    },
    '14_3': {
        prev: '13_3',
        next: '15_3',
    },
    '15_3': {
        prev: '14_3',
        next: '16_3',
    },
    '16_3': {
        prev: '15_3',
        next: false,
    },
});


// cegedim.flow.initSequence(false, [
//     'SACAWDRT16070257_0_0_MAIN_SLIDE'
//   ],
//   false
// );
//
// cegedim.flow.initSequence('SACAWDRT16070257_0_0_MAIN_SLIDE', [
//     'SACAWDRT16070257_1_1_DYSMENORRHEA_EFFECTIVENESS',
//     'SACAWDRT16070257_2_1_PAIN_ORIGIN',
//     'SACAWDRT16070257_3_1_ACTIONS',
//     'SACAWDRT16070257_4_1_EFFECTIVENESS',
//     'SACAWDRT16070257_5_1_SPEED',
//     'SACAWDRT16070257_6_1_DURATION',
//     'SACAWDRT16070257_7_1_DOSAGE',
//     'SACAWDRT16070257_8_1_SUMMARY',
//   ],
//   false
// );
//
// cegedim.flow.initSequence('SACAWDRT16070257_0_0_MAIN_SLIDE', [
//     'SACAWDRT16070257_9_2_DYSMENORRHEA_RESEARCH',
//     'SACAWDRT16070257_10_2_MECHANIC',
//     'SACAWDRT16070257_11_2_EFFECTIVENESS',
//     'SACAWDRT16070257_12_2_DOSAGE',
//     'SACAWDRT16070257_13_2_SUMMARY'
//   ],
//   false
// );
