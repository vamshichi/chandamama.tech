// import News from '@/app/images/heroScetion/BREAKING NEWS.png'
import Jon from '@/app/images/news/jonbiden.png'
import Narendra_Modi from '@/app/images/news/Narendra_Modi.png'
import Gold from '@/app/images/news/gold2.png'
import AiImage from '@/app/images/news/aiImage.png'
import Top10 from '@/app/images/news/top10.png'
import Adani from '@/app/images/news/Adani.jpeg'
import Idfc from '@/app/images/news/IDFC First Bank.jpg'
import Amazon from '@/app/images/news/Great Indian Festival Sale.jpg'

function getFormattedDate(): string {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function generateSnippet(content: string): string {
  const words = content.split(' ')
  return words.slice(0, 15).join(' ') + '...'
}


const newsArticlesData = [ 
    {
      id: 1,
      title: 'Joe Biden: The World is at an ‘Inflection Point’ in Final Address at U.N. Assembly.',
      date: getFormattedDate(),
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
      date: getFormattedDate(),
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
      date: getFormattedDate(),
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
      date: getFormattedDate(),
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
      date: getFormattedDate(),
      content: "5G networks are transforming how we communicate and interact with technology, offering unprecedented speeds and lower latency. This next-generation wireless technology is not just about faster downloads; it's enabling a whole new era of connectivity. From autonomous vehicles to smart cities, 5G is powering innovations that were once thought impossible. The increased bandwidth and reduced latency are making real-time remote operations a reality, revolutionizing industries such as healthcare and manufacturing. As 5G continues to roll out globally, we can expect to see a surge in IoT devices and applications that will reshape our daily lives.",
      image: AiImage,
      slug: '5g-connectivity',
    },
    {
      id:6,
      title:'$4 billion data centre expansion plan, Adani Group likely to accelerate',
      date: getFormattedDate(),
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
      date: getFormattedDate(),
      content:`IDFC Limited on September 27 announced that its Board of Directors has approved the amalgamation of its subsidiaries. It said the Board, in its meeting has approved the effectiveness of the composite scheme of amalgamation for merging IDFC Financial Holding Company Limited (IDFC FHCL) with IDFC Limited, and subsequently, IDFC Limited with IDFC FIRST Bank Limited.

IDFC further stated that the National Company Law Tribunal (NCLT), Chennai Bench, sanctioned the amalgamation scheme on September 25, 2024.

IDFC said its Board approved the merger of IDFC FHCL with IDFC Limited, effective September 30, and the merger of IDFC Limited with IDFC FIRST Bank, effective October 1.`,
image:Idfc,
slug:'idfc'    

},
{
  id:8,
  title:'Amazon Great Indian Festival 2024: Check best smartphone deals under Rs 70,000',
  date: getFormattedDate(),
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
}
    
  ]

  // Generate snippets for each article
const newsArticlesWithSnippets = newsArticlesData.map(article => ({
  ...article,
  snippet: generateSnippet(article.content)
}))
  
  export default newsArticlesWithSnippets;
  