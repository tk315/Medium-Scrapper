const request =require('request');
const cheerio = require('cheerio');

function search(tag)
{
    request(`https://medium.com/search/posts?q=${tag}&count=10`,callbackfun);
}

function callbackfun(error, response, html)
{
    if(error)
    {
        console.log('error:',error);
    }
    else
    {
        handle(html);
    }
}

function handle(html)
{
    let seltool=cheerio.load(html);

    let links = seltool('.postArticle-content a');
    

    console.log(links.length);

    for(let i=0;i<links.length;i++)
    {
        console.log(seltool(links[i]).text());
    }
  
}
// // h3 .graf graf--h3 graf-after--figure graf--title
// // h3 .graf graf--h3 graf-after--figure graf--title
//        graf graf--h3 graf--leading graf--title


// let title = seltool('.graf.graf--h3.graf--title');
// let creator = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');
//let detail1 = seltool('time');
//let detail2 = seltool('.readingTime title');
//let blog = seltool('.graf.graf--p.graf-after--h3.graf--trailing');
//let tags = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');
//let responses = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');

module.exports = {search};