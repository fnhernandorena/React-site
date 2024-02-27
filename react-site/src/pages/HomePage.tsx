function HomePage (){
    return(
      <div className="max-w-screen-lg w-full text-3xl pb-72 pt-10">  <h2 className="text-3xl font-bold text-sky-600 border-double border-b-8 border-r-8 border-sky-600 mb-4">Practical
        application with React, TypeScript, Tailwind and API calls</h2>
    <p className="text-xl">On this page I use the most popular front-end framework, React.js combined with TailWind, calling
        different APIs and using Routing and other React functions.</p>
    <h2 className="text-3xl font-bold text-sky-600 border-double border-b-8 border-r-8 border-sky-600 mb-4">About me</h2>
    <p className="text-xl">I was born on February 14,2004 in the city of San Pedro, the city where i live. During the week i
        work, train, study and try to enjoy my family`s as much time as possible, especially my grandparents.
        I consider myself an efficient person, developing my activities in an organized manner. I am characterized by a
        healthy and passionate ambition, necessary to be learning and developing activities necessary to obtain the
        different goals that I propose.</p>
    <h2 className="text-3xl font-bold text-sky-600 border-double border-b-8 border-r-8 border-sky-600 mb-4">Contact</h2>
    <div className="w-full flex justify-center">
    <div className="text-xl w-full max-w-screen-sm">
        <a href="https://oficial-site-next-app.vercel.app/" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Oficial Site</a>
        <a href="mailto:fnhernandorena@gmail.com" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Email</a>
        <a href="https://www.instagram.com/nico_hernandorenaa/" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Instagram</a>
        <a href="https://www.linkedin.com/in/fnhernandorena/" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">LinkedIn</a>
        <a href="https://t.me/Nico_Hernandorena" className="flex justify-center rounded-xl bg-sky-700 md:bg-gray-800 duration-300 hover:bg-sky-700 m-3 p-3">Telegram</a>
    </div></div></div>
    )
}
export default HomePage;