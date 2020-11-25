'use strict';

// I gto help from here: https://practice.geeksforgeeks.org/problems/print-common-nodes-in-bst/1

const t = require('./tree');

function treeIntersect(treeOne, treeTwo) {
  let baseComparison = getValues(treeOne.root);
  let intersections = findIntersections(treeTwo.root, baseComparison);
  return intersections;
}

function getValues(root) {
  try {
    let values = {};
    if (root) {
      getValuesHelper(root, values);
    }
    return values;
  }
  catch (err) {
    console.log('Nothing was passed: ', err);
  }
}

function getValuesHelper(root, values) {
  values[root.value] = root.value;

  if (root.left !== null) {
    getValuesHelper(root.left, values);
  }

  if (root.right !== null) {
    getValuesHelper(root.right, values);
  }
}

function findIntersections(root, obj) {
  try {
    let results = [];
    if (root !== null) {
      findIntersectionsHelper(root, results, obj);
    }
    return results;
  }
  catch (err) {
    console.log('An error has occured: ', err)
  }
}

function findIntersectionsHelper(root, results, obj) {
  if (root.value === obj[root.value]) {
    results.push(root.value);
  }
  if (root.left) {
    findIntersectionsHelper(root.left, results, obj);
  }
  if (root.right) {
    findIntersectionsHelper(root.right, results, obj);
  }
}



module.exports = {
  treeIntersect: treeIntersect,
  getValues: getValues,
  getValuesHelper: getValuesHelper,
  findIntersections: findIntersections,
  findIntersectionsHelper: findIntersectionsHelper
}