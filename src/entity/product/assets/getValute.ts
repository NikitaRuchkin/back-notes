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
      let nominal = []
      let spliteNominal
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
            //take Nominal
            spliteNominal = value.split('<Nominal>');
            spliteNominal.map(
              (item)=> {
                if (item.includes('</Value>')) {
                  nominal.push({ [name]: Number(item.split('</Nominal>')[0]) });
                }
                return item
              }
            )

            //take Exchange Rates
            let splitValute = value.split('<Value>');
            splitValute.map((item) => {
              if (item.includes('</Value>')) {
                splitDataFinish.push({ [name]: Number(item.split('</Value>')[0].split(',').join('.')) });
              }

              return item;
            });
          }

        });
        return value;
      });

      nominal.map(
        (nominal) => {
          splitDataFinish.map(
            (item) => {
              let key = Object.keys(nominal)[0]
              if (item[key]) {
                return item[key] = Number(item[key])/Number(nominal[key])
              }
            }
          )
          return nominal
        }
      )

      return splitDataFinish;
    })
    .catch(function (error) {
      console.log(error);
    });
  return splitDataFinish
}
