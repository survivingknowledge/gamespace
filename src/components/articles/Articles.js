import React, { Component } from 'react'

import FontAwesome from 'react-fontawesome';

class Articles extends Component {

  render(){
    return (
      <div className='articles'>
        <div className='article-title-area'>
          <h3>Latest Articles</h3>
          <div className='articles-see-all-link'>
            <a href=''>See All Articles<FontAwesome name='angle-right' /></a>
          </div>
          <div className='horz-rule'></div>
        </div>
      </div>
    );
  }
}

export default Articles;
