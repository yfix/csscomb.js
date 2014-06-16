module.exports = {
    name: 'sort-order-group-size',

    /**
     * Sets handler value.
     *
     * @param {Number} value Option value
     * @returns {Number}
     */
    setValue: function(value) {
        if (typeof value !== 'number') throw new Error('The option accepts only numbers');

        return Math.floor(value);
    },


    accepts: { number: true },

    process: function() {}
};
