import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome';
import Article from './Article';

class Articles extends Component {

  constructor(props){
    super(props);

    this.state = {
      articles: []
    }

    this.fetchArticles = this.fetchArticles.bind(this);
  }

  fetchArticles(){
    const articles = [
      {
        headline: 'E3 Trailer Shows Off Star Wars Battlefront II – It’s a Breathtaking Cinematic Treasure',
        image_url: 'img/E3-Trailer-Star-Wars-Battlefront-II-140x140.jpg',
        href_url: 'http://www.gamespace.com/all-articles/news/e3-trailer-star-wars-battlefront-ii/'
      }
    ]

    this.setState({
      articles: articles
    })
  }

  componentWillMount(){
    this.fetchArticles();
  }

  render(){
    const articles = this.state.articles.map((article, i) => (
      <Article key={i} data={article} />
    ));

    return (
      <div className='articles'>
        <div className='article-title-area'>
          <h3>Latest Articles</h3>
          <div className='articles-see-all-link'>
            <a href=''>See All Articles<FontAwesome name='angle-right' /></a>
          </div>
          <div className='horz-rule'></div>
        </div>

        { articles }
      </div>
    );
  }
}

export default Articles;
