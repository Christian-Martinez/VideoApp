import React, {Component} from 'react';
import {Text, FlatList, StyleSheet, ImageBackground} from 'react-native';
import {connect} from 'react-redux';

import API from 'VideoApp/src/utils';
import Category from './components/Category';
import Empty from 'VideoApp/src/components/Empty';
import Separator from 'VideoApp/src/components/HorizontalSeparator';

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

class CategoryList extends Component {
  async componentDidMount () {
    const categoryList = await API.getMovies ();
    this.props.dispatch ({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList,
      },
    });
  }

  renderItem = ({item}) => {
    return <Category {...item} />;
  };

  render () {
    return (
      <ImageBackground
        source={require ('../../../assets/cruze.jpg')}
        style={styles.container}
      >
        <Text style={styles.title}>Categorias</Text>
        <FlatList
          horizontal
          keyExtractor={item => item.id.toString ()}
          data={this.props.list}
          ListEmptyComponent={() => <Empty text="No hay sugerencias" />}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={this.renderItem}
        />
      </ImageBackground>
    );
  }
}

function mapStateToProps (state) {
  return {
    list: state.videos.categoryList,
  };
}

export default connect (mapStateToProps) (CategoryList);
