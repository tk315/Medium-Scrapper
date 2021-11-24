const request =require('request');
const cheerio = require('cheerio');
request('https://medium.com/search/posts?q=node.js&count=10',callbackfun);

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

    let title = seltool('.graf.graf--h3.graf--title');
    // let creator = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');
    //let detail1 = seltool('time');
    //let detail2 = seltool('.readingTime title');
    //let blog = seltool('.graf.graf--p.graf-after--h3.graf--trailing');
    //let tags = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');
    //let responses = seltool('.ds-link.ds-link--styleSubtle.u-accentColor--textDarken');
                          


    console.log(title.length);

    for(let i=0;i<title.length;i++)
    {
        console.log(seltool(title[i]).text() );
    }

}
// // h3 .graf graf--h3 graf-after--figure graf--title
// // h3 .graf graf--h3 graf-after--figure graf--title
//        graf graf--h3 graf--leading graf--title