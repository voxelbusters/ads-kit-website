# Android

> Solutions for Gradle Build errors & Runtime errors

This sections provides list of gradle build errors you may encounter while making builds for Android.



##### Minimum supported Gradle version is 6.7.1. Current version is 6.1.1.

To resolve this,

1. Download 6.7.1 gradle binary from [here](https://gradle.org/releases/#6.7.1).

2. Extract the contents of the archive

3. Open Unity -> Settings (or Preferences)

4. Click on External Tools in sidebar

5. Uncheck `Gradle Install with Unity`

6. Set the path to the extracted gradle in #2

---

##### Failed to get ad id

You need to have your AdMob account verified to avoid this error.

If you would like to try with a test app id for Ad Mob network, you can try below

```
ca-app-pub-3940256099942544~3347511713
```
