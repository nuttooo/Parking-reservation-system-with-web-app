#include <ESP8266WiFi.h>

// WiFi network credentials
const char* ssid = "Ponix_BKK_2.4G";
const char* password = "098789";

// Server details
const char* server = "localhost";

// IR sensor and LED pin
const int ledPin = 2;
const int digitalPin = D1;
int val = 0;

// WiFi client
WiFiClient client;

// Function prototypes
void connectWiFi();
void sendToServer(int data);

void setup() {
  pinMode(ledPin, OUTPUT);  
  pinMode(digitalPin, INPUT);
  Serial.begin(9600);
  connectWiFi(); // Connect to WiFi
}

void loop() {
  // Check if WiFi is connected
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi connection lost, reconnecting...");
    connectWiFi(); // Reconnect to WiFi
    return; // Exit loop
  }
  
  // Read sensor value
  val = digitalRead(digitalPin);
  Serial.print("val = ");
  Serial.println(val);
  
  // Send data to server when IR object detected
  if (val == 0) {
    digitalWrite(ledPin, HIGH);
    sendToServer(val);
  } else {
    digitalWrite(ledPin, LOW);
  }
  
  delay(100);
}

// Function to connect to WiFi
void connectWiFi() {
  Serial.print("Connecting to WiFi");
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
}

// Function to send data to server
void sendToServer(int data) {
  if (client.connect(server, 80)) {
    Serial.println("Connected to server");
    client.print("GET /script.php?ir_data=");
    client.print(data);
    client.println(" HTTP/1.1");
    client.print("Host: ");
    client.println(server);
    client.println("Connection: close");
    client.println();
    delay(1000);
    while (client.available()) {
      char c = client.read();
      Serial.print(c);
    }
    client.stop();
  } else {
    Serial.println("Connection failed");
  }
}
