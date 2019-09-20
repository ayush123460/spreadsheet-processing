const { PythonShell } = require('python-shell');

const ps = new PythonShell('./scripts/spreadsheet.py');

ps.send('Quiz.xlsx');
ps.send('Answers.xlsx');

ps.on('message', function(msg) {
	console.log(message);
});
