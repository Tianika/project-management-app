import { Component, ReactNode } from 'react';
import { NotFoundPageWrapper, NotFoundPageTitle } from '../../pages/NotFoundPage/styles';

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      return (
        <NotFoundPageWrapper>
          <NotFoundPageTitle>Sorry.. there was an error</NotFoundPageTitle>
        </NotFoundPageWrapper>
      );
    }
    return children;
  }
}

export default ErrorBoundary;
