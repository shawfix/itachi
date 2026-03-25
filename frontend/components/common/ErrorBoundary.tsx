'use client';

import type { FC, PropsWithChildren } from 'react';
import { ErrorBoundary as ErrorBoundaryLib } from 'react-error-boundary';

import { StyledButton } from '../ui/button/StyledButton';

export const ErrorBoundary: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ErrorBoundaryLib
      FallbackComponent={FallbackComponent}
      onError={e => {
        console.error(e);
        // TODO  sentry
        // captureException(e)
      }}
    >
      {children}
    </ErrorBoundaryLib>
  );
};

const FallbackComponent = () => {
  return (
    <div className="center flex w-full flex-col py-6">
      Something went wrong. Please contract to{' '}
      <a href="mailto:i@innei.in" className="shiro-link--underline">
        i@innei.in
      </a>
      .
      <StyledButton
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload Page
      </StyledButton>
    </div>
  );
};
