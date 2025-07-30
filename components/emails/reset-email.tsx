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

interface PasswordResetEmailProps {
  userName: string;
  resetUrl: string;
  expirationTime: string;
}

const PasswordResetEmail = ({
  userName,
  resetUrl,
  expirationTime,
}: PasswordResetEmailProps) => {
  return (
    <Html lang='en' dir='ltr'>
      <Head />
      <Preview>Reset your password - Action required</Preview>
      <Tailwind>
        <Body className='bg-gray-100 font-sans py-[40px]'>
          <Container className='bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto p-[40px]'>
            {/* Header */}
            <Section className='text-center mb-[32px]'>
              <Heading className='text-[28px] font-bold text-gray-900 m-0 mb-[8px]'>
                Reset Your Password
              </Heading>
              <Text className='text-[16px] text-gray-600 m-0'>
                We received a request to reset your password
              </Text>
            </Section>

            {/* Main Content */}
            <Section className='mb-[32px]'>
              <Text className='text-[16px] text-gray-700 mb-[16px] m-0'>
                Hi there,
              </Text>
              <Text className='text-[16px] text-gray-700 mb-[16px] m-0'>
                We received a request to reset the password for your{" "}
                <strong>SuperNotes</strong> account associated with{" "}
                <strong>{userName}</strong>.
              </Text>
              <Text className='text-[16px] text-gray-700 mb-[24px] m-0'>
                If you made this request, click the button below to reset your
                password. If you didn't request a password reset, you can safely
                ignore this email.
              </Text>
            </Section>

            {/* Reset Button */}
            <Section className='text-center mb-[32px]'>
              <Button
                href={resetUrl}
                className='bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block'>
                Reset Password
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className='mb-[32px]'>
              <Text className='text-[14px] text-gray-600 mb-[8px] m-0'>
                If the button above doesn't work, copy and paste this link into
                your browser:
              </Text>
              <Link
                href={resetUrl}
                className='text-blue-600 text-[14px] break-all'>
                {resetUrl}
              </Link>
            </Section>

            {/* Security Information */}
            <Section className='bg-red-50 border border-red-200 p-[20px] rounded-[8px] mb-[32px]'>
              <Text className='text-[14px] text-red-800 mb-[8px] m-0 font-semibold'>
                Important Security Information:
              </Text>
              <Text className='text-[14px] text-red-700 mb-[8px] m-0'>
                • This password reset link will expire in{" "}
                <strong>{expirationTime}</strong>
              </Text>
              <Text className='text-[14px] text-red-700 mb-[8px] m-0'>
                • If you didn't request this reset, please ignore this email
              </Text>
              <Text className='text-[14px] text-red-700 m-0'>
                • For security, this link can only be used once
              </Text>
            </Section>

            {/* Additional Security Tips */}
            <Section className='mb-[32px]'>
              <Text className='text-[14px] text-gray-700 mb-[12px] m-0 font-semibold'>
                Password Security Tips:
              </Text>
              <Text className='text-[14px] text-gray-600 mb-[4px] m-0'>
                • Use a strong, unique password with at least 8 characters
              </Text>
              <Text className='text-[14px] text-gray-600 mb-[4px] m-0'>
                • Include uppercase, lowercase, numbers, and special characters
              </Text>
              <Text className='text-[14px] text-gray-600 m-0'>
                • Don't reuse passwords from other accounts
              </Text>
            </Section>

            {/* Help Section */}
            <Section className='mb-[32px]'>
              <Text className='text-[14px] text-gray-600 m-0'>
                Having trouble? Contact our support team at{" "}
                <Link
                  href='mailto:support@company.com'
                  className='text-blue-600'>
                  support@supernotes.com
                </Link>{" "}
                or visit our{" "}
                <Link href='#' className='text-blue-600'>
                  Help Center
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
                {" | "}
                <Link href='#' className='text-gray-500 no-underline'>
                  Security Center
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
