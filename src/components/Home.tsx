import { Link } from "react-router-dom";
import chefRana from "./assets/chef.jpg";

const Home = () => {
  return (
    <>
      <div className="w-100 text-center">
        <img
          src="https://images.wsj.net/im-581988/M"
          alt=""
          className="w-100 position-relative"
        />
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1 className="text-white about-heading">OUR STORY</h1>
        </div>
        <div className="d-flex justify-content-around">
          <div className="w-50 p-5 fw-bold fs-1 bg-black text-white font-times">
            A GENUINE ITALIAN EXPERIENCE WHERE GUESTS SHARE IN THE RICH CULTURE
            OF THE ITALIAN TABLE.
          </div>
          <div
            className="w-50 p-5 fw-bold text-black"
            style={{ fontSize: "12px" }}
          >
            Located in Chicago’s Gold Coast neighborhood, La Storia rests in a
            former home that beckoned us to reveal ornate details in a cozy and
            comforting environment. Within its bones, it exuded the Italian
            spirit and begged us to welcome diners into the home to dine once
            again. Immediately, we knew this was to be La Storia, our
            celebration of the Italian tradition served on the table and in the
            glass. <br />
            <br />
            Just as history changes and evolves, so do we. At La Storia, meaning
            the history, the stories of the past, we are grateful to have served
            our guests true Italian cuisine for 2 years, but today, we are
            excited to introduce new flavors inspired by the tastes of the
            Mediterranean. <br />
            <br />
            We remain deeply versed in the gioie della tavola, “the joys of the
            table,” the place where life’s greatest experiences unfold, and
            lifelong relationships and memories are created and celebrated.{" "}
            <br />
            <br />
            At La Storia, we welcome you into our home to join us on a culinary
            journey as we use the dining table as our canvas. We embrace the
            spirit of the Mediterranean & Italy by using the best local
            ingredients simply, seasonably and sincerely through all food and
            beverage we serve.
          </div>
        </div>
        <div className="ourChef">
          <h2 className="font-times fw-bold mt-4" style={{ fontSize : "50px" }}>Meet Our World Famous Chefs</h2>
          <div className="d-flex justify-content-center gap-4 my-4">
          <img src="https://images.squarespace-cdn.com/content/v1/5efba33dae69aa09dd0ac52b/1593636344673-D7P68N5GWGBMI73X24U9/chefDaniele.jpg?format=750w" className="w-25 rounded" alt="..." />
          <img src={chefRana} className="w-25 rounded" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// https://images.squarespace-cdn.com/content/v1/5efba33dae69aa09dd0ac52b/1593636344673-D7P68N5GWGBMI73X24U9/chefDaniele.jpg?format=750w
