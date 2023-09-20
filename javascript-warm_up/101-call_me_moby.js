#!/usr/bin/node
function callMeMoby(x, theFuction) {
	for (let i = 0; i < x; i++) {
		theFuction();
	}
}

module.exports.callMeMoby = callMeMoby;