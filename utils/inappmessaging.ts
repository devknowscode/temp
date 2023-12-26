import inAppMessaging from '@react-native-firebase/in-app-messaging';

async function InAppMessaging(isSupress: boolean) {
  await inAppMessaging().setMessagesDisplaySuppressed(isSupress);
}

export default InAppMessaging;
