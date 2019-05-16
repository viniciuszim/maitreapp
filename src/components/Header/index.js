import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as SidebarActions } from '../../store/ducks/sidebar';

import { Container, LeftSide, RightSide } from './styles';

class Header extends Component {
  static propTypes = {
    sidebar: PropTypes.shape({
      showSidebar: PropTypes.bool,
    }).isRequired,
    handleSidebarRequest: PropTypes.func.isRequired,
    title: PropTypes.string,
  };

  static defaultProps = {
    title: '',
  };

  handleSidebar = () => {
    const { sidebar, handleSidebarRequest } = this.props;

    handleSidebarRequest(!sidebar.showSidebar);
  };

  render() {
    const { title } = this.props;
    return (
      <Container>
        <LeftSide>
          <a href="javascript:;" className="d-block d-sm-none" onClick={() => this.handleSidebar()}>
            <i className="fas fa-bars" />
          </a>
          <span>|</span>
          <h1>{title}</h1>
        </LeftSide>
        <RightSide>
          <Link to="/settings">
            <i className="fa fa-gear" />
          </Link>
        </RightSide>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  sidebar: state.sidebar,
});

const mapDispatchToProps = dispatch => bindActionCreators(SidebarActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
