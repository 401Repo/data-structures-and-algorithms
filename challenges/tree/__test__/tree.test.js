'use strict';
// eslint-disable-next-line no-unused-vars
const { BinarySearchTree, BinaryTree, Node } = require('../tree.js');
const {TreeNode, Tree, QueueNode, Queue} = require('../onlyBT.js');


describe(`Testing the tree`, () => {

  it('Can create a tree', () => {
    const newTree = new BinarySearchTree();
    expect(newTree.root).toBe(null);
  });

  it('Can create a tree with a root node', () => {
    const newTree = new BinarySearchTree(10);
    expect(newTree.root.value).toBe(10);
  });

  it('Can add right and left child nodes to root', () => {
    const newTree = new BinarySearchTree(10);
    newTree.add(8);
    newTree.add(20);
    expect(newTree.root.value).toBe(10);
    expect(newTree.root.left.value).toBe(8);
    expect(newTree.root.right.value).toBe(20);
  });

  it('Can return a preorder collection from tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.preOrder()).toEqual([10, 5, 2, 7, 15, 12]);
  });

  it('Can return a colletion of node values in order from tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.inOrder()).toEqual([2, 5, 7, 10, 12, 15]);
  });

  it('Can return a collection post order from the tree nodes', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(5);
    tree.add(2);
    tree.add(7);
    tree.add(15);
    tree.add(12);
    expect(tree.postOrder()).toEqual([2, 7, 5, 12, 15, 10]);
  });
  it('Can find the max val in a binary tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(10);
    tree.add(10);
    tree.add(10);
    tree.add(13);
    tree.add(19);
    tree.add(20);
    tree.add(90);
    tree.add(10);
    expect(tree.getMaxVal()).toEqual(90);
  });

  it('Can return a fizzbuzztree from an input tree', () => {
    const tree = new BinarySearchTree(null);
    tree.add(15);
    tree.add(3);
    tree.add(4);
    tree.add(2);
    expect(tree.fizzBuzzTree()).toEqual({"root": {"left": {"left": {"left": null, "right": {"left": null, "right": null, "value": "4"}, "value": "2"}, "right": null, "value": "Fizz"}, "right": null, "value": "FizzBuzz"}});
  });
  it('Breath search is working', () => {
    const testTree2 = new Tree();
    testTree2.root = new TreeNode(10);
    testTree2.root.children.push(new TreeNode(6));
    testTree2.root.children.push(new TreeNode(15));
    testTree2.root.children[0].children.push(new TreeNode(3));
    testTree2.root.children[0].children.push(new TreeNode(8));
    testTree2.root.children[0].children.push(new TreeNode(7));
    testTree2.root.children[1].children.push(new TreeNode(20));

    expect(testTree2.traverseDFS('in')).toEqual([3, 6, 8, 7, 10, 15, 20]);
  });
});