import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt='Logo' className='w-28 object-contain' />
            <button type='button' onClick={() => window.open('https://github.com/Ath1thyan/AI-Summarizer-clone')} className='black_btn' >GitHub</button>
        </nav>

        <h1 className='head_text'>
            Summarize Articles with <br className='max-md:hidden' />
            <span className='orange_gradient' >AI-Summerizer</span>
        </h1>

        <h2 className='desc' >
            AI-powered summarizer that uses OpenAI GPT-4 to generate concise and engaging summaries of long articles.
        </h2>
    </header>
  )
}

export default Hero
