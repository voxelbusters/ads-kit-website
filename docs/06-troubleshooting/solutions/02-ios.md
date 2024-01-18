# iOS

### Solutions for Build Errors

##### Cocoapods fails to install

If External Dependency Manager fails to Install, manually with below command

```bash
brew install cocoapods
```

### Solutions for Runtime Errors



##### ATT or Consent Form fails to show up

1. Get IDFA of your test device with [this](https://apps.apple.com/us/app/get-my-idfa/id1580368827) app.

2. Add it to iOS section of Test Devices in Ads Kit Settings -> General section.

> IDFA gets changed - it can be reset in settings, and it can also be eradicated if the user turns on the Limit Ad Tracking toggle in Settings.



##### Unable to update publisher identifier info

If AdMob throws this error, you need to have your AdMob **account verified** to avoid this.

If you would like to try with a test app id for your Ad Mob Network, you can try below

```
ca-app-pub-3940256099942544~3347511713
```
