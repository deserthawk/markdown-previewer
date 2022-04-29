const initialMarkDown = '# Marked - Markdown Parser ' +
'\n## How To Use The Demo\n[Marked](https://github.com/markedjs/marked/) lets you convert. ' +
'\nHeres some code, `<div></div>`, between 2 backticks.' +
'\n```' +
'\n// this is multi-line code:' +
'\n' +
'\nfunction anotherExample(firstLine, lastLine) {' +
'  \nif (firstLine == \'```\' && lastLine == \'```\') {' +
'     \nreturn multiLineCode;' +
'  \n}' +
'\n}' +
'\n```'+
'\n1. And there are numbered lists too.' +
'\n1. Use just 1s if you want!' +
'\n1. And last but not least, let\'s not forget embedded images:' +
'\n' + 
'\n> Block Quotes! ' +
'\n' + 
'\n ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)' +
'\n' +
'\n You can also make text **bold**... whoa!';

export default initialMarkDown;