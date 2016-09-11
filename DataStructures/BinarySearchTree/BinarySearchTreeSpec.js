var expect = chai.expect;
describe('BinarySearchTree', function() {
	var tree;

	beforeEach(function() {
		tree = new BST(10);
    tree.insert(5);
    tree.insert(9);
	});

  describe('#contains', function() {
    context('when the element is in the binary search tree', function() {
      it('returns true', function() {
        expect(tree.contains(5)).to.equal(true);
        expect(tree.contains(9)).to.equal(true);
      });
    });

    context("when the element isn't in the binary search tree", function() {
      it('returns false', function() {
        expect(tree.contains(3)).to.equal(false);
      });
    });
  });
});