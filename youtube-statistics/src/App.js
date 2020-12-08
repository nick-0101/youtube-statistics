import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import { Header, Tables, ChannelBar, About } from './components';
import styles from './App.module.css';

import { createBrowserHistory } from 'history';
import { Typography } from '@material-ui/core';
export const history = createBrowserHistory();

class App extends Component {
  state = {
    data: {},
    loading: false,
    query: '',
    error: '',
  };

  // https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5000ms
  // (`/api/fetchChannelInfo/channelInfo?q=${query}`
  search = async (query) => {
    this.setState({ loading: true }, () => {
      fetch(`/api/fetchChannelInfo/channelInfo?q=${query}`)
        .then((res) => {
          if (res.status === 429) {
            return this.setState({
              error: '429: Too many API requests, try again in 15 minutes',
              loading: false,
            });
          } else {
            return res.json();
          }
        })
        .then((response) =>
          this.setState({
            loading: false,
            data: response,
            query: query,
          })
        )
        .catch((err) => console.log(err));
    });
  };

  render() {
    const { data, loading, query, error } = this.state;

    return (
      <Router>
        <Route
          exact
          path='/'
          render={(props) => (
            <React.Fragment>
              <Header loading={loading} search={this.search} />
              <div className={styles.container}>
                <ChannelBar search={this.search} />
                {loading || error ? null : (
                  <Tables query={query} data={data} search={this.search} />
                )}

                {error ? (
                  <React.Fragment>
                    <Typography
                      variant='body1'
                      style={{
                        lineHeight: '2',
                        textAlign: 'center',
                        margin: '20px',
                        background: '#494949',
                        borderRadius: 4,
                        padding: 5,
                      }}
                    >
                      {error}
                    </Typography>
                  </React.Fragment>
                ) : null}
              </div>
            </React.Fragment>
          )}
        />
        <Route path='/how-we-calculate-revenue' component={About} />
      </Router>
    );
  }
}

export default withRouter(App);
