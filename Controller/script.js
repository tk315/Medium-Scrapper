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
    console.log(str);
    request(str,(error, response, html)=>{
        if(error)
        {
            console.log('error:',error);
        }
        else
        {         
            let $=cheerio.load(html);

            
            $('.ea.l a').each((i,el)=>{
                links.push($(el).attr('href'));
            });
            // console.log(links);
        
           
            $('h2').each((i,el)=>{
                if(i<10)title.push($(el).text());
            });
            // console.log(title);
        
           
            // .t.ag.cm
            $('.ae.fj h4').each((i,el)=>{
                if(i<10)creator.push($(el).text());
            }).get(0);
            // console.log(creator);
        
            
           
            $('.ef.cq.eg.l a').each((i,el)=>{
                tags.push($(el).text());
            });
            // console.log(tags);
        
            

            $('.ae.t p').each((i,el)=>{
                if(i<10)upload.push($(el).text());
            });
            // console.log(upload);
        
          
            $('.ae.fj span').each((i,el)=>{
                let temp=$(el).text();
                if(temp.length>1)time.push(temp);   
            });
            // console.log(time);

           
            $('.ae.fj h3').each((i,el)=>{
                blog.push($(el).text());
            });
            // console.log(blog);
        
           

        }

    });


             
}

function getjson()
{   
    let obj={
        "links":links,
       // "img":img,
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




















// function extractpage()
// {
//     request("https://medium.com/delta-force/introduction-to-react-8c58de2af2b1",callbackfun2);   
// }
// function callbackfun2(error, response, html)
// {
//     if(error)
//     {
//         console.log('error:',error);
//     }
//     else
//     {
//         let $=cheerio.load(html);
     
      
//         console.log(obj);
//     }
    
// }



            // claps.length=0;
            // $('.ih button').each((i,el)=>{
            //    claps.push($(el).text());
            // });
            // console.log(claps);


            
            // img.length=0;
            // $('.hr.l img').each((i,el)=>{
            //     img.push($(el).attr('src'););
            // });
            // console.log(img);