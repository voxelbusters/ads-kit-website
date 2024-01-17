# iOS

### Solutions for Build Errors

Cocoapods fails to install

### Solutions for Runtime Errors

##### ATT or Consent Form fails to show up

1. Run the app on device

2. Initialise  Ads Kit

3. In the Xcode Log, look for the below message and copy the test device identifier

4. Add it to iOS section of Test Devices in Ads Kit Settings -> General section.

```bash
To enable debug mode for this device, 
set: UMPDebugSettings.testDeviceIdentifiers 
= @[ @"134638AA-FEBF-4E86-99CF-294C74XXXXXX" ];
```



** IDFA gets changed - it can be reset in settings, and it can also be eradicated if the user turns on the Limit Ad Tracking toggle in Settings**.



ca-app-pub-3940256099942544~3347511713

- For IOS: "Unable to update publisher identifier info"

- For Android: "Failed to get ad id"
  
  > Have account approval

Consent form unavailable. User does not require consent or no consent form is available. If user status has changed, an update can be requested by calling [UMPConsentInformation.sharedInstance requestConsentInfoUpdateWithParameters:completionHandler:].
