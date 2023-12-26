import React, {useState, useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {useAuth, resetPassword, login} from '../../auth';
import theme from '../../styles/theme';
import {ScreenWrapper, TextInput, Button, Spacer, Text} from '../../components';

const Screen = () => {
  const {currentUser, setAuthState} = useAuth();
  const [step, setStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<null | string>(null);

  // Handle login
  const onLogin = async () => {
    console.log('User login');

    if (email && password) {
      setMessage(null);
      setLoading(true);
      login(email, password).then(async res => {
        setLoading(false);
        if (!res.success) {
          return setMessage(res.desc);
        }
        if (currentUser && !currentUser.emailVerified) {
          return setStep(3);
        }
        return setAuthState(res.success);
      });
    } else {
      setMessage('Please enter your email and password');
    }
  };

  // Handle password reset
  const onResetPassword = () => {
    if (email) {
      setLoading(true);
      resetPassword(email).then(res => {
        if (!res.success) {
          setLoading(false);
          setMessage(res.desc);
        } else {
          setMessage('Success, please check your email');
          setTimeout(() => {
            setStep(0);
          }, 4000);
        }
      });
    } else {
      setMessage('Please enter your email address');
    }
  };

  // Clear state values when step changes
  useEffect(() => {
    setLoading(false);
    setMessage(null);
    setEmail('');
    setPassword('');
  }, [step]);

  return (
    <ScreenWrapper>
      {
        /* Login */
        step === 0 && (
          <>
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
            {message ? (
              <View>
                <Spacer height={10} />
                <Text size={12} color={theme.font.colors.secondary}>
                  {message}
                </Text>
                <Spacer height={10} />
              </View>
            ) : (
              <Spacer height={10} />
            )}
            <Button
              text="Login"
              width={200}
              onPress={onLogin}
              onLongPress={onLogin}
              disabled={loading}
              loading={loading}
            />
            <Spacer height={10} />
            <Pressable onPress={() => setStep(1)}>
              <Text size={12} color={theme.font.colors.secondary}>
                No account? Create one here!
              </Text>
            </Pressable>
            <Spacer height={10} />
            <Pressable onPress={() => setStep(2)}>
              <Text size={12} color={theme.font.colors.secondary}>
                Forgot password?
              </Text>
            </Pressable>
          </>
        )
      }
      {step === 2 && (
        <>
          <Text size={18} bold color={theme.font.colors.primary}>
            Reset Password
          </Text>
          <Spacer height={15} />
          <TextInput
            autoCapitalize="none"
            placeholder="email"
            onChange={setEmail}
            value={email}
          />
          <Spacer height={10} />
          <View>
            {message && (
              <Text size={12} color={theme.font.colors.secondary}>
                {message}
              </Text>
            )}
          </View>
          <Spacer height={10} />
          <Button
            type="primary"
            text="Confirm"
            width={200}
            onPress={onResetPassword}
            onLongPress={onResetPassword}
            disabled={loading}
            loading={loading}
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
    </ScreenWrapper>
  );
};

export default Screen;
