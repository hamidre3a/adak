import React from 'react';


function BlogCard() {
  return (
    <div className="ui divided items segment">
      <div className="item">
        <div className="image">
          <img src="https://semantic-ui.com/images/wireframe/image.png" />
        </div>
        <div className="content">
          <a className="header">12 Years a Slave</a>
          <div className="meta">
            <span className="cinema">Union Square 14</span>
          </div>
          <div className="description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus odit quas, perferendis natus quo laudantium unde non sint modi velit consequuntur, quaerat voluptates ad. Mollitia quae quidem deserunt adipisci neque.</p>
          </div>
          <div className="extra">
            <div className="ui label">IMAX</div>
            <div className="ui label"><i className="globe icon"></i> Additional Languages</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  imgFiller: {
    height: 128,
    backgroundColor: '#321',
  },
};

export default BlogCard;