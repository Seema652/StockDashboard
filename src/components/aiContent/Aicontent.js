import React, { useState } from "react";
import { PiAndroidLogoLight } from "react-icons/pi";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaGoogle,
  FaTiktok,
  FaYoutube,
  FaCamera,
  FaRunning,
  FaStar,
  FaFileSignature,
  FaEdit,
  FaExpand,
  FaFilter,
  FaBrain,
  FaBullhorn,
  FaAd,
  FaBuilding,
  FaMousePointer,
  FaGraduationCap,
  FaSmileBeam,
  FaRetweet,
  FaUmbrellaBeach,
  FaSuitcase,
  FaChalkboardTeacher,
  FaBusinessTime,
  FaHome,
  FaUserTie,
  FaBullseye,
  FaBookReader,
  FaUtensils,
  FaDumbbell,
} from "react-icons/fa";
import { MdLightbulbOutline } from "react-icons/md";
import { FaHandHoldingDollar, FaHouse } from "react-icons/fa6";

const templates = {
  Suggested: [
    "  Summarize the following:",
    " Create a promotional ad for:",
    " Create a social media post for:",
    "Write a witty Instagram caption about:",
    " Rewrite and improve the following content:",
  ],
  Facebook: [
    " Write an engaging Facebook post about the company described below:",
    " Produce a Facebook status about the benefits of {{ topic }}.",
    " Write a Facebook post about {{ topic }}.",
    " Give me an interesting question to post on my Facebook Group about {{ topic }}.",
    " Rephrase the following content as a catchy Facebook post.",
    " Generate question ideas for a Facebook poll about {{ topic }}.",
    "Craft a compelling story on how you can change your life for the better by using {{ product/service }}.",
    "Share a behind-the-scenes look at {{ company/project }} and the hard work that goes into it.",
    "Create a Facebook post that highlights the unique features of {{ product/service }}.",
    "Write a Facebook status that educates your audience on the importance of {{ topic }}.",
    "Come up with a Facebook post that inspires your followers to take action regarding {{ issue }}.",
    " Develop a thought-provoking Facebook post that sparks a conversation about {{ topic }}.",
    " Design a Facebook quiz that challenges your followers' knowledge on {{ topic }}.",
    "Share a personal experience that impacted your life about {{ topic }}.",
    " Write a Facebook post that encourages your followers to share their opinions on {{ topic }}.",
    " Create a Facebook status that showcases how today's society is impacted by {{ product/service }}.",
    " Develop a Facebook post that asks for improvement feedback on {{ company/project }}.",
    "  Share a funny or relatable meme about {{ topic }}.",
    " Write a Facebook post that highlights the success stories of those who have used {{ product/service }}.",
    " Create a Facebook poll/quiz that challenges your followers to think critically about {{ topic }}.",
  ],
  Instagram: [
    " Encourage my {{ ideal customer persona }} to share positive experiences with my {{ product/service }} by showcasing them in a unique and engaging way with an Instagram post.",
    " Establish trust and credibility with my {{ ideal customer persona }} through an Instagram post that highlights the expertise and professionalism of my {{ company/brand }}.",
    "Persuade my {{ ideal customer persona }} to take {{ desired action }} with a unique and compelling offer in an Instagram post that creates a sense of urgency and exclusivity.",
    "Show how my {{ product/service }} can meet the specific needs and pain points of my {{ ideal customer persona }} in an engaging and relatable way with an Instagram post.",
    "Persuade my {{ ideal customer persona }} to choose my {{ product/service }} over similar options in the market by showcasing clear and compelling evidence in an Instagram post.",
    "Provide step-by-step guidance on how to use my {{ product/service }} and encourage my {{ ideal customer persona }} to make a purchase with an Instagram post that has clear and compelling instructions.",
    "Engage my {{ ideal customer persona }} with a relatable and authentic message in an Instagram post that leads to {{ desired action }} with a strong call-to-action and compelling visuals.",
    "Provide valuable and relevant information about {{ subject }} to my {{ ideal customer persona }} and persuade them to take {{ desired action }} with an Instagram post that has a clear and compelling message.",
    "Engage my {{ ideal customer persona }} with a creative and engaging Instagram post that showcases the unique features and benefits of my {{ product/service }}.",
    "Write a witty Instagram caption about {{ topic }}.",
    "Give me Instagram photo captions for a picture of {{ photo description }}.",
    "Generate 10 viral Instagram Reel ideas about {{ topic }}.",
    "Write a story or personal experience related to {{ topic }}.",
    "Ask your followers to share their own experiences or opinions in the comments about {{ topic }}.",
    "Create an Instagram poll or quiz related to {{ topic }}.",
    "Share a quote or inspiring message related to {{ topic }} on Instagram.",
    "Share tips, tricks, or advice related to {{ topic }} on Instagram.",
    "Share a list of your favorite accounts, books, podcasts, or resources related to {{ topic }}.",
    "Create a themed Instagram challenge or contest related to {{ topic }}.",
  ],
  Twitter: [
    "    Write a Twitter thread about {{ topic }}.",
    "Generate a funny tweet.",
    "Generate 10 tweet ideas to post about {{ topic }}.",
    "Produce 10 tweets based on the following information:",
    "Rewrite the following content as a tweet:",
    "Write a tweet about {{ topic }} in a {{ adjective }} tone of voice.",
    "Create a Twitter thread idea that presents a behind-the-scenes look at your {{ company/brand }}, persuading your {{ ideal customer persona }} to take {{ desired action }} with authenticity and reliability.",
    "Develop a Twitter thread idea that offers a step-by-step guide on how to use your {{ product/service }}, attracting high-quality leads with clear and compelling instructions.",
    "Design a Twitter thread idea that demonstrates how your {{ product/service }} solves the specific pain points and needs of your {{ ideal customer persona }} in a relatable and engaging way.",
    "Develop a Twitter thread idea that showcases the unique selling points of your {{ product/service }}, attracting high-quality leads with a sense of urgency and exclusive offers.",
    "Create a Twitter thread idea that compares your {{ product/service }} to similar options in the market, persuading your {{ ideal customer persona }} to choose you with clear and compelling evidence.",
    "Develop a Twitter thread idea that draws in your {{ ideal customer persona }} with a relatable and authentic message, then persuades them to take {{ desired action }} with a strong call-to-action and compelling visuals.",
    "Create a Twitter thread idea that establishes trust and credibility with your {{ ideal customer persona }} by showcasing the success stories of previous customers who have used your {{ product/service }}.",
    "Develop a Twitter thread idea that engages your {{ ideal customer persona }} with a unique and compelling perspective on {{ subject }}, persuading them to take {{ desired action }} on your {{ website/product }}.",
    "Create a Twitter thread idea that provides valuable and relevant information to your {{ ideal customer persona }} about {{ subject }}, attracting high-quality leads with a strong call-to-action.",
    "Develop a Twitter thread idea that overcomes objections and concerns your {{ ideal customer persona }} may have about your {{ product/service }}, convincing them to take {{ desired action }} with a sense of urgency.",
    "Create a Twitter thread idea that showcases the value and benefits of your {{ product/service }} to your {{ ideal customer persona }}, persuading them to take {{ desired action }} with a clear and compelling message.",
    "Develop a Twitter thread idea that showcases the unique features and benefits of your {{ product/service }} in a fun and creative way, attracting high-quality leads with a strong offer.",
    "Create a Twitter thread idea that tells a unique and relatable story about your {{ product/service }} and how it has helped {{ ideal customer persona }} achieve their {{ goal }}.",
    "Develop a Twitter thread idea that goes viral and attracts high-quality leads for your {{ product/service }} with a strong call-to-action and compelling visuals.",
    "Create a Twitter thread idea that goes viral and showcases your {{ product/service }} to your {{ ideal customer persona }} in a creative and engaging way.",
    "Share a personal story or experience related to {{ topic }}.",
    "Encourage your followers to share their thoughts by asking a question related to {{ topic }}.",
    "Use a relevant hashtag to join a larger conversation about {{ topic }}.",
    "Share a quote related to {{ topic }} and explain why it resonates with you.",
    "Share a helpful tip or piece of advice related to {{ topic }}.",
    "Create a list of resources related to {{ topic }} and share it with your followers.",
    "Pose a hypothetical scenario related to {{ topic }} and ask your followers to weigh in on what they would do in that situation.",
    "Share a personal goal or challenge related to {{ topic }} and encourage your followers to do the same.",
    "Share a historical event or figure related to {{ topic }} and explain its significance.",
    "Share a story or anecdote related to {{ topic }} and ask your followers to share their own in response.",
    "Share a piece of advice or wisdom related to {{ topic }} that you wish you had known earlier in life.",
    "Share a lesson you've learned from a mistake or failure related to {{ topic }}.",
    "Share a personal opinion on a popular trend or debate related to {{ topic }}.",
    "Use humor or satire to make a point related to {{ topic }}.",
    "Share a personal story of growth or transformation related to {{ topic }} and encourage your followers to share their own stories of personal growth.",
    "Share a piece of trivia related to {{ topic }} that most people might not know.",
  ],
  LinkedIn: [
    "Write a LinkedIn post about the importance of networking and building professional relationships.",
    "Generate a LinkedIn post about the benefits of continuous learning and professional development.",
    " Create a LinkedIn post about the importance of building a strong personal brand.",
    "  Generate a LinkedIn post about the importance of staying up-to-date with industry trends and news.",
    "  Create a LinkedIn post about the importance of setting career goals and creating a plan to achieve them.",
    "    Create a LinkedIn post about the importance of building a strong personal brand.",
    " Generate a LinkedIn post about the importance of staying up-to-date with industry trends and news.",
    "Create a LinkedIn post about the importance of setting career goals and creating a plan to achieve them.",
    "Write a LinkedIn post about the benefits of taking calculated risks in your career.",
    " Generate a LinkedIn post about the importance of being authentic and transparent in your professional interactions.",
    " Create a LinkedIn post promoting a blog post about {{ topic }}.",
    " Create a promotional LinkedIn post about the benefits of using a {{ product/service }} that gets people to {{ action }}.",
    "    Generate question ideas for a LinkedIn quiz about {{ topic }}.",
    "    Write a LinkedIn post about the power of mentorship and finding a professional mentor.",
    " Create a LinkedIn post about the benefits of volunteering and giving back to your community.",
    " Generate a LinkedIn post about the importance of building a diverse professional network.",
    "Write a LinkedIn post about the benefits of developing strong communication skills in the workplace.",
    " Create a LinkedIn post about the importance of work-life balance and self-care.",
    "Generate a LinkedIn post about the benefits of attending conferences and industry events.",
    " Write a LinkedIn post about the importance of cultivating a growth mindset.",
    "Create a LinkedIn post promoting a podcast episode or interview about {{ topic }}.",
    " Generate a LinkedIn post about the benefits of outsourcing certain tasks to increase productivity.",
    " Create question ideas for a LinkedIn poll/quiz about common challenges in {{ industry/profession }}.",
    " Write a LinkedIn post about the importance of developing strong leadership skills.",
    " Create a LinkedIn post about the benefits of building cross-functional relationships within your organization.",
    " Generate a LinkedIn post about the importance of maintaining a positive attitude and mindset at work.",
    "Write a LinkedIn post about the benefits of finding a work-life fit that aligns with your values and priorities.",
    "  Create a LinkedIn post about the importance of creating a personal mission statement and aligning your career goals with it.",
    "   Create a LinkedIn post about the importance of creating a personal mission statement and aligning your career goals with it.",
    " Write a LinkedIn post about the importance of building resilience and adaptability in your career.",
    " Create a LinkedIn post promoting a webinar or virtual event about {{ topic }}.",
    " Generate a LinkedIn post about the benefits of networking outside of your industry or profession.",
    "  Write a LinkedIn post about the importance of giving and receiving feedback effectively in the workplace.",
  ],
  Pinterest: [
 "   Write a Pinterest description for an image about {{ topic }}.",
"    Create a Pinterest description for a {{ product/service }} that leads people to {{ website }}.",
    "Generate 10 pin titles ideas for a post about {{ topic/product/service }}.",
   " Write a promotional Pinterest post for a {{ product/service }} that gets people to {{ action }}.",
   " Write an inspirational Pinterest post about {{ topic }}.",
   " Create a Pinterest post talking about {{ topic }} tips and tricks.",
   " Write a step-by-step guide on how to use {{ product/service }}.",
   " Share a personal story or experience related to {{ topic/product/service }}.",
   " Compile a list of the top 10 {{ topic }} resources and share it on Pinterest.",
   " Write a how-to guide for a DIY project related to {{ topic/product/service }}.",
    "Share a behind-the-scenes look at the creation of {{ product/service }}.",
  "  Write a Pinterest post sharing the benefits of {{ topic/product/service }}.",
   " Create a Pinterest post debunking a myth about {{ topic/product/service }}.",
   " Write a Pinterest post sharing the history and evolution of {{ product/service }}.",
   " Share a collection of inspiring quotes related to {{ topic }}.",
   "   Write a Pinterest post featuring a list of fun and creative ways to use {{ product/service }}.",
  "  Create a Pinterest post featuring a list of the top 10 trends related to {{ topic/product/service }} and how to incorporate them into daily life.",
   " Write a Pinterest post featuring a list of surprising facts about {{ product/service }}.",
   " Share a Pinterest post featuring a list of the top 10 influencers and thought leaders in {{ topic/product/service }} and why they're worth following.",
  "  Write a Pinterest post featuring a list of the top 10 mistakes to avoid when using {{ product/service }}.",
  ],
  GoogleBusinessProfile: [
"    Write a post about {{ product or service }} to persuade {{ target audience }} to {{ action }}.",
   " Generate an intriguing post about {{ topic/event/product/service }} that generates traffic for {{ website }}.",
    "Create a celebratory post about {{ achievement }}.",
   " Write a post about the benefits of supporting local businesses.",
    "Share a customer success story or testimonial to highlight the value of {{ product/service }}.",
    "Highlight a unique feature or aspect of {{ product/service }} and how it sets it apart from competitors.",
   " Write a post that provides helpful tips or advice related to {{ industry/niche }}.",
    "Create a caption for a video that offers a behind-the-scenes look at the process behind creating {{ product or service }}.",
   " Write a post that announces {{ event/product launch/company news }}.",
   " Share a post that promotes {{ partnership/collaboration }}.",
    "Create a social media post celebrating {{ award/recognition }}.",
   " Share a post that discloses {{ discount/offer }}.",
   " Write a post that answers {{ common concern }} about {{ product or service }}.",
  ],
  TikTok: [
  "  Generate 10 TikTok post ideas about {{ topic }}.",
   " Generate 10 TikTok post ideas for a {{ business type }}.",
   " Write a TikTok caption for a video about {{ topic }}.",
"    Write a TikTok video script about {{ topic }}.",
    "Give me 10 TikTok challenge ideas.",
"    Write a video description for a TikTok about {{ topic }}.",
   " Generate a list of hashtag ideas for a TikTok video about {{ topic }}.",
  "  Write a funny joke for a TikTok video about {{ topic }}.",
   " Generate a captivating intro for a TikTok video about {{ topic }}.",
  ],
  YouTube: [
"    Write some YouTube titles about {{ topic }}.",
   " Brainstorm unique YouTube video titles about {{ topic }}.",
  "  Make a list of YouTube video ideas about {{ topic }} for {{ target audience }}.",
   " Write a video script outline for a video titled {{ video title }}.",
   " Outline the structure of a YouTube video about {{ topic }}.",
   " Generate a YouTube video script about {{ topic }} in {{ tone of voice }} for {{ target audience }}.",
  "  Write a video script intro for a video titled {{ video title }}.",
   " Write a video script hook for a video titled {{ video title }}.",
  "  Write a video description for the following video script:",
   " Write a conclusion for a YouTube video about {{ topic }}.",
   " Write a sponsored promo for a YouTube video about {{ product }}.",
   " Write a CTA for a YouTube video that gets the audience to subscribe to the channel.",
   " Generate a YouTube video idea that showcases a behind-the-scenes look at my {{ company/brand }} and convinces my {{ ideal customer persona }} to take {{ desired action }} with authenticity and relatability.",
   " Create a YouTube video that presents a step-by-step guide on how to use my {{ product/service }} and convinces my {{ ideal customer persona }} to make a purchase with clear and compelling instructions.",
    "Develop a YouTube video idea that illustrates how my {{ product/service }} can solve the specific pain points and needs of my {{ ideal customer persona }} in a relatable and engaging manner.",
    "Produce a YouTube video that highlights the unique selling points of my {{ product/service }} and convinces my {{ ideal customer persona }} to make a purchase with a sense of urgency and exclusive offers.",
    "Produce a YouTube video that compares my {{ product/service }} to similar options on the market and convinces my {{ ideal customer persona }} to choose us with clear and compelling evidence.",
    "Create a YouTube video that draws in my {{ ideal customer persona }} with a relatable and authentic message, and persuades them to take {{ desired action }} with a strong call-to-action and compelling visuaals.",
    "Develop a YouTube video idea that showcases the success stories of previous customers who have used my {{ product/service }} and convinces my {{ ideal customer persona }} to make a purchase.",
    "Generate a YouTube video idea that engages my {{ ideal customer persona }} with a unique and compelling perspective on {{ subject }} and persuades them to take {{ desired action }} on my {{ website/product }}.",
    "Create a YouTube video idea that provides valuable and relevant information to my {{ ideal customer persona }} about {{ subject }} and convinces them to take {{ desired action }} on my {{ website/product }}.",
    "Develop a YouTube video idea that overcomes objections and concerns my {{ ideal customer persona }} may have about my {{ product/service }} and convinces them to take {{ desired action }} with a sense of urgency.",
    "Create a YouTube video idea that showcases the value and benefits of your {{ product/service }} to persuade your {{ ideal customer persona }} to take {{ desired action }} with a strong offer and clear call-to-action.",
    "Come up with a fun and creative YouTube video idea that highlights the unique features and benefits of your {{ product/service }} to persuade your {{ ideal customer persona }} to make a purchase.",
    "Tell a unique and relatable story about your {{ product/service }} in a YouTube video to show how it has helped your {{ ideal customer persona }} achieve their {{ goal }}.",
    "Develop a YouTube video idea that goes viral and persuades your {{ ideal customer persona }} to take {{ desired action }} on your {{ website/product }} with a strong call-to-action and compelling visuals.",
    "Brainstorm a YouTube video idea that entertains and showcases your {{ product/service }} to your {{ ideal customer persona }} in a creative and engaging way.",
    "Craft a YouTube ad script that showcases the unique selling points of your {{ product/service }} and persuades your {{ ideal customer persona }} to make a purchase with a sense of urgency and exclusive offers.",
    "Write a YouTube ad script that draws in your {{ ideal customer persona }} with a relatable and authentic message, and then persuades them to take {{ desired action }} with a strong call-to-action and compelling visuals.",
    "Develop a YouTube ad script that establishes trust and credibility with your {{ ideal customer persona }} by highlighting the successes and testimonials of previous customers who have used your {{ product/service }}.",
    "Write a YouTube ad script that educates your {{ ideal customer persona }} on a specific {{ topic }} and persuades them to take {{ desired action }} on your {{ website/product }}.",
    "Create a YouTube ad script that speaks directly to the needs and pain points of your {{ ideal customer persona }} and persuades them to take {{ desired action }} with a sense of urgency and a strong offer.",
    "Write a YouTube ad script that delivers valuable and relevant information to your {{ ideal customer persona }}, and persuades them to take {{ desired action }} on your {{ website/product }}.",
    "Craft a YouTube ad script that engages your {{ ideal customer persona }} with a unique and compelling perspective on {{ subject }}, and convinces them to take {{ desired action }} on your {{ website/product }}.",
    "Develop a YouTube ad script that addresses the pain points and needs of your {{ ideal customer persona }}, and demonstrates how your {{ product/service }} can solve their problems.",
    "Create a YouTube ad script that clearly explains the features and benefits of your {{ product/service }} to your {{ ideal customer persona }}, and convinces them to make a purchase with a sense of urgency.",
    "Write a YouTube ad script that tells a relatable and engaging story about how your {{ product/service }} helped someone like your {{ ideal customer persona }} achieve their {{ goal }}.",
    "Craft a YouTube ad script that showcases the value and benefits of your {{ product/service }} to your {{ ideal customer persona }}, and persuades them to take {{ desired action }} with a strong offer and clear call-to-action.",
    "Develop a YouTube ad script that overcomes objections and concerns your {{ ideal customer persona }} may have about your {{ product/service }}, and convinces them to take {{ desired action }} with a sense of urgency.",
    "Create a YouTube ad script that captures the attention of your {{ ideal customer persona }} with a strong headline and hook, and then persuades them to take {{ desired action }} with persuasive language and compelling evidence.",
    "Write a YouTube ad script that showcases the unique features and benefits of your {{ product/service }} to your {{ ideal customer persona }}, and persuades them to make a purchase with social proof and credibility-building elements.",
    "Craft a YouTube ad script that introduces your {{ product/service }} to your {{ ideal customer persona }} and persuades them to take {{ desired action }} with a strong call-to-action and compelling visuals.",
  ],

  Rewrite: [
   " Rewrite an improve the following content:",
   " Rewrite the following content from the point of view of a {{ individual/profession }}:",
   " Rephrase the following content in a {{ adjective }} tone:",
   " Rewrite the following content to explain it to a 5th grader:",
   " Rephrase the following paragraph to make it more readable:",
  "  Rewrite the following paragraph using sophisticated vocabulary:",
   " Rewrite the following list as a paragraph:",
   " Rewrite the following paragraph as a list:",
  "  Create a social media post expanding on and explain {{ topic }} in more depth including the following keywords:",
   " Rewrite the following sentence using a different grammatical structure:",
  "  Rewrite the following paragraph in {{ genre }}: (e.g., poetic, journalistic, academic):",
   " Rewrite the following paragraph using active voice:",
  "  Rewrite the following paragraph to include more sensory details:",
 "   Rewrite the following sentence to eliminate redundancy:",
  "  Rewrite the following paragraph using shorter sentences:",
  "  Rewrite the following paragraph to emphasize a different point:",
  "  Rewrite the following paragraph using metaphorical language:",
  "  Rewrite the following paragraph to address {{ audience }}:",
  "  Rewrite the following paragraph using more precise language:",
   " Rewrite the following paragraph to highlight a different perspective:",
  ],
  Edit: [
    'Improve the following social media post by making it more {{ adjective }}:',
    "Edit the following social media post and focus on {{ angle }}:",
   " Edit the following social media post and make it look fresh:",
   " Edit the following social media post to have a {{ adjective }} tone of voice:",
   " Shorten the following social media post without losing its meaning:",
  '  Add a call to action to the following social media post:',
   " Make the following social media post more engaging by adding a question or poll:",
   " Adjust the following social media post's formatting to make it easier to read:",
   " Edit the following social media post to better target {{ specific audience }}:",
   " Add relevant hashtags to the following social media post to increase its visibility:",
   " Remove any unnecessary information from the following social media post:",
   " Incorporate a trending topic or current event into the following social media post:",
   " Add a personal touch to the following social media post to make it more relatable:",
  "  Edit the following social media post to better align with {{ values }}:",
    "Adjust the following social media post's length to fit {{ character limit }}:",
  "  Add emojis to the following social media post:",
   " Make the following social media post more attention-grabbing by using a bold statement:",
   " Turn the following social media post into a story:",
  ],
  ExplainExpand: [
   ' Create a social media post expanding on the following analogy and how it applies to {{ topic }}:',
   " Create a social media post expanding on the impact of {{ event/development }} on {{ field/industry }}.",
   " Create a social media post expanding on the following statistic and what it tells us about {{ topic }}:",
  "  Create a social media post expanding on the {{ trend }} and how it may evolve in the future.",
   " Create a social media post expanding on the factors that contribute to {{ problem/success }}.",
   " Create a social media post expanding on the following misconception and provide clarifications:",
    "Create a social media post expanding on the ethical implications of {{ action/decision }}.",
   " Create a social media post expanding on the importance of considering {{ factor }} when {{ task/action }}.",
    "Create a social media post expanding on the different uses of {{ tool/application }}.",
   " Create a social media post expanding on the following claim and provide counterarguments:",
   " Create a social media post expanding on the different factors that influence {{ consumer/employee behavior }}.",
   " Create a social media post expanding on the impact of {{ profession/industry }} in our society.",
   " Create a social media post expanding on the different perspectives on {{ philosophical concept/idea }}.",
   " Create a social media post expanding on the {{ trend }} and how it relates to {{ certain cultural/social/political values }}.",
   " Create a social media post expanding on the different aspects of {{ topic }} that are often overlooked.",
"    Create a social media post expanding on the following recommendation and its implementation challenges:",
   " Write the next sentence:",
  "  Create a social media post expanding on the following idea:",
   " Complete the following sentence:",
   " Give a detailed breakdown of {{ topic }}.",
   " Tell me more about {{ topic }} with a focus on {{ angle/subtopic }}.",
    "Tell me about the history of {{ topic }}.",
   " Write a social media post about the following facts:",
   " Finish this paragraph: I’m excited to offer you my new {{ product name }} that can help you {{ benefit }}.",
  "  Explain in a social media post the following idea and give specific examples to illustrate it:",
   " Create a social media post expanding on the implications of the following statement:",
   " Create a social media post expanding on the following argument and provide counter-arguments to it:",
   " Provide your thoughts on {{ topic }} and how it relates to {{ related topic }} in a social media post.",
   " Create a social media post expanding on the importance of {{ concept/idea }}.",
   " Create a social media post expanding on the different approaches to solving {{ problem }}.",
   " Explain in a social media post the possible outcomes of {{ event/situation }}.",
   " Create a social media post expanding on the following quote and how it relates to {{ topic }}:",
   " Create a social media post expanding on the following statement and provide evidence to support it:",
   " Explain in a social media post the relevance of {{ topic }} in today's society.",
   " Explain in a social media post the different theories related to {{ concept/idea }}.",
  ],
  Summarize: [
    "Summarize the following content and turn it into a social media post:",
    "Simplify the following paragraph:",
   " Summarize the following paragraph in one sentence:",
    "Summarize the main points of the following content:",
   " Create a social media post that captures the essence of the following message:",
    "Condense the following text into a shorter version while retaining the main points:",
  "  Write a brief summary of the following text:",
  "  Use an analogy or metaphor to explain the following concept in simpler terms:",
  "  Rewrite the following sentence using simpler language:",
  "  Break down the steps or components of the following process:",
  "  Summarize the following research study in three key takeaways:",
  "  Simplify the following jargon-heavy text for a {{ target audience }}:",
   " Simplify the following technical process into step-by-step instructions:",
   " Simplify the following marketing pitch for {{ audience }}:",
   " Simplify the following text into practical tips:",
   " Simplify the following text into a catchy slogan:",
  ],
  PsychologicalFrameworks: [
    "Generate a psychological framework to approach {{ topic }}.",
    "Provide psychological theories that can relate to {{ topic }}.",
  ],
  ContentCreationFrameworks: [
    "Provide a content creation framework for building a blog around {{ topic }}.",
    "Suggest content frameworks for social media marketing about {{ topic }}.",
  ],
  Promotional: [
    "Write a promotional message about {{ topic }}.",
    "Generate a promotional email or ad copy for a product related to {{ topic }}.",
  ],
  Ads: [
    "Create an engaging ad for a product in the {{ topic }} industry.",
    "Write an ad copy for a Google or Facebook ad campaign on {{ topic }}.",
  ],
  CompanyRelated: [
    "Write a company overview post for {{ topic }}.",
    "Generate a post about the company's new product launch in {{ topic }}.",
  ],
  CTAPrompts: [
    "Create a call-to-action message for {{ topic }}.",
    "Generate a compelling CTA for a sales page about {{ topic }}.",
  ],
  Educational: [
    "Create an educational post about {{ topic }}.",
    "Write a lesson plan or tutorial about {{ topic }}.",
  ],
  Fun: [
    "Write a fun quiz or challenge related to {{ topic }}.",
    "Generate a funny caption for an Instagram post about {{ topic }}.",
  ],
  Interactive: [
    "Create an interactive poll about {{ topic }}.",
    "Generate an interactive question for followers to answer regarding {{ topic }}.",
  ],
  Inspirational: [
    "Write an inspirational quote or message for social media about {{ topic }}.",
    "Generate a motivational message for a blog or post on {{ topic }}.",
  ],
  Holiday: [
    "Create a holiday-themed post for {{ topic }}.",
    "Write a holiday greeting related to {{ topic }}.",
  ],
  SmallBusiness: [
    "Generate a promotional idea for a small business in {{ topic }}.",
    "Write a post that can help small businesses grow in the {{ topic }} industry.",
  ],
  BusinessCoaches: [
    "Create content for a business coach regarding {{ topic }}.",
    "Write advice for entrepreneurs on {{ topic }} from a business coach's perspective.",
  ],
  LifestyleCoaches: [
    "Generate content that a lifestyle coach could use regarding {{ topic }}.",
    "Write a motivational blog post for a lifestyle coach on {{ topic }}.",
  ],
  Realtors: [
    "Generate real estate tips for {{ topic }}.",
    "Write a post that a realtor could use to promote a property related to {{ topic }}.",
  ],
  NGOs: [
    "Generate content for an NGO about {{ topic }}.",
    "Write a blog post about the work of an NGO focused on {{ topic }}.",
  ],
  Entrepreneurs: [
    "Write content targeted at entrepreneurs interested in {{ topic }}.",
    "Generate business strategies for entrepreneurs in the {{ topic }} industry.",
  ],
  MarketingAgencies: [
    "Generate marketing ideas for an agency working in {{ topic }}.",
    "Write a promotional post for a marketing agency focused on {{ topic }}.",
  ],
  Authors: [
    "Generate content for an author writing about {{ topic }}.",
    "Write an engaging blog post for an author in the {{ topic }} genre.",
  ],
  Accountants: [
    "Generate tips for accountants working with clients in {{ topic }}.",
    "Write an article for accountants on financial advice related to {{ topic }}.",
  ],
  Restaurants: [
    "Generate a menu description for a restaurant featuring {{ topic }}.",
    "Write a promotional post for a restaurant focusing on {{ topic }}.",
  ],
  FitnessTrainers: [
    "Create a workout plan for fitness trainers focused on {{ topic }}.",
    "Write a fitness blog post about {{ topic }}.",
  ],
  Photographers: [
    "Write a blog post for photographers specializing in {{ topic }}.",
    "Generate content ideas for photographers working in the {{ topic }} industry.",
  ],
};

