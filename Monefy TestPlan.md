# Monefy Application Test Plan and Test Cases

The below mentioned test plan is to indicate the various functional and non-functional aspects that are to be considered while testing the application. All the scenarios are at a high level.

There is no doubt, that the real device is the best decision if you want to test mobile application. Testing on a real device always gives you the highest accuracy of results. In fact, this is really not easy to choose the most appropriate device. Anyway, here are some actions you should do while selecting device for the mobile testing:

Make the analysis to define the most popular and used gadgets in the market. Choose devices with different OS. Choose devices with different screen resolutions.


### Compatibility
* [High Priority] Verify that the app is installable and working as expected on various os versions and resolutions that are to be supported.
* [High Priority] Verify that the app is upgradable when user gets an update from the playstore or tried to install directly offline using .apk file.
* [High Priority] Verify that the app works perfectly fine after a OS upgrade.
* [High Priority] Verify that the user is not able to install old version of app if he already have a newer version of the App.
* [High Priority] Verify that the user is able to use the app after unistalls it and re-install.
* [High Priority] Verify the app functionality by denying the permissions like storage etc. (Feature available for Android version grater than 6.0 Marshmallow).

### UI
* [High Priority] Validate if the UI is as per designs provided in various resolutions that are to be supported.
* [High Priority] Ensure the compliance with the standards of UI - Organzational standards and International Standards
* [High Priority] Check the app's UI with the standard screen resolutions: 640 × 480, 800 × 600, 1024 × 768, 1280 × 800.
* [High Priority] Verify responsiveness of application on different devices and User experience or ease of use in using the app as per the end-user point of view.
* [High Priority] Test the main design element: buttons, icons, colors, links, fonts, font sizes, layout, text boxes, text formatting, labels, captions, buttons, lists etc.
* [High Priority] Verify all the icons are of good resolution and not blurred.
* [High Priority] Make sure the correct display of various elements on retina and non-retina screens.
* [High Priority] Verify all elements display with portrait and landscape page orientation.


### Usability
* [High Priority] Verify the user is able to swipe left/right to see the visualtions as per the selection on the left menu (day/week/month/year).
* [High Priority] Verify that the app shows the list of transactions when the Balance button swiped from bottom to top.
* [High Priority] Verify the App is usable in diffrent langauges and the translations are correct for each language.
* [High Priority] Verify all the UI elements and text is visible in both Dark and Light modes.
* [High Priority] Verify that all the buttons, links, fields and icons are in a good clickable state and the user should not be able to do any actions on the disabled items.
* [High Priority] Verify that all the field level validations are working as expected.
* [Medium Priority] Validate if user is able to select the time (Day/Week/Month/Year/All) or a specific date from the date selector.
* [Medium Priority] Verify that the app works fine while using multi window that was introduced in the latest OS platforms.
* [Medium Priority] Verify the app behaviour when using it with different apps simultaneously (App behaviour when running in background)

### Funcionality

* Privacy policies and External Links:
	* [High Priority] Verify all the links are functional such as 'About Monefy' and 'Privacy Policy' and 'Review application' etc.

* Pro Version Users:
	* [High Priority] Verify user is able to buy pro version of the app from the app using diffrerent types of payment types.
	* [High Priority] Validate that the free user is not able to use pro features and pro users are able to use all the features(Multiple Currencies, Synchronization, password protection, extened widgets and dark theme).
	* [High Priority] Verify that the all the users (pro/free) are able to edit a category and only  pro users are able to add new categories.
	* [High Priority] Verify the user is able to use the app in different currencies (One curreny at a time for free users and Multiple currencies at at once for pro users).

* Sync Functionality and User Data:
	* [High Priority] Verify the Google drive and Dropbox sync is working fine on multiple devices and platforms.
	* [High Priority] Verify the user is able to export the whole user data.
	* [High Priority] Verify the creation of Data backup and Restoring the data.
	* [High Priority] Verify the user is able to clear the whole data on the app using 'Clear Data' functionality.

* Accounts:
	* [High Priority] Verify that the user should be able to create a new account and should get a in-app notification for the creation.
	* [High Priority] Verify that the user should be able to delete a new account and should get a in-app notification for the deletion and all the income/expense should be deleted.
	* [High Priority] Verify that the user should be able to switch between the accounts and the UI & Charts should be updated accordingly.
	* [Medium Priority] Verify the behaviour of the app while creating and deleting multiple accounts and the updation of calculations after each action.
	* [Medium Priority] Verify user is able to edit the first day of the month, first day of the week and the carry over functionality.

* Income/Expense :
	* [High Priority] Validate if the user is able to new income/expense for each category.
	* [High Priority] Validate the functionality of arithematic operators while adding/editing new income/expense.
	* [High Priority] Verify if the Balance value and UI charts are getting updated after each addition, updation and deletion of income/expense.
	* [High Priority] Verify the values of each categry after adding/editing/deleting a expense
	* [High Priority] Verify the functionality of Budget mode.

* Amount Transfers:
	* [High Priority] Verify that the user is able to transfer between the accounts and able to see in-app notifications
	* [High Priority] Verify that the user is able to see all the transafers in the transaction list.
	* [High Priority] Verify that the balances on the accounts update and UI graphs update after the transfers.

* Notifications:
	* [High Priority] Verify the Notifications functionality. As far as i have tested the app, i did not come across any notifications on the notification bar.
	* [High Priority] Verify all the In-app notificartions for each action on the app.

* Feature Toggle Tests:
	* [High Priority] Verify the functionality of feature toggle if any. (To roll back in case of any issues)


### Performance
- [High Priority] Verify the response times of the application.
- [High Priority] Verify the time to navigate between the screens.
- [High Priority] Verify the application impact on the battery consumptions, or if its leading to memory leaks.
- [High Priority] Verify the RAM consumption of the App.
- [Medium Priority] Verify if the app crashes on longer usage periods.
- [Medium Priority] Verify the amount of battery consumption when running in background.
- [Medium Priority] Verify the time taken while syncing to GDrive and Dropbox at different network speeds(EDGE/3G/4G/Wi-fi).


### Security
* [High Priority] Verify if the user data that we store is saved in an encrypted format(256 bit).
* [High Priority] Verify if the user sessions are managed well and the app blocks impersonating as an another user by tampering the session ids.
* [High Priority] Verify the data stored by the app is only accessible to the app itself.
* [High Priority] Verify that the user data is not sent to any server except Google drive and Dropbox.


### Recovery tests
* [High Priority] Verify crash recovery of the app i.e, the app should be able to able to save all the data saved earlier.
* [High Priority] Verify the app behaviour when battery dies.
* [High Priority] Verify that the user is able to get a message after recovering from crash to send the app logs to the developer.


### Accessibility
- https://www.w3.org/WAI/policies/
Based on the location of the target audience, verify if the accessibility standards are met. Is the app usable by visually challenged people!


### End to End Tests:
* There should be an automated pipeline for few of the end-to-end user flows.

### Smoke or Sanity Tests:
* There should be an automated pipeline for smoke/sanity test suit which will be triggered after every app build release.

### Regressions Test Suite:
* There should be an automated pipeline for regression that should run every night or after adding any new feature.
* This should run if and only if the smoke/sanity test passes.Regression test reports should be generated and send to all the stake-holders.
