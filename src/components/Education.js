// import Template from "./Template";

const Education = () => {
  return (
    <div id={"education"} className="bg-primary">
      <div className="">
        <div className="">
          <h2 className="text-center text-[2em] font-bold">Education</h2>
        </div>
        <div className="justify-center flex">
          <div className="backdrop-sepia-0 bg-white/30 md:w-1/3 rounded-lg md:px-5 px-2 my-10 py-5 mx-10">
            <div className="flex items-center justify-between gap-3">
              <h2 className="md:text-[1.4em] font-bold">
                Malang State Polytechnic
              </h2>
              {/* <p className="">Malang, East Java</p> */}
            </div>
            <div className="md:text-[1.1em] mt-2">  
              <ul className="list-disc ms-10">
                <li className="flex justify-between items-center">
                  <span>
                    D4 Informatics Engineering - GPA <b>3.64</b>
                  </span>
                  <span className="opacity-90">2019-Now</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
