import { useState } from "react";
import { createAccessToken, createRequestToken } from "../api/auth";
import { useAuthContext } from "../context/AuthContext";
import {
  Box,
  Button,
  FormControl,
  FormErrorIcon,
  FormErrorMessage,
  FormLabel,
  Heading,
  Textarea,
} from "@chakra-ui/react";
import { Link } from "@components/Link";

function EnterContainer({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      h="100vh"
      w="100vw"
    >
      <Heading color="whiteAlpha.900" mb={10}>
        Welcome to Movies App
      </Heading>
      {children}
    </Box>
  );
}

export function Enter() {
  const [token, setToken] = useState("");
  const [requestToken, setRequestToken] = useState("");
  const [requestTokenError, setRequestTokenError] = useState("");
  const { setTokenApi, setAccessToken, setAccountId } = useAuthContext();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const response = await createRequestToken({ token });

    if (response.success) {
      if (response.data.success) {
        setTokenApi(token);
        setRequestToken(response.data.request_token);
      } else {
        setRequestTokenError(response.data.status_message);
      }
    }
  }

  function onApprove() {
    // TODO: save links to env files
    window.open(
      `https://www.themoviedb.org/auth/access?redirect_to=http://localhost:5173&request_token=${requestToken}`
    );
  }

  async function onCreateAccessToken() {
    const response = await createAccessToken({
      token,
      request_token: requestToken,
    });

    if (response.success) {
      setAccessToken(response.data.access_token);
      setAccountId(response.data.account_id);
    }
  }

  if (requestToken) {
    return (
      <EnterContainer>
        <Box>
          <Heading size="md" color="whiteAlpha.800">
            Token successfully created. Approve your token via TMDB
          </Heading>
          <Button mt={4} onClick={onApprove}>
            Approve
          </Button>

          <Heading size="md" color="whiteAlpha.800" mt={6}>
            After approval you will be redirected to approval page or use button
            below to enter the website
          </Heading>

          <Button mt={4} onClick={onCreateAccessToken}>
            Go ahead
          </Button>
        </Box>
      </EnterContainer>
    );
  }

  return (
    <EnterContainer>
      <form onSubmit={onSubmit}>
        <FormControl isInvalid={!!requestTokenError.length}>
          <FormLabel color="whiteAlpha.800">
            Paste your TMDB token. If you do not have yet it create it here -
            <Link to="https://www.themoviedb.org/signup" ml={2} isExternal>
              TMDB
            </Link>
          </FormLabel>

          <Textarea
            placeholder="Place your token here"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            color="whiteAlpha.900"
          />

          <FormErrorMessage mt={4}>
            <FormErrorIcon />
            {requestTokenError}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" mt={4} isDisabled={!token.length}>
          Create
        </Button>
      </form>
    </EnterContainer>
  );
}
