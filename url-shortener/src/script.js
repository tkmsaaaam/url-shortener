(() => {
	try {
		const DP = '/dp/';
		const originPath = window.location.pathname;
		if (originPath.indexOf(DP) === -1) return;
		const path = originPath.slice(originPath.indexOf(DP) + DP.length);
		const idEndIndex = path.indexOf('/');
		const id = path.substring(0, idEndIndex);
		if (id) {
			const url = window.location.origin + DP + id;
			window.location.replace(url);
		}
	} catch (e) {
		console.log(e);
		alert(e);
	}
})();
