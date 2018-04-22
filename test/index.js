const expect = require('chai').expect;
const genPassOfDay = require('../src');

describe('Testing genPassOfDay function', () => {

  it('With default seed', () => {
    expect(genPassOfDay(new Date('2018-04-22 00:00:00')))
      .to
      .equal('ZOU3MWLZKX')
    ;
  });

  it('With vtr2014 seed', () => {
    expect(genPassOfDay(
      new Date('2018-04-22 00:00:00'),
      'vtr2014',
    ))
      .to
      .equal('Y20E72FQ9I')
    ;
  });

  it('With one month with vtr2014 seed', () => {
    const testCases = {
      '2018-04-01': 'ZVUUQ7B467',
      '2018-04-02': 'X84F1DZ4N6',
      '2018-04-03': 'Q7S3502K5I',
      '2018-04-04': 'ZA8ICZEDFN',
      '2018-04-05': '7C0EJIY7AU',
      '2018-04-06': 'OO8IHECY7P',
      '2018-04-07': 'I7SEDJ05ZC',
      '2018-04-08': '43RN6SAEXU',
      '2018-04-09': 'W1T3B2G82M',
      '2018-04-10': 'W1TUZAQWIY',
      '2018-04-11': 'W8DFFJZCWX',
      '2018-04-12': 'FQ3U17NECW',
      '2018-04-13': 'BD5F08ZQYV',
      '2018-04-14': '1W53ZLMBUE',
      '2018-04-15': '4X1F0XB40T',
      '2018-04-16': 'A5VU57EXOS',
      '2018-04-17': 'VI0NY4DKUT',
      '2018-04-18': '5SS3BGGHAS',
      '2018-04-19': 'TF2NGYA9D3',
      '2018-04-20': '7Q73B1L9OH',
      '2018-04-21': 'R94NBG2YEE',
      '2018-04-22': 'Y20E72FQ9I',
      '2018-04-23': 'N22IC0VZ66',
      '2018-04-24': 'WUGFZ3N79K',
      '2018-04-25': 'AB9UEFNWOJ',
      '2018-04-26': 'EDDF9SH4BI',
      '2018-04-27': 'F0UUGTFBOH',
      '2018-04-28': 'FUQIICQI9B',
      '2018-04-29': 'ZPUUI7B40F',
      '2018-04-30': 'X84F17T4FE',
    };

    Object
      .keys(testCases)
      .forEach(date => {
        expect(genPassOfDay(
          new Date(`${date} 12:00:00`),
          'vtr2014',
        ))
          .to
          .equal(testCases[date])
        ;
      })
    ;
  });

  it('Throw error when not pass date instance', () => {
    expect(() => genPassOfDay('2018-04-01 00:00:00'))
      .to
      .throw('Date is not a Date instance')
    ;
  });

  it('Throw error when seed is not string', () => {
    expect(() => genPassOfDay(new Date('2018-04-01 00:00:00'), 2014))
      .to
      .throw('Seed is not a String instance')
    ;
  });

  it('Throw error with empty seed', () => {
    expect(() => genPassOfDay(new Date('2018-04-01 00:00:00'), ''))
      .to
      .throw('Seed min length: 1')
    ;
  });
});
