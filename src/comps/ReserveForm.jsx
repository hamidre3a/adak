import React from 'react';
import { Form } from 'semantic-ui-react';

import AbstractForm from 'comps/AbstractForm';
import { faDigit } from 'utils';


const genderOptions = [
  { key: "male", text: "مرد", value: "male" },
  { key: "female", text: "زن", value: "female" },
];

const serviceOptions = [
  { key: "type1", text: "نوع ۱", value: 1 },
  { key: "type2", text: "نوع ۲", value: 2 },
];

const dateOptions = [
  { key: "0", text: "1398/04/20", value: "1398/04/20" },
  { key: "1", text: "1398/04/21", value: "1398/04/21" },
  { key: "2", text: "1398/04/22", value: "1398/04/22" },
];

const timeOptions = [
  { key: "1", text: "07:00", value: "07:00" },
  { key: "2", text: "08:00", value: "08:00" },
  { key: "3", text: "09:00", value: "09:00" },
  { key: "4", text: "10:00", value: "10:00" },
  { key: "5", text: "11:00", value: "11:00" },
  { key: "6", text: "12:00", value: "12:00" },
];

serviceOptions.map(item => { item.text = faDigit(item.text); });
dateOptions.map(item => { item.text = faDigit(item.text); });
timeOptions.map(item => { item.text = faDigit(item.text); });

class ReserveForm extends AbstractForm {
  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Input label="نام" {...this.commonProps("fName")} />
          <Form.Input label="نام خانوادگی" {...this.commonProps("lName")} />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown selection label="جنسیت" {...this.commonProps("gender")}
            options={genderOptions} />
          <Form.Input label="تلفن" {...this.commonProps("phone")} />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown selection label="نوع ماساژ" {...this.commonProps("serviceType")}
            options={serviceOptions} />
          <Form.Field control="textarea" rows={2} disabled
            style={{ resize: 'none', fontFamily: 'Vazir' }}
            value="توضیحات این نوع ماساژ"
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Dropdown selection label="تاریخ" {...this.commonProps("date")}
            options={dateOptions} />
          <Form.Dropdown selection label="ساعت" {...this.commonProps("time")}
            options={timeOptions} />
        </Form.Group>
        <div style={{ height: 16 }} />
        <div className="center">
          <Form.Button color="violet" size="large">رزرو</Form.Button>
        </div>
      </Form>
    );
  }
}

export default ReserveForm;
