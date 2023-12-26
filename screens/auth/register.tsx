import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useAuth, register, verifyEmail, refreshUser} from '../../auth';
import theme from '../../styles/theme';
import {ScreenWrapper, TextInput, Button, Spacer, Text} from '../../components';

const Render = () => {
  const {currentUser, setAuthState} = useAuth();
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConf, setPasswordConf] = useState<string>('');
  const [message, setMessage] = useState<null | string>(null);

  // Handle registrations
  const onRegister = () => {
    console.log('on Register');

    if (email && password) {
      setMessage(null);
      if (!firstname || !lastname) {
        return setMessage('Please enter your first and last name');
      }
      if (password !== passwordConf) {
        return setMessage('Password and confirmation does not match');
      }
      setLoading(true);
      return register(email, password).then(res => {
        setLoading(false);
        if (!res.success) {
          return setMessage(res.desc);
        }
        return setStep(3);
      });
    }

    return setMessage('Please enter an email and password');
  };

  // Handle verify email when user registers
  const onVerifyEmail = () => {
    setLoading(true);
    verifyEmail().then(res => {
      if (res?.success) {
        const timer = setInterval(() => {
          if (currentUser?.emailVerified) {
            clearInterval(timer);
            setAuthState(true);
          } else {
            refreshUser();
          }
        }, 2000);
      } else {
        setLoading(false);
        setMessage('Unable to verify email address');
      }
    });
  };

  // Clear state values when step changes
  useEffect(() => {
    setLoading(false);
    setMessage(null);
    setEmail('');
    setPassword('');
    setPasswordConf('');
    setFirstname('');
    setLastname('');
  }, [step]);

  return (
    <ScreenWrapper>
      {step === 1 && (
        <>
          <Text size={18} bold color={theme.font.colors.primary}>
            New Account
          </Text>
          <Spacer height={15} />
          <TextInput
            autoCapitalize="words"
            placeholder="first name"
            onChange={setFirstname}
            value={firstname}
          />
          <TextInput
            autoCapitalize="words"
            placeholder="last name"
            onChange={setLastname}
            value={lastname}
          />
          <TextInput
            autoCapitalize="none"
            placeholder="email"
            onChange={setEmail}
            value={email}
          />
          <TextInput
            isSecure
            placeholder="password"
            onChange={setPassword}
            value={password}
          />
          <TextInput
            isSecure
            placeholder="confirm password"
            onChange={setPasswordConf}
            value={passwordConf}
          />
          <Spacer height={10} />
          <View>
            {message && (
              <>
                <Text size={12} color={theme.font.colors.secondary}>
                  {message}
                </Text>
              </>
            )}
          </View>
          <Spacer height={10} />
          <Button
            type="primary"
            text="Submit"
            width={200}
            onPress={onRegister}
            onLongPress={onRegister}
            loading={loading}
            disabled={loading}
          />
          <Spacer height={10} />
          <Button
            type="secondary"
            text="Back"
            width={200}
            disabled={loading}
            onPress={() => setStep(0)}
            onLongPress={() => setStep(0)}
          />
        </>
      )}
      {step === 3 && (
        <>
          <Text size={18} bold color={theme.font.colors.primary}>
            Verify Email Address
          </Text>
          <Spacer height={10} />
          {loading && (
            <Text size={12} bold color={theme.font.colors.primary}>
              Check your inbox for the verification email!
            </Text>
          )}
          <Spacer height={15} />
          <Button
            type="primary"
            text={loading ? 'Please wait' : 'Send Verification'}
            width={200}
            onPress={onVerifyEmail}
            onLongPress={onVerifyEmail}
            disabled={loading}
            loading={loading}
          />
          <Spacer height={10} />
          <Button
            type="secondary"
            text="Back"
            width={200}
            onPress={() => setStep(0)}
            onLongPress={() => setStep(0)}
          />
        </>
      )}
    </ScreenWrapper>
  );
};

export default Render;
