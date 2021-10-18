import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';
import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('meqvonlv');

  // console.log(state);

  if (state.succeeded) {
    return <div>Thank you for signing up!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        id="name"
        mb="8"
        isInvalid={state.errors.find((e) => e.field === 'name')}
      >
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          name="name"
          required
          bg="rgba(255, 255, 255, 0.25)"
          css={{ backdropFilter: 'blur(15px)' }}
        />
        <FormErrorMessage>
          <ValidationError field="name" prefix="Name" errors={state.errors} />
        </FormErrorMessage>
      </FormControl>

      <FormControl
        id="email"
        mb="8"
        isInvalid={state.errors.find((e) => e.field === 'email')}
      >
        <FormLabel>Email</FormLabel>
        <Input
          type="text"
          name="email"
          required
          bg="rgba(255, 255, 255, 0.25)"
          css={{ backdropFilter: 'blur(15px)' }}
        />
        <FormErrorMessage>
          <ValidationError field="email" prefix="Email" errors={state.errors} />
        </FormErrorMessage>
      </FormControl>

      <FormControl
        id="phone"
        mb="8"
        isInvalid={state.errors.find((e) => e.field === 'phone')}
      >
        <FormLabel>Phone Number</FormLabel>
        <Input
          type="text"
          name="phone"
          required
          bg="rgba(255, 255, 255, 0.25)"
          css={{ backdropFilter: 'blur(15px)' }}
        />
        <FormErrorMessage>
          <ValidationError field="phone" prefix="Phone" errors={state.errors} />
        </FormErrorMessage>
      </FormControl>

      <FormControl
        id="message"
        mb="8"
        isInvalid={state.errors.find((e) => e.field === 'phone')}
      >
        <FormLabel>Message</FormLabel>
        <Textarea
          name="message"
          placeholder="Type your message here."
          required
          bg="rgba(255, 255, 255, 0.25)"
          css={{ backdropFilter: 'blur(15px)' }}
        />
        <FormErrorMessage>
          <ValidationError
            field="message"
            prefix="Message"
            errors={state.errors}
          />
        </FormErrorMessage>
      </FormControl>

      <Flex justify="space-between" wrap="wrap" mx="-1">
        <Button
          type="submit"
          colorScheme="brand"
          // size="lg"
          // isLoading={formState.isSubmitting}
          minW="initial"
          flex="1 1 50%"
          m="1"
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
}
