import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { logout } from '../../services/auth';

import { Creators as ListActions } from '../../store/ducks/list';

import Logout from '../../assets/images/logout.svg';

import {
  Container, Header, Content, Load, Items,
} from './styles';

class List extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  componentDidMount = async () => {
    const { getListRequest } = this.props;

    await getListRequest();
  };

  handleLogout = async (e) => {
    const { history } = this.props;

    e.preventDefault();

    logout();
    history.replace('/');
  };

  render() {
    const { cards, loading } = this.props;

    return (
      <Container>
        <Header>
          <p>List of Magic Cards</p>
          <button type="submit" onClick={this.handleLogout}>
            <img src={Logout} alt="Logout" />
          </button>
        </Header>

        <Content>
          {loading ? (
            <Load>
              <i className="fa fa-spinner fa-pulse fa-3x" style={{ color: '#493548' }} />
            </Load>
          ) : (
            <>
              <Items>
                {cards.map(card => (
                  <Fragment key={card.id}>
                    {card.imageUrl !== undefined ? (
                      <div>
                        <h1>{card.name}</h1>
                        <img src={card.imageUrl} alt="Card" />
                      </div>
                    ) : (
                      <Fragment />
                    )}
                  </Fragment>
                ))}
              </Items>
            </>
          )}
        </Content>
      </Container>
    );
  }
}

List.propTypes = {
  getListRequest: PropTypes.func,
  cards: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  ),
  loading: PropTypes.bool,
};

List.defaultProps = {
  getListRequest: () => {},
  cards: [],
  loading: false,
};

const mapStateToProps = state => ({
  cards: state.list.data,
  loading: state.list.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
