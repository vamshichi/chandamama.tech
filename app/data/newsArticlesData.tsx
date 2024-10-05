
import MukeshAmbani from '@/app/images/news/Mukesh Ambani.png'
import Androided from '@/app/images/news/Androided.png'
import iPhoneSE from '@/app/images/news/I Phone SE.png'
import AccentureandNvidia from '@/app/images/news/Accenture and Nvidia.png'
import Mahendra from '@/app/images/news/Mahendra.png'
import openAi from '@/app/images/news/Open AI.png'
import googleforIndia from '@/app/images/news/Google for India.png'
import NextComputing from '@/app/images/news/Next Computing.png'
import iPhone from '@/app/images/news/iPhone.png'
import YouTube from '@/app/images/news/YouTube.png'


// function getFormattedDate(): string {
//   return new Date().toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   })
// }

function generateSnippet(content: string): string {
  const words = content.split(' ')
  return words.slice(0, 15).join(' ') + '...'
}


const newsArticlesData = [ 

{
  id:15,
  title:'Reliance Mukesh Ambani loses Rs 80000 crore in just 2 days due to Sensex fell over 1,000 points while Nifty fell about 300 points',
  image:MukeshAmbani,
  date:'october 2,2024',
  readTime:2,
  content:`Mukesh Ambani, the chairman of Reliance Industries, faced a significant financial setback recently, with his net worth dropping by approximately ₹80,000 crore in just two days. This drastic loss occurred amidst a turbulent period for the Indian stock market, where the Sensex, a major index tracking the performance of the Bombay Stock Exchange (BSE), plummeted by over 1,000 points, while the Nifty, which tracks the National Stock Exchange (NSE), fell by around 300 points.

Understanding the Context
Market Dynamics:

Stock markets can be volatile, influenced by various factors such as economic indicators, global events, and investor sentiment.
The recent drop in the Sensex and Nifty could be attributed to a combination of domestic and international concerns, including inflation, rising interest rates, and geopolitical tensions.
Impact on Wealth:

Ambani's wealth is closely tied to the performance of Reliance Industries, which is a significant player in the Indian stock market. When the market declines, shares of Reliance and other companies can also lose value, impacting the net worth of their major shareholders.
This recent dip in the market resulted in a substantial loss for Ambani, as Reliance Industries’ stock price fell sharply during this period.
Reasons Behind the Stock Market Decline
Economic Factors:

High inflation rates can lead to increased interest rates set by the Reserve Bank of India (RBI) to curb spending, which can negatively impact corporate profits and investor confidence.
Investors may react by selling off shares, leading to a significant decline in stock prices.
Global Influences:

Events such as geopolitical tensions, fluctuations in oil prices, and global economic uncertainty can contribute to market volatility. Investors often pull back in uncertain times, causing markets to dip.
Investor Sentiment:

The sentiment of investors can sway market performance significantly. A negative outlook can lead to panic selling, which further exacerbates the drop in stock prices.
Conclusion
Mukesh Ambani's recent loss of ₹80,000 crore underscores the vulnerability of even the wealthiest individuals to fluctuations in the stock market. The decline of over 1,000 points in the Sensex and 300 points in the Nifty serves as a reminder of the interconnectedness of the economy and the stock market. As investors keep a close watch on economic indicators and global events, it remains crucial for stakeholders to navigate these turbulent waters with caution and strategy.`,
  slug:'Mukesh_Ambani_Rs_80000_crore',
},
{
  id:17,
  title:`Google may release Android 16 much earlier than expected
Next year's big Android update could arrive a few months earlier than you'd guess.`,
  image:Androided,
  date:'october 2,2024',
  content:`Without fail, Google releases a new version of Android every year. This year’s version is Android 15, and its source code went public back at the beginning of the month. If you look back at the history of Android version releases, you’ll find that Google typically schedules these major releases for Q3 or Q4 of a given year. Google now looks to be significantly moving up Android’s release cycle, as evidence suggests it could launch Android 16 sometime in Q2 of 2025.

Google has typically released major new Android versions during the months of August, September, or October. Android 15, for example, arrived just earlier this month. Last year’s Android 14 update came out in early October. Meanwhile, 2022’s Android 13 update showed up in August. You have to go back to 2012’s Android 4.1 Jelly Bean release to find an Android version that didn’t land in August, September, or October.

Android Version	Code-name	Release Date
Android 15	    Vanilla Ice Cream	September 3, 2024
Android 14	Upside Down Cake	October 4, 2023
Android 13	Tiramisu	August 15, 2022
Android 12	Snow Cone	October 4, 2021
Android 11	Red Velvet Cake	September 8, 2020
Android 10	Quince Tart	September 3, 2019
Android 9	Pie	August 6, 2018
Android 8.0	Oreo	August 21, 2017
Android 7.0	Nougat	August 22, 2016
Android 6.0	Marshmallow	October 5, 2015
Android 5.0	Lollipop	November 12, 2014
Android 4.4	KitKat	October 31, 2013
Android 4.1	Jelly Bean	July 9, 2012
Android 4.0	Ice Cream Sandwich	October 18, 2011
Android 3.0	Honeycomb	February 22, 2011
Android 2.3	Gingerbread	December 6, 2010
Android 2.2	Froyo	May 20, 2010
Android 2.0	Eclair	October 27, 2009
Android 1.6	Donut	September 15, 2009
Android 1.5	Cupcake	April 27, 2009
Android 1.1		February 9, 2009
Android 1.0		September 23, 2008`,
  slug:'Google_may_release_Android_16',
},
{
  id:18,
  title:`With no home button, Apple may launch new iPhone SE in 2025 : Bloomberg's Mark Gurman`,
  image:iPhoneSE,
  date:'october 3,2024',
  content:`Mark Gurman: Apple plans to release a new, home button-free iPhone SE in 2025.Gurman: Apple plans to release a new, home button-free iPhone SE in 2025. 

Apple is developing a new iPhone SE, which it plans to release in early 2025 at a low cost. The information was provided by Mark Gurman of Bloomberg, who also mentioned that an upgraded Magic Keyboard will be included with two new iPad Air versions.

Based on the iPhone 14, the fourth iPhone SE will be released. This implies that Apple will integrate Face ID instead of the home button. Given that the phone is expected to sport one of the company's most recent chipsets, Apple Intelligence may also be included.

Redesigned Mac minis, updated MacBook Pros, and iMacs with an M4 chip are also planned for 2025. New MacBook Airs, Mac Studio, and Mac Pro devices will also be able to access the platform. The journalist did note, though, that since the current iPad Pro is already "a generation ahead," it's possible that we won't see a new model in 2025.`,
  slug:`Bloomberg's_Mark_Gurman`,
},
{
    id:19,
    title:'30,000 Professionals Will Get Training from Accenture and NVIDIA to Scale Agentic AI for Businesses. Using the whole NVIDIA AI stack, the Accenture AI Refinery platform will assist businesses in starting their unique agentic AI journeys.',
    image:AccentureandNvidia,
    date:'october 3,2024',
    content:`With the establishment of a new Accenture NVIDIA Business Group, Accenture and NVIDIA have strengthened their collaboration with the goal of assisting businesses in scaling the adoption of AI. As part of this program, 30,000 people will receive training throughout the world to help clients extend the usage of corporate AI systems and rethink processes. The AI Refinery at Accenture, a new business group called Scaling Agentic AI Systems, is poised to push AI forward to new heights. 

artificial intelligence with agents. Julie Sweet, chair and CEO of Accenture, said, "With our partnership with NVIDIA, we are breaking significant new ground and enabling our clients to be at the forefront of using generative AI as a catalyst for reinvention." Accenture is launching a worldwide network of AI Refinery Engineering Hubs in strategic locations like Singapore, Tokyo, Malaga, and London to support this strategy. The large-scale development of AI operations and models will be the main emphasis of these hubs. NVIDIA's creator and CEO, Jensen Huang, continued, saying that artificial intelligence (AI) will enable businesses to scale innovation more quickly. Successful use examples of this partnership have already been observed, such as the employment of agentic AI by Indonesia's Indosat Group to create financial services industry-specific solutions. Furthermore, Accenture is introducing the NVIDIA NIM Agent Blueprint, which integrates NVIDIA Omniverse and Isaac software, for virtual manufacturing simulations. Accenture's marketing team has also started to optimize campaigns utilizing the AI Refinery platform with autonomous agents, resulting in a 25–55% faster time to market. Accenture has been actively implementing generative AI across their platform by offering their staff members opportunities for training and skill development. Agentic AI has been a prominent topic of conversation across major tech companies over the previous few weeks. Major Saas providers, like Oracle and Salesforce, have released several AI agentic technologies in their extensive product range. Additionally, the number of clients receiving independent databases has been steadily rising.`,
    slug:'Accenture_and_Nvidia',
  },
  {
  id:20,
  title:`Making the promise of AI real for individuals, society and the economy: Google for India 2024 Roma Datta Chobey
Managing Director, Google India`,
  image:googleforIndia,
  date:'october 4,2024',
  content:`Google for India's Tenth Edition: Honoring a Decade of Change
As we host the tenth edition of Google for India today, we are reminded of the extraordinary transformation of the Indian IT ecosystem over the last 10 years, which makes this event an important milestone. India has established itself as a worldwide digital powerhouse, exhibiting inventiveness that sets trends both locally and internationally. From ground-breaking inventions to revolutionary financial systems.

India's Growing Digital Connectivity
In the last ten years, India has witnessed an incredible revolution in digital connectivity. Millions more Indians have accessed the internet for the first time because to the lowest data pricing in the world, frequently through watching videos. The increase of connection has significantly altered how People use technology, which changes the story from traditional media consumption to a more dynamic and participatory digital environment.

Video: India's Digital Gateway
For many Indians, video has been a potent gateway into the digital world. Video material has become widely available on platforms, and many people use it for the first time when they visit the internet. Users who interact with video material develop their online navigation skills, which paves the way for greater in-depth internet involvement.

Using UPI to Revolutionize Financial Networks
The Unified Payments Interface is among the most innovative technological advancements in India (UPI). Since its launch in 2016, UPI has revolutionized the way Indians do financial transactions. It has made digital payments frictionless and done away with the need for currency, enabling real-time money transfers directly between bank accounts.

Boosting the Digital Economy
The success of UPI has democratized access to financial services while also streamlining transactions. It has given countless small businesses a reliable digital payment solution, which has allowed them to grow. Furthermore, the convenience of transactions has promoted a cashless economy, in line with India's goal of developing a financial system that is more inclusive.

Innovations in Health: Digital Health Passports and CoWIN
The epidemic made it clear how crucial digital solutions are to handling emergencies involving public health. India is a prime example of using technology to manage health, as demonstrated by the CoWIN platform. CoWIN has made sure that millions of Indians may safely and conveniently access their immunization records and health data by offering digital health passports.

Strengthening Google's Presence in India
Google has become more deeply committed to India as the country has embraced technology. Since its founding in 2004 in Bengaluru and Hyderabad, Google has spread throughout five main cities, consistently investing in the creativity and skill of the region.

Encouraging International Product Development
This expansion is part of a larger plan to use India's abundant tech talent pool. India has evolved into a crucial center for international product development, serving as much than just Google's market. Google can ensure relevance in a variety of markets by developing products that appeal with users through partnerships with local developers and inventors.

Exploiting Artificial Intelligence's Potential
Artificial Intelligence (AI) is going to play a bigger role in technology in the future, and India is leading this change. The thriving startup scene in the nation is humming with AI-driven projects that both solve regional problems and follow international technical trends.

AI: Revolutionizing Economies and Lives
Across India, AI technologies are transforming industries from healthcare to agriculture. Not only are these advances increasing productivity, but they are also raising millions of people's standards of living. India is positioned to take the lead in creating inclusive and moral AI solutions as it continues to improve its AI capabilities.

The Path Forward: Establishing a Sustainable Technology Future
It's important to keep an eye on the future as we at Google for India celebrate this milestone. There will be fresh chances and difficulties in the upcoming ten years. Government agencies, tech firms, and entrepreneurs should all work together to create a sustainable tech ecosystem that puts diversity, creativity, and resilience first.

Promoting Creativity via Cooperation
It will take cooperation to maintain momentum. India can remain a hotbed of cutting-edge technology by interacting with a variety of cultures and encouraging an innovative culture. It is imperative that we concentrate on creating solutions that not only serve the local market but also have the capacity to impact worldwide technology trends.

In conclusion, a promising future
India's potential in the tech sector has been demonstrated by its journey over the last ten years. We recognize the progress made and the potential of what lies ahead as we commemorate the tenth anniversary of Google for India. The subsequent phase of this revolutionary expedition necessitates sustained cooperation, ingenuity, and a mutually beneficial digital future vision.`,
  slug:`Google_for_India's_Tenth_Edition`,
},
{
    id:21,
    title:'OpenAI introduces a new "Canvas" Customized ChatGPT interface for writing and coding tasks',
    image:openAi,
    date:'october 4,2024',
    content:`On Thursday, OpenAI unveiled a brand-new interface for using ChatGPT that it calls "canvas." The software opens a workspace for writing and coding tasks in a separate window that opens next to the standard chat window. Users can write directly on the canvas or use code, then highlight specific areas of their work to have the model make edits. On Thursday, Canvas will go live in beta for ChatGPT Plus and Teams users; Enterprise and Edu users will get it the following week.

A number of consumer AI companies are coming together around editable workspaces as a useful application of generative AI. Similar functionalities are available in ChatGPT's new interface as in Anthropic's Artifacts, which was released in June, and Cursor, the popular coding companion. To expand its paid user base, OpenAI is rushing to match rival services and introduce whole new features in ChatGPT.

Even if AI chatbots nowadays aren't able to do complex tasks with just one instruction, they can frequently provide a useful beginning point. Editable workspaces, such as canvas, let users make corrections to incorrect portions of an AI chatbot's output without requiring them to carefully examine their prompt and write a new section of code.

In a demo with TechCrunch, OpenAI product manager Daniel Levine stated, "This is just a more natural interface for collaborating with ChatGPT."

Levine was required to choose "GPT-4o with canvas" from ChatGPT's model picker drop-down menu during our demonstration. But according to OpenAI, ChatGPT will only display canvas windows when it determines that having a separate workspace could be useful—for example, for lengthy outputs or intricate coding jobs. To open a project window automatically, you may alternatively just write "use canvas."

Levine demonstrated to TechCrunch how the new features of ChatGPT could facilitate email writing. An email generated by ChatGPT can be requested by users, and it will appear in the canvas window. Next, users have the option to change the writing's length by toggling a slider. Additionally, you can highlight particular lines and instruct ChatGPT to add emojis or make changes like "make this sound friendlier." Additionally, users can request that ChatGPT translate the entire email into a different language.

The coding canvas has a few somewhat distinct features. Levine gave ChatGPT instructions to launch a Python API web server, which materialized on the canvas window. ChatGPT allows users to add in-line documentation explaining the code in simple terms by clicking the "add comments" button. Furthermore, you may ask the chatbot to explain anything to you or ask questions about it by highlighting a line of code that ChatGPT produced. Additionally, ChatGPT will gain a new "review code" button that will offer specific revision suggestions for any user-written or automatically generated code in the window for the user to accept, reject, or modify themselves. Should they click "approve," ChatGPT will attempt to resolve the issues on its own.  OpenAI states that it intends to make canvas available to free users as well as it exits beta.`,
    slug:`OpenAI_introduces`,
  },
  {
      id:22,
      title:'In under sixty minutes, Mahindra Thar ROXX received 1.76 lakh reservations; delivery began on Dussehra.',
      image:Mahendra,
      date:'october 4,2024',
      content:`M&M described the response as "unprecedented" and stated that it will gradually notify consumers about the estimated delivery schedules over the course of the following three weeks.
Leading SUV manufacturer Mahindra & Mahindra received 1.76 lakh reservations for its recently released Thar ROXX in less than 60 minutes after the window opened. Delivery will start on October 12, which is Dussehra.

There is discussion over this being the highest first-day booking of any car from the Mahindra Group.

M&M described the response as "unprecedented" and stated that it will gradually notify consumers about the estimated delivery schedules over the course of the following three weeks. The SUV manufacturer stated that reservations for Thar ROXX are still available at all dealerships and on Mahindra's website.
With almost 51,000 SUVs sold in September, M&M reported a 24% YoY increase in SUV sales. At 3,027 units, exports increased by 25% YoY in September as well.

The starting price of the five-door Thar SUV, ROXX, is Rs 12.99 lakh. It comes in both petrol and diesel variants.
The Thar Roxx will be equipped with either a 2.0-litre mStallion turbo petrol engine that provides 160 bhp of maximum power and 330 Nm of torque, or a 2.0-litre mHawk diesel engine that puts out 150 horsepower and 330 Nm. Either a six-speed manual or six-speed automatic transmission is attached to each engine.
The Thar ROXX has been built as a mainstream SUV, taking into consideration the wants and requirements of purchasers in the market, rather than as a niche product, according to Rajesh Jejurikar, ED and CEO for the auto and farm company. Even with the three-door model, it has grown to be a significant volume player in its current configuration. Jejurikar has previously stated, "We didn't want to stop at that and we think that we can make this brand bigger."

Initial pricing for the 4x4 versions of the new Thar ROXX from Mahindra & Mahindra ranges from Rs 18.79 lakh to Rs 22.49 lakh (ex-showroom).`,
      slug:'Mahindra_Thar_ROXX_received_1.76_lakh_reservations',
    },
    {
      id:23,
      title:`The "Fly-Away Kit" from NextComputing Goes Anywhere You Go.`,
      date:'october 5,2024',
      content:`NextComputing unveiled their Nexus “Fly-Away Kit” that delivers multiple Ampere Altra servers for a total of 512 cores and a petabyte of storage. The kit includes a rolling functional hard case and different system designs. Its many 2U or 1U systems (nodes) are fit into a 22" x 14" x 9" IATA and TSA approved rolling carry-on that suits overhead bins. For strong edge AI and computing applications, users obtain high bandwidth, multi-node, and cloud native capabilities.
The kit makes use of the numerous applications for which Ampere processors are optimized in addition to NextComputing's software integration capabilities. Software can be tested and pre-installed to provide a system that is operational from the start. For installations like Kubernetes clusters or edge computing solutions, the Nexus with Ampere is appropriate.

Possible Setups:
8 terabytes of memory and 4 x 1U nodes with 512 Ampere Altra cores
One petabyte of high-speed NVMe storage
8x 25GbE SPF28 or 8x 10GbE
NVIDIA GPU options
An affordable base configuration is offered.
Applications: Cybersecurity reaction, broadcasting
Use cases for portable mini data centers

Additional solutions for edge computing
NextComputing has been able to increase compute capacity in the carry-on form factor by four times thanks to Ampere's dense computation and power efficiency. We were at our limit with x86 and couldn't proceed any further, according to Bob Labadini, CTO of NextComputing.`,
      image:NextComputing,
      slug:'The_Fly-Away_Kit'    
    },
    {
      id:24,
      title:'Many modifications have been made to YouTube Shorts. Videos can now have a maximum duration of three minutes. Additionally',
      date:'october 5,2024',
      content:`YouTube has stated that short form content will now get its own Trends page and that creators will soon be able to create Shorts up to three minutes in length. Recently, YouTube announced a number of enhancements and additions to Youtube Shorts, claiming that these will increase the utility and engagement of short form content.

In a blog post, YouTube revealed that starting October 15, producers can submit Shorts that are up to three minutes long. But none of your earlier films will be impacted by the modification; it only applies to square or tall aspect ratio recordings. YouTube also introduced some improvements to its Shorts player, which it says would let creators take the center stage and allow users to focus on the content they love.
According to the company, producers will have access to a massive collection of your most cherished videos, music videos, and even clips from various platforms in the upcoming months. You may now visit the Shorts Trends page on YouTube mobile, where you can also get a preview of the Shorts comment area directly from the feed.
As the name implies, the "Show fewer Shorts" button will let you see less Shorts in your feed, but YouTube claims it is working on adding it. The three dots menu seen in the upper right corner of every Short on the home feed can be clicked to enable this.`,
      image:YouTube,
      slug:'Many_modifications_have_been_made_to_YouTube_Shorts',
    },
    {
      id:25,
      title:'Customers of the Apple iPhone, Celebrate great savings this festive season.',
      date:'october 5,2024',
      content:`Enjoy up to ₹10000.00 instant cashback with eligible American Express, Axis Bank and ICICI Bank cards.§§ Plus up to 12 months of No Cost EMI from most leading banks.

Instant Savings: See how much you can save on iPhone with eligible American Express, Axis Bank and ICICI Bank cards.
iPhone 16 Pro and iPhone 16 Pro Max - ₹5000.00
iPhone 16 and iPhone 16 Plus - ₹5000.00
iPhone 15 and iPhone 15 Plus - ₹4000.00
iPhone 14 and iPhone 14 Plus - ₹3000.00
iPhone SE - ₹2000.00
No Cost EMI: Get up to 12 months No Cost EMI from most leading banks.

Apple Trade In: Get up to ₹67500.00 when you exchange your current device and apply it towards your new iPhone. And you can do it all online.

Entertainment: Get 3 months of Apple Music free with the purchase of your new iPhone.⁺ Also get 3 months of Apple TV+ and Apple Arcade free.`,
    image:iPhone,
    slug:'Enjoy_up_to_10000.00_instant_cashback',

},
    
  ]

  // Generate snippets for each article
const newsArticlesWithSnippets = newsArticlesData.map(article => ({
  ...article,
  snippet: generateSnippet(article.content)
}))
  
  export default newsArticlesWithSnippets;
  
