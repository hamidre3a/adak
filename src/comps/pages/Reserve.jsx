import React from 'react';
import {
  Container, Segment,
} from 'semantic-ui-react';

import Template from 'comps/Template';
import ReserveForm from 'comps/ReserveForm';


function Reserve() {
  return (
    <Template>
      <Container style={styles.bodyRoot}>
        <Segment raised style={styles.formContainer}>
          <ReserveForm />
        </Segment>
      </Container>
    </Template>
  );
}

const styles = {
  bodyRoot: {
    padding: 32,
  },
  formContainer: {
    padding: 32,
  },
};

export default Reserve;