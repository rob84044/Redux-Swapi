import React from 'react';
import { connect } from 'react-redux';
import { getPeople } from '../actions';
import { CharacterList } from '../components';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getPeople();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <h1>We are fetching the data now...</h1>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = ({ charsReducer }) => {
  return {
    characters: charsReducer.characters,
    isfetching: charsReducer.isfetching
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  { getPeople }
)(CharacterListView);
