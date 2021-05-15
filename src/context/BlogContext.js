import React, { createContext } from 'react'
import melancholyImg from '../assets/melancholy-of-unknown-selves.jpg'
import filthySoundImg from '../assets/These-filtered-filthy-sound.jpg'
import sorryForTheRacistImg from '../assets/I-feel-sorry-for-the-racist.png'
import dontLikeKneeImg from '../assets/I-Dont-Like-the-Knee.jpg'
import troubledWorldImg from '../assets/troubled-world-and-the-study-of-public-relations.jpg'
import timeBombImg from '../assets/Ticking-time-bomb.jpg'
import stageImg from '../assets/Off-the-stage.jpg'
import wordsPowerImg from '../assets/words-have-power.jpg'

export const BlogContext = createContext()

export function BlogProvider({ children }) {
    const blogs = [
        {
            title: 'A melancholy of unknown selves',
            images: [
                {
                    src: melancholyImg,
                    alt: 'A woman staring at her reflection in her mobile phone screen'
                }
            ],
            chunks: [
                <p>For many who have been asked the question, who are you? I am sure a simple reply with a name sufficed. That answer seems sufficient but others may bother to include other status acquired by way of family background, education, marriage, religious/socio-political influence where the occasion demands. So while it seems easy to produce words in the likeness of the above when confronted with questions about one's self, when asked what was the most difficult thing, Ancient Greek Philosopher, Thales replied "to know thyself".</p>,
                <p>"(Man) know thyself" an adage commonly attributed to Greek sage Socrates but according to other scholars was originally coined by ancient Egyptian multi-genius Imhotep. The expression addresses a need for adequate self perception which will make for self mastery and consequent self-control. It is this discovery of self that has proven to be the bane of many and the society at large.</p>,
                <p>It was 11th century Persian philosopher Avicenna who argued that the "...human intellect at birth resembled a tabula rasa (a clean slate), a pure potentiality that is actualized through education" and experience. English Philosopher John Locke added to the notion when he defined self through continuity of consciousness. Contrary to Cartesian philosophy, he maintains that knowledge is determined only by experience derived from sense perception. This process begins immediately life is birthed. At birth, man begins to take in and respond to the world around him. Therefore, a child begins to form through interaction with the world around him or her.</p>,
                <p>The family is the first world a child interacts with. A child's journey to self knowledge begins with familial relationship. A child is most likely to view the world through the prism of what obtains in the family. Here, the child begins to develop an identity, belief and value system in the stead of the family. This sense of self is most likely to last longer because they are cultivated while the child is still very impressionable. And so an identity crisis sets in when he is expected to conform to another set of value system that society purports to promote.</p>,
                <p>How does society envisage a corrupt-free society when mothers have told their children "if they steal your thing, steal someone else's”. How does the man understand forgiveness when fathers have said "hit back when someone challenges you". How does the man understand oneness when parents have said "you can't have anything to do with people from that tribe, they are no good, same with these and those". How does the man understand dignity in labour when daddy's debtors come waking him up at noon and mummy is always checking out the latest prayer houses. How does the man understand peace when the slightest difference between his parents is settled with aiming fists. For many, this is life as they know... Life as they believe it.</p>,
                <p>But you see the famous words of Socrates - "The unexamined life is not worth living" remains instructive. It gives another opportunity for self reappraisal for we often times do not question why we act the way we do, talk the way we talk, respond to issues the way we do and indeed live our lives the way we do. We just don't know who we are. So many are just living someone else's life, living in someone else's shadow while others are just doing what the crowd do or what they think they are allowed to.</p>,
                <p>It is really this poor knowledge of self that has made many susceptible to worldly cares. They have become instruments to be manipulated by others for mischief and self aggrandizement. They have become puns to be moved and tossed at will with no recourse to their own desires and for this the wise man says "when purpose is not known, abuse is inevitable". We really need to examine our lives to find ourselves for only then can we be happy and free.</p>,
                <p>Now, you will realize that when you find yourself there lies a greater call to life beyond self-fulfilment. It is as the English Philosopher, George Berkeley puts it "Esse est percipi" - to be is to be perceived; I dare add 'to be perceived positively'. Living is beyond having a name and presenting same upon demand, it is about touching lives, lifting others up and making a positive difference in the world around you. It is a devotion to leaving behind memories that others will savor with delight.</p>,
                <p>So we are back where we started: who are you?</p>
            ],
            url: '/blog/1'
        },
        {
            title: 'These filthy filtered sounds',
            images: [
                {
                    src: filthySoundImg,
                    alt: 'A hand turns a dial on a sound mixer'
                }
            ],
            chunks: [
                <p>"If music be the food of love, play on, give me excess of it; that surfeiting, the appetite may sicken, and so die" - William Shakespeare, Twelfth Night.</p>,
                <p>Those poignant and timeless lines of the most quintessential Playwright history may ever record capture the very essence of music and the exerting force it commands over human emotions. It reveals how indeed one can glut to something as fleeting as sound. For Shakespeare, he is not only going to surfeit to music but he is equally prepared to die. While I was still ravelling in the profound appeal of those words, I was late to realize that he (Shakespeare) had employed the use of a conditional clause - 'if' at the beginning of those lines (whoa! Shakespeare you did it again).</p>,
                <p>It would imply therefore that Shakespeare was not certain of the qualities he was attributing to music which is that of being "the food of love..." That caution of uncertainty was enough to redirect the trajectory of even this piece. But the question remains; what is music? And does it assert any influence in our lives?</p>,
                <p>It has been difficult for authorities to agree on a definition that capture the dynamics of music but Wikipedia succinctly defines music as "an art form and cultural activity whose medium is sound and silence". Music is an age-long tradition. History holds that the primitive men were wont to hum nice tunes in expression of whatever situation they were in. Today, music is the centrepiece of many religions. In fact, the Christians hold it to be true that singing is the only preoccupation of heavenly beings. Not only that, music in the form of trumpet blast will announce the end of time.</p>,
                <p>Music is more than art, music is life. Friedrich Nietzsche in Twilight of the idols says in very strong words "without music, life would be a mistake". Music is life because it has the power to be your friend, heal your cares, calm your fears, make peace. Again, it is life because while others do music for a living others manage musicians to eke a living.</p>,
                <p>Music has undoubtedly undergone tremendous evolutions and Africa with its rich blend of culture and tradition is home to music. Our moonlight tales incorporated fine elements of music and all our celebrations are fitted with corresponding rhythms.</p>,
                <p>A generation back, we were blessed with beautiful tunes like 'joromi' from the legendary Sir Victor Uwaifo, 'yonder please' by the grandiloquent Chris Okotie (now reverend), 'bolanle' by Junior and Pretty to others done by King Sunny Ade, Ebenezer Obey, Mike Okri, Oliver de Quoque, Evangelist Sunny Okosun, Majek Fashek, Fela Anikulapo Kuti and a host of others.</p>,
                <p>Today, our music industry parades people who with digitally mastered vocals and beats identify as musicians. When brought on stage, they simply hum to the DJ's play, throw their sunglasses to the crowd, sag their trousers, pull off their shirt (ladies too) and the performance is over. They do not know jack about music and have not taken the pains to do so.</p>,
                <p>The most worry is that they have 'creatively' desecrated the sanctity of music with their crass and debasing lyrics. Profanity has become a distinct quality of their songs. For them, creative lyric is one that stupidly glorifies sex, wealth, drugs, ‘gangsterism’ and violence. There is almost nothing that enriches the soul in their songs. It gets most irritating when they churn out their music videos. Half naked (sometimes stark naked) girls adorn our screen "shaking what their mama gave them..." Immodest show of wealth marks their sense of a good music video. At best they spit some lines that purport to thank God for those vanities and vices. What mockery!</p>,
                <p>Now, due credence must be given to the handful of artistes that endeavour to extol virtues, feed the soul whilst giving us rich entertainment with their songs. It is for sake of these that Maya Angelou reflected "music was my refuge. I could crawl into the space between the notes and curl my back to loneliness". These artistes have with their sweet melodies returned the pristine essence of music. They have produced what lovers of good music can surfeit to.</p>,
                <p>Musicians must realize that their artistry is a vocation that must uphold a duty to the society. They must never lose touch of the fact that they are worthy collaborators in a person's socialization process. So while others continue to wallow in their discordant tunes others rise above these filtered filthy sounds.</p>
            ],
            url: '/blog/2'
        },
        {
            title: 'I feel sorry for the racist',
            images: [
                {
                    src: sorryForTheRacistImg,
                    alt: 'An image of blank and white handprints'
                }
            ],
            chunks: [
                <p>This is not exactly how I expected to feel when I finally stared racism in the face. I had imagined how I would vengefully defend my heritage in order to preserve my personal pride. I had rehearsed how I would return any verbal vile thrown at me with some carefully crafted words afterall the British colonialists left us with the English language which I now had decent command of. I had vowed to oppose at whatever costs any attempts to undermine my person on the basis of my skin colour. Alas! Today, all I feel for the racist is pity.</p>,
                <p>When I looked at him, I thought of my dear friends of European/Caucasian descent whom I have met within my short stay in the UK and how they struggle to desist from making racist remarks towards me or in my presence. You can literally touch the visible restraints on their faces. When they cannot contain themselves anymore, it falls off as jokes. I shared good laughs with my friends back home but it was not to racist jokes. I shudder at how almost life-sustaining racism seem to be. My interpretation of this unfortunate reality are of two analogies - racism is either akin to an addict needing a daily dose of drugs to sustain his addiction or a dance student needing daily practice to perfect his art. Either ways, he remains subject to his imbibed master.</p>,
                <p>I looked at him closely and I realised that he was a victim too. I saw the poor victim of a socialisation that constructed self worth only on the basis of skin colour and said his was superior to mine. I saw a person robbed of his capacity to be rational. I saw a person denied the opportunity of an wholesome application of his learning in reaching logical conclusions in matters as simple as human relations. I looked hard enough and saw that all his claim to being a member of a great civilisation bore no imprint on the crassness of his actions towards me and ‘my kind’.</p>,
                <p>Now, do not tell me otherwise, for how can you strip me and discountenance my capacity to engage you intellectually like thinking people do? How can you not see all my acts of kindness like loving people do? How can you not be bothered about how sad your words and actions make me feel like a human being would? How can you look at me and all you see is the colour of my skin? Just tell me how? For as long as you can only see that far, you are bound by the same chain.</p>,
                <p>So, I have not read in entirety the recent <a target="_blank" href="https://www.gov.uk/government/publications/the-report-of-the-commission-on-race-and-ethnic-disparities/foreword-introduction-and-full-recommendations">commission report by the government</a> that submitted that there is <a target="_blank" href="https://www.bbc.co.uk/news/uk-56585538">no evidence of institutional racism in the UK</a>. To be fair, I felt I could deploy my time more judiciously afterwards. Reading the <a target="_blank" href="https://medium.com/the-thinking-slow-news-letter/i-lost-my-sh-t-this-week-heres-why-ba940f2ad9f">April 2nd Piece</a> by Kristian Hoareau Foged published in this week’s Monday briefing by Stephen Waddington confirmed my opinion of the seeming outright denial of current realities by the report and the conscious biases that underscore the daily experiences of people from minority backgrounds in the UK.</p>,
                <p>I felt that the report and its findings even with its subtle admission of racism in the UK was another classic brit-ish PR stunt. I just don’t feel that its presentation reflects the high PR standing of the UK.</p>,
                <p>Unlike Kristian, my reaction towards racism has taken a rather contemplative tone and strangely so. Read up to understand why I feel sorry for the racist instead.</p>
            ],
            url: '/blog/3'
        },
        {
            title: 'I don\'t like the knee',
            images: [
                {
                    src: dontLikeKneeImg,
                    alt: 'Football players in a circle, taking a knee'
                }
            ],
            chunks: [
                <p>After three weeks of court proceedings and forty-five witnesses, former Minneapolis Police officer, <a target="_blank" href="https://edition.cnn.com/2021/04/20/us/derek-chauvin-trial-george-floyd-deliberations/index.html">Derrick Chauvin was found guilty of all charges</a> of second-degree unintentional murder, third-degree murder and second-degree manslaughter in the killing of 46-year-old African-America, <a target="_blank" href="https://en.wikipedia.org/wiki/George_Floyd">George Floyd</a>. Since those unfortunate moments when the world watched with horror as then officer Chauvin placed the weight of his knee on the neck of handcuffed, restrained Floyd who was shouting “I can’t breathe” before giving up the ghost, the world has been sent into a frenzy of protests. These series of protests in the United States of America (USA) and around the world has become known as the “Black Lives Matter” (BLM) movement. What has emerged from this movement is the symbolism of kneeling on one knee (sometimes both) as resistance to racial oppression and suppression. But I don’t like the knee.</p>,
                <p>George Floyd’s killing was a sharp departure from the <a target="_blank" href="https://www.amnesty.org.uk/deadly-force-police-violence-usa?utm_source=google&utm_medium=grant&utm_campaign=AWA_GOV_usa-police-brutality&utm_content=usa%20police%20brutality">typically reported police shooting of unarmed African-Americans</a>. I, like many others around the world watched the <a target="_blank" href="https://www.nytimes.com/2020/05/31/us/george-floyd-investigation.html">9:48minutes long viral video of Chauvin’s knee on the neck of Floyd</a> that eventually led to his death. Death by asphyxiation is undoubtedly a more brutal and painfully slow death compared to many other forms of killing. Therefore, for every time that symbol is recreated, we are reminded of the horrendous manner and helplessness that attended Floyd’s death.</p>,
                <p>I understand that many are of the view that ‘taking the knee’ as it is now described is a deliberate attempt to evoke a collective emotion of disdain over the evil of racism on the heels of Floyd’s killing and consequently lead to a suppression of racist tendencies but let us imagine deducing symbols from every other prevalent injustices and crimes in society. What will be the protest symbol for rape? What will be the protest symbol for violence against women, mass school shootings, gender inequality or nepotism?</p>,
                <p>However, a bigger concern is that these symbols serve to reinforce the legend of the criminal in this instance a perpetrator of a racism induced killing. It is important to realise that in <a target="_blank" href="https://online.maryville.edu/online-bachelors-degrees/forensic-psychology/historys-famous-crooks/">understanding the mind of a criminal</a>, many of them are motivated by the desire to be famous. It is not hard to infer that violent racist acts provide an easy route to enjoying media mentions and into public consciousness. The media often make <a target="_blank" href="https://web.northeastern.edu/jfox/Columns/usatoday%20monikers%20oct%2023.htm">celebrities of violent criminals</a>. Think about Bonnie and Clyde, the Yorkshire ripper, Jack the ripper and their prominence in popular culture. Taking the knee is synonymous to goal scoring celebrations of famous footballers recreated by little children in the play field. For as long as we keep taking the knee, I think that we will not only be etching Derrick Chauvin undeservedly in our folklore but endearing others to the <a target="_blank" href="http://getd.galib.uga.edu/public/wiest_julie_b_200308_ma/wiest_julie_b_200308_ma.pdf">fanfare that comes with committing violent racist crimes</a>.</p>,
                <p>Now, you cannot challenge a social malaise that has been entrenched in society for centuries from a position of deference. <a target="_blank" href="https://lifeinperublog.wordpress.com/2017/09/27/what-does-it-mean-to-kneel/">Deference is exactly what taking the knee represents</a>. The kneeling posture symbolizes an acknowledgement, a resignation perhaps a yielding to a power greater than the one who is kneeling. No! You cannot show respect to racism or succumb to its authority however innocuous the act or context may be. I will rather that people stood up to racism, raised a fist and say that they are a people of value too then take a sit at the table and negotiate a just and equitable society for the oppressed victims of today and tomorrow.</p>
            ],
            url: '/blog/4'
        },
        {
            title: 'Troubled world and the study of Public Relations',
            images: [
                {
                    src: troubledWorldImg,
                    alt: 'A downward trending arrow superimposed over a map of the world'
                }
            ],
            chunks: [
                <p>I have lived short enough to experience an unwholesome amount of chaos like the world has been thrown into right now on account of the Covid-19 pandemic but long enough to know that building and strengthening relationships is the only way out for our world. This in many regards sounds antithetical to the times considering that physical and social distancing is propagated as the panacea to containing an unprecedented viral transmission contracted by touch but we have also learnt that we cannot really be distant whether as continents, countries, race, ethnic communities, relatives, friends or neighbours. Indeed, one’s cough in Wuhan, China can be of some serious concern to another in Leeds, UK.</p>,
                <p>I have long held the belief that the most important character of the human race is communication. At the heart of every human person is the need to relate with another and share experiences. It is the reason pre-historic man made cave drawings and today we have several social media platforms. Growing up, my late father introduced me to the art of reading when he would ask me to read a particular book and make weekly reports to him. I was able to journey to distant places and relive various experiences on the pages of books of such authors as Chinua Achebe, Wole Soyinka, William Shakespeare, Charles Dickens among others. In the lyrics of artistes such as Bob Marley, Tupac, Michael Jackson and more, I felt a sense of connection that transcended space. Going on to study Mass Communication at the University of Benin, Nigeria further exposed me to the power communication wields in fostering relationships and shaping human society.</p>,
                <p>You see, communication is just so powerful. I now know that content creators and owners of communication medium can literally direct human behavior, shape social values and just manipulate society. I appreciate the role of communication in promoting causes, fostering trade, building social communities and even affecting diplomatic relations. I have realized that the power to creatively and effectively manipulate communication (content) to achieve desired outcomes is very well captured within the Public Relations discipline.</p>,
                <p>Therefore, at a time when the world is in a pandemic, the UK has finalized Brexit and an air of uncertainty is breezing through almost every clime, we will continue to turn to Public Relations professionals to allay fears, communicate hope to the people, safeguard social values and indeed predict the future. My decision to study Public Relations at this time and at Leeds Beckett University, UK is precisely to take advantage of the dynamics at play and its imperatives for engineering better relationships and Leeds Beckett’s well documented reputation in the teaching of Public Relations and Strategic Communications.</p>
            ],
            url: '/blog/5'
        },
        {
            title: 'A ticking time bomb',
            images: [
                {
                    src: timeBombImg,
                    alt: 'A man sat on a train station platform, with his head in his hands in despair'
                }
            ],
            chunks: [
                <p>Various sociologists, political scientists, anthropologists and social historians have attempted over the years to stratify society into a set of hierarchical social categories or classes. They have attempted rather unsuccessfully to agree on the appropriate classes but the most common remain the upper, middle and lower classes.</p>,
                <p>It is however, still a matter of debate as to the basis for the various class systems. While renowned Philosopher Karl Marx argues that "class is determined entirely by one's relationship to the means of production hence the proletariat, those who work but do not own the means of production; and the bourgeoisie, those who invest and live off the surplus generated by the former, Max Weber avers that "class is determined by economic position... which is determined by social prestige rather than simply just relations of production.</p>,
                <p>Whether it is the Marxist, Weberian or any other of the theories that abound, it is important to observe that the concept of class is an appreciation of the correlation of income, education, wealth, social background, influence, power within the framework of our overall social interactions. It suggests that the degree of possession of any or all of the above variables determines the class such an individual belongs. Therefore, those possessing higher have come to be identified by various scholars as the upper class, the bourgeoisie, the elite etc while those possessing little have been identified as the lower class, the proletariat, the masses, the serfs etc.</p>,
                <p>American Sociologist C. Wright Mills is associated with the term Power Elite to describe a relatively small loosely connected group of individuals who dominate American policy making. This group includes bureaucratic, corporate, intellectual, military, media and government elite who control the principal institutions in the United States and whose opinions and actions influence the decisions of the policy makers. Several scholars also posit that all through history it is the elite who determine the growth and direction of a nation in about all parts of the world.</p>,
                <p>Since income remain a dominant indicator of social class, in Africa, the term elite has come to be loosely associated with the rich and educationally privileged few as against royalty or aristocratic bloodlines projected in other climes. In Africa, it can be agreed that the agitations for independence were championed by a few educationally privileged and sometimes relatively affluent individuals. They echoed what seemed to be the voices of the masses for freedom and boom! sovereign states were springing up all over Africa.</p>,
                <p>It did not take long for Africa to realize that many of the independence champions only sought to consolidate on the new exposure they had garnered within the classrooms and on the streets of Europe to enthrone themselves as Africa's foremost elite class. Their actions afterwards were precipitated on the need to perpetuate their fiefdom. Soon, a new bar was set; break into the top echelon of government and devise a mechanism to remain there or amass a war chest of government treasury during your brief stay within government corridors and you have secured a lifetime of elite supremacy for even generations unborn. As a result, the daily struggle of the average African became one that had wealth acquisition as its centerpiece. He sees his self worth in his bank account statement and will spare no evil to ensure that it is constantly on the rise. Once his 'self worth' is alright then it must be flaunted to the indignation of all those around.</p>,
                <p>Back home, Nigerians are akin to this trend and in our characteristics are indeed high flyers. As Hon. Patrick Obahiagbon, former member of the House of Representatives once humorously remarked that "...the microscopic few that have piloted the affairs of this nation live in peasantile luxury...". It is so much so that class is given a place of honour in schools, hospitals, markets, banks, prisons, traffic, employment, even in our religious places of worship, to such extent that it would seem repulsive to be poor. The poor is often assumed to have nothing to offer even in his family because he simply does not have the financial clout to backup his claims.</p>,
                <p>The world bank president, Jim Yong Kim, stated at the IMF/World Bank spring meetings of April 2014 in Washington D.C. United States that Nigeria is one of the top five countries that have the largest number of poor coming in at no. 3 with 7% of the world's poor. This according to the Nigerian Bureau of Statistics (NBS) report titled "The Nigerian poverty profile 2010) released in January, 2014 represents 69% (112.519 million) of the country's total population estimated to be 163 million. This is in paradox to the fact that we have in our recent history consistently turned out individuals who grace the Forbes richest list thus bringing 'glory' to our land. Further distil that list and you realize that Nigeria sits atop the list of richest in Africa (Forbes richest list 2016).</p>,
                <p>Consequently, while many go around cap-in-hand for their daily bread, others feed their dogs in golden bowl. They make bold to accentuate their distinct class in the faces of the masses. The legion of lower class men are forced to serve their upper class lords with utmost chivalry as they hope to be handed over pittance to their utter degradation. It is not bad enough that they have been denied a fair share of their common hegemony kept in trust with the leaders, worse still they have to contend with being oppressed with same.</p>,
                <p>And so we hear of the man who sends his driver with N1.2million to purchase a brand of fine wine for a wild night but pays same driver N17,000 monthly and is not interested in his tales of a sick mother or the madam who demands that the house help takes a taxi to drop the kids at school but has to walk back home to man the shop or the big boss whose security guard (Mai guard) has to wash his six cars before 6am every day, culture the flowers, sweep the compound and show up bright as he opens the gate for Oga's visiting girlfriends but he is rewarded with pittance at the end of the month and a reminder of how lucky he is to keep a job.</p>,
                <p>It is this unfortunate sequence that has made social commentators to caution that we are waiting by a ticking bomb that will soon 'implode' upon us to grievous consequences. They stress that the masses will soon revolt the status quo just like Aminata Sow Fall portrayed in her classic - The Beggars' Strike. The looming danger for some is already blooming in the horizon.</p>,
                <p>When that day comes, the masses will blame the denial of what they believed to be rightfully theirs for their actions. They will lament a gross insensitivity on the part of the elite for their agitations. They will bemoan a denial of an opportunity to conveniently contribute to the nation's discourse. They will grieve the lures of elite lifestyle. But they will forget that there is a moral rectitude which a person acquires irrespective of social class, ethnicity or the like that dictates a propensity to do good (right) no matter the reward or contrary attraction. They will forget that man is a product of choices made and the notion of choice implies freedom. They will forget that at no point did their actions cease to take to account duty to God, to others, to country and to self.</p>,
                <p>As I sit back to another news bulletin chronicling the problems bedevilling my dear country Nigeria, I ask, are the elite the problem?</p>
            ],
            url: '/blog/6'
        },
        {
            title: 'Off the stage',
            images: [
                {
                    src: stageImg,
                    alt: 'A photo of a stage at night, lit by stage lights'
                }
            ],
            chunks: [
                <p>The night has come</p>,
                    <p>The curtain has been drawn</p>,
                    <p>The actor must now descend the stage</p>,
                    <p>He must now contemplate if he has given his best</p>,
                    <p>If he has left it all on the stage</p>,
                    <p>This stage where mortals become gods</p>,
                    <p>Villains become heroes</p>,
                    <p>This stage where victims become masters</p>,
                    <p>Weaklings become conquerors</p>,
                    <p>This stage where his lies drew cheers and jeers</p>,
                    <p>His deceit called ovation and indignation</p>,
                    <br></br>,
                    <br></br>,
                    <br></br>,
                    <p>This stage where his truths were rebuked</p>,
                    <p>And his honesty despised</p>,
                    <p>This stage that was once the centerpiece of his self expression</p>,
                    <p>Would today be his judgment</p>,
                    <br></br>,
                    <br></br>,
                    <br></br>,
                    <p>He would rue the lines that were not said</p>,
                    <p>He would lament the gestures that were ignored</p>,
                    <p>He would long for the times his act made the audience happy</p>,
                    <p>He would cherish the moments his chants took their pains away</p>,
                    <p>He will seek forgiveness in the momentary solace they found in his performance</p>,
                    <br></br>,
                    <br></br>,
                    <br></br>,
                    <p>Long after the wild applause is gone</p>,
                    <p>Here, he stands alone</p>,
                    <p>Recounting how well he managed the stage</p>,
                    <p>And the props that were mismanaged</p>,
                    <p>His costumes always stole the night</p>,
                    <p>He says he “wants always all the shine”</p>,
                    <p>So others never came to light</p>,
                    <p>Though his walls be adorned with frames</p>,
                    <p>He has not earned a place in the hall of fame</p>
            ],
            url: '/blog/7'
        },
        {
            title: 'Mind our language: Racism and the symbolism of words',
            images: [
                {
                    src: wordsPowerImg,
                    alt: '\'Words have power\' written on a chalk board'
                }
            ],
            chunks: [
                <p>The subject of race and racial relations has lived with us for such a long time now. At the heart of this matter is the simple question of how people with just variation in skin pigmentation can co-exist peacefully? While it seems like such a baseless debate to still be having in a world where humans now easily and peacefully live in space and traverse the moon at will, another breaking news story tell us otherwise.</p>,
                    <p>We are reminded of the tragedy of racism every time a <a target="_blank" href="https://en.wikipedia.org/wiki/Derek_Chauvin">Derrick Chauvin</a> kneels on the neck of a George Floyd and kills him. The horror stares us in the face every time an unarmed African-American <a target="_blank" href="https://en.wikipedia.org/wiki/Killing_of_Daunte_Wright">20-year-old Daunte Wright</a> or <a target="_blank" href="https://www.nytimes.com/article/breonna-taylor-police.html">Breonna Taylor</a>, <a target="_blank" href="https://en.wikipedia.org/wiki/Trayvon_Martin">Treyvon Martin</a> is shot and killed by a police officer in the United States of America (USA); <a target="_blank" href="https://www.theguardian.com/uk-news/2020/jun/11/black-deaths-in-police-custody-the-tip-of-an-iceberg-of-racist-treatment">Christopher Alder, Kingsley Burrell or Zahid Mubarek dying in the UK</a>.</p>,
                    <p>Admittedly, there have been concerted efforts globally and among institutions to stem the wave of racism. In this regard, the <a target="_blank" href="https://www.premierleague.com/NoRoomForRacism">English Premier League</a>, the NBA among other sporting bodies has continued to lead campaigns against racism. Educational institutions and a host of civil society movements have promoted advocacies for a more just, equitable and equal global society. However, all of the potential gains of these efforts may just be undermined by words that when used even to condemn racism seem to perpetuate racial prejudices and stereotypes.</p>,
                    <p>We have for long referred to people of African and Caribbean descent including any who has a comparatively darker skin tone as ‘Blacks’ and those of European/Caucasian descent with lighter skin tones as ‘Whites’. This is both factually and scientifically inaccurate and figuratively reinforces the prejudices that anti-racist campaigners are fighting against. Firstly, anyone with a basic knowledge of colours knows that black and white is a far description from what the skin colour of any human being is. In fact, not even the fictional characterization of Black Panther and white vampires passes for black and white.</p>,
                    <p>It is important to note that our <a target="_blank" href="https://healthengine.com.au/info/skin-colour">skin colour is determined mainly by genetics and melanin</a> – a pigment produced by skin cells when they are exposed to sunlight. The spectrum of skin colour produced by the different types of melanin is between brown and red and not black and white. Moreover, there are people of African descent who bear very fair skin complexion but will still be referred to as black when described in racial terms. The insistence on such polarized descriptions has its roots in the symbolic meaning of those words.</p>,
                    <p>The word ‘black’ has significant amount of <a target="_blank" href="https://www.collinsdictionary.com/dictionary/english/dysphemism">dysphemistic</a> connotations. It is used to refer to darkness, misery, death, decay and evil. Shakespeare famously wrote in <a target="_blank" href="http://bookanista.com/black-badge-hell/"><i>Love’s Labour’s Lost</i></a> that “Black is the badge of hell, the hue of dungeons and the school of night”. Therefore, every time it is used to refer to people with darker skin tones, it subliminally carries those meanings and intends to offend. By contrast, ‘white’ has mainly positive connotations. It is symbolically connected to light, innocence, clean, pure and fresh. It is therefore, immediately apparent that the use of black and white in racial lexicon is a figurative comparison between races and an attempt to exalt one over the other. Humanity will be better served when we start being just human beings, people, citizens and not blacks or whites.</p>,
                    <p>The foregoing narrative feeds into the use of the term ‘<a target="_blank" href="https://en.wikipedia.org/wiki/White_supremacy">white supremacy</a>’ to describe the superiority of the ‘white’ race over the ‘black’ race. Even when used to lament instances of racial inequalities in favour of people with lighter skin colour, it subtly denies or at best belittles the gravity of those injustices. It is important to observe that the word ‘supremacy’ which is a derivative of the word ‘supreme’ denotes a sense of glory and pride. These are values that are both worth aspiring towards and protecting. It is the reason there is a sense of purpose too shared by white supremacist movements. Therefore, it is counter-intuitive to advocate racial equality by requesting abolition of white supremacy. Rather, those acts that signal white supremacy should be called out for the injustices and crimes that they.</p>,
                    <p>Now, this leads us to another phrase that finds common usage in perhaps every conversation on racism – ‘<a target="_blank" href="https://en.wikipedia.org/wiki/White_privilege">white privilege</a>’. On the surface, privilege simply means any special rights or advantages granted or available only to a person or group. This is not necessarily a bad thing because people crave privileges everyday but when we connect this to the struggle for racial equality then it makes a whole world of difference. In making an ethical consideration on the issue of racism against the backdrop of present white privileges, the average ‘white’ person is forced to critically examine how much of his/her privileges they are willing to sacrifice? What does a world without white privileges mean to them? In a world of frequent brutalization and killing of unarmed people of African descent by ‘privileged’ law enforcement officers, the answer is immediately clear. In fact, it will seem suicidal to willingly drop those privileges and press for and accept equality with the present ‘under privileged’ race. The irony is that the only privilege available to a vast majority of ‘white’ people especially in the lower echelon of society might just be the unlikelihood of being pulled over by police officers indiscriminately and not much more yet it is enough entitlement to seemingly protect. Once again, this reflects the bane of not calling wrongdoings for what they are. An offence should not change its texture because of the skin colour of the offender.</p>,
                    <p>As the world grapples with the unfortunate issue of racism, it must realise that words play an important role on the pathway to ending racism. In this regard, even words with best intentions may inadvertently be undoing the strides made. Therefore, as we advocate for racial equality, we must mind our language.</p>
            ],
            url: '/blog/8'
        }
    ]

    return (
        <BlogContext.Provider value={blogs}>
            { children }
        </BlogContext.Provider>
    )
}