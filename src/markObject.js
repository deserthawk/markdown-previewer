import { marked } from 'marked';

const markObject = marked.setOptions({
    breaks: true
});

export default markObject;