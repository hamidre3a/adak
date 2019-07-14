import React from 'react';
import {
  Container, Segment,
  Button, Header, Card, Grid, Image
} from 'semantic-ui-react';

import Template from 'comps/Template';
import Center from 'comps/Center';
import ServiceCard from 'comps/ServiceCard';
import BlogCard from 'comps/BlogCard';


const Hero = () => (
  <div style={styles.heroRoot}>
    <Center>
      <Header as='h1'>رزرو ماساژ</Header>
      {/* <Header as='h3'>اولین و بزرگترین سامانه رزرواسیون آنلاین</Header> */}
      <div style={{ height: 32 }} />
      <Button color="violet">رزرو</Button>
      <Button color="violet" basic>مشاهده خدمات</Button>
    </Center>
  </div>
);
const Options = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We Help Companies and Companions
            </Header>
              <p style={{ fontSize: '1.33em' }}>
                We can give your company superpowers to do things that they never thought possible.
                Let us delight your customers and empower your needs... through pure data analytics.
            </p>
              <Header as='h3' style={{ fontSize: '2em' }}>
                We Make Bananas That Can Dance
            </Header>
              <p style={{ fontSize: '1.33em' }}>
                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                bioengineered.
            </p>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src='https://react.semantic-ui.com/images/wireframe/white-image.png' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign='center'>
              <Button size='huge'>Check Them Out</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
);
function Landing() {
  return (
    <Template gray={false}>
      <Hero />
      <Options />
      <Container style={styles.bodyRoot} >
        <Header as='h1'>خدمات مرکز ماساژ</Header>
        <div class="ui divider"></div>
        <Segment basic>
          <Card.Group itemsPerRow={3}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Card.Group>
        </Segment>


      </Container>



      
      <Segment style={{ padding: '0em' }}>
        <Grid celled='internally' columns='equal' >
          <Grid.Row textAlign='center'>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "What a Company"
            </Header>
              <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                "I shouldn't have gone with their competitor."
            </Header>
              <p style={{ fontSize: '1.33em' }}>
                <Image avatar src='/images/avatar/large/nan.jpg' />
                <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>



      <Container style={styles.bodyRoot}><Header as='h1'>آخرین آموزش ها</Header>
        <div class="ui divider"></div>
        <Segment basic>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Segment>
      </Container>
    </Template>
  );
}

const styles = {
  heroRoot: {
    backgroundColor: '#e0e0e0',
    height: 500,
  },
  bodyRoot: {
    padding: 64,
  }
};

export default Landing;