import React from 'react';


function BlogCard() {
  return (
    <div class="ui divided items segment">
      <div class="item">
        <div class="image">
          <img src="https://semantic-ui.com/images/wireframe/image.png" />
        </div>
        <div class="content">
          <a class="header">12 Years a Slave</a>
          <div class="meta">
            <span class="cinema">Union Square 14</span>
          </div>
          <div class="description">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus odit quas, perferendis natus quo laudantium unde non sint modi velit consequuntur, quaerat voluptates ad. Mollitia quae quidem deserunt adipisci neque.</p>
          </div>
          <div class="extra">
            <div class="ui label">IMAX</div>
            <div class="ui label"><i class="globe icon"></i> Additional Languages</div>
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