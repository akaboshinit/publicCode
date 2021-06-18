
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Highlight, connectAutoComplete } from 'react-instantsearch-dom';
import AutoSuggest from 'react-autosuggest';

class AutoComplete extends Component {
    static propTypes = {
        hits: PropTypes.arrayOf(PropTypes.object).isRequired,
        currentRefinement: PropTypes.string.isRequired,
        refine: PropTypes.func.isRequired,
        onSuggestionSelected: PropTypes.func.isRequired,
        onSuggestionCleared: PropTypes.func.isRequired,
    };

    state = {
        value: this.props.currentRefinement,
    };

    onChange = (_, { newValue }) => {
        if (!newValue) {
            this.props.onSuggestionCleared();
        }

        this.setState({
            value: newValue,
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.props.refine(value);
    };

    onSuggestionsClearRequested = () => {
        this.props.refine();
    };

    getSuggestionValue(hit) {
        return hit.Name;
    }

    renderSuggestion(hit) {
        return <Highlight attribute="Name" hit={hit} tagName="mark" />;
    }

    render() {
        const { hits, onSuggestionSelected } = this.props;
        const { value } = this.state;
        this.props.setValue(this.state.value)

        const inputProps = {
            placeholder: '授業名 or 先生名',
            onChange: this.onChange,
            value,
            // autocomplete:"off"
        };

        return (
        <>
        <AutoSuggest
            suggestions={hits}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps}
        />
        </>
        );
    }
}

export default connectAutoComplete(AutoComplete);