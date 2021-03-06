import React from 'react';
import { marked } from 'marked';

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          markdown: `# Title \n## Subtitle \n[Link](https://github.com/vruss14) \n\nExample of inline code: \`<div></div>\` \n\n
\`\`\` 
  function exampleFunction(event) {
    return true;
  }
\`\`\` \n
1. List item one
2. List item two
3. List item three \n

> Example of a blockquote. \n

![Code editor symbol](https://www.pngrepo.com/png/20974/64/computer.png) \n

Example of **bolded text**.`
      }
      this.getMarkdownText = this.getMarkdownText.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    getMarkdownText() {
        const parsedMarkdownText = marked.parse(this.state.markdown);
        return { __html: parsedMarkdownText };
    }

    handleChange(event) {
        this.setState({
          markdown: event.target.value
        });
    }

    render() {
      return (
        <div className="container-fluid min-vh-100 min-vw-100 d-flex justify-content-center align-items-center flex-column bg-light">
            <h1 className='text-center fs-1 fw-light mt-5 mb-3 text-black'>Markdown Previewer</h1>
            <h2 className='text-center fs-2 fw-light mt-3 mb-3 text-black fw-lighter'>Type markdown text in the editor, then preview it as HTML in the previewer.</h2>

            <div className="row d-flex min-vw-100 justify-content-center align-items-center mt-5 mb-5">
                <div className="col-sm-12 col-lg-5 m-3">
                    <div className="d-flex card bg-dark" id="editor-container">
                    <h3 className="text-white text-center fw-lighter fs-3 p-3 bg-primary">Editor</h3>
                        <div className="card-body p-3 text-white d-flex flex-column justify-content-center align-items-center">
                            <textarea className="w-100 h-100 bg-dark text-white p-2 overflow-scroll" id="editor" onChange={this.handleChange}>{this.state.markdown}</textarea>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-sm-12 m-3">
                    <div className="d-flex card bg-dark" id="editor-container">
                        <h3 className="text-white text-center fw-lighter fs-3 p-3 bg-success">Previewer</h3>
                        <div className="card-body p-3 text-white d-flex flex-column justify-content-center align-items-center overflow-scroll">
                            <div id="preview" className="border border-secondary w-100 h-100 bg-dark text-white p-2 overflow-scroll" dangerouslySetInnerHTML={this.getMarkdownText()}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
};

export default Container;