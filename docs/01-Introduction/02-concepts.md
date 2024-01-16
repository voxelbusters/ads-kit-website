# Concepts

## Ad Type

Ad Type refers to the various formats of advertisements, including banners, interstitials, videos, and rewarded ads. Each type serves a specific purpose in engaging users and generating revenue.

## Ad Network

An ad network is a platform that connects advertisers with publishers to display ads across websites, apps, and digital channels. The Cross Platform Ads Kit supports multiple ad networks such as AdMob, AppLovin, Unity Ads, Vungle(LiftOff), and TapJoy, providing developers with diverse options for ad monetization.

## Ad Placement

Ad Placement refers to the location within the app or game where an advertisement is displayed. It determines the strategic positioning of ads to maximize user engagement and revenue potential.

## Ad Placement Id

Ad Placement Id is a unique identifier assigned to each ad placement. It is used to load, show, or hide an ad at the specified location within the app or game.

## Ad Unit Id

The Ad Unit Id is a unique identifier that connects an Ad Placement to a specific platform within an ad network. Each platform (e.g., iOS, Android) has its own Ad Unit Id for a particular Ad Placement.

## Ad Meta Array

The Ad Meta Array connects Ad Placement Ids in an app with Ad Network's Ad Unit Ids available per platform. It facilitates the mapping of ad placements to platform-specific ad unit identifiers, ensuring seamless ad serving across different platforms.

## Ad Network Preference

Ad Network Preference allows developers to specify preferred ad networks for serving specific types of ads. This feature enables prioritization of ad networks for different ad types, optimizing ad delivery based on developer preferences and performance metrics.

## Test Devices

Test Devices refer to a list of device IDs designated for testing ad functionality. Developers can specify test device IDs for both iOS and Android platforms, allowing for thorough testing and validation of ad integration.

## Ads Kit Settings

The Ads Kit Settings, stored as a scriptable object asset, provide a centralized location for configuring the plugin's settings. Developers can access and customize these settings to fine-tune the behavior and performance of the Cross Platform Ads Kit within their projects