# hash-router.js - URL Hash Router
## Usage
	<script src="hash-router.min.js"></script>
	
	<script>
		var router = new HashRouter();

		// http://url.com# or http://url.com
		router.add('', function () {
			alert('home');
		});

		// http://url.com#foo
		router.add('foo', function () {
			alert('foo');
		});

		// http://url.com#car?a=1&b&c=
			router.add('car', function (params) {
			console.log(params);
		});
	</scrtip>
