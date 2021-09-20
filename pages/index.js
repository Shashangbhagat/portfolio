import Head from 'next/head'
import React from 'react';

export default function Home() {
  const [small, setSmall] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState(1);
  const [scrollSizeLarge, setScrollSize] = React.useState(false);

  const show = !small || open;
  const smallSizeScroll = [800, 1600, 2300, 3100, 3900, 4700];
  const largeSizeScroll = [630, 1300, 1960, 2700, 3650, 4320]

  React.useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth > 890);
      if(window.innerWidth > 890) {
        setScrollSize(true);
      } else {
        setScrollSize(false);
      }
      if(window.innerWidth < 656) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    }

    const hanldeScroll = () => {
      const scrollSize = scrollSizeLarge ? largeSizeScroll : smallSizeScroll;
      if(window.pageYOffset < scrollSize[0]) {
        setTab(1);
      }
      else if (window.pageYOffset > scrollSize[0] && window.pageYOffset < scrollSize[1] + 1) {
        setTab(2);
      } else if (window.pageYOffset > scrollSize[1] && window.pageYOffset < scrollSize[2] + 1) {
        setTab(3);
      } else if (window.pageYOffset > scrollSize[2] && window.pageYOffset < scrollSize[3] + 1) {
        setTab(4);
      } else if (window.pageYOffset > scrollSize[3] && window.pageYOffset < scrollSize[4] + 1) {
        setTab(5);
      } else if (window.pageYOffset > scrollSize[4] && window.pageYOffset < scrollSize[5] + 1) {
        setTab(6);
      } else if(window.pageYOffset > scrollSize[5]) {
        setTab(7);
      }
    }
    handleResize()
    hanldeScroll()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', hanldeScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', hanldeScroll);
    }
  }, [])

  const handleListClick = (idx) => {
    const scrollSize = scrollSizeLarge ? largeSizeScroll : smallSizeScroll;
    if ([null, undefined].includes(idx)) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
      window.scrollTo({top: scrollSize[idx] + 1, behavior: 'smooth'})
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Shashang Bhagat</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full flex-1 relative bg-indigo-100">
        {small && (
          <button
            className="fixed bg-indigo-900 text-white z-10 ml-4 mt-4 border border-white p-2 rounded"
            onClick={() => setOpen(!open)}
          >
            {open ? 'X' : 'Menu'}
          </button>
        )}
        {show && (
          <div className="h-screen bg-indigo-900 w-64 fixed h-screen text-center">
            <div className="h-1/2 flex items-center justify-center">
              <img src="/images/Shashang.webp" className="rounded-full h-1/2  border-4  border-indigo-200" />
            </div>
            <ul>
              <li onClick={() => handleListClick()} className={` cursor-pointer my-1 text-white text-lg ${tab === 1 && 'font-semibold'}`}>About</li>
              <li onClick={() => handleListClick(0)} className={`cursor-pointer my-1 text-white text-lg ${tab === 2 && 'font-semibold'}`}>Experience</li>
              <li onClick={() => handleListClick(1)} className={`cursor-pointer my-1 text-white text-lg ${tab === 3 && 'font-semibold'}`}>Education</li>
              <li onClick={() => handleListClick(2)} className={`cursor-pointer my-1 text-white text-lg ${tab === 4 && 'font-semibold'}`}>Skills</li>
              <li onClick={() => handleListClick(3)} className={`cursor-pointer my-1 text-white text-lg ${tab === 5 && 'font-semibold'}`}>Portfolio</li>
              <li onClick={() => handleListClick(4)} className={`cursor-pointer my-1 text-white text-lg ${tab === 6 && 'font-semibold'}`}>Interests</li>
              <li onClick={() => handleListClick(5)} className={`cursor-pointer my-1 text-white text-lg ${tab === 7 && 'font-semibold'}`}>Contact</li>
            </ul>
          </div>
        )}
        <div className={`${!small && 'ml-64'} mt-40`}>
          <div className="mx-20">
            <div className="text-7xl tracking-tighter font-bold">
              <span>Shashang {' '}</span>
              <span className="text-indigo-900">Bhagat</span>
            </div>
            <div className="mt-4 text-lg font-bold text-gray-400">INDORE, INDIA - +91 9981282514 - <span className="text-indigo-900">SHASHANGBHAGAT@GMAIL.COM</span></div>
            <div className="mt-12 text-gray-600 font-semibold">
              I am a full stack developer with extensive knowledge. I’ve always sought out opportunities and challenges that are meaningful to me. I love to work in compitative enviroment.I want to make things
              that make a difference.
            </div>
            <div className="mt-14 flex">
              <a
                href="https://www.linkedin.com/in/shashang-bhagat-67aa94120"
                className="bg-gray-700 text-white h-12 w-12 text-xl font-bold rounded-full p-2 text-center"
              >
                in
              </a>
              <a 
                className="text-white h-12 w-12 text-lg rounded-full ml-2"
                href="https://github.com/Shashangbhagat"
              >
                <img src="/logos/github-logo.png" />
              </a>
              <a 
                className="text-white h-12 w-12 text-lg rounded-full ml-2"
                href="https://hi-in.facebook.com/sashang.bhagat"
              >
                <img src="/logos/fb-logo.png" />
              </a>
            </div>
          </div>
          <div className="mx-20 mt-72">
            <div className="text-4xl font-bold">
              <span>Bestpeers {' '}</span>
              <span className="text-indigo-900">Infosystem</span>
            </div>
            <div className="mt-4 text-lg font-bold text-gray-400">FULL STACK DEVELOPER JAN 2020 - PRESENT</div>
            <div className="mt-8 text-gray-600 font-semibold">
              Directly working with clients to get requirments and convert it into feature. Responsible for all the phases like development, deployment, testing.
              Worked on ReactJS, Nodejs, Typescript, NextJs, Redux, Material-ui, Recharts, D3.js, ExpressJs, Mongodb, AWS, Docker, Jest, Mocha.
            </div>
            <div className="text-4xl font-bold mt-20">
              <span>Freelance {' '}</span>
              <span className="text-indigo-900">Work</span>
            </div>
            <div className="mt-4 text-lg font-bold text-gray-400">FRONT END DEVELOPER JAN 2019 - JAN 2020</div>
            <div className="mt-8 text-gray-600 font-semibold">
              Worked with Linklanes Pvt. Ltd. to create a good beautifull front end for their application. Tech stack - NextJs, Typescript, Nodejs, Mongodb, Material-ui.
            </div>
          </div>
          <div className="mx-20 mt-72">
            <div className="text-4xl font-bold">
              <span>Bachelor's of {' '}</span>
              <span className="text-indigo-900">Engineering</span>
            </div>
            <div className="mt-4 text-lg font-bold text-gray-400">RAJIV GANDHI PROUDYOGIKI VISHWAVIDYALAYA 2016 - 2020</div>
            <div className="mt-8 text-gray-600 font-semibold">
              Completed Bachelor's of Engineering with Computer science specialization and First Division.
            </div>
            <div className="text-4xl font-bold mt-20">
              <span>Higher {' '}</span>
              <span className="text-indigo-900">Secondary</span>
            </div>
            <div className="mt-4 text-lg font-bold text-gray-400">MADHYA PRADESH BOARD OF SECONDARY EDUCATION 2015 - JAN 2016</div>
            <div className="mt-8 text-gray-600 font-semibold">
              Completed Higher Secondary with First Division with specialization in Maths.
            </div>
          </div>
          <div className="mx-20 mt-72">
            <div className="text-4xl font-bold">
              <span>Front</span>
              <span className="text-indigo-900">end</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              <ul>
                <li>ReactJS, NextJS.</li>
                <li>Redux, Redux-saga.</li>
                <li>Typescript, Javascript.</li>
                <li>D3JS, Recharts.</li>
                <li>HTML5, CSS3.</li>
                <li>Material-ui, Ant-design, Bootstrap.</li>
                <li>Jest, Mocha.</li>
              </ul>
            </div>
            <div className="text-4xl font-bold mt-20">
              <span>Back</span>
              <span className="text-indigo-900">end</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              <ul>
                <li>NodeJS, ExpressJS.</li>
                <li>Mongodb, PostgresSQL.</li>
                <li>Jest, Mocha.</li>
              </ul>
            </div>
          </div>
          <div className="mx-20 mt-72">
            <div className="text-4xl font-bold">
              <span>Gainx{' '}</span>
              <span className="text-indigo-900">Intellect</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              <img src="./images/GainX.png" className="w-full max-w-sm rounded-xl border border-indigo-900" />
              <div className="mt-2">
                Worked as Junior Full Stack Developer.
              </div>
            </div>
          </div>
          <div className="mx-20 mt-20">
            <div className="text-4xl font-bold">
              <span>Brighteon{' '}</span>
              <span className="text-indigo-900">Com</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              <img src="./images/Brighteon.png" className="w-full max-w-sm rounded-xl border border-indigo-900" />
              <div className="mt-2">
                Worked as Junior Full Stack Developer.
              </div>
            </div>
          </div>
          <div className="mx-20 mt-72">
            <div className="text-4xl font-bold">
              <span>Full{' '}</span>
              <span className="text-indigo-900">Stack</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              Strong Passion of developing Full stack applications.
            </div>
            <div className="text-4xl font-bold mt-24">
              <span>Block</span>
              <span className="text-indigo-900">Chain</span>
            </div>
            <div className="mt-8 text-gray-600 font-semibold">
              In a last few days, I have discovered my intrests in Blockchain.
            </div>
          </div>
          <div className="mt-72 mx-10 px-10 py-10 rounded-lg bg-indigo-300 mb-20">
            <div className="text-4xl font-bold">
              <span>Contact{' '}</span>
              <span className="text-indigo-900">Me</span>
            </div>
            <form className="mt-8 text-gray-600 font-semibold">
              <div className="max-w-lg w-full">
                <div>Email:</div>
                <input type="email" required className="mt-2 w-full rounded-lg p-1" />
              </div>
              <div className="max-w-lg w-full mt-6">
                <div>Name:</div>
                <input type="text" required className="mt-2 w-full rounded-lg p-1" />
              </div>
              <div className="max-w-lg w-full mt-6">
                <div>Message:</div>
                <textarea required rows={4} className="mt-2 w-full rounded-lg p-1" />
              </div>
              <div className="max-w-lg w-full mt-6">
                <button type="submit" className="border-2 hover:bg-white hover:text-indigo-300 border-white text-white rounded-lg w-full p-1">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
