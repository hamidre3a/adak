import React from 'react';
import {
  Container, Segment,
  Card,
} from 'semantic-ui-react';

import Template from 'comps/Template';
import ServiceCard from 'comps/ServiceCard';


function Services() {
  return (
    <Template gray={false}>
      <Container>
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
    backgroundColor: '#eee',
    height: 400,
  },
};

export default Services;