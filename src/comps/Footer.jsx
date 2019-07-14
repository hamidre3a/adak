import React from 'react';
import Radium from 'radium';
import { Segment, Grid, Header, Menu, Icon, Input } from 'semantic-ui-react';

import { faDigit } from 'utils';


const colItems = {
  1: [
    { key: 'type1', name: 'نوع 1', href: '/' },
    { key: 'type2', name: 'نوع 2', href: '/' },
    { key: 'type3', name: 'نوع 3', href: '/' },
    { key: 'type4', name: 'نوع 4', href: '/' },
    { key: 'type5', name: 'نوع 5', href: '/' },
    { key: 'type6', name: 'نوع 6', href: '/' },
  ],
  2: [
    { key: 'login', name: 'ورود', href: '/' },
    { key: 'signup', name: 'عضویت', href: '/' },
    { key: 'explore', name: 'جستجوی خدمات', href: '/' },
    { key: 'track', name: 'پیگیری رزرو', href: '/' },
    { key: 'about', name: 'درباره ما', href: '/' },
    { key: 'contact', name: 'ارتباط با ما', href: '/' },
  ],
  3: [
    { key: 'address', name: 'آدرس' },
    { key: 'phone', name: faDigit('021-12345678') },
    { key: 'email', name: 'reservation@nowhere.com' },
  ],
};
colItems[1].map(item => { item.style = { ':hover': { color: 'violet' } } });

const icons = [
  'twitter', 'instagram', 'facebook', 'youtube'
];

function Footer() {
  return (
    <Segment basic style={styles.footerRoot}>
      <Grid>
        <Grid.Column width={3}>
          <Header as='h4' style={styles.colHeader}>رزرواسیون</Header>
          <Menu items={colItems[1]} text vertical inverted />
        </Grid.Column>
        <Grid.Column width={3}>
          <Header as='h4' style={styles.colHeader}>لینک‌ها</Header>
          <Menu items={colItems[2]} text vertical inverted />
        </Grid.Column>
        <Grid.Column width={3}>
          <Header as='h4' style={styles.colHeader}>ارتباط با ما</Header>
          {/* <Menu text vertical inverted>
            <Menu.item>آدرس</Menu.item>
            <Menu.item name={faDigit('021-12345678')} />
            <Menu.item name="reservation@nowhere.com" />
          </Menu> */}
          <p>آدرس</p>
          <p>{faDigit('12345678-021')}</p>
          <p>reservation@nowhere.com</p>
          {/* <Menu text icon>
            {icons.map(icon =>
              <Menu.Item><Icon name={icon} color={icon} size='large' /></Menu.Item>
            )}
          </Menu> */}
            {icons.map(icon =>
              <Icon name={icon} color={icon} size='large' />
            )}
        </Grid.Column>
        <Grid.Column width={7}>
          <Header as='h4' style={styles.colHeader}>عضویت در خبرنامه</Header>
          <p>برای دریافت آخرین اخبار و تخفیف ها در سیستم رزرواسیون ایمیل خود را ثبت نمایید.</p>
          <Input placeholder='ایمیل خود را وارد نمایید ...' fluid
            action={{ content: 'ثبت', color: 'violet' }}
          />
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

const styles = {
  footerRoot: {
    backgroundColor: '#333',
    color: '#ddd',
    padding: 32,
  },
  colHeader: {
    color: 'violet',
    marginBottom: 16,
  }
};

export default Radium(Footer);