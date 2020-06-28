import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

import API from 'VideoApp/src/utils';
import Suggestion from './components/Suggestion';
import Empty from 'VideoApp/src/components/Empty';
import Separator from 'VideoApp/src/components/VerticalSeparator';

class SuggestionList extends Component {
  async componentDidMount () {
    const suggestionList = await API.getSuggestion (10);
    this.props.dispatch ({
      type: 'SET_CATEGORY_LIST',
      payload: {
        suggestionList,
      },
    });
  }

  renderItem = ({item}) => {
    return <Suggestion {...item} />;
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Recomendado para tí</Text>
        <FlatList
          keyExtractor={item => item.id.toString ()}
          data={this.props.list}
          ListEmptyComponent={() => <Empty text="No hay sugerencias" />}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: state.videos.suggestionList,
  };
}

export default connect (mapStateToProps) (SuggestionList);

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
  },
  list: {
    width: '100%',
  },
});
