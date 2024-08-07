import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import "./Card.css";
export const Card = () => {
  useEffect(() => {
    document.title = "Card Component";
  }, []);
  return (
    <div className="component-description">
      <h2 className="component-heading">All about Cards</h2>
      <div style={{ width: "100%" }}>
        <p className="description">A normal card</p>
        <div className="card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-K6eEjSupJW5RaX7jUf_YPNkj5sHQ6JUTA&usqp=CAU"
            alt=""
            className="card-img"
          />
          <h4 className="card-title">Card Title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et
            architecto dicta. Placeat, aspernatur, commodi impedit dicta id,
            explicabo porro cumque ullam dolore saepe fuga? Ullam porro
            voluptatum suscipit dolor!
          </p>
        </div>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<div class="card">
  <img src="image-url" alt="" class="card-img"/>
  <h4 class="card-title">Card Title</h4>
  <p class="card-text">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis et
    architecto dicta. Placeat, aspernatur, commodi impedit dicta id,
    explicabo porro cumque ullam dolore saepe fuga? Ullam porro voluptatum
    suscipit dolor!
  </p>
</div>`}
        </SyntaxHighlighter>
        <div>
          <p className="description">A Card for e-commerce</p>
          <div className="card-shopping">
            <img
              src="https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjB0JTIwc2hpcnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
              className="card-img"
            />
            <div className="card-text-content">
              <h4 className="card-brand">Brand Name</h4>
              <p className="card-desc">A Black T-Shirt</p>
              <badge className="card-badge badge badge-warning">New</badge>
              <button className="card-remove button button-border">X</button>
              <button className="button button-primary border-primary card-action">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        <div style={{ width: "auto" }}>
          <SyntaxHighlighter language="javascript" style={a11yDark}>
            {`Code Snippet
<div class="card-shopping">
  <img src="image-url" alt="" class="card-img" />
  <div className="card-text-content">
    <h4 className="card-brand">Brand Name</h4>
    <p className="card-desc">A Black T-Shirt</p>
    <badge className="card-badge badge badge-warning">New</badge>
    <button className="card-remove button button-border">X</button>
    <button className="button button-primary border-primary card-action">
      Add To Cart
    </button>
  </div>
</div> `}
          </SyntaxHighlighter>
        </div>
      </div>
      <p className="description">A Horizontal card</p>
      <div className="card-horizontal">
        <div className="card-content-img">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-K6eEjSupJW5RaX7jUf_YPNkj5sHQ6JUTA&usqp=CAU"
            alt=""
            className="card-img"
          />
        </div>
        <div className="card-content">
          <h4 className="card-title">Card Title</h4>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatum
            suscipit dolor! dolore saepe fuga? Ullam porro voluptatum suscipit
            dolor!
          </p>
        </div>
      </div>
      <div style={{ width: "auto" }}>
        <SyntaxHighlighter language="javascript" style={a11yDark}>
          {`Code Snippet
<div className="card-horizontal">
  <div className="card-content-img">
    <img src="image-url" alt="" className="card-img" />
  </div>
  <div className="card-content">
    <h4 className="card-title">Card Title</h4>
    <p className="card-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatum
      suscipit dolor! dolore saepe fuga? Ullam porro voluptatum suscipit
      dolor!
    </p>
  </div>
</div>`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
