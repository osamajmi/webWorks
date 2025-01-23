import { Link } from "react-router-dom";

export function BreadCrum(props){

    return(
        <div className="container-fluid bg-breadcrumb">
        <ul className="breadcrumb-animation">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}></li>
          ))}
        </ul>
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h3
            className="display-3 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {props.title}
          </h3>
          <ol
            className="breadcrumb justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            {/* <li className="breadcrumb-item">
              <a href="#">Pages</a>
            </li> */}
            <li className="breadcrumb-item active text-primary">{props.title}</li>
          </ol>
        </div>
      </div>

    )
}