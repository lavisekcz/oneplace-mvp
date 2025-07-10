import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>OnePlace - Home Services Platform</title>
      </Head>
      <main className="min-h-screen bg-gray-50 text-gray-900">
        <section className="text-center py-20 bg-gradient-to-br from-green-50 to-white">
          <h1 className="text-4xl font-bold text-green-700">Fix it Fast. Fix it Right.</h1>
          <p className="mt-4 text-lg max-w-xl mx-auto">Connect with trusted professionals for all your home service needs. Get quality work done by experienced experts in your area.</p>
          <div className="mt-6 flex justify-center">
            <input className="border p-2 rounded-l-md" placeholder="What do you need help with today?" />
            <button className="bg-green-600 text-white px-4 py-2 rounded-r-md">Search Services</button>
          </div>
        </section>
        <section className="py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h2 className="text-xl font-semibold">Verified Professionals</h2>
            <p className="mt-2 text-gray-600">All our professionals undergo background checks and verification.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Wide Range of Services</h2>
            <p className="mt-2 text-gray-600">From repairs to major renovations, we’ve got specialists for your needs.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Fast Response</h2>
            <p className="mt-2 text-gray-600">Get quick quotes and appointments at your convenience.</p>
          </div>
        </section>
      </main>
    </>
  )
}
