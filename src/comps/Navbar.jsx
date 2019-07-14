import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';


function Navbar({ location }) {
  const items = [
    { key: 'home', name: 'صفحه اصلی', href: '/' },
    { key: 'services', name: 'خدمات', href: '/services' },
    { key: 'reserve', name: 'رزرو', href: '/reserve' },
    { key: 'track', name: 'پیگیری رزرو', href: '/track' },
    { key: 'blog', name: 'بلاگ', href: '/blog' },
    { key: 'about', name: 'درباره ما', href: '/about' },
    { key: 'contact', name: 'تماس با ما', href: '/contact' },
  ];
  items.map(item => { item.color = 'violet' });
  const filteredItems = items.filter(item => item.href === location.pathname);
  if (filteredItems.length > 0)
    filteredItems[0].active = true;
  return (
    // <Menu items={items} inverted attached stackable size="large" />
    <Menu inverted attached stackable size="large">
      {items.map(item => <Menu.Item {...item} />)}
      <Menu.Menu position='right'>
        <Menu.Item>
          <Button color='violet'>ورود / عضویت</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default withRouter(Navbar);