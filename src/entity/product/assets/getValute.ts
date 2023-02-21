import axios from 'axios';

const usa = 'R01235';
const cad = 'R01350';
const bath = 'R01675';
const actualValutes = [usa, cad, bath];
const namesValute = ['USD', 'CAD', 'THB'];

const config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://www.cbr.ru/scripts/XML_daily.asp?date_req=21/02/2023',
};

export async function getValutes() {

  let splitDataFinish = [];
  await axios(config)
    .then(function (response) {
      let splitDataFirstStep = [];
      let data = response.data.split('<Valute');

      data.map((item) => {
        actualValutes.forEach((value) => {
          if (item.includes(value)) {
            splitDataFirstStep.push(item);
          }
        });
        return item;
      });

      splitDataFirstStep.map((value) => {
        namesValute.map((name) => {
          if (value.includes(name)) {
            let splitValute = value.split('<Value>');
            splitValute.map((item) => {
              if (item.includes('</Value>')) {
                splitDataFinish.push({ [name]: item.split('</Value>')[0] });
              }

              return item;
            });
          }
        });
        return value;
      });
      return splitDataFinish;
    })
    .catch(function (error) {
      console.log(error);
    });
  return splitDataFinish
}
