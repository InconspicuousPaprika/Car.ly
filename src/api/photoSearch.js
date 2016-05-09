export default function photoSearch(keyword, page, callback) {
  fetch(`https://extraction.import.io/query/extractor/10caeb52-8a7c-45e9-9b87-b7082e199bce?_apikey=b8fa373b0b434ad58fe76cdba905bacd23afd0851eb1106f7091d985439eb6b540f6fa1a812be1cc126dd8ff85787b589fd469e76783efb262c7a2ca47170e594a3e0ee1e9a4176ea435e6c4c5050b65&url=http%3A%2F%2Fwww.autotrader.com%2Fcars-for-sale%2FUsed%2BCars%2FChevrolet%2FCorvette%2FSnellville%2BGA-30078%3FendYear%3D2017%26firstRecord%3D0%26listingType%3Dused%26listingTypes%3Dused%26makeCode1%3DCHEV%26mmt%3D%255BCHEV%255BCORV%255B%255D%255D%255B%255D%255D%26modelCode1%3DCORV%26searchRadius%3D25%26showcaseListingId%3D411653668%26showcaseOwnerId%3D71963%26startYear%3D1981%26Log%3D0`)
  .then(function(response) {
    return response.json();
  }).then(function(data) {
  	// console.log(data.extractorData.data[0].group);
    callback(data.extractorData.data[0].group);
  }).catch(function(err) {
    console.log('Error ', err);
  });
}
