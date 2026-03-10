// import cardImg1 from "../assets/images/card-1.png";
// import cardImg2 from "../assets/images/card-2.png";
// import cardImg3 from "../assets/images/card-1.png";
import { Count } from "../App";

export default function Cards() {
  return (
    <>
      <section className="section-spacing card-box">
        <div className="container">
          <h2>Welcome to the Universe</h2>
          <div className="card-group gap-3">
            <div className="card shadow border-0">
              {/* <img
                src={cardImg1}
                className="card-img-top"
                alt="card-group-image"
              /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card shadow border-0">
              {/* <img
                src={cardImg1}
                className="card-img-top"
                alt="card-group-image"
              /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <Count />
              </div>
            </div>
            <div className="card shadow border-0">
              {/* <img
                src={cardImg3}
                className="card-img-top"
                alt="card-group-image"
              /> */}
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>

              {/* <div className="text-center mt-4">
                <Count />
              </div> */}

              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
                <Count/>
              </div>
              
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </section>
    </>
  );
}
