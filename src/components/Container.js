import React from 'react';

class Container extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          name: 'Test'
      }
  
    }
    render() {
      return (
        <div className="container-fluid min-vh-100 min-vw-100 d-flex justify-content-center align-items-center flex-column bg-light">
            <h1 className='text-center fs-1 fw-light mt-5 mb-3 text-black'>Markdown Previewer</h1>
            <h2 className='text-center fs-2 fw-light mt-3 mb-3 text-black fw-lighter'>Type markdown text in the editor, then preview it as HTML in the previewer.</h2>

            <div className="row d-flex min-vw-100 justify-content-center align-items-center mt-5 mb-5">
                <div className="col-5">
                    <div className="d-flex card bg-dark" id="editor-container">
                    <h3 className="text-white text-center fw-lighter fs-3 p-3 bg-primary">Editor</h3>

                        <div className="card-body p-3 text-white d-flex flex-column justify-content-center align-items-center">
                            <textarea className="w-100 h-100 bg-dark text-white p-2"></textarea>
                        </div>
                    </div>
                </div>

                <div className="col-6">
                    <div className="d-flex card bg-dark" id="editor-container">
                        <h3 className="text-white text-center fw-lighter fs-3 p-3 bg-success">Previewer</h3>
                        <div className="card-body p-3 text-white d-flex flex-column justify-content-center align-items-center">
                            <textarea className="w-100 h-100 bg-dark text-white p-2"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
};

export default Container;