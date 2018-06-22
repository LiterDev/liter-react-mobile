/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class FeaturePage extends React.Component {
  static propTypes = {
    auth: PropTypes.oneOfType(['object', 'string'])
  };
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    // return false;
  }

  render() {
    const { auth } = this.props;
    const token = (auth && auth.token) || '';
    console.log('this.props', this.props);
    if (!token) {
      return <Redirect to={'/login'} />;
    }
    return (
      <div className="feature-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="description"
            content="Feature page of React.js Boilerplate application"
          />
        </Helmet>
        <h1>Features</h1>
        <ul>
          <li>
            <p className="title">Next generation JavaScript</p>
            <p>
              Use template strings, object destructuring, arrow functions, JSX
              syntax and more, today.
            </p>
          </li>
          <li>
            <p className="title">Instant feedback</p>
            <p>
              Enjoy the best DX and code your app at the speed of thought! Your
              saved changes to the CSS and JS are reflected instantaneously
              without refreshing the page. Preserve application state even when
              you update something in the underlying code!
            </p>
          </li>
          <li>
            <p className="title">Industry-standard routing</p>
            <p>
              {
                "Write composable CSS that's co-located with your components for complete modularity. Unique generated class names keep the specificity low while eliminating style clashes. Ship only the styles that are on the page for the best performance."
              }
            </p>
          </li>
          <li>
            <p className="title">The Best Test Setup</p>
            <p>
              Automatically guarantee code quality and non-breaking changes.
              (Seen a react app with 99% test coverage before?)
            </p>
          </li>
        </ul>
        <i>and much more...</i>
      </div>
    );
  }
}
