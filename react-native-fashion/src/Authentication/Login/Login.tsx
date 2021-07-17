import React from "react";

import { Button, Text, Container, SocialLogin } from "../../components";
import CheckBox from "../../components/form/CheckBox";
import TextInput from "../../components/form/TextInput";
import { Box } from "../../components/Theme";

const emailValidator = (email: string): boolean =>
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    String(email).toLowerCase()
  );
const passwordValidator = (password: string): boolean => password.length > 5;

const Login = () => {
  const footer = (
    <>
      <SocialLogin />
      <Box alignItems="center" marginTop="m">
        <Button
          variant="transparent"
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert("heyyy");
          }}
        >
          <Box flex={1} justifyContent="center" flexDirection="row">
            <Text variant="button" color="white">
              Don't have an account?
            </Text>
            <Text marginLeft="s" variant="button" color="primary">
              Sign up here
            </Text>
          </Box>
        </Button>
      </Box>
    </>
  );

  return (
    <Container {...{ footer }}>
      <Box margin="xl">
        <Text variant="title1" textAlign="center" marginBottom="l">
          Welcome back
        </Text>
        <Text
          marginBottom="l"
          variant="body"
          color="secondryText"
          textAlign="center"
        >
          Use your credentials below and login to your account
        </Text>
        <Box marginBottom="m">
          <TextInput
            icon="mail"
            placeholder="Enter your Email"
            validator={emailValidator}
          />
        </Box>
        <Box>
          <TextInput
            icon="lock"
            placeholder="Enter your Password"
            validator={passwordValidator}
          />
        </Box>
        <Box flexDirection="row">
          <CheckBox label="Remember me" />
          <Button variant="transparent" onPress={() => {}}>
            <Text color="primary">Forgot Password</Text>
          </Button>
        </Box>
        <Box flex={1} alignItems="center" marginTop="l">
          <Button
            variant="primary"
            label="Log into your account"
            onPress={() => {}}
          />
        </Box>
      </Box>
    </Container>
  );
};
export default Login;
