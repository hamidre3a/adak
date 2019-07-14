import React from 'react';
import {
  Container, Segment, Header,
  Grid, Divider, Table,
} from 'semantic-ui-react';

import Template from 'comps/Template';
import { faDigit } from 'utils';


const reserves = [
  {
    id: 1, trackNumber: '123456', fName: 'علی', lName: 'اکبری', gender: 'مرد',
    phone: '12345678', serviceType: 1, date: '1398/04/20', time: '07:00', status: 'waiting'
  },
  {
    id: 2, trackNumber: '654321', fName: 'محمد', lName: 'اصغری', gender: 'مرد',
    phone: '87654321', serviceType: 2, date: '1398/04/21', time: '08:00', status: 'approved'
  },
];


const reserveHeaders = [
  "شماره پیگیری",
  "نام",
  "نام خانوادگی",
  "جنسیت",
  "تلفن",
  "نوع ماساژ",
  "تاریخ",
  "ساعت",
  "وضعیت",
];

function ReserveRow(reserve, i) {
  const status = {
    'waiting': 'در دست بررسی',
    'approved': 'تأیید شده',
  }[reserve.status];
  return {
    key: reserve.id,
    cells: [
      reserve.trackNumber,
      reserve.fName,
      reserve.lName,
      reserve.gender,
      reserve.phone,
      reserve.serviceType,
      reserve.date,
      reserve.time,
      {
        key: 'status',
        content: status,
        icon: reserve.status === 'waiting' ? 'attention' : 'checkmark',
        warning: reserve.status === 'waiting',
        positive: reserve.status === 'approved'
      },
    ],
  }
}


function Track() {
  return (
    <Template>
      <Container style={styles.bodyRoot}>
        <Segment raised style={styles.formContainer}>
          <div className="center">
            <Header as="h1">رزروهای انجام شده</Header>
          </div>
          <Table celled
            headerRow={reserveHeaders}
            renderBodyRow={ReserveRow}
            tableData={reserves} />
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

export default Track;
