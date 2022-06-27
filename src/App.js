import React from 'react';
import EditorBox from './components/EditorBox';
import PreviewBox from './components/PreviewBox';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: placeholder,
      editorExpanded: false,
      previewExpanded: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorExpand = this.handleEditorExpand.bind(this);
    this.handlePreviewExpand = this.handlePreviewExpand.bind(this);
  }

  handleInputChange = (e) => {
    this.setState({ content: e.target.value });
  }

  handleEditorExpand = () => {
    this.setState((state) => ({ editorExpanded: !state.editorExpanded }));
  }

  handlePreviewExpand = () => {
    this.setState((state) => ({ previewExpanded: !state.previewExpanded }));
  }

  render() {
    const classes = this.state.editorExpanded ?
      ['editor-wrap maximized', 'preview-wrap hide', 'fa-solid fa-minimize'] :
      this.state.previewExpanded ?
        ['editor-wrap hide', 'preview-wrap maximized', 'fa-solid fa-minimize'] :
        ['editor-wrap', 'preview-wrap', 'fa-solid fa-maximize']
    return (
      <div>
        <EditorBox content={this.state.content} class={classes} onChange={this.handleInputChange} onExpand={this.handleEditorExpand} />
        <div className='converter'></div>
        <PreviewBox content={this.state.content} class={classes} onExpand={this.handlePreviewExpand} />
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!<br/>
Or _italic_.<br/>
Or... wait for it... **_both!_**<br/>
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;
