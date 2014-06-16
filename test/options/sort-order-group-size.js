var assert = require('assert');

describe('options/sort-order-group-size', function() {
    beforeEach(function() {
        this.filename = __filename;
    });

    it('No group size + single group + leftovers', function() {
        this.comb.configure({
            'sort-order': ['color', 'width', 'position']
        });
        this.shouldBeEqual('test.css', 'test.expected.css');
    });

    it('Group size 1 + multiple groups + leftovers', function() {
        this.comb.configure({
            'sort-order-group-size': 1,
            'sort-order': [
                ['color'],
                ['width'],
                ['position']
            ]
        });
        this.shouldBeEqual('test.css', 'test-2.expected.css');
    });

    it('Group size 2 + multiple groups + leftovers', function() {
        this.comb.configure({
            'sort-order-group-size': 2,
            'sort-order': [
                ['color'],
                ['width'],
                ['position']
            ]
        });
        this.shouldBeEqual('test.css', 'test-3.expected.css');
    });

    it('Group size 4 + multiple groups + leftovers', function() {
        this.comb.configure({
            'sort-order-group-size': 4,
            'sort-order': [
                ['color'],
                ['width'],
                ['position']
            ]
        });
        this.shouldBeEqual('test.css', 'test-4.expected.css');
    });
});

