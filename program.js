process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
        	case 'version':
        		console.log(process.versions);
        		break;
        	case '/exit':
        		console.log('Quitting app!\n');
        		break;
        	default:
                console.log('Wrong instruction!\n');
        }      
    }
});