function Aicontent() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectedPrompt, setSelectedPrompt] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleCardClick = (platform) => {
    setSelectedCard(platform);
    setSelectedPrompt("");
  };

  const handlePromptClick = (prompt) => {
    setSelectedPrompt(prompt);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setSelectedPrompt("");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredPrompts = selectedCard
    ? templates[selectedCard].filter((prompt) =>
        prompt.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  return (
    <div className="container mt-5">
      <div className="d-flex align-items-center gap-2 bg-black p-2 rounded text-white mb-4">
        <PiAndroidLogoLight size={30} />
        <h2>AI Content Generator</h2>
      </div>

      <div className="row g-0 shadow-lg border-0">
        <div className="col-lg-4">
          <div className="card p-3 h-100">
            <h3 className="mb-3">Prompt Templates</h3>
            <div
              className="d-flex flex-wrap gap-2 overflow-auto"
              style={{ maxHeight: "400px", overflowY: "scroll" }}
            >
              {selectedCard ? (
                <>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleClose}
                    >
                      &larr; Back
                    </button>
                    <h4>{selectedCard} Prompts</h4>
                  </div>
                  <input
                    type="text"
                    className="form-control mt-2"
                    placeholder="Search prompts..."
                    value={searchText}
                    onChange={handleSearch}
                  />
                  <ul className="list-group mt-3">
                    {filteredPrompts.length > 0 ? (
                      filteredPrompts.map((prompt, index) => (
                        <li
                          key={index}
                          className="list-group-item"
                          style={{ cursor: "pointer" }}
                          onClick={() => handlePromptClick(prompt)}
                        >
                          {prompt}
                        </li>
                      ))
                    ) : (
                      <li className="list-group-item">No prompts found</li>
                    )}
                  </ul>
                </>
              ) : (
                Object.keys(templates).map((platform) => (
                  <div
                    key={platform}
                    className="card text-center p-2"
                    style={{
                      width: "30%",
                      height: "120px",
                      cursor: "pointer",
                      border:
                        selectedCard === platform
                          ? "2px solid #007bff"
                          : "1px solid #ccc",
                    }}
                    onClick={() => handleCardClick(platform)}
                  >
                    {platform === "Facebook" && <FaFacebook size={30} />}
                    {platform === "Suggested" && <FaStar size={30} />}
                    {platform === "Instagram" && <FaInstagram size={30} />}
                    {platform === "Twitter" && <FaTwitter size={30} />}
                    {platform === "LinkedIn" && <FaLinkedin size={30} />}
                    {platform === "Pinterest" && <FaPinterest size={30} />}
                    {platform === "GoogleBusinessProfile" && (
                      <FaGoogle size={30} />
                    )}
                    {platform === "TikTok" && <FaTiktok size={30} />}
                    {platform === "YouTube" && <FaYoutube size={30} />}
                    {platform === "Rewrite" && <FaFileSignature size={30} />}
                    {platform === "Edit" && <FaEdit size={30} />}
                    {platform === "ExplainExpand" && <FaExpand size={30} />}
                    {platform === "Summarize" && <FaFilter size={30} />}
                    {platform === "PsychologicalFrameworks" && (
                      <FaBrain size={30} />
                    )}

                    {platform === "ContentCreationFrameworks" && (
                      <MdLightbulbOutline size={30} />
                    )}
                    {platform === "Promotional" && <FaBullhorn size={30} />}
                    {platform === "Ads" && <FaAd size={30} />}
                    {platform === "CompanyRelated" && <FaBuilding size={30} />}
                    {platform === "CTAPrompts" && <FaMousePointer size={30} />}
                    {platform === "Educational" && (
                      <FaGraduationCap size={30} />
                    )}
                    {platform === "Fun" && <FaSmileBeam size={30} />}
                    {platform === "Interactive" && <FaRetweet size={30} />}
                    {platform === "Inspirational" && <FaRunning size={30} />}
                    {platform === "Holiday" && <FaUmbrellaBeach size={30} />}
                    {platform === "SmallBusiness" && <FaSuitcase size={30} />}
                    {platform === "BusinessCoaches" && (
                      <FaBusinessTime size={30} />
                    )}
                    {platform === "LifestyleCoaches" && (
                      <FaChalkboardTeacher size={30} />
                    )}
                    {platform === "Realtors" && <FaHouse size={30} />}
                    {platform === "NGOs" && <FaHome size={30} />}
                    {platform === "Entrepreneurs" && <FaUserTie size={30} />}
                    {platform === "MarketingAgencies" && (
                      <FaBullseye size={30} />
                    )}
                    {platform === "Authors" && <FaBookReader size={30} />}
                    {platform === "Accountants" && (
                      <FaHandHoldingDollar size={30} />
                    )}
                    {platform === "Restaurants" && <FaUtensils size={30} />}
                    {platform === "FitnessTrainers" && <FaDumbbell size={30} />}
                    {platform === "Photographers" && <FaCamera size={30} />}
                    <p>{platform}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-5">
          <div className="card p-3 h-100">
            <h3>Your Prompt</h3>
            <form className="mt-3">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter your prompt here"
                  value={selectedPrompt}
                  onChange={(e) => setSelectedPrompt(e.target.value)}
                ></textarea>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="language" className="form-label">
                    Language
                  </label>
                  <select id="language" className="form-select">
                    <option>English (USA)</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="ticketNum" className="form-label">
                    Approximate words
                  </label>
                  <input
                    id="ticketNum"
                    type="number"
                    name="ticketNum"
                    value="0"
                    min="0"
                    step="1"
                    className="form-control"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="toneOfVoice" className="form-label">
                    Tone of Voice
                  </label>
                  <select id="toneOfVoice" className="form-select">
                    <option>Polite</option>
                    <option>Casual</option>
                    <option>Formal</option>
                    <option>Creative</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="creativity" className="form-label">
                    Creativity Level
                  </label>
                  <select id="creativity" className="form-select">
                    <option>Low</option>
                    <option>Good</option>
                    <option>High</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="hashtags" className="form-label">
                    Add Hashtags
                  </label>
                  <select id="hashtags" className="form-select">
                    <option>Enable</option>
                    <option>Disable</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="resultCount" className="form-label">
                    Result Number
                  </label>
                  <input
                    id="resultCount"
                    type="number"
                    className="form-control"
                    placeholder="Enter result count"
                    min="1"
                    max="10"
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-20 mt-3">
                Generate
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="card p-3 h-100">
            <h3>Get Started</h3>
            <ol className="list-group-numbered mt-3">
              <li className="list-group-item mb-3">
                Select a platform from the <strong>Prompt Templates</strong>{" "}
                panel on the left.
              </li>
              <li className="list-group-item mb-3">
                View and choose a prompt for the selected platform.
              </li>
              <li className="list-group-item mb-3">
                Modify or generate a new prompt by using the{" "}
                <strong>AI Content Generator</strong>.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aicontent;
