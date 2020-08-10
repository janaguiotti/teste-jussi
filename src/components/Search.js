import React from 'react';
import axios from 'axios';
import '../styles/Search.scss';
import Loader from '../assets/images/loader.gif';

class Search extends React.Component {
    constructor( props ) {
        super( props );
        this.state = {
            query:  '',
            results: {},
            loading: false,
            message: ''
        }

        this.cancel = '';
    }

    fetchSearchResults = ( updatedPageNo = '', query ) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}`;

        if (this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get(searchUrl, {
            cancelToken: this.cancel.token
        }).then(res => {
            const resultNotFound = ! res.data.hits.length
                                   ? 'Não há mais resultados de busca. Por favor, tente uma nova busca.'
                                   : '';
            this.setState({
                results: res.data.hits,
                message: resultNotFound,
                loading: false
            })
        }).catch(error => {
            if (axios.isCancel(error) || error) {
                this.setState({
                    loading: false,
                    message: 'Erro ao encontrar busca. Por favor, verifique o que foi escrito.'
                })
            }
        })
    }

    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (! query) {
            this.setState({query, results:{}, message: ''});
        } else {
            this.setState({ query: query, loading: true, message: '' }, () => {
                this.fetchSearchResults( 1, query );
            });
        }
    }

    handleSearchResults = () => {
        const { results } = this.state;

        if (Object.keys(results).length && results.length) {
            return (
                <div className="results-container">
                    {results.map(result => {
                        return (
                            <a className="result-item" key={result.id} href={result.previewURL}>
                                <h6 className="image-username">{result.user}</h6>
                                <div className="image-wrapper">
                                    <img className="image" src={result.previewURL} alt={`${result.username} image`} />
                                </div>
                            </a>
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        const { query, loading, message } = this.state;
        return (
            <div className="search">
                {/*Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                        type="text"
                        onChange={this.handleOnInputChange}
                        value={query}
                        name="query"
                        id="search-input"
                        placeholder="Buscar..." />
                        <i className="fa fa-search search-icon" aria-hidden="true" />
                </label>

                {/* Error message */}
                {message && <p className="search-message"> {message} </p>}

                {/* Loader */}
                <img src={Loader} className={`search-loading ${loading ? 'show' : 'hide'}`} alt="Loader" />

                {/* Result */}
                {this.handleSearchResults()}
            </div>
        );
    }
}

export default Search;