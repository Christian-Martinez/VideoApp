import React, {Component} from 'react';
import {Text, FlatList, StyleSheet, ImageBackground} from 'react-native';

import API from 'VideoApp/src/utils';
import Category from './components/Category';
import Empty from 'VideoApp/src/components/Empty';
import Separator from 'VideoApp/src/components/HorizontalSeparator';

class CategoryList extends Component {
  state = {
    list: null,
  };

  async componentDidMount () {
    const list = await API.getMovies();
    if (list !== null) {
      this.setState ({list});
    }
  }
  renderItem = ({item}) => {
    return <Category {...item} />;
  };

  render () {
    return (
      <ImageBackground
        source={require ('../../../assets/logo.png')}
        style={styles.container}
      >
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString ()}
          data={this.state.list}
          ListEmptyComponent={() => <Empty text="No hay sugerencias" />}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={this.renderItem}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 8,
  },
});

export default CategoryList;
