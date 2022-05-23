import { Navbar } from '../components/Navbar'

const Custom404 = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto mb-16 sm:px-0">
        <div>
          <h1 className="font-bold text-4xl">404 - Page Not Found</h1>
          <p className="text-gray-500 mt-2 max-w-sm">
            Sorry! This page doesn't exist. Double check the URL and try again.
          </p>
        </div>
      </div>
    </>
  )
}

export default Custom404
