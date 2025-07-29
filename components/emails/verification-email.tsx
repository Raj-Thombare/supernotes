import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface UserVerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: UserVerificationEmailProps) => {
  return (
    <Html lang='en' dir='ltr'>
      <Head />
      <Preview>
        Verify your email address to complete your account setup
      </Preview>
      <Tailwind>
        <Body className='bg-gray-100 font-sans py-[40px]'>
          <Container className='bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]'>
            {/* Header */}
            <Section className='text-center mb-[32px]'>
              <Heading className='text-[28px] font-bold text-gray-900 m-0 mb-[8px]'>
                Verify Your Email Address
              </Heading>
              <Text className='text-[16px] text-gray-600 m-0'>
                Welcome to SuperNotes ! We're excited to have you on board.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className='mb-[32px]'>
              <Text className='text-[16px] text-gray-700 mb-[16px] m-0'>
                Hi there,
              </Text>
              <Text className='text-[16px] text-gray-700 mb-[16px] m-0'>
                Thanks for signing up with <strong>SuperNotes</strong>! To
                complete your account setup and start using our services, please
                verify your email address by clicking the button below.
              </Text>
              <Text className='text-[16px] text-gray-700 mb-[24px] m-0'>
                Email to verify: <strong>{userName}</strong>
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className='text-center mb-[32px]'>
              <Button
                href={verificationUrl}
                className='bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block'>
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className='mb-[32px]'>
              <Text className='text-[14px] text-gray-600 mb-[8px] m-0'>
                If the button above doesn't work, copy and paste this link into
                your browser:
              </Text>
              <Link
                href={verificationUrl}
                className='text-blue-600 text-[14px] break-all'>
                {verificationUrl}
              </Link>
            </Section>

            {/* Security Notice */}
            <Section className='bg-gray-50 p-[20px] rounded-[8px] mb-[32px]'>
              <Text className='text-[14px] text-gray-700 mb-[8px] m-0 font-semibold'>
                Security Note:
              </Text>
              <Text className='text-[14px] text-gray-600 m-0'>
                This verification link will expire in 24 hours for security
                reasons. If you didn't create an account with SuperNotes, please
                ignore this email.
              </Text>
            </Section>

            {/* Help Section */}
            <Section className='mb-[32px]'>
              <Text className='text-[14px] text-gray-600 m-0'>
                Need help? Contact our support team at{" "}
                <Link
                  href='mailto:support@company.com'
                  className='text-blue-600'>
                  support@supernotes.com
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Section className='border-t border-gray-200 pt-[24px]'>
              <Text className='text-[12px] text-gray-500 text-center m-0 mb-[8px]'>
                © 2025 SuperNotes. All rights reserved.
              </Text>
              <Text className='text-[12px] text-gray-500 text-center m-0 mb-[8px]'>
                123 Business Street, Suite 100, Mumbai, IN 400001
              </Text>
              <Text className='text-[12px] text-gray-500 text-center m-0'>
                <Link href='#' className='text-gray-500 no-underline'>
                  Unsubscribe
                </Link>
                {" | "}
                <Link href='#' className='text-gray-500 no-underline'>
                  Privacy Policy
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
