import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import sha256 from 'sha256';

import { mockedUsername, mockedPassword } from '../../mock/userAuth';
import { login, isAuthenticated } from '../../services/auth';

import Person from '../../assets/images/person.svg';
import Lock from '../../assets/images/lock.svg';
import X from '../../assets/images/x.svg';

import {
  Container, Actions, Entry, Error,
} from './styles';

class Login extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    loading: false,
    username: '',
    password: '',
    errors: [],
  };

  componentDidMount() {
    const { history } = this.props;

    if (isAuthenticated()) history.replace('/list');
  }

  handleLogin = async (e) => {
    const { username, password } = this.state;
    const { history } = this.props;

    e.preventDefault();
    await this.setState({ loading: true });

    const hashedPass = sha256(password);

    if (!username && !password) {
      this.setState({
        errors: ['Preencha os campos Username e Password para continuar!'],
      });
    }
    if (!username && password) {
      this.setState({
        errors: ['Preencha o campo Username continuar!'],
      });
    }
    if (username && !password) {
      this.setState({
        errors: ['Preencha o campo Password continuar!'],
      });
    }
    if (username && password) {
      if (username.toLowerCase().trim() !== mockedUsername) {
        this.setState({
          errors: ['O Username está incorreto!'],
        });
      } else if (hashedPass !== mockedPassword) {
        this.setState({
          errors: ['A Password está incorreta!'],
        });
      } else {
        await login();
        history.replace('/list');
      }
    }

    await this.setState({ loading: false });
  };

  render() {
    const {
      username, password, loading, errors,
    } = this.state;

    return (
      <Container onSubmit={this.handleLogin}>
        <header>
          <p>Login Form</p>
          <img src={X} alt="X" />
        </header>
        <div>
          {errors.length > 0 && (
            <>
              {errors.map(item => (
                <Error key={item}>{item}</Error>
              ))}
            </>
          )}

          <Entry>
            <img src={Person} alt="Username" />
            <input
              placeholder="Username"
              value={username}
              onChange={e => this.setState({ username: e.target.value })}
            />
          </Entry>

          <Entry>
            <img src={Lock} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </Entry>

          <Actions>
            <button type="submit">
              {loading ? <i className="fa fa-spinner fa-pulse fa-2x" /> : 'Sign In'}
            </button>

            <a href="null">Lost your password?</a>
          </Actions>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);
