# No Code Solution

> If you want to have more control, please check Usage section.

### Prerequisite

For initialising Ads Kit, you need to pass IConsentFormProvider interface implementation. This form provider is responsible for showing the consent form for getting the consent status before presenting any ads.

If you enable **Ad Mob** ad network in Ads Kit Settings, you get a consent form provider automatically implemented. Else you need to create your own implementation.

---

### General Workflow

This section gives you a quick way to integrate ads with Ads Kit with the help of three components.

1. Initialise Ads Kit

2. Load Ad

3. Show Ad

##### Initialise

Initialise the ads kit with `AdsKitInitialiseComponent`. To access this component, just 

1. Click on Add Component in GameObject inspector

2. Navigate to Voxel Busters -> Ads Kit -> **Initialise**

3. Select when you want this action to trigger (Start/OnEnable/OnDisable etc...)

4. Register for the callbacks to know the Initialise action status

##### Load Ad

For showing an ad, we need to first load it. To access this component, just

1. Click on Add Component in GameObject inspector

2. Navigate to Voxel Busters -> Ads Kit -> **Load Ad**

3. Select when you want this action to trigger (Start/OnEnable/OnDisable etc...)

4. **Select** the Ad **Placement** **Id**

5. Register for the callbacks to know the load action status

> Even if you set Auto Loading to on, we still recommend to use this component as it just returns if the ad is already ready and loaded. Else, if auto loads fails for some other reason, triggering this component tries to load again and assures the content required for showing the ad.

##### Show Ad

For showing an ad, we need to first load it. To access this component, just

1. Click on **Add Component** in GameObject inspector

2. Navigate to Voxel Busters -> Ads Kit -> **Show Ad**

3. Select when you want this action to trigger (Start/OnEnable/OnDisable etc...)

4. **Select** the Ad **Placement** **Id**

5. Register for the callbacks to know the show action status
