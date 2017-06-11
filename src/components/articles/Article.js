import React from 'react';

const Article = (props) => {
  return (

    <article>


      <header>
        <img src={props.data.image_url} alt=''/>
        <h2><a href={props.data.href_url}>{ props.data.headline }</a></h2>
      </header>
    </article>
  );
}

export default Article;
