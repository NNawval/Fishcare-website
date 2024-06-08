#include <WiFi.h>
#include <Wire.h>
#include <Adafruit_BMP280.h>
#define BMP_SCK  (13)
#define BMP_MISO (12)
#define BMP_MOSI (11)
#define BMP_CS   (10)

Adafruit_BMP280 bmp; 
#include <Firebase_ESP_Client.h>
#include "addons/TokenHelper.h"
#include "addons/RTDBHelper.h"
// Replace with your network credentials
const char* ssid = "PalmHouse-4G";
const char* password = "Palm784487";
// Set web server port number to 80
WiFiServer server(80);
// Variable to store the HTTP request
String header;
//database connection
#define API_KEY "AIzaSyChqpkCsBFyx_XugxTYP4LEAgpIuJ2RY2M"
#define DATABASE_URL "https://reksti-79ac2-default-rtdb.asia-southeast1.firebasedatabase.app/"

FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis =0;
bool signupOK = false;
// Current time
unsigned long currentTime = millis();
// Previous time
unsigned long previousTime = 0; 
// Define timeout time in milliseconds (example: 2000ms = 2s)
const long timeoutTime = 2000;

void setup() {
  Serial.begin(115200);
  bool status;

  // default settings
  // (you can also pass in a Wire library object like &Wire2)
  //status = bmp.begin();  
  if (!bmp.begin(0x76)) {
    Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));
    while (1);
  }
  /* Default settings from datasheet. */
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Connecting to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  // Print local IP address and start web server
  Serial.println("");
  Serial.println("WiFi connected.");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;
  if(Firebase.signUp(&config, &auth, "", "")){
    Serial.println("OK");
    signupOK = true;
  }else{
      Serial.println("failed to connect");
  }
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
  server.begin();
}

void loop(){
  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {                             // If a new client connects,
    currentTime = millis();
    previousTime = currentTime;
    Serial.println("New Client.");          // print a message out in the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected() && currentTime - previousTime <= timeoutTime) {  // loop while the client's connected
      currentTime = millis();
      if (client.available()) {             // if there's bytes to read from the client,
        if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)){
            sendDataPrevMillis = millis();            
            // Write an Float number on the database path test/temperature
            if (Firebase.RTDB.setFloat(&fbdo, "test/temperature", bmp.readTemperature())){
              Serial.println("PASSED");
              Serial.println("PATH: " + fbdo.dataPath());
              Serial.println("TYPE: " + fbdo.dataType());
            }
            else {
              Serial.println("FAILED");
              Serial.println("REASON: " + fbdo.errorReason());
            }
          }
      }
    }
  }
}