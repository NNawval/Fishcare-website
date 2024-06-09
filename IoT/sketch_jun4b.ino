#include <WiFi.h>
#include <Wire.h>
#include <Adafruit_BMP280.h>
#define BMP_SCK  (13)
#define BMP_MISO (12)
#define BMP_MOSI (11)
#define BMP_CS   (10)

Adafruit_BMP280 bmp; // I2C
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"

// Replace with your network credentials
const char* ssid = "PalmHouse-4G";
const char* password = "Palm784487";

// Set web server port number to 80
WiFiServer server(80);

String header;

// Firebase connection
#define API_KEY "AIzaSyChqpkCsBFyx_XugxTYP4LEAgpIuJ2RY2M"
#define DATABASE_URL "https://reksti-79ac2-default-rtdb.asia-southeast1.firebasedatabase.app/"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

// Timing variables
unsigned long currentTime = millis();
unsigned long previousTime = 0; 
const long timeoutTime = 2000;
const int ledPin = 19;

bool feed = true;

void setup() {
  Serial.begin(115200);
  bool status;
  pinMode(ledPin, OUTPUT);

  if (!bmp.begin(0x76)) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));
    while (1);
  }
  
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL, 
                  Adafruit_BMP280::SAMPLING_X2, 
                  Adafruit_BMP280::SAMPLING_X16, 
                  Adafruit_BMP280::FILTER_X16, 
                  Adafruit_BMP280::STANDBY_MS_500);

  // Connect to Wi-Fi network
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  
  // Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Firebase sign-up OK");
    signupOK = true;
  } else {
    Serial.println("Failed to connect to Firebase");
  }

  config.token_status_callback = tokenStatusCallback; // see addons/TokenHelper.h
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  server.begin();
}

void loop() {
  WiFiClient client = server.available(); // Listen for incoming clients

  if (client) { // If a new client connects,
    currentTime = millis();
    previousTime = currentTime;
    Serial.println("New Client connected."); // Debug message for new client
    String currentLine = ""; // Hold incoming data from the client
    
    while (client.connected() && currentTime - previousTime <= timeoutTime) { // Loop while the client's connected
      currentTime = millis();
      
      if (client.available()) { // If there's bytes to read from the client
        if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
          sendDataPrevMillis = millis();
          
          // Write temperature data to Firebase
          if (Firebase.RTDB.setFloat(&fbdo, "test/temperature", bmp.readTemperature())) {
            Serial.println("Firebase update PASSED");
            Serial.println("PATH: " + fbdo.dataPath());
            Serial.println("TYPE: " + fbdo.dataType());
          } else {
            Serial.println("Firebase update FAILED");
            Serial.println("REASON: " + fbdo.errorReason());
          }
          
          // Read feed data from Firebase and control LED
          if (Firebase.RTDB.getBool(&fbdo, "/test/Feed")) {
            if (fbdo.dataType() == "boolean") {
              feed = fbdo.boolData();
              Serial.println("Feed status: " + String(feed));
              digitalWrite(ledPin, feed ? HIGH : LOW); // Turn LED on/off based on feed value
            }
          } else {
            Serial.println("Failed to read /test/Feed");
            Serial.println("REASON: " + fbdo.errorReason());
          }
          char c = client.read();             // read a byte, then
          Serial.write(c);                    // print it out the serial monitor
          header += c;
          if (c == '\n') {                    // if the byte is a newline character
          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          
        }
    }else if{
    Serial.println("Client disconnected.");
    }
  } else {
    Serial.println("No client connected");
  }
  }
}}
