import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const text = "Contact Me";

  return (
    <main>
      {/* Nav Section */}
      <nav className="fixed">
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

      <section className="h-screen w-screen">
        <div className=" flex flex-col justify-center items-center justify-center items-center text-center h-full bg-[url('https://img.freepik.com/free-vector/watercolor-mountains-background_23-2149256619.jpg?t=st=1717055283~exp=1717058883~hmac=ed5c3e0708735496e59fa2737efc011af59f5ce660ad5600f55837a03fa253a0&w=996')] bg-cover bg-center  w-screen h-screen">
          <div className="flex justify-center items-center justify-center items-center h-full pt-44">
            <div className="text-slate-800 flex flex-col justify-right items-right text-right pr-24 ">
              <p className=" text-3xl ">Hello World, I'm</p>
              <h2 className="font-bold text-4xl ">Muhammad Fayash Wahyudha</h2>
              <p className="text-2xl">Full Stack Developer</p>
              <p className="text-2xl">Welcome To My Personal Website</p>
            </div>
            <div>
              <img
                className=" w-60 h-60 items-center shadow-2xl  rounded-full cover"
                src="https://cdn.discordapp.com/attachments/887154883512401932/1247063263754059787/WhatsApp_Image_2024-06-03_at_12.43.32.jpeg?ex=665ea9ab&is=665d582b&hm=d724c4630b7cd5eec1424af939c532d5aa7dd0d296609594686c40d5e6f709ff&"
                alt="poto"
              />
            </div>
          </div>
          <div>
            <button
              className="mb-44 border-2 text-1xl px-6 py-3 rounded text-slate-800 bg-white border-slate-800 hover:bg-slate-800 hover:text-white"
              onClick={() =>
                navigate("/home-page/about/", {
                  state: {
                    text: text,
                  },
                })
              }
            >
              About Me
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
