import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();
  const text = "ada";
  return (
    <main>
      {/* Nav Section */}
      <nav className="absolute z-9999">
        <div className="flex justify-between items-center pl-12  border-2 w-screen p-4 bg-slate-800 text-white">
          <a
            className="font-bold text-2xl"
            onClick={() =>
              navigate("/home-page/", {
                state: {
                  text: text,
                },
              })
            }
          >
            Fay{" "}
            <span className="border-2  px-2 py-1 rounded text-slate-800 bg-white border-slate-800 ">
              DEV
            </span>
          </a>
          <div className="p-1 pr-12 flex gap-8 text-1xl">
            <a
              className=""
              onClick={() =>
                navigate("/home-page/", {
                  state: {
                    text: text,
                  },
                })
              }
            >
              Home
            </a>
            <a
              className=""
              onClick={() =>
                navigate("/home-page/about", {
                  state: {
                    text: text,
                  },
                })
              }
            >
              About
            </a>
            <a
              className="cursor-pointer"
              onClick={() =>
                navigate("/home-page/project/", {
                  state: {
                    text: text,
                  },
                })
              }
            >
              Project
            </a>
            <a
              className="cursor-pointer"
              onClick={() =>
                navigate("/home-page/contact/", {
                  state: {
                    text: text,
                  },
                })
              }
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="bg-[url('https://img.freepik.com/free-vector/watercolor-mountains-background_23-2149256619.jpg?t=st=1717055283~exp=1717058883~hmac=ed5c3e0708735496e59fa2737efc011af59f5ce660ad5600f55837a03fa253a0&w=996')] bg-cover bg-center  w-screen h-screen">
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="pl-12 pt-32 pb-6 text-7xl font-bold">HELLO!</h1>
            <p className="text-2xl">I'am a Full-Stack Web Developer.</p>
          </div>
        </div>
        <div className="flex pt-12 pl-64 justify-center items-center grid grid-cols-2  ">
          <h2 className="text-3xl font-bold ">About Me</h2>
          <h2 className="text-3xl font-bold ">Details</h2>

          <p className="text-1xl text-gray-700 pt-6 pr-48 ">
            Hello everyone, I'm Muhammad Fayash Wahyudha, a web developer from
            Jakarta, Indonesia. Currently, I'm a student at Purwadhika Digital
            Technology School, majoring in Full-stack Web Development. I'm
            passionate about my work and enjoy what I do. My job involves
            building websites that are functional, user-friendly, and
            attractive. I have skills in leadership, communication, teamwork,
            and adaptability to new challenges.
          </p>
          <p className="text-1xl text-gray-700 pt-6">
            <span className="font-bold">Name :</span>
            <br />
            Muhammad Fayash Wahyudha <br />
            <span className="font-bold">Age :</span>
            <br />
            19 <br />
            <span className="font-bold">Skills :</span>
            <br />
            HTML, CSS, JavaScript, React, Tailwind,
            <br /> BootStrap, NPM, TypeScript, And GitHub <br />
            <span className="font-bold">Location:</span>
            <br />
            Jakarta, Indonesia
          </p>
        </div>
        <div className="flex justify-center pt-12">
          <button
            className="border-2 text-1xl px-6 py-3 rounded text-slate-800 bg-white border-slate-800 hover:bg-slate-800 hover:text-white"
            onClick={() =>
              navigate("/home-page/contact/", {
                state: {
                  text: text,
                },
              })
            }
          >
            Contact Me
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
