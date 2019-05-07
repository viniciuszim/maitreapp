import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Loader from 'react-loader-spinner';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as TablesActions } from '../../store/ducks/tables';

import Header from '../../components/Header';

import {
  Content,
  Row,
  LoadingContainer,
  ErrorContainer,
  SuccessContainer,
} from '../../styles/components';
import { Container, ButtonsContainer } from './style';

class Settings extends Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
    tables: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.oneOfType([null, PropTypes.shape()])),
      loading: PropTypes.bool,
      error: PropTypes.oneOfType([null, PropTypes.string]),
    }).isRequired,
    getAllTablesRequest: PropTypes.func.isRequired,
    selectTableRequest: PropTypes.func.isRequired,
  };

  state = {
    connectionTested: false,
    host: 'localhost',
    port: '3001',
    tableSelected: {
      id: 0,
    },
  };

  componentWillReceiveProps(nextProps) {
    const { tables } = nextProps;
    const { tableSelected } = tables;
    if (tableSelected !== null && typeof tableSelected !== 'undefined') {
      const { history } = this.props;
      history.push('/');
    }
  }

  handleTestConnect = () => {
    const { host, port } = this.state;
    const { getAllTablesRequest } = this.props;

    getAllTablesRequest(host, port);

    this.setState({ connectionTested: true });
  };

  handleChange = () => (event) => {
    const { tables } = this.props;
    const { data } = tables;
    const tableSelected = data.filter(table => parseInt(table.id) === parseInt(event.target.value));
    this.setState({ tableSelected: tableSelected[0] });
  };

  handleSaveTable = () => {
    const { tableSelected } = this.state;

    if (tableSelected !== null) {
      const { selectTableRequest } = this.props;
      selectTableRequest(tableSelected);
    }
  };

  render() {
    const {
      connectionTested, host, port, tableSelected,
    } = this.state;
    const { tables } = this.props;
    const { data, loading, error } = tables;
    return (
      <Fragment>
        <Header title="Configurações" />
        <Container>
          <Row>
            <TextField
              label="Informe o endereço do WS"
              className="textField"
              value={host}
              onChange={event => this.setState({ host: event.target.value })}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Row>
          <Row>
            <TextField
              label="Informe a porta do WS"
              className="textField"
              value={port}
              onChange={event => this.setState({ port: event.target.value })}
              margin="normal"
              variant="outlined"
            />
            <ButtonsContainer>
              <Button
                variant="contained"
                color="primary"
                className="button orangeButton"
                onClick={() => this.handleTestConnect()}
              >
                <i className="fas fa-plug" />
                Testar Conexão
              </Button>
              {connectionTested && !!data && (
                <Button
                  variant="contained"
                  color="primary"
                  className="button blueButton"
                  onClick={() => this.handleSaveTable()}
                >
                  <i className="far fa-save" />
                  Salvar
                </Button>
              )}
            </ButtonsContainer>
          </Row>
          {connectionTested && !!data && (
            <Row>
              <FormControl className="select">
                <InputLabel htmlFor="id-tableSelected">Mesa</InputLabel>
                <Select
                  native
                  value={tableSelected.id}
                  onChange={this.handleChange()}
                  inputProps={{
                    name: 'tableSelected',
                    id: 'id-tableSelected',
                  }}
                >
                  <option value="0" />
                  {[...data].map(table => (
                    <option value={table.id}>{table.name}</option>
                  ))}
                </Select>
              </FormControl>
            </Row>
          )}
          <Content>
            {loading && (
              <LoadingContainer>
                <Loader type="Oval" color="#ca6863" height="100" width="100" />
              </LoadingContainer>
            )}
            {!!error && !loading && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <ErrorContainer>
                  <i className="fas fa-times" />
                  {error}
                </ErrorContainer>
              </Fragment>
            )}
            {connectionTested && !loading && !!data && (
              <Fragment>
                <div style={{ height: '50px' }} />
                <SuccessContainer>
                  <i className="fas fa-check" />
                  Conexão efetuada com sucesso.
                </SuccessContainer>
              </Fragment>
            )}
          </Content>
        </Container>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tables: state.tables,
});

const mapDispatchToProps = dispatch => bindActionCreators(TablesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
