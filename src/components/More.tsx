import Container from './Container';

const More = () => {
  return (
    <Container
      className="mt-20 lg:mt-30"
      margin="0px 0px -50px 0px"
      revealOnScroll
    >
      <h2 className="font-montserrat mb-8 text-4xl font-bold xl:text-5xl">
        More
      </h2>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {/* GitHub Section */}
        <div className="mb-8 flex w-full gap-8">
          <div className="mt-2 block h-5 w-20 flex-shrink-0 bg-black"></div>
          <div className="text-gray-900 lg:mr-16 xl:mr-32">
            <h3 className="mb-2 text-2xl font-bold">Github</h3>
            <p className="mb-4">
              Have a look at my open-source projects/contributions.
            </p>
            <a
              href="https://github.com/paulhuisman"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-off-white rounded-md bg-gray-900 px-4 py-2 text-sm font-bold hover:underline"
            >
              View the work
            </a>
          </div>
        </div>

        {/* Photography Section */}
        <div className="mb-8 flex w-full gap-8">
          <div className="mt-2 block h-5 w-20 flex-shrink-0 bg-black"></div>
          <div className="text-gray-900 lg:mr-16 xl:mr-32">
            <h3 className="mb-2 text-2xl font-bold">Photography</h3>
            <p className="mb-4">
              Everyone needs hobbies. I got quite a few, one of them is
              photography.
            </p>
            <a
              href="https://500px.com/paulhuisman"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-off-white rounded-md bg-gray-900 px-4 py-2 text-sm font-bold transition-all ease-in hover:bg-gray-700"
            >
              View photos
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default More;
