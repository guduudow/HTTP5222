const jsdom = require("jsdom");
const { JSDOM } = jsdom;

var xml;
let parkNS = "http://www.example.org/PFRMapData";

async function loadXml() {
  if (xml == undefined) {
    let response = await fetch(
      `http://localhost:8888/facilities-data.xml`,
      {
        method: "get",
        headers: {
          "Content-Type": "application/xml"
        }
      }
    );
    //convert XML string to XML DOM document
    data = new JSDOM(await response.text(), { contentType: "application/xml" });
    //console.log(data);
    xml = data.window.document; //set the xml to the XML DOM document which we can query using DOM methods
  }
  return xml;
}
async function loadParks() {
  xml = await loadXml();
  return xml.querySelectorAll("Location");

}
async function getParkById(id) {
  xml = await loadXml(); //XML DOM DOCUMENT
  let xpathQuery = `//Location[LocationID/text()='${id}']`;
  let result = xml.evaluate(
    xpathQuery,
    xml,
    parkNS,
    4, //UNORDERED_NODE_ITERATOR_TYPE
    null //put any existing XPathResult object or null to return a new one
  );
  //if receiving an iterator, to loop over results, use result.iterateNext()
  return result.iterateNext(); //can do this beacsue we're only expecting one result
}

module.exports = {
  loadParks,
  getParkById
};