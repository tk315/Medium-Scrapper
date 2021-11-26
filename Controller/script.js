const request =require('request');
const cheerio = require('cheerio');

async function search(tag)
{
    request(`https://medium.com/search/posts?q=${tag}&count=10`, await callbackfun);
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

var title = [];

function handle(html)
{
    let seltool=cheerio.load(html);

    let links = seltool('.postArticle-content a');

    if(title.length==0){for(let i=0;i<links.length;i++){title.push(seltool(links[i]).text());}}
    else {for(let i=0;i<links.length;i++){title[i]=seltool(links[i]).text();}}
    console.log("first");
}
function getjson()
{   
    console.log("second");
    let ans={
        "title":title
    }
    return ans;
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

module.exports = {search,getjson};