import Head from 'next/head'
import React from 'react';

export default function Home() {
  const [small, setSmall] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const show = !small || open;

  React.useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth < 656) {
        setSmall(true);
      } else {
        setSmall(false);
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize);
  }, [process.browser && window.innerWidth])

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
            <div className="h-1/2">Image</div>
            <ul>
              <li className="my-1 text-white text-lg font-semibold">About</li>
              <li className="my-1 text-white text-lg">Experience</li>
              <li className="my-1 text-white text-lg">Education</li>
              <li className="my-1 text-white text-lg">Skills</li>
              <li className="my-1 text-white text-lg">Portfolio</li>
              <li className="my-1 text-white text-lg">Interests</li>
              <li className="my-1 text-white text-lg">Contact</li>
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
              <button className="bg-gray-700 text-white h-12 w-12 text-xl font-bold rounded-full">in</button>
              <button className="text-white h-12 w-12 text-lg rounded-full ml-2"><img src="/logos/github-logo.png" /></button>
              <button className="text-white h-12 w-12 text-lg rounded-full ml-2"><img src="/logos/fb-logo.png" /></button>
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
