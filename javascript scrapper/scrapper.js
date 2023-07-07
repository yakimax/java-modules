const cheerio = require('cheerio') ;
const axios = require('axios') ;
const siteLink = 'https://www.espncricinfo.com/series/new-zealand-in-pakistan-2022-23-1339576/pakistan-vs-new-zealand-1st-test-1339609/full-scorecard';


  async function scrapeData() {
    try {
      const { data } = await axios.get(siteLink) ; 

      const $ =  cheerio.load(data) ;
    
    //   let table = $('.ci-scorecard-table > tbody') ;
      let text = $('.ci-scorecard-table > tbody > tr >td > a > span > span').text() ;
      console.log(text.split(' ') ) ;

    } catch (err) {

      console.error(err) ;

    }
}

scrapeData();


