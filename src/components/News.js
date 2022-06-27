import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  articles = [{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "Hindustantimes",
    "title": "Mumbai vs MP Live Score Ranji Trophy 2022 Final: Madhya Pradesh 475/6 at lunch - Hindustan Times",
    "description": "Ranji Trophy Final Live Score Mumbai vs MP: Rajat Patidar hit 163-ball hundred to put Madhya Pradesh in a comfortable position. Catch Live score and updates of the MUM vs MP Match Today at M. Chinnaswamy Stadium, Bengaluru.",
    "url": "https://www.hindustantimes.com/cricket/ranji-trophy-2022-final-mumbai-vs-mp-live-cricket-score-day-4-updates-m-chinnaswamy-stadium-bengaluru-101656124987562.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/06/25/1600x900/PTI06-24-2022-000231B-0_1656125175346_1656125196952.jpg",
    "publishedAt": "2022-06-25T06:22:01Z",
    "content": "Hello and welcome to the LIVE coverage of the Ranji Trophy finals between Mumbai and Madhya Pradesh. Twin centuries from Yash Dubey and Shubham Sharma headlined the third day at M Chinnaswamy Stadium… [+228 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Indian Express"
    },
    "author": "Tech Desk",
    "title": "Microsoft to end Windows 8.1 support in January 2023 | Technology News - The Indian Express",
    "description": "Microsoft will stop providing security updates for Windows 8.1 from January 10, 2023, after which users will be encouraged to upgrade to Windows 11 for a safer experience.",
    "url": "https://indianexpress.com/article/technology/tech-news-technology/microsoft-to-end-windows-8-1-support-in-january-2023-7990211/",
    "urlToImage": "https://images.indianexpress.com/2022/06/Microsoft-Windows-8.1-.jpg",
    "publishedAt": "2022-06-25T05:51:13Z",
    "content": "Windows 8.1 was one of my favourite editions of the popular operating system, especially since it provided a perfect balance between the older, signature Windows interface and the tiled UI Microsoft … [+1282 chars]"
},
{
    "source": {
        "id": null,
        "name": "India.com"
    },
    "author": "IANS",
    "title": "Rare planetary conjunction: Five planets of solar system line up in `special` order - Zee News",
    "description": "Five major planets -- Mercury, Venus, Mars, Jupiter, and Saturn -- in our solar system are lined up in a row for rare planetary conjunction visible to the naked eye. In a clear sky, the planets can be seen shining before dawn.",
    "url": "https://zeenews.india.com/world/rare-planetary-conjunction-five-planets-of-solar-system-line-up-in-special-order-2477666.html",
    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/06/25/1057610-untitled-design-2022-06-25t111532.754.jpg",
    "publishedAt": "2022-06-25T05:45:57Z",
    "content": "New York: Five major planets -- Mercury, Venus, Mars, Jupiter, and Saturn -- in our solar system are lined up in a row for rare planetary conjunction visible to the naked eye. In a clear sky, the pla… [+1202 chars]"
},
{
    "source": {
        "id": null,
        "name": "The Indian Express"
    },
    "author": "Monojit Majumdar",
    "title": "Bangladesh awaits its bridge of dreams across the mighty Padma - The Indian Express",
    "description": "By joining the southwest — home to 30 million people — with the capital across the river that cleaves through the country, the bridge is expected to give an unprecedented boost to communications, trade, and the economy of Bangladesh as a whole.",
    "url": "https://indianexpress.com/article/world/bangladesh/bangladesh-awaits-its-bridge-of-dreams-across-the-mighty-padma-7989698/",
    "urlToImage": "https://images.indianexpress.com/2022/06/IMG_8380-2.jpg",
    "publishedAt": "2022-06-25T05:44:50Z",
    "content": "All along the brand new six-lane expressway from Dhaka to Mawa in Munshiganj district, signs with pictures of Sheikh Hasina congratulate her and the people of Bangladesh on “amader swapner Padda Setu… [+8261 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": null,
    "title": "World Vitiligo Day 2022: Can Vitiligo Be Stopped From Spreading? - NDTV",
    "description": "World Vitiligo Day 2022: Here's everything you need to know about this skin condition.",
    "url": "https://www.ndtv.com/health/world-vitiligo-day-2022-can-vitiligo-be-stopped-from-spreading-3073308",
    "urlToImage": "https://c.ndtvimg.com/2022-06/7mlcdjf4_vitiligo_625x300_16_June_22.jpg",
    "publishedAt": "2022-06-25T05:32:24Z",
    "content": "World Vitiligo Day 2022: Vitiligo causes patchiness in the skin due to lack of melanin\r\nTheme &amp; significance\r\nWorld Vitiligo Day is observed on the 25 of June every year. The purpose of this day … [+3066 chars]"
},
{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Rs. 24000 discount! Exciting iPhone 12 price cut announced, check offer details - HT Tech",
    "description": "Offers on Apple iPhone 12: A massive iPhone 12 price cut has been rolled out. iPhone 12 discount is a massive Rs. 24000.",
    "url": "https://tech.hindustantimes.com/how-to/rs-24000-discount-exciting-iphone-12-price-cut-announced-check-offer-details-71656132830026.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/06/25/1600x900/1_1646105681756_1656132996671.jpg",
    "publishedAt": "2022-06-25T05:01:22Z",
    "content": "Offers on Apple iPhone 12: If you are planning to buy iPhone 12, today seems to be the perfect day for the same. You will be able to get the base variant of the Apple iPhone 12 with an up to Rs. 2400… [+2207 chars]"
},
{
    "source": {
        "id": "the-times-of-india",
        "name": "The Times of India"
    },
    "author": "TIMESOFINDIA.COM",
    "title": "'Truth has come out shining like gold': Amit Shah on SC upholding SIT clean chit to Modi - Times of India",
    "description": "India News: He also said Narendra Modi had endured pain for the last 19 years without speaking a word and followed \"Lord Shiva who swallowed poison and held it in",
    "url": "https://timesofindia.indiatimes.com/india/amit-shah-hails-sc-verdict-in-gujarat-riots-case-says-those-who-leveled-politically-motivated-allegations-should-apologise/articleshow/92448677.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-92449218,width-1070,height-580,imgsize-35574,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2022-06-25T04:59:00Z",
    "content": "2002 Gujarat riots: SC dismisses Zakia Jafris plea challenging SIT's clean chit to 64 people, including then CM Narendra ModiEhsan Jafri was among 69 people killed during the violence at the Gulberg … [+192 chars]"
},
{
    "source": {
        "id": null,
        "name": "EastMojo"
    },
    "author": "Press Trust of India",
    "title": "Newer Omicron subvariants escape vaccine immunity, previous infection: Study - EastMojo",
    "description": "Jerusalem: The newer Omicron sub variants of SARS-CoV-2 substantially escape neutralising antibodies induced by both vaccination and previous",
    "url": "http://www.eastmojo.com/coronavirus-updates/2022/06/25/newer-omicron-subvariants-escape-immunity-provided-by-vaccination-previous-infection-study/",
    "urlToImage": "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2021/12/coronavirus-g69d9dc252_1280.jpg?fit=1280%2C851&ssl=1",
    "publishedAt": "2022-06-25T04:50:00Z",
    "content": "Jerusalem: The newer Omicron sub variants of SARS-CoV-2 substantially escape neutralising antibodies induced by both vaccination and previous infection, according to a study published in the New Engl… [+1645 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": null,
    "title": "\"Not Consulted By Opposition\": Mayawati Backs Droupadi Murmu For President - NDTV",
    "description": "Bahujan Samaj Party chief Mayawati said on Saturday that she will back Droupadi Murmu in the presidential polls, making her the first key Opposition leader to extend support to BJP-led National Democratic Alliance (NDA) candidate.",
    "url": "https://www.ndtv.com/india-news/mayawati-backs-droupadi-murmu-for-president-says-was-not-consulted-by-opposition-3098868",
    "urlToImage": "https://c.ndtvimg.com/2019-04/2eb3ai4_mayawati-pti_625x300_28_April_19.jpg",
    "publishedAt": "2022-06-25T04:47:00Z",
    "content": "The BSP, Mayawati said, was independent to take a decision on the presidential elections. (File photo)\r\nLucknow: Bahujan Samaj Party chief Mayawati said on Saturday that she will support National Dem… [+2102 chars]"
},
{
    "source": {
        "id": null,
        "name": "India Today"
    },
    "author": "IndiaToday.in",
    "title": "Maharashtra political crisis LIVE | Shinde camp to discuss future strategy in Assam, notices to rebels ahead of big Sena meet - India Today",
    "description": "Taking dissident Shiv Sena MLAs head on, Maharashtra Chief Minister Uddhav Thackeray accused them of betrayal and challenged them to try and wean away common party workers as he slammed rebel leader Eknath Shinde and also tore into the BJP, saying it wants to…",
    "url": "https://www.indiatoday.in/india/story/maharashtra-political-crisis-live-updates-shiv-sena-eknath-shinde-rebellion-guwahati-mla-mva-uddhav-thackeray-bjp-congress-fadnavis-1966542-2022-06-25",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/breaking_news/202206/shinde_uddhav-647x363.jpeg?DlSahK5OH4y.fUhlGou0T4SdLnlIcYrQ",
    "publishedAt": "2022-06-25T04:30:00Z",
    "content": "There are three possible scenarios:\r\n1. All eyes are on NCP chief Sharad Pawar. If Deputy Speaker Narahari Zirwal disqualifies Eknath Shinde and his 15 supporters, the NCP will become the largest par… [+790 chars]"
},
{
    "source": {
        "id": null,
        "name": "Tech Explorist"
    },
    "author": "https://www.facebook.com/TechExplorist/",
    "title": "Understanding changes in Earth’s outer core with the help of seismic waves - Tech Explorist",
    "description": "The composition of the bulk, the outer core of the Earth, is not pure iron but has a density deficit of about 5–10%, indicating the existence of a",
    "url": "https://www.techexplorist.com/understanding-changes-earths-outer-core-help-seismic-waves/52094/",
    "urlToImage": "https://www.techexplorist.com/wp-content/uploads/2022/06/globe-illustration-zhou.jpg",
    "publishedAt": "2022-06-25T04:28:32Z",
    "content": "The composition of the bulk, the outer core of the Earth, is not pure iron but has a density deficit of about 510%, indicating the existence of a considerable amount of light elements in the outer co… [+6681 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": "Aditya Kumar",
    "title": "\"In Gully Cricket...\": Sachin Tendulkar's Cheeky Remark On Unfortunate Dismissal Of Henry Nicholls - NDTV Sports",
    "description": "Sharing his views on Henry Nicholls' dismissal, Sachin Tendulkar joked that in \"gully cricket\", the non-striker batter would have been declared out.",
    "url": "https://sports.ndtv.com/cricket/england-vs-new-zealand-in-gully-cricket-sachin-tendulkars-hilarious-remark-on-unfortunate-dismissal-of-henry-nicholls-3098861",
    "urlToImage": "https://c.ndtvimg.com/2022-06/luidvcvg_henry-nicholls-dismissal-_625x300_24_June_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
    "publishedAt": "2022-06-25T04:22:21Z",
    "content": "The ongoing third Test between England and New Zealand witnessed a bizarre dismissal on Thursday. Kiwi batter Henry Nicholls came down the track to hit a half volley from Jack Leach for a four down t… [+1347 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": null,
    "title": "Kareena Kapoor Struck Gold In Her Photo Archive On Sister Karisma Kapoor's Birthday - NDTV",
    "description": "\"This is my most favourite picture of you,\" wrote Kareena Kapoor",
    "url": "https://www.ndtv.com/entertainment/kareena-kapoor-struck-gold-in-her-photo-archive-on-sister-karisma-kapoors-birthday-3098852",
    "urlToImage": "https://c.ndtvimg.com/2022-06/gi789ah8_kareena-kapoor_625x300_25_June_22.jpg",
    "publishedAt": "2022-06-25T04:14:04Z",
    "content": "A throwback of Karisma Kapoor. (courtesy: kareenakapoorkhan)\r\nNew Delhi: Don't we all have a particular picture in our photo archive that we simply love? Well, the reason we brought this up today is … [+1271 chars]"
},
{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "HT Entertainment Desk",
    "title": "JugJugg Jeeyo box office day one: Varun, Kiara's film opens at ₹9.28 cr - Hindustan Times",
    "description": "JugJugg Jeeyo opened lower than Samrat Prithviraj and Gangubai Kathiawadi with day one collections coming ₹9.28 crore.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/jugjugg-jeeyo-box-office-day-1-collection-varun-dhawan-kiara-advani-s-film-opens-at-rs-8-50-cr-101656127226418.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/06/25/1600x900/jugjugg_jeeyo_1656128407690_1656128437820.jpg",
    "publishedAt": "2022-06-25T03:51:38Z",
    "content": "JugJugg Jeeyo, starring Anil Kapoor, Neetu Kapoor, Varun Dhawan and Kiara Advani in lead roles, registered a decent opening in theatres on Friday. It collected 9.28 crore on day one. Directed by Raj … [+1656 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": "Aditya Kumar",
    "title": "Twitter Erupts As Rishabh Pant Registers Fifty Against The Likes Of Mohammed Shami, Mohammed Siraj - NDTV Sports",
    "description": "Playing for Leicestershire, Rishabh Pant scored 76 runs off 87 balls against India in the ongoing warm-up match.",
    "url": "https://sports.ndtv.com/cricket/india-vs-leicestershire-tour-game-twitter-erupts-as-rishabh-pant-registers-fifty-against-the-likes-of-mohammed-shami-mohammed-siraj-3098808",
    "urlToImage": "https://c.ndtvimg.com/2022-06/i6mudj9_rishabh-pant-twitter-_625x300_25_June_22.jpg",
    "publishedAt": "2022-06-25T03:31:31Z",
    "content": "After a below-par T20I series against South Africa with the bat, Rishabh Pant, playing for Leicestershire finally had a ball as he scored 76 runs off 87 balls in the ongoing four-day practice match b… [+2178 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": null,
    "title": "After US' Abortion Ruling, Companies Reach Out To Help Women Employees - NDTV",
    "description": "Several US companies said they would help their employees if they had to travel out of state for abortion services after the US Supreme Court overturned \"Roe v. Wade\" that recognised a woman's constitutional right to an abortion.",
    "url": "https://www.ndtv.com/world-news/us-abortions-banned-us-companies-that-are-offering-abortion-related-benefits-3098765",
    "urlToImage": "https://c.ndtvimg.com/2022-06/dp1ahkko_us-abortion_625x300_25_June_22.jpg",
    "publishedAt": "2022-06-25T03:28:57Z",
    "content": "<li>Amazon: The second-largest US private employer told its employees that it will pay up to $4,000 in travel expenses yearly for non-life threatening medical treatments, including elective abortions… [+2178 chars]"
},
{
    "source": {
        "id": null,
        "name": "India Today"
    },
    "author": null,
    "title": "Vikram box office collection Day 22: Kamal Haasan-starrer is shattering records - India Today",
    "description": "The worldwide collection of Kamal Haasan's Vikram is inching closer to the Rs 400-crore mark. The Lokesh Kanagaraj-directorial is the highest grossing Tamil film in Tamil Nadu.",
    "url": "https://www.indiatoday.in/movies/regional-cinema/story/vikram-box-office-collection-day-22-kamal-haasan-starrer-is-shattering-records-1966552-2022-06-25",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/vikram_bo-647x363.jpeg?J4Fw6dn0qEvuyNABBxFOWuQZEdeAi7sQ",
    "publishedAt": "2022-06-25T02:50:51Z",
    "content": "Kamal Haasan's film, Vikram, is now the highest-earning Tamil film in Tamil Nadu. Directed by Lokesh Kanagaraj, the action thriller outdid the lifetime collection of Viswasam in the state and is stil… [+1115 chars]"
},
{
    "source": {
        "id": null,
        "name": "India.com"
    },
    "author": "Zee Media Bureau",
    "title": "Garena Free Fire redeem codes for today, 25 June: Check website, steps to redeem - Zee News",
    "description": "Garena Free Fire, the popular battle royale game, has released a new set of redeem codes for Saturday, June 25, 2022. People that play this game use these codes to get free awards and other freebies. Rewards can help you enhance your game performance.",
    "url": "https://zeenews.india.com/technology/garena-free-fire-redeem-codes-for-today-25-june-check-website-steps-to-redeem-2477621.html",
    "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/06/25/1057562-garena-free-fire.jpg",
    "publishedAt": "2022-06-25T02:40:27Z",
    "content": "New Delhi: Garena Free Fire, the popular battle royale game, has released a new set of redeem codes for Saturday, June 25, 2022. People that play this game use these codes to get free awards and othe… [+1173 chars]"
},
{
    "source": {
        "id": null,
        "name": "NDTV News"
    },
    "author": null,
    "title": "US Draws Criticism From Closest Allies Over Supreme Court's Abortion Ruling - NDTV",
    "description": "The US Supreme Court's historic end to nationwide abortion rights on Friday drew unusual criticism from some of America's closest allies and bucks a global trend to more liberal reproductive rights.",
    "url": "https://www.ndtv.com/world-news/us-draws-criticism-from-closest-allies-over-supreme-courts-abortion-ruling-3098767",
    "urlToImage": "https://c.ndtvimg.com/2022-06/dr19ilj_abortion-rally-_625x300_25_June_22.jpg",
    "publishedAt": "2022-06-25T02:31:38Z",
    "content": "The Supreme Court said that the decision \"will save millions of innocent, unborn lives.\"\r\nWashington: The US Supreme Court's historic end to nationwide abortion rights on Friday drew unusual criticis… [+4117 chars]"
},
{
    "source": {
        "id": null,
        "name": "Hindustan Times"
    },
    "author": "HT Entertainment Desk",
    "title": "Ranbir Kapoor says he was only offered the son's part in Shamshera - Hindustan Times",
    "description": "Hours after his double role in Shamshera was revealed, Ranbir Kapoor has said that he was initially offered only one but he found the idea fascinating, and therefore convinced the film's director and producer.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/ranbir-kapoor-was-only-offered-the-son-s-part-in-shamshera-101656122584376.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/06/25/1600x900/Shamshera-Ranbir_Kapoor_1655569892063_1656122823091.webp",
    "publishedAt": "2022-06-25T02:24:49Z",
    "content": "Ranbir Kapoor essays the double role of father and son in his upcoming film, Shamshera, and he has now revealed that director Karan Malhotra and producer Aditya Chopra initially approached him for th… [+1983 chars]"
}];
  
  constructor(){
    super();
    this.state = {
      articles: this.articles, 
      loading : false
    }
  }




  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=819479474d194f8884bd13274fbab051";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({articles: parsedData.articles})
    
  }


  render() {
    return (
      <div className='container my-3'>
        <h1>NewsMonkey - Top Headlines Of the day</h1>
        
        <div className="row">
          {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
              <NewsItem title={element?element.title:""} description = {element?element.description:""} imageUrl = {element?element.urlToImage:""} url = {element?element.url:""}/>
          </div>
          })}
            
            
        </div>
        
          <div className="container d-flex justify-content-between">
            <button type='button' className="btn btn-dark">&larr; Previous</button>
            <button type='button' className="btn btn-dark">Next &rarr;</button>
          </div>

      </div>
    )
  }
}

export default News