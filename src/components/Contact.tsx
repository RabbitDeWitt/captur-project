const Contact = () => {
  return (
    <section className="max-w-[1240px] mx-auto p-4 h-screen">
      <h3 className="text-center">Let's work together</h3>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input className="border shadow-lg p-3" type="text" placeholder="Name" />
          <input className="border shadow-lg p-3" type="email" placeholder="Email" />
        </div>
        <input className="border shadow-lg p-3 w-full my-2" type="text" placeholder="Subject" />
        <textarea className="border shadow-lg p-3 w-full resize-none" cols={30} rows={10} placeholder="Message"></textarea>
        <button className="border shadow-lg p-3 w-full mt-2">Submit</button>
      </form>
    </section>
  )
}

export default Contact