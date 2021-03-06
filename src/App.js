import React, { Component } from "react";
import DisplayImg from "./DisplayImg";

class App extends Component {
  state = {
    Images: {}
  };

  handleImageData = () => {
    let file = document.querySelector("input[type=file]").files,
      reader = {};

    // Start loading images on screen
    if (file) {
      Object.values(file).forEach(element => {
        reader[element.name] = window.URL.createObjectURL(element);
      });

      this.setState({
        Images: { ...this.state.Images, ...reader }
      });
    }
  };

  render() {
    return (
      <section className="container">

        <div className="jumbotron text-center">
          <span className="display-4 headingText">
            Uploading Single or Multiple Images to Resize or Change Quality
          </span>

          <div className="input-group uploadElm">
          <div class="custom-file">
            <input
              className="form-control custom-file-input"
              id="inputGroupFile02"
              type="file"
              name="pic"
              accept="image/*"
              multiple
              onInput={() => this.handleImageData()}
            />
            <label class="custom-file-label" for="inputGroupFile02">Choose Images</label>
            </div>

            
          </div>
          
          <input type="range" min="0" max="100" step="1" defaultValue="0"/>
          <input type="range" min="0" max="100" step="1" defaultValue="0"/>
        </div>

        <table className="table table-hover">
          <tbody>
            <DisplayImg Images={this.state.Images} />
          </tbody>
        </table>

        {/* <div className="btnGroup">
          <button className="removeImages">
            {Object.keys(this.state.Images).length}
            <i className="fas fa-times" />
          </button>
          <button className="downloadBTN">
            <i className="fas fa-download" /> Download
          </button>
        </div> */}
      </section>
    );
  }
}

export default App;
