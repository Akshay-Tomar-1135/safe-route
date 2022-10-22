import React from "react";
// creates map of safest route
const mapPage = () => {
  return (
    <>
      <nav class="navbar bg-transparent mt-5 pt-4">
        <div class="container-fluid">
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Source"
              aria-label="Search"
            />
            <input
              class="form-control me-2"
              type="search"
              placeholder="Destination"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Enter a place name"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      <div
        id="map-container-google-2"
        class="z-depth-1-half map-container"
        style={{ height: "5000px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=chicago&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          style={{ border: "0" }}
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
};

export default mapPage;
