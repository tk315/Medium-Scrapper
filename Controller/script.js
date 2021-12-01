const request =require('request');
const cheerio = require('cheerio');

let links = [];
let img = [];
let title=[];
let creator=[];
let tags=[];
let upload=[]; 
let time=[];
let blog=[];

function search(tag)
{
    links.length=0;
    title.length=0;
    creator.length=0;
    tags.length=0;
    upload.length=0;
    time.length=0;
    blog.length=0;
    if(tag.length===0)return;

    const str=`https://medium.com/tag/${tag}/latest`;
    request(str,(error, response, html)=>{
        if(error)
        {
            console.log('error:',error);
        }
        else
        {         
            let $=cheerio.load(html);

            $('a').each((i,el)=>{
               
                if($(el).attr().class!=undefined && $(el).attr().class.length==44 && $(el).attr('href')[0]=='/' && $(el).attr('href')[1]=='@')links.push($(el).attr('href'));
            });
           
            $('h2').each((i,el)=>{
                if(i<10)title.push($(el).text());
            });
  
            $('h4').each((i,el)=>{
                if($(el).attr().class!=undefined && $(el).attr().class.length==38)creator.push($(el).text());
            });
           
            $('.ef.cq.eg.l a').each((i,el)=>{
                tags.push($(el).text());
            });

            $('p').each((i,el)=>{
                let temp=$(el).text();
                console.log($(el).attr().class.length,"  ",$(el).text());
                if($(el).attr().class.length==34)upload.push(temp);
            });
          
            $('span').each((i,el)=>{
                let temp=$(el).text();

                if($(el).attr().class!=undefined && $(el).attr().class.length==13 && temp.length>1)time.push(temp);  
            });
           
            $('h3').each((i,el)=>{
                if(i>=1 && i<=10)blog.push($(el).text());
            });
        }
    });    
}

function getjson()
{   
    let obj={
        "links":links,
        "title":title,
        "creator":creator,
        "tags":tags,
        "upload":upload,
        "time":time,
       "blog":blog
    };
    console.log(obj);
    return obj;
}

module.exports = {search,getjson};