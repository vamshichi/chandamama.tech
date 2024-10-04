// import News from '@/app/images/heroScetion/BREAKING NEWS.png'
import Jon from '@/app/images/news/jonbiden.png'
import Narendra_Modi from '@/app/images/news/Narendra_Modi.png'
import Gold from '@/app/images/news/gold2.png'
import AiImage from '@/app/images/news/aiImage.png'
import Top10 from '@/app/images/news/top10.png'
import Adani from '@/app/images/news/Adani.jpeg'
import Idfc from '@/app/images/news/IDFC First Bank.jpg'
import Amazon from '@/app/images/news/Great Indian Festival Sale.jpg'
import Gmail from '@/app/images/news/Gmail.png'
import Dell from '@/app/images/news/Dell.png'
import Union_Minister from '@/app/images/news/Minister for commerce.png'
import Welspun_Enterprises from '@/app/images/news/Welspun Enterprises.png'
import Amazon_laptop from '@/app/images/news/Amazon.png'
import Sebi from '@/app/images/news/SEBI.png'
import MukeshAmbani from '@/app/images/news/Mukesh Ambani.png'
import Androided from '@/app/images/news/Androided.png'
import iPhoneSE from '@/app/images/news/I Phone SE.png'
import AccentureandNvidia from '@/app/images/news/Accenture and Nvidia.png'
import Mahendra from '@/app/images/news/Mahendra.png'
import openAi from '@/app/images/news/Open AI.png'
import googleforIndia from '@/app/images/news/Google for India.png'


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
      id: 1,
      title: 'Joe Biden: The World is at an ‘Inflection Point’ in Final Address at U.N. Assembly.',
      date: "septembar 28,2024",
      content:
                `In his final address to the United Nations General Assembly in September 2024, President Joe Biden emphasized the importance of global unity in the face of conflict and aggression. Reflecting on his years in office, Biden highlighted the need to reinforce international partnerships and uphold democratic principles to ensure a more stable world.               
                A major focus of Biden’s speech was the ongoing war in Ukraine. He urged the international community to continue supporting Ukraine against Russian aggression, stressing that Ukraine’s freedom remains paramount and that Vladimir Putin's war has failed to weaken NATO, which is now stronger with the addition of Finland and Sweden. Biden reaffirmed the U.S. commitment to Ukraine, calling for sustained efforts until a “just and durable peace” is achieved.
                In addition, Biden addressed the escalating conflict in the Middle East, particularly the violence between Israel and Hamas, and the tensions on the Israel-Lebanon border involving Hezbollah. He condemned the atrocities committed by Hamas while also calling for the protection of Palestinian lives. Biden advocated for a cease-fire and a long-term solution based on diplomacy, as well as renewed efforts towards a two-state solution for Israel and Palestine.
                The speech also touched on U.S.-China relations, where Biden called for responsible competition without veering into conflict, highlighting the need for cooperation on pressing global issues like climate change and drug trafficking. He further underscored America’s stance against unfair economic competition and military coercion, particularly in the South China Sea and across the Taiwan Strait.
                Biden's address acknowledged the difficulties of his presidency, marked by ongoing global conflicts, and expressed hope that future efforts would continue to build on the progress made. He reaffirmed the U.S.'s role in fostering international peace and stability, emphasizing the need for diplomacy, partnership, and resilience in the face of global challenges.`,
      image: Jon,
      slug: 'ai-healthcare',
      readTime: 5,
    },
    {
      id: 2,
      title: `Narendra Modi Addresses U.N. at 'Summit of the Future' on September 23, 2024`,
      date: "septembar 28,2024",
      content: `His speech focused on critical global challenges, emphasizing a collaborative approach to tackle them. One of his key messages was that humanity’s success lies in collective strength and cooperation, rather than conflict or confrontation. Modi stressed that solutions to the world's issues should be human-centric, reflecting a philosophy that prioritizes diplomacy, peace, and multilateral cooperation.
                Modi highlighted India's growing role on the global stage, noting that India represents one-sixth of humanity. He emphasized the need for inclusive decision-making in international institutions, calling for reforms within the UN to better reflect contemporary geopolitical realities. He argued that the current structure of international organizations, like the UN, needs to evolve to include emerging nations more fairly. The Prime Minister cited the inclusion of the African Union in the G20 as an example of positive change, advocating for similar steps in other global forums​
                In his speech, Modi also spoke about pressing issues like climate change, terrorism, and artificial intelligence (AI). He stressed the need for urgent and sustained action on climate change, advocating for a transition toward sustainable development. He reiterated India's commitment to global environmental goals, citing its efforts to expand renewable energy production and its leadership in international initiatives like the International Solar Alliance.
                Modi also touched upon the role of technology, particularly AI, in shaping the future. While recognizing AI's potential for positive impact, he cautioned that it must be regulated responsibly to prevent misuse. He called for a balanced approach that encourages innovation while safeguarding human rights and ensuring ethical use.
                Overall, Modi's address underscored India's growing influence in global affairs, positioning the nation as a voice for the Global South and an advocate for a more inclusive and reformed international system. His vision for the future reflected an emphasis on peace, sustainability, and fairness in addressing the world's most significant challenges`,
      image: Narendra_Modi,
      slug: 'Narendra_Modi',
    },
    {
      id: 3,
      title: 'Top 10 Gadgets of 2024',
      date: "septembar 28,2024",
      content: `As technology continues to advance at a rapid pace, 2024 has brought us some truly innovative gadgets. Here are the top 10 must-have devices this year:
  
  1. Neural Interface Smartwatch: Control your devices with just your thoughts.
  2. Holographic Smartphone: Project 3D images and videos in mid-air.
  3. AI-Powered Personal Drone: Your flying personal assistant and photographer.
  4. Self-Cleaning Smart Glasses: Never worry about smudges or scratches again.
  5. Portable Quantum Computer: Solve complex problems on-the-go.
  6. Nano-Tech Health Monitor: Track your health at the cellular level.
  7. Eco-Friendly Solar Backpack: Charge your devices while you walk.
  8. Augmented Reality Gaming Console: Turn your living room into a virtual playground.
  9. AI Language Translator Earbuds: Real-time translation for over 100 languages.
  10. Smart Home Ecosystem Hub: Control all your smart devices from a single, intuitive interface.
  
  These gadgets are not just about convenience; they're pushing the boundaries of what's possible with technology, making our lives easier, more connected, and more exciting than ever before.`,
      image: Top10,
      slug : 'Top-10-Gadgets-of-2024',
    },
    {
      id: 4,
      title: 'India’s Historic Double Gold Triumph at the 2024 Chess Olympiad',
      date: "septembar 28,2024",
      content: `The Chess Olympiad 2024 was a major international team chess event held in Budapest, Hungary from September 10th to 23rd, 2024. It was the 45th Chess Olympiad and the first time Hungary had hosted the event since the 2nd unofficial Chess Olympiad in 1926.
Key Highlights:
 * India's Historic Double Gold: India achieved a remarkable feat by winning gold medals in both the Open and Women's categories. This was the first time India had won both titles in the same Chess Olympiad.
 * Dominant Performance: India finished four points ahead of the second-place team in the Open category and one point ahead in the Women's category.
 * Individual Golds: India also secured four individual gold medals: D. Gukesh (Board #1), Arjun Erigaisi (Board #3), Divya Deshmukh (Board #3), and Vantika Agrawal (Board #4).
 * Nona Gaprindashvili Cup: India won the Nona Gaprindashvili Cup for the second consecutive time.
Other notable achievements:
 * United States: The United States finished second in the Open category, securing their best-ever finish in the event.
 * Kazakhstan: Kazakhstan finished second in the Women's category.
 * Other Top Performers: Other top-performing teams included Uzbekistan, Armenia, and China.
The Chess Olympiad 2024 was a memorable event that showcased the incredible talent and competition in the world of chess. India's dominant performance marked a historic moment for the country and the sport.
[9:56 AM, 9/24/2024] Vamshi: How did you get this`,
      image: Gold,
      slug: 'Gold_Triumph',
    },
    {
      id: 5,
      title: 'How 5G is Changing Mobile Connectivity',
      date:"septembar 28,2024",
      content: "5G networks are transforming how we communicate and interact with technology, offering unprecedented speeds and lower latency. This next-generation wireless technology is not just about faster downloads; it's enabling a whole new era of connectivity. From autonomous vehicles to smart cities, 5G is powering innovations that were once thought impossible. The increased bandwidth and reduced latency are making real-time remote operations a reality, revolutionizing industries such as healthcare and manufacturing. As 5G continues to roll out globally, we can expect to see a surge in IoT devices and applications that will reshape our daily lives.",
      image: AiImage,
      slug: '5g-connectivity',
    },
    {
      id:6,
      title:'$4 billion data centre expansion plan, Adani Group likely to accelerate',
      date:  "septembar 28,2024",
      content:`The Adani Group is reportedly advancing its $4 billion plan to expand its data centre business in response to a surge in demand from technology giants. According to a report by Mint, this move aims to strengthen the group’s power sector by tapping into the substantial power requirements associated with data centre services.

      Adani ConneX Pvt. Ltd., a joint venture between Adani Enterprises Ltd. and Virginia-based EdgeConneX, currently operates 17 megawatts (MW) of data centre capacity while managing 210 MW in various stages of construction. With demand for data centre services skyrocketing, the Adani Group now aims to achieve a data centre capacity of 1 to 1.5 gigawatts (GW) within the next one to two years, significantly accelerating its original timeline from five years, the Mint report added.

     To reach this ambitious goal, the group plans to invest an additional $4 billion, with current investment estimates at approximately Rs 40 crore per MW., people in the know told Mint. Industry insiders suggest that the rapid growth in data centre demand is so significant that the Adani Group may consider slowing down investments in other sectors to redirect funds into the data centre business as part of a strategic shift.

     “The average order size for data centre services has dramatically increased from 5-10 MW two years ago to 50-100 MW now,” a source familiar with the matter stated. Currently, Adani Group holds just a 2.5 percent share of India’s data centre market, which is expected to expand from its current capacity of 700 MW to 4 GW by FY30.

     With an order visibility of 1.5-2 GW, Adani ConneX could see its market share rise significantly. Achieving a 1 GW capacity could potentially elevate its share to around 25 percent.`,
      image: Adani,
      slug:'Adani_Group'
    },
    {
      id:7,
      title : 'IDFC to merge with IDFC FIRST Bank, effective October 1',
      date:  "septembar 29,2024",
      content:`IDFC Limited on September 27 announced that its Board of Directors has approved the amalgamation of its subsidiaries. It said the Board, in its meeting has approved the effectiveness of the composite scheme of amalgamation for merging IDFC Financial Holding Company Limited (IDFC FHCL) with IDFC Limited, and subsequently, IDFC Limited with IDFC FIRST Bank Limited.

IDFC further stated that the National Company Law Tribunal (NCLT), Chennai Bench, sanctioned the amalgamation scheme on September 25, 2024.

IDFC said its Board approved the merger of IDFC FHCL with IDFC Limited, effective September 30, and the merger of IDFC Limited with IDFC FIRST Bank, effective October 1.`,
image:Idfc,
slug:'idfc'    

},
{
  id:8,
  title:'Amazon Great Indian Festival 2024: Check best smartphone deals under Rs 70,000',
  date: "septembar 29,2024",
  image:Amazon,
  content:`The Amazon Great Indian Festival 2024 is now live for everyone. The sale comes with amazing discounts and deals across all categories. However, Smartphones get more attention as usual, as some of the hottest deals are available on them with tons of discounts. If you’ve been waiting to upgrade your phone, this could be the perfect time.

If you are looking for an entry-level flagship smartphone, this article features a few of them that are available with crazy discounts. Not just that, some of them are proper high-end smartphones like the Samsung Galaxy S23 Ultra. Let’s check out some smartphone deals under Rs 70,000 that you definitely don’t want to miss!

Samsung Galaxy S24 (Buy Now)
The Samsung Galaxy S24 is the latest Galaxy S smartphone. It was launched in India in January for Rs 79,999. However, the Great Indian Festival sale is currently offering this smartphone for just Rs 59,999. This includes the sale instant discount and a Rs 3000 bank offer as well.

OnePlus 12 (Buy Now)
OnePlus launched this high-end smartphone at a price of Rs 64,999. There is not a very big instant discount on the OnePlus 12 but there are other offers. For example, you can take advantage of the bank discount that promises Rs 5,750 off. Along with that, there is an exchange offer as well for up to Rs 25,700.

Xiaomi 14 (Buy Now)
This phone is also of the same league as the OnePlus 12 and the Galaxy S24. It was launched at a starting price of Rs 69,999, but this one is available with the best deal among the three. You can purchase this smartphone at a discounted price of Rs 47,999.

Motorola Razr 50 (Buy Now)
This is the latest foldable offering from Motorola. Launched at Rs 74,999, the Motorola Razr 50 is now available for just Rs 64,998. Apart from this, there is also a massive bank discount that is promising Rs 8,750 off on this smartphone. This means you are getting almost Rs 19,000 off on the Razr 50.

iPhone 15 (Buy Now)
This is the saddest deal among all the five. Amazon has not offered any instant discount on this one currently. However, you can definitely use some bank offers on the iPhone 15 like a Rs 3000 bank discount on SBI Credit Card.`,
  slug:'Amazon_Great_Indian_Festival_2024'
},
{
  id:9,
  title:'Union Minister of Commerce & Industry Piyush Goyal: Investment Under PLI to Cross ₹2 Lakh Crore Soon; Employment Generation Set to Boost by 26%',
  date:'septembar 30,2024',
  image:Union_Minister,
  content:`The Indian government’s ambitious Production-Linked Incentive (PLI) scheme has been instrumental in pushing the country towards becoming a global manufacturing hub. Recently, Union Minister of Commerce & Industry Piyush Goyal emphasized the transformative impact of this initiative. He announced that investment under the PLI scheme is set to cross ₹2 lakh crore shortly, a development that promises to fuel employment generation by 26%. This significant investment and job creation are poised to bolster India's economic landscape and enhance its global competitiveness. Below, we explore in detail the objectives, sectors, and benefits associated with this landmark initiative.

PLI Scheme: An Overview
The Production-Linked Incentive (PLI) scheme was launched to incentivize manufacturers across key sectors to enhance production capacities within India. The scheme aims to reduce import dependence, increase exports, and position India as a preferred manufacturing destination globally. With a direct focus on domestic and foreign investments, the PLI scheme is driving innovation and infrastructure development across multiple industries, including automobiles, pharmaceuticals, textiles, electronics, and telecom.

According to Piyush Goyal, the PLI scheme is more than just an incentive structure—it's a cornerstone of self-reliance (Atmanirbhar Bharat). He believes that as investments under the PLI scheme exceed ₹2 lakh crore, it will lead to an exponential rise in production output across multiple sectors.

Key Sectors Under the PLI Scheme
Several critical sectors have been identified under the PLI scheme to receive benefits, each of which contributes significantly to India's economic growth. Here's a breakdown of some of the leading sectors:

1. Automotive and Auto Components
The automotive sector is one of the largest beneficiaries of the PLI scheme. Investments in electric vehicles (EVs) and traditional auto components are driving innovation in the industry. The incentive framework encourages green manufacturing, which aligns with the government’s push for environmental sustainability. With PLI funding, the EV sector alone is expected to grow at an unprecedented rate, contributing to both investment surges and job creation.

2. Pharmaceuticals
The pharmaceutical industry, a crucial sector for India’s economy, has seen a significant push under the PLI initiative. India, often referred to as the "pharmacy of the world," aims to strengthen its position as a global leader in drug manufacturing. The PLI scheme incentivizes companies to increase the domestic production of active pharmaceutical ingredients (APIs), reducing reliance on imports. With investment crossing ₹15,000 crore, this sector alone is poised to create numerous job opportunities.

3. Electronics and Technology Products
India's electronics manufacturing, particularly in mobile phone production, is undergoing a revolution under the PLI scheme. The country is expected to become the world's second-largest mobile phone manufacturer by 2025. Companies like Apple, Samsung, and Foxconn have already committed to setting up large-scale manufacturing plants in India, further boosting both investment and employment. This sector is a vital cog in the overall scheme and will play a pivotal role in meeting the investment targets.

4. Textiles
The textile sector is another key beneficiary of the PLI scheme. India's robust textile industry has the potential to serve both domestic needs and export demands. With increasing investments, the sector is witnessing modernization, leading to increased exports and employment generation. The textile sector is also pivotal in rural development as it provides employment opportunities across various skill levels.

5. Telecom and Networking
Under the PLI scheme, the telecom sector is seeing a revival, with emphasis on domestic manufacturing of critical telecom equipment. This comes in the wake of the 5G revolution, where companies are encouraged to develop advanced infrastructure and reduce dependency on imported technology. This sector, with an investment exceeding ₹12,000 crore, is expected to generate thousands of new jobs and position India as a global telecom equipment provider.

Boost to Employment and Economic Growth
Piyush Goyal's announcement regarding a 26% increase in employment generation is particularly notable. The PLI scheme is designed to not only attract investments but also stimulate massive employment opportunities across the country. The manufacturing sector, bolstered by new production capacities and technological advancements, is set to create jobs across both skilled and unskilled labor categories. This surge in employment is expected to have a ripple effect, benefitting allied sectors such as logistics, warehousing, and services.

The Indian government estimates that employment generation under the PLI scheme could soon surpass 2 million direct jobs, with indirect employment adding further to this tally. As manufacturing units scale operations, ancillary businesses, small and medium enterprises (SMEs), and the services sector will also see growth in demand for labor, leading to a multiplier effect on employment.

Boosting India’s Position in the Global Market
The overarching objective of the PLI scheme is to enhance India’s export potential and strengthen its global market position. By boosting domestic production capabilities, India can significantly reduce imports and increase exports, contributing to a favorable trade balance. Sectors like electronics, textiles, and pharmaceuticals, which were previously reliant on imports, are now producing at record levels, ensuring self-reliance while also catering to global markets.

Additionally, the scheme promotes the adoption of advanced technologies and infrastructure development, which further improves the quality of products manufactured in India. This is crucial as global consumers increasingly demand high-quality, cost-effective solutions. Indian manufacturers, through the PLI scheme, are now well-positioned to meet these demands and compete with established global players.

PLI Scheme: The Road Ahead
Looking forward, the PLI scheme is expected to bring further investments and foster growth across sectors not yet fully explored. With Minister Piyush Goyal’s announcement, it's clear that India's manufacturing trajectory is set on a growth path that will benefit not just the domestic economy but also its global standing as a competitive market player.

The focus will now be on sustaining this momentum by further ease of doing business reforms, ensuring policy stability, and providing additional incentives to manufacturers willing to make India their global production base. As the government continues to streamline these processes, India is well on its way to becoming the next global manufacturing hub, driving both economic growth and job creation for millions.`,
  slug:'Union_Minister_of_Commerce_&_Industry_Piyush_Goyal',
},
{
  id:10,
  title:"Welspun Enterprises contract win worth Rs 1,989.9 cr from Municipal Corporation Greater Mumbai, Shares in focus on",
  date:'septembar 30,2024',
  image:Welspun_Enterprises,
  content:`Contract includes design and construction of 8.48 km tunnel with a 3,500 mm bored diameter, to be executed within a period of 93 months using a tunnel boring machine.

 has been declared as L1 bidder by the Brihanmumbai Municipal Corporation for a design and build contract for design and construction of Tertiary Treated Water Conveyance Tunnel from Dharavi WWTF to Ghatkopar WWTF.

The share touched a 52-week high of Rs 619.00 and a 52-week low of Rs 241.00 on 26 August, 2024 and 26 October, 2023, respectively. Currently, the stock is trading 10.07 percent below its 52-week high and 130.98 percent above its 52-week low.

Welspun Enterprises share price will remain in focus on September 30 after the company received an order worth Rs 1,989.90 crore from Brihanmumbai Municipal Corporation. The share price gained nearly 100 percent in the last one-year.`,
  slug:'Welspun_Enterprises_contract',
},
{
  id:11,
  title:'Maximizing the Potential of AI Smart Reply Feature in Gmail',
  date:'septembar 30,2024',
  image:Gmail,
  content:`In the modern world of fast-paced communication, efficiency is critical. AI Smart Reply in Gmail is a powerful feature designed to help users respond quickly to emails without sacrificing quality or professionalism. By analyzing the context of an email, Gmail offers three short, relevant responses that users can send with just a tap. However, while many of us appreciate its convenience, few are fully leveraging this tool’s potential to its fullest extent. In this article, we will explore how you can get the most out of AI Smart Reply and ensure that it enhances both your productivity and email communication.

Understanding AI Smart Reply in Gmail
The AI Smart Reply feature is designed to offer suggested responses based on the content of the received email. This functionality relies on natural language processing (NLP) and machine learning algorithms, which analyze the message and provide concise replies. These suggestions are generated in real-time, ensuring that they are tailored to the specific conversation you are having.

The suggestions are usually brief, consisting of a few words or a short sentence, which are designed to cover the most likely responses. For example, in a conversation discussing a meeting, AI Smart Reply might suggest, "Yes, that works for me," "I’ll be there," or "Can we reschedule?" This saves users time by eliminating the need to compose responses manually, especially for routine or repetitive communications.

How AI Smart Reply Works Behind the Scenes
At the heart of Gmail’s AI Smart Reply is the Google AI technology that powers its predictive response system. By scanning email content, the AI identifies key phrases and context, and then uses these elements to formulate quick responses. The underlying machine learning models improve over time, adapting to individual users and their email habits, which means the responses become more accurate and relevant the more you use it.

These models are trained using massive datasets of email exchanges to detect common response patterns. Additionally, Google incorporates neural networks that allow the system to predict human-like responses while maintaining appropriateness and tone in various contexts. As a result, AI Smart Reply is not only efficient but also increasingly intuitive the more it is used.

Advantages of Using AI Smart Reply in Gmail

1. Time-Saving Efficiency
The primary advantage of AI Smart Reply is its ability to save time, especially when dealing with high email volumes. In today’s fast-paced digital environment, responding to emails promptly is crucial. This feature is ideal for handling routine emails where a quick response is sufficient. It allows you to reply within seconds, freeing up time for more complex tasks.

2. Enhanced Productivity
By eliminating the need to manually draft responses for simple emails, users can focus their energy on more demanding tasks. Over time, the accumulated minutes spent composing emails can add up. With AI Smart Reply, productivity increases as users spend less time managing their inbox and more time on important work.

3. Consistency and Professionalism
The feature ensures that responses maintain a level of professionalism by providing polished, concise suggestions. For professionals who may struggle with drafting replies in a succinct and polite manner, AI Smart Reply ensures that emails are always on-point and polite, improving the overall tone of your communications.

4. Customizable Responses
While AI Smart Reply suggestions are pre-generated, users can quickly modify these suggestions to add a personal touch. This blend of speed and customization allows for quick replies that still feel personal and thoughtful. Modifying suggested responses is particularly useful when you want to convey a more detailed message while maintaining efficiency.

Limitations of AI Smart Reply in Gmail
Despite its numerous advantages, AI Smart Reply also has certain limitations. First, the feature is best suited for short, simple responses and may struggle to provide appropriate suggestions for more complex queries. As the system is still AI-driven, it may occasionally suggest responses that seem out of context or too generic.

Additionally, while the system becomes better over time, it may not always perfectly align with your tone or personal communication style, especially in professional settings where formality is key. In such cases, taking a few moments to customize or write your own response may still be the best approach.

Best Practices for Maximizing AI Smart Reply

1. Leverage It for Routine Communications
The best way to use AI Smart Reply is for routine or repetitive emails. These are emails that do not require a lot of thought but need a prompt response. For example, confirming a meeting time, acknowledging receipt of documents, or answering a straightforward yes/no question can easily be handled by the Smart Reply feature.

2. Combine with Smart Compose
For more detailed responses, you can pair AI Smart Reply with Gmail’s Smart Compose feature. Smart Compose suggests entire phrases and sentences as you type, making it an excellent companion to AI Smart Reply when a quick, yet slightly more detailed response is necessary.

3. Personalize When Necessary
Always remember that while AI Smart Reply is efficient, it’s important to maintain a human touch in your email communications. For important or sensitive matters, take the time to personalize the automated suggestions, ensuring that your email reflects your true tone and intent.

4. Stay Updated on New Features
Google continuously updates and refines its AI technology, so staying informed on new Gmail features is essential to maximizing your productivity. Google regularly releases updates that improve the AI Smart Reply functionality and its ability to predict responses in different contexts. Make sure your Gmail app is updated regularly to take full advantage of these enhancements.

Privacy Considerations
With any AI-driven technology, privacy is always a concern. AI Smart Reply works by scanning the content of your emails to provide relevant suggestions. However, Google maintains that this process is entirely automated, and no human reads your emails during this process. The technology is designed to respect user privacy, using encryption to safeguard the contents of your communications. For those who remain concerned about privacy, disabling the feature is always an option.

Conclusion
The AI Smart Reply feature in Gmail is an incredibly useful tool for anyone looking to save time and streamline their email responses. By understanding how the feature works and leveraging it for appropriate situations, users can enhance both their productivity and the quality of their email communication. While it may not be perfect for every situation, AI Smart Reply is a powerful asset when used effectively in conjunction with personalized responses and Smart Compose.`,
  slug:'AI_Smart_Reply_Feature_in_Gmail',
},
{
  id:12,
  title:'Dell Orders Its Global Sales Team to Work Out of Office Full-Time',
  date:'septembar 30,2024',
  image:Dell,
  content:`In a significant shift toward an evolving workplace strategy, Dell Technologies recently announced that it has ordered its global sales team to return to a full-time office-based work schedule. This decision marks a stark departure from the remote work model that has been predominant over the past few years, particularly since the onset of the COVID-19 pandemic. The move has triggered discussions around the implications for corporate culture, employee performance, and the broader trend of hybrid working environments.

Why Dell's Decision Matters in Today's Workplace Landscape
Dell's decision to bring its sales team back to the office has generated significant attention. The company's choice is reflective of a larger conversation happening within the business community about the balance between remote work and in-person collaboration. The pandemic saw a dramatic shift towards work-from-home models, with many businesses adopting remote or hybrid arrangements as permanent options. However, Dell's latest policy suggests that the tech giant sees value in physical office presence, particularly for sales roles.

Sales teams are often regarded as the driving force behind revenue generation. Their roles rely heavily on building relationships, nurturing client trust, and engaging in high-stakes negotiations. Dell likely views in-office collaboration as an essential component to maximizing productivity, enhancing team dynamics, and ensuring seamless client interactions.

The Impact of Office-Based Work on Sales Performance
For a sales team, face-to-face interaction—whether with colleagues or clients—can play a crucial role in boosting performance. In-person communication fosters clearer understanding, faster decision-making, and stronger team cohesion. Dell’s move may be driven by the belief that the physical presence of its sales teams can lead to enhanced collaboration and more effective sales strategies.

In an office environment, impromptu meetings, quick brainstorming sessions, and immediate feedback can fuel creativity and problem-solving in ways that virtual settings may not fully replicate. The synergy created in a shared workspace might lead to faster execution of deals and a more direct response to market changes. Moreover, in sales, the energy of a collaborative team environment can motivate individuals, increasing competitiveness and driving better results.

Challenges of Transitioning Back to Full-Time Office Work
While Dell’s decision might bring about strategic advantages, it also poses certain challenges. One of the most immediate concerns is employee morale. Many workers have grown accustomed to the flexibility of remote work, enjoying the benefits of reduced commutes, improved work-life balance, and the ability to manage personal responsibilities more effectively.

A sudden shift to full-time office work could lead to dissatisfaction among employees who prefer the flexibility they have experienced over the past few years. Balancing the demands of family, health, and work can become more complex when commuting and in-office presence are reintroduced. Companies like Dell must now grapple with how to manage these employee concerns while pursuing what they believe is a more effective working model.

Additionally, employee retention could become an issue. Talented workers who value flexibility may seek opportunities with competitors that continue to offer remote or hybrid work options. Companies that fail to adapt to the evolving preferences of the workforce risk losing top performers to more flexible employers.

Why Some Companies Are Moving Away From Remote Work
Dell is not the only company re-evaluating its work-from-home policies. Several large organizations, particularly in the tech industry, have initiated similar strategies. Amazon, Google, and other major corporations have begun calling employees back into the office, either full-time or part-time, to bolster collaboration, innovation, and corporate culture.

The key reason for this shift lies in the belief that remote work, while convenient, may not be conducive to certain types of high-performance work. For instance, in sales, being on the ground and having spontaneous interactions with team members and clients could be seen as essential for success. Additionally, onsite leadership and managerial oversight are easier to implement in an office setting, ensuring accountability and fostering direct mentorship for new employees.

Hybrid Work vs. Full-Time Office Presence
The rise of hybrid work models has been one of the most prominent outcomes of the pandemic. Many companies are now exploring hybrid arrangements, where employees work a portion of the week in the office and the rest remotely. This model allows businesses to maintain some of the flexibility that employees enjoy while also ensuring that teams can meet in person when needed.

However, for roles such as sales, which often require high levels of coordination and client interaction, Dell may have determined that a full-time office presence is the most effective solution. Unlike other departments, where employees may be able to work independently or asynchronously, sales professionals frequently need to collaborate in real-time to close deals, manage client relationships, and execute strategies swiftly.

Dell’s Vision for the Future of Work
Dell's decision is likely part of a larger strategic vision for the company’s future. By transitioning its sales team back to full-time office work, Dell may be signaling a desire to return to a more structured, performance-driven environment where collaboration is paramount. The company may also be positioning itself for long-term growth by ensuring that its sales operations are optimized for efficiency and effectiveness.

Additionally, Dell’s shift may set a precedent for other tech companies reconsidering the value of remote work for certain job functions. While the work-from-home revolution is unlikely to disappear entirely, Dell’s move could indicate a growing belief that in-office work will play a key role in certain aspects of business performance, particularly in client-facing roles.

Conclusion
Dell's decision to order its global sales team to work from the office full-time represents a noteworthy development in the broader conversation about the future of work. While the benefits of remote work remain undeniable, the company appears to prioritize the tangible advantages of in-person collaboration, particularly for its high-stakes sales operations. The move may challenge the current trend toward hybrid models, sparking further debate about the best approach to balancing flexibility with productivity.

The implications of this decision will be watched closely by other companies, especially in the tech industry, as they navigate their own workforce strategies. Whether Dell's choice to prioritize office-based work will lead to improved performance or employee dissatisfaction remains to be seen.`,
  slug:'Dell_Orders_Its_Global_Sales_Team_to_Work_Out_of_Office_Full-Time', 
},
{
  id:13,
  title:"Laptops from Apple, HP, Asus, Dell, Lenovo and other laptops at minimum 35% discount, Amazon Great Indian Festival",
  image:Amazon_laptop,
  date:'october 1,2024',
  content:`
Amazon Great India Festival sale is live for all users. During the sale, the e-commerce platform is offering deals and discounts on all products including laptops from popular brands like HP, Dell, Asus, Lenovo, Acer and Apple.

If you are planning to buy a new laptop, we’ve put together a list with maximum discounts with powerful specifications.

Apple MacBook Air M1
Apple MacBook Air M1 is available at Rs 54,999 with Rs 4000 ban discount. It has 8GB RAM, 256GB storage, a backlit keyboard and is powered by M1 chip.

Dell Core i3 laptop
This laptop frmo dell has received a discount of 30% and is available at around Rs 30,000 including the bank discount. It is powered by a 12th-generation Intel Core i3 processor, 8GB RAM and 512GB storage.

Asus Vivobook 15
The laptop is listed at Rs 47,999 after 38% discount. In addition to this, there’s a Rs 2000 coupon available along with 10% bank discount. All things combined the laptop is available for purchase at Rs 41,990.`,
  slug:`Laptops_Amazon_Great_Indian_Festival`
},
{
 id:14,
 title:"Securities and Exchange Board of India approves new asset class for HNIs, passive fund framework; rights issue timeline slashed: 5 key highlights",
 image:Sebi,
 date:'october 1,2024',
 content:`Securities and Exchange Board of India approves new asset class for HNIs, passive fund framework; rights issue timeline slashed: 5 key highlights

Capital markets regulator Securities and Exchange Board of India (SEBI) conducted its board meeting on Monday, September 30 and approved key measures for easing trading practices for regular investors and simplifying norms in the mutual funds (MF) industry. The market watchdog surprised investors by refraining from announcing measures to limit a surge in derivatives trading, as was widely expected by D-Street experts and traders.

SEBI Chairperson Madhabi Puri Buch had described the surge in derivative trading as a ‘macro issue’ that diverts capital from productive use in the economy. Her warnings — and tax hikes coming into effect next month — have helped lower the volume of contracts traded from a record $6 trillion in February.

1.New asset class for HNIs with higher risk appetite

SEBI stated that asset management companies can now offer riskier strategies, like long-short equity, to high-risk investors with a minimum investment of ₹10 lakh. Positioned between tightly regulated MFs and lighter-touch portfolio services, this class will give high net worth (HNI) investors exposure to equity derivatives. 

This is a new investment product under the existing mutual fund framework to bridge the gap between mutual funds and Portfolio Management Services (PMS) regarding flexibility in portfolio construction.

“Offerings under the new product will be referred to as ‘Investment Strategies’, to maintain clear distinction from the schemes offered under the traditional MFs. The minimum investment limit for the new product will be ₹10 lakh per investor across all investment strategies of the new product in a particular AMC. The new product is intended to add depth and variety to the country's investment landscape through a new asset class,” said SEBI.

2.Introduction of MF Lite framework for passive funds

SEBI introduced a relaxed framework with light-touch regulations, ‘MF Lite,’ for entities desirous of launching only passive mutual fund schemes. The MF Lite framework or light-touch regulations include relaxed requirements relating to eligibility criteria for sponsors, including net worth, track record, profitability, the responsibility of trustees, approval process, and disclosures.

Various provisions of the existing regulatory framework may not be relevant for passively managed schemes. A relaxed framework with light-touch regulations has been approved as MF Lite Regulations for passive MF schemes.

SEBI said that existing AMCs with active and passive schemes will have the option to hive off respective passive schemes, if they so desire, to a different group entity, resulting in the management of active and passive schemes by separate AMCs under a common sponsor.

If they choose to continue the passively managed schemes within the existing AMCs under the existing MF Regulations, the relaxed disclosures and other regulatory requirements for the passive schemes based on indices covered under the MF Lite framework will also apply to them.

3.Rights issue timeline slashed to 23 days

SEBI has approved norms to enable faster rights issues through the preferential allotment route. This new route can be completed in 23 days from the issuer's board meeting approving the rights issue, versus the present timeline of 317 days, and faster than the 40 working days needed to complete the preferential allotment.

SEBI approved discontinuing the current requirement of filing a draft letter of rights offer with Sebi of its observation. Instead, it will be filed with stock exchanges for its in-principle approval, as the entity is already listed. Stock exchanges would confirm that the issuer complies with LODR disclosure requirements.

SEBI called for “rationalization of the content of Letter of Offer to contain only the relevant incremental information regarding rights issue viz. object of issue, price, record date, entitlement ratio, etc.” SEBI also dispensed with the mandatory requirement that an issuer appoint a merchant banker and made it optional subject to completion of rights issue within 23 working days.

"With reduced timelines, corporates can have faster access to funds through rights issues. Revised rights issue timelines would make it a preferred option for fundraising as it allows all existing shareholders to be a part of the company's growth story,” said Makarand M Joshi, Founder MMJC and Associates, a corporate compliance firm.

4.Expansion of ‘connected person’ under insider trading norms

SEBI expanded the definition of “connected person” and “immediate relative” under insider trading regulations to facilitate effective investigation and enforcement against insider trading. The spouse, child, parent, and sibling of the person have been added under the definition of ‘relative’.

“SEBI's decision to expand the scope of connected persons would increase the scope of the prohibition of insider trading regulations,” said Makarand M Joshi.

“It would bring within its ambit many more persons (viz, a person sharing a household or residence with a ‘connected person, a firm or its partner or its employee in which a ‘connected person’ is also a partner, etc). who are indirectly associated with the securities market through intermediaries, fiduciaries or distant relatives of persons working in listed companies,” he added.

5.Eligibility norms for IAs, RAs relaxed; UPI options to trade

Qualified stock brokers will mandatorily offer investors the option to trade in the secondary market - cash segment using a UPI block mechanism (ASBA-like for secondary markets) or a three-in-one trading facility in addition to the current trading mode. SEBI also relaxed the eligibility criteria for registration and simplified the compliance requirements for Investment Advisers (IAs) and Research Analysts (RAs).`,
slug:'India_approves_new_asset_class_for_HNIs',
},
{
  id:15,
  title:'Reliance Mukesh Ambani loses Rs 80000 crore in just 2 days due to Sensex fell over 1,000 points while Nifty fell about 300 points',
  image:MukeshAmbani,
  date:'october 2,2024',
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
  date:'october 3,2024',
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
    date:'october 3,2024',
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
      date:'october 3,2024',
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
    
  ]

  // Generate snippets for each article
const newsArticlesWithSnippets = newsArticlesData.map(article => ({
  ...article,
  snippet: generateSnippet(article.content)
}))
  
  export default newsArticlesWithSnippets;
  
