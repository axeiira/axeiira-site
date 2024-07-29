export default function Navbar() {
  return(
    <>
      <div className="w-auto flex flex-column justify-between text-2xl font-main">
        <p className="text-white">@axeiira</p>
        <div className="flex flex-column gap-24">
          <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">about</p>
          <p className="hover:scale-110 text-white hover:text-green transition ease-in cursor-pointer">projects</p>
          <p className="text-white cursor-not-allowed">blog</p>
        </div>
      </div>
    </>
  )
}