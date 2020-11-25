'use strict';

const HashTable = require('../../hash-table/hash-table');
const leftJoin = require('../left-join');

describe('Testing left join', () => {

    it('Should add all the values of the left table but not right table', () => {
        let table1 = new HashTable(1024);
        table1.add('condiment', 'sugar');
        table1.add('utensil', 'fork');
        table1.add('pet', 'dog');

        let table2 = new HashTable(1024);
        table2.add('condiment', 'salt');
        table2.add('medium', 'paper');
        table2.add('pet', 'cat');

        console.log(leftJoin(table1, table2));

        expect(leftJoin(table1, table2)).toEqual([["condiment", "sugar", "salt"], ["utensil", "fork", null], ["pet", "dog", "cat"]]);
    });

});