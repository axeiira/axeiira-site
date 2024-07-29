export default function Navbar() {
  return(
    <>
      <div className="w-auto lg:flex grid lg:ml-0 flex-column lg:justify-between text-2xl font-main text-center lg:gap-0 gap-5">
        <p className="text-white">@axeiira</p>
        <div className="lg:flex grid flex-column mx-auto lg:mx-0 lg:gap-24 gap-5">
          <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">about</p>
          <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">projects</p>
          <p className="text-white cursor-not-allowed">blog</p>
        </div>
      </div>
    </>
  )
}