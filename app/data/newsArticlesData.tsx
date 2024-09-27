// import News from '@/app/images/heroScetion/BREAKING NEWS.png'
import Jon from '@/app/images/news/jonbiden.png'
import Narendra_Modi from '@/app/images/news/Narendra_Modi.png'
import Gold from '@/app/images/news/gold2.png'
import AiImage from '@/app/images/news/aiImage.png'
import Top10 from '@/app/images/news/top10.png'

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
      snippet: '5G networks are transforming how we communicate and interact with technology...',
      content: "5G networks are transforming how we communicate and interact with technology, offering unprecedented speeds and lower latency. This next-generation wireless technology is not just about faster downloads; it's enabling a whole new era of connectivity. From autonomous vehicles to smart cities, 5G is powering innovations that were once thought impossible. The increased bandwidth and reduced latency are making real-time remote operations a reality, revolutionizing industries such as healthcare and manufacturing. As 5G continues to roll out globally, we can expect to see a surge in IoT devices and applications that will reshape our daily lives.",
      image: AiImage,
      slug: '5g-connectivity',
    },
    
  ]

  // Generate snippets for each article
const newsArticlesWithSnippets = newsArticlesData.map(article => ({
  ...article,
  snippet: generateSnippet(article.content)
}))
  
  export default newsArticlesWithSnippets;
  