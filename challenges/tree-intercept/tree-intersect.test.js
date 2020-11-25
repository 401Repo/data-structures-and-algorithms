'use strict';

const tree = require('../tree-intercept/tree');
const intersect = require('../tree-intercept/tree-intersect');


let binaryTree2 = new tree.bt();
binaryTree2.root = new tree.Node(10);
binaryTree2.root.left = new tree.Node(20);
binaryTree2.root.left.left = new tree.Node(30);
binaryTree2.root.left.right = new tree.Node(40);

let binaryTree1 = new tree.bt();
binaryTree1.root = new tree.Node(20);
binaryTree1.root.left = new tree.Node(30);
binaryTree1.root.left.left = new tree.Node(40);
binaryTree1.root.left.right = new tree.Node(50);

describe('Testing our tree intersect', () => {
  it('Making sure we can get key value pairs', () => {
    expect(intersect.getValues(binaryTree1.root)).toStrictEqual({"20": 20,"30": 30,"40": 40,"50": 50});
    });
  it('We can get an array of the intersect of both tree values', () => {
    expect(intersect.treeIntersect(binaryTree1, binaryTree2)).toStrictEqual([20, 30, 40]);
  });
  it('Error if no root value is found for the intersect application', () => {
    expect(intersect.getValues()).toEqual({});
  });
});
