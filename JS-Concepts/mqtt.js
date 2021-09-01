var mqtt;
var reconnectTimeout = 2000;

var host = "127.0.0.1";
var port = 9002;

function publish() {
  // Once a connection has been made, make a subscription and send a message.

  console.log("Connected ");
  //mqtt.subscribe("sensor1");
  message = new Paho.MQTT.Message("Hello World");
  message.destinationName = "sensor1";
  mqtt.send(message);
}
function MQTTconnect() {
  console.log("connecting to " + host + " " + port);
  var x = Math.floor(Math.random() * 10000);
  var cname = "orderform-" + x;
  mqtt = new Paho.MQTT.Client(host, port, cname);
  var options = {
    timeout: 3,
  };
  mqtt.connect(options); //connect
}
