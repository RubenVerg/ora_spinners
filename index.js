let exp = require('./index.json'), c = require('chalk'), ls = require('log-symbols'), pathed = require('object-path')(exp);

/**
 * @description Get a element from an object given the path.
 * @param {string} p The path.
 * @param {object} o The object to search in.
 */

exports.succeed = (what) => {
	let chalkF = pathed.get(what + '.succeed.color') || 'green';
	chalkF = c[chalkF];
	let r = pathed.get(what + '.succeed.text') || ls.success;
	r = chalkF(r);
	return r;
}

exports.fail = (what) => {
	let chalkF = pathed.get(what + '.fail.color') || 'red';
	chalkF = c[chalkF];
	let r = pathed.get(what + '.fail.text') || ls.error;
	r = chalkF(r);
	return r;
}

exports.warn = (what) => {
	let chalkF = pathed.get(what + '.warn.color') || 'yellow';
	chalkF = c[chalkF];
	let r = pathed.get(what + '.warn.text') || ls.warning;
	r = chalkF(r);
	return r;
}

exports.info = (what) => {
	let chalkF = pathed.get(what + '.info.color') || 'blue';
	chalkF = c[chalkF];
	let r = pathed.get(what + '.info.text') || ls.info;
	r = chalkF(r);
	return r;
}

module.exports = Object.assign({}, exports, exp);