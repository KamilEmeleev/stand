import { Component, ReactNode } from 'react';

import { Typography } from '@ozen-ui/kit/Typography';

export class ErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Typography color="error">Oops, something went wrong!</Typography>;
    }

    return this.props.children;
  }
}
