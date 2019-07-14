import React from 'react';
import { Card, Button } from 'semantic-ui-react';


function ServiceCard() {
  return (
    <Card>
      <div style={styles.imgFiller} />
      <Card.Content style={{ textAlign: 'center' }}>
        <Card.Header>ماساژ نوع اول</Card.Header>
        <Card.Description>ماساژ با آرنج - به همراه شکستن قلنج</Card.Description>
        <div style={{ height: 16 }} />
        <Card.Content extra>
          <Button color="violet" fluid>رزرو</Button>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

const styles = {
  imgFiller: {
    height: 256,
    backgroundColor: '#321',
  },
};

export default ServiceCard;