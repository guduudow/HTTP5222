const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let kml;
let libraryNS = "http://www.opengis.net/kml/2.2";

async function loadKml() {
  if (kml == undefined) {
    let response = await fetch(
      `http://localhost:8888/library-data.kml`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/xml"
        }
      }
    );
    //convert KML string to KML DOM document
    data = new JSDOM(await response.text(), { contentType: "application/xml" });
    //console.log(data);
    kml = data.window.document; //set the kml to the KML DOM document which we can query using DOM methods
  }
  return kml;
}

async function loadLibraries() {
  kml = await loadKml();
  return kml.querySelectorAll("Placemark");
}

async function getLibraryById(id) {
  kml = await loadKml();
  return kml.getElementById("id");
}

module.exports = {
  loadLibraries
};