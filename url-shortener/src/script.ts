((): void => {
	try {
		const DP: string = '/dp/';
		const originPath: string = window.location.pathname;
		if (originPath.indexOf(DP) === -1) return;
		const path: string = originPath.slice(originPath.indexOf(DP) + DP.length);
		const idEndIndex: number = path.indexOf('/');
		const id: string = path.substring(0, idEndIndex);
		if (id) {
			const url: string = window.location.origin + DP + id;
			window.location.replace(url);
		}
	} catch (e) {
		console.log(e);
		alert(e);
	}
})();
