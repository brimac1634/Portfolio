import React from 'react';
import knowledgeScreenshot from '../../assets/noblewills-knowledge-homepage.jpg';
import nobleWillsScreenshot from '../../assets/noblewills-homepage.jpg';

const WORK_DETAILS = {
  NobleWillsKnowledge: {
    title: 'NobleWills Knowledge',
    screenshot: {
      src: knowledgeScreenshot,
      width: 1440,
      height: 900,
      alt: 'NobleWills Knowledge homepage with estate-planning search, guides and topics.'
    },
    richDescription: (
      <>
        <p>
          <a href='https://knowledge.noblewills.com/' target='_blank' rel='noopener noreferrer'>NobleWills Knowledge</a> brings together estate-planning guides, FAQs and service information from <a href='https://noblewills.com/' target='_blank' rel='noopener noreferrer'>NobleWills</a>. It helps individuals and families understand the decisions involved in making a Will and planning for the future, with content organised by jurisdiction.
        </p>
        <p>
          Readers can explore <a href='https://knowledge.noblewills.com/en-hk/topics/' target='_blank' rel='noopener noreferrer'>estate-planning topics</a> such as executors, guardianship and assets, or follow <a href='https://knowledge.noblewills.com/en-hk/guides/' target='_blank' rel='noopener noreferrer'>practical guides</a> that explain key steps in more detail. Search provides another way to find relevant information without needing to know the precise terminology.
        </p>
        <p>
          As co-founder and CTO of NobleWills, I’m responsible for the site’s design, development and infrastructure. A key part of this work is the content indexing and retrieval pipeline: content is converted into embeddings and indexed in a vector database, allowing semantic search to retrieve material based on meaning. Reranking then prioritises the most relevant results, which provide context for retrieval-augmented generation (RAG), grounding generated responses in the indexed content.
        </p>
      </>
    ),
    info: [
      ['Role', 'Co-founder & CTO'],
      ['Project type', 'Knowledge platform']
    ]
  },

  NobleWills: {
    title: 'NobleWills',
    screenshot: {
      src: nobleWillsScreenshot,
      width: 1440,
      height: 900,
      alt: 'NobleWills homepage introducing online and personalised Will writing for Hong Kong and assets worldwide'
    },
    richDescription: (
      <>
        <p>
          <a href='https://noblewills.com/' target='_blank' rel='noopener noreferrer'>NobleWills</a> is a will-writing and estate-planning platform for individuals, couples and families with assets or loved ones across countries. Based in Hong Kong, it combines online tools with human guidance to help people plan across multiple jurisdictions.
        </p>
        <p>
          Its <a href='https://noblewills.com/services/online-wills/' target='_blank' rel='noopener noreferrer'>online will-writing service</a> guides users through recording their wishes, choosing executors and guardians, and organising their assets. For more complex or cross-border circumstances, its <a href='https://noblewills.com/services/premium-wills/' target='_blank' rel='noopener noreferrer'>Premium Will service</a> offers personalised planning and drafting. Available services depend on the jurisdictions involved.
        </p>
        <p>
          As co-founder and CTO of NobleWills, I focus my engineering work on the platform behind these services, making complex estate-planning workflows clearer and easier to use, with privacy, reliability and maintainability central to the product.
        </p>
      </>
    ),
    info: [
      ['Role', 'Co-founder & CTO'],
      ['Project type', 'Estate-planning platform']
    ]
  },
	JoeNBrownArt: {
		title: 'Joe N. Brown Art',
		description: 'Gallery website built for a Hong Kong based artist, showcasing illustrations, paintings, characters, and concepts art.',
		link: 'https://www.joenbrownart.com',
		video: 'joenbrownart-demo.mp4',
		info: [
			['Development', 'Brian MacPherson'],
			['Design', 'Joe N. Brown'],
			['Front End', 'React (Typescript)'],
			['Back End', 'Firebase']
		],
		privacy: false
	},
	BreatheCalm: {
		title: 'Breathe Calm',
		description: 'Breathe Calm is an adjustable breath guide with a calming particle animation. Breathe in, breathe out, and pause durations can all be adjusted to fit a specific breathing patter. A gradual vibration pattern can be toggled to allow for breathing exercises with eyes closed.',
		video: 'breathe-calm-demo.mp4',
		info: [
			['Development', 'Brian MacPherson'],
			['Design', 'Brian MacPherson'],
			['Technology', 'Flutter (Dart)'],
			['Systems', 'iOS and Android'],
		],
		privacy: true
	},
	SpentAll: {
		title: 'SpentAll Expense Tracker',
		description: 'SpentAll is a simple-to-use spending tracker allowing users to log expenditures, categorize them, and track their habits using the analytical tools. Besides other customizations available, users can log their expenses in foreign currencies while traveling, while the app gets the latest conversion rate to log the expense in the user\'s home currency. This project was a personal project of mine, built for my own needs, but for the use of anyone.',
		// link: 'https://www.SpentAll.com',
		video: 'SpentAll-demo.mp4',
		info: [
			['Development', 'Brian MacPherson'],
			['Design', 'Brian MacPherson'],
			['Front End', 'React (Javascript)'],
			['Back End', 'Node + PostgreSQL']
		]
	},
	TooFarEastBarber: {
		title: 'Too Far East Barber & Co.',
		description: 'Too Far East Barber & Co. is a Hong Kong based barber shop. This project was to serve as their general website, providing details, updates, and an avenue to making bookings.',
		link: 'https://www.TooFarEastBarber.com',
		video: 'TFE-demo.mp4',
		info: [
			['Client', 'Too Far East Barber & Co.'],
			['Development', 'Brian MacPherson'],
			['Design', 'Ashley Leung'],
			['Front End', 'React (Javascript)'],
			['Back End', 'Firebase']
		]
	},
	BonVivantCollection: {
		title: 'Bon Vivant Collection',
		description: 'Bon Vivant Collection is a men\'s clothing design and tailor shop based in Hong Kong. This project was to serve as their main information and retail website, showcasing their timeless designs and brand culture, while also outlining the process of custom fittings, and online product catalogue.',
		info: [
			['Link', 'New Site Coming Soon!'],
			['Client', 'Bon Vivant Collection'],
			['Development', 'Brian MacPherson'],
			['Design', 'Ashley Leung'],
			['Front End', 'React (Javascript)'],
			['Back End', 'Node + PostgreSQL + AWS']
		]
	},
	NetRoadshowTeleprompter: {
		title: 'NetRoadshow Teleprompter',
		description: 'This Teleprompter is an iPad + iPhone combination app that was to serve the film crews at NetRoadshow with a more customizable teleprompter solution. An iPad, while being mounted to a camera can display a script with a number of different customization options, while another iPad or iPhone can act as a remote control for the speaker. This allows the speaker to directly control the speed, pausing, and starting of the script from a podium.',
		video: 'Tele-demo.mp4',
		info: [
			['Employer', 'NetRoadshow, Inc.'],
			['Development', 'Brian MacPherson'],
			['Design', 'Brian MacPherson'],
			['Front End', 'Swift'],
			['Back End', 'Firebase']
		]
	},
	NetRoadshowMiniprogram: {
		title: 'NetRoadshow Miniprogram',
		description: 'This project was for a Wechat Miniprogram (The mini apps built into wechat). The purpose of the miniprogram was to provide a point of contact and interactivity for clients in the mainland China market.',
		video: 'Mini-demo.mp4',
		info: [
			['Employer', 'NetRoadshow, Inc.'],
			['Development', 'Brian MacPherson and Team'],
			['Design', 'Brian MacPherson'],
			['Front End', '微信小程序 (Javascript)'],
			['Back End', 'C#']
		]
	}
}

export default WORK_DETAILS;
