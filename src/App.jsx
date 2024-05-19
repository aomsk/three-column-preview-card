function App() {
  return (
    <>
      <div className="flex justify-center xl:items-center w-screen h-screen bg-veryLightGray">
        <div className="flex w-[350px] xl:w-[900px] xl:h-[450px] flex-col xl:flex-row">
          <div className="bg-brightOrange w-full rounded-t-2xl xl:rounded-tr-none xl:rounded-l-2xl mt-5 xl:mt-0">
            <div className="flex flex-col justify-between h-[450px] xl:h-full p-10">
              <img src="../static/images/icon-sedans.svg" alt="" width={60} height={60} />
              <h1 className="text-5xl font-normal font-bigShouldersDisplay text-veryLightGray uppercase">sedans</h1>
              <p className="font-lexendDeca text-transparentWhite text-[15px]">
                Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.
              </p>
              <button
                type="button"
                className="bg-veryLightGray rounded-full font-lexendDeca text-brightOrange w-[130px] h-[40px] hover:bg-brightOrange hover:text-transparentWhite hover:border-2 hover:border-veryLightGray transition ease-in delay-75"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-darkCyan w-full h-full">
            <div className="flex flex-col justify-between h-[450px] xl:h-full p-10">
              <img src="../static/images/icon-suvs.svg" alt="" width={60} height={60} />
              <h1 className="text-5xl font-normal font-bigShouldersDisplay text-veryLightGray uppercase">suvs</h1>
              <p className="font-lexendDeca text-transparentWhite text-[15px]">
                Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.
              </p>
              <button
                type="button"
                className="bg-veryLightGray rounded-full font-lexendDeca text-darkCyan w-[130px] h-[40px] hover:bg-darkCyan hover:text-transparentWhite hover:border-2 hover:border-veryLightGray transition ease-in delay-75"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-veryDarkCyan w-full h-full rounded-b-2xl xl:rounded-bl-none xl:rounded-r-2xl">
            <div className="flex flex-col justify-between h-[450px] xl:h-full p-10">
              <img src="../static/images/icon-luxury.svg" alt="" width={60} height={60} />
              <h1 className="text-5xl font-normal font-bigShouldersDisplay text-veryLightGray uppercase">luxury</h1>
              <p className="font-lexendDeca text-transparentWhite text-[15px]">
                Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.
              </p>
              <button
                type="button"
                className="bg-veryLightGray rounded-full font-lexendDeca text-veryDarkCyan w-[130px] h-[40px] hover:bg-veryDarkCyan hover:text-transparentWhite hover:border-2 hover:border-veryLightGray transition ease-in delay-75"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
