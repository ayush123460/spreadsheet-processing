const { PythonShell } = require('python-shell');

const ps = new PythonShell('./spreadsheet.py');

ps.send('Quiz.xlsx');
ps.send('Answers.xlsx');

ps.on('message', function(msg) {
	console.log(message);
});
