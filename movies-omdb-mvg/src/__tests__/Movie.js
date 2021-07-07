// Movie.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Movie from "../components/Movie";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("renders with or without a name", () => {
  // act(() => {
  //   render(<Movie />, container);
  // });
  // expect(container.textContent).toBe("null");
        const temp={
              "Title": "Star Wars: Episode IV - A New Hope",
              "Year": "1977",
              "imdbID": "tt0076759",
              "Type": "movie",
              "Poster": "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
          }

  act(() => {

    render(<Movie movie={temp} />, container);
    console.log(container);
  });

  // expect(container.moviename).toBe("Star Wars: Episode IV - A New Hope");
expect(document.querySelector(".moviename").innerHTML).toBe("Star Wars: Episode IV - A New Hope");
  // act(() => {
  //   render(<Movie movie="O" />, container);
  // });
  // expect(container.textContent).toBe("O");
});
