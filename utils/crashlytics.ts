import crashlytics from '@react-native-firebase/crashlytics';

//   TODO [crashlytics::] log
/**
 * Add additional logs before an error event is record, note that recordError or recordCustomError
 * must be called for these log values to be reported and displayed to crashlytics
 * @param message message to be included in log
 */
export const log = (message: string): void => crashlytics().log(message);

// TODO [crashlytics::] setUserId
/**
 * Set the user ID to show alongside any subsequent crash reports
 * @param userId user id to be assigned to crash reports
 */
export const setUserId = (userId: string): Promise<null> =>
  crashlytics().setUserId(userId);

//  TODO [crashlytics::] crash app
// Forces the application to crash and a report to be sent to Firebase
export const crash = (): void => crashlytics().crash();

//   TODO [crashlytics::] create func to sync error log to firebase
// Forces any unsent logs to be sent to Firebase if auto collection is disabled
export const syncErrorLogs = async (): Promise<void> => {
  if (!crashlytics().isCrashlyticsCollectionEnabled) {
    const hasUnsent = await crashlytics().checkForUnsentReports();
    if (hasUnsent) {
      return crashlytics().sendUnsentReports();
    }
  }
};

//   TODO [crashlytics::] record error with custom message
/**
 * Records an error to Firebase crashlytics, allowing a custom message to be passed in
 * Note: this is required to be called if log() has previously been called
 * @param title
 * @param message
 */
export const recordError = (
  title = 'Custom Error',
  message = 'Custom error message not set',
): void => {
  // Record the error
  crashlytics().recordError(new Error(message), title);
  // Force the error to be sent to Firebase
  syncErrorLogs();
};
