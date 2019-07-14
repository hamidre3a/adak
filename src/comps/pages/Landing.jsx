import React from 'react';
import {
  Container, Segment,
  Button, Header, Card
} from 'semantic-ui-react';

import Template from 'comps/Template';
import Center from 'comps/Center';
import ServiceCard from 'comps/ServiceCard';


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

function Landing() {
  return (
    <Template gray={false}>
      <Hero />
      <Container style={styles.bodyRoot}>
        <Segment basic>
          <Card.Group itemsPerRow={3}>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </Card.Group>
        </Segment>
      </Container>
    </Template>
  );
}

const styles = {
  heroRoot: {
    backgroundColor: '#e0e0e0',
    height: 400,
  },
  bodyRoot: {
    padding: 64,
  }
};

export default Landing;