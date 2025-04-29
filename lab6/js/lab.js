// Author: Jenny Mei <jmei15.edu>
// Author: Walter Serwin <wserwin@ucsc.edu>

// Created: 28 April

myTransport = ["Volkswagen", "bike", "bus", "train", "walking"];

myMainRide = {
  make: "Volkswagen",
  model: "Passat",
  color: "Sliver",
  year: 2004,
  age: function() {
    return 2022 - this.year;
  }
}

document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
