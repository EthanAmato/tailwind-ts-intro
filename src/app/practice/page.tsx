export default function Practice() {
  return (
    <>
      {/* Out of the box, Tailwind has A LOT OF COLOR CHOICES
        this is for both text color and background color

        follows the following pattern:
            - bg-[colorName]-[intensity]
            - text-[colorName]-[intensity]


        We can change the size of text using
        text-5xl, xl, sm, md, etc.

        We can even change the alignment of our text:
    */}
      <h1 className="text-orange-500 text-5xl text-center italic">Hello</h1>
      <div className="bg-blue-300">
        <p>Child element</p>
      </div>

      {/* We can mess with the box model using tailwind classes: 
        Content Size - h-[size], w-[size]
        Padding - p
        Border - border-[size] + change color with border-[color]-[intensity]
        Margin - m-[size]
    
    */}
      <div className="bg-red-600 h-52 w-52 p-10  border-slate-600 border-8 m-12">
        <div className="bg-green-200 h-10 w-10"></div>
      </div>

      {/* 
        We can easily add display and position types to our elements using
        classes as well:


        Access to: relative, block, inline-block, flex, lots of grid
        classes, absolute, fixed, sticky, etc.
    */}
      <div className="bg-yellow-700 p-1 flex justify-center m-10 flex-wrap">
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
        <div className="bg-blue-600 h-10 w-10 m-10"></div>
      </div>

      {/* We can even handle small animations in Tailwind:
        animate-spin
        animate-ping
        animate-pulse
        animate-bounce
      */}
      <div className="h-24 w-24 bg-white m-auto animate-bounce"></div>

      {/* 
        Tailwind even gives us access to more complex syntax for
        dealing with events:
      */}
      <div className="flex justify-center">
        <button className="bg-white transition-colors duration-500 text-slate-900 px-10 py-3 hover:bg-slate-500">
          Submit
        </button>
      </div>

      {/* tailwind provides a series of breakpoints where we can
change the styling of our element based on the size of our viewport
        sm:
        md:
        lg:
        xl:

        */}
      <div className="h-32 bg-green-500 md:bg-red-400 mb-10"></div>

      {/* Typescript provides a lot of options for values - but what if
    they don't have the exact value i'm looking for */}
      <div className="h-[600px] bg-[#39cf1f] md:bg-red-400"></div>
    </>
  );
}
