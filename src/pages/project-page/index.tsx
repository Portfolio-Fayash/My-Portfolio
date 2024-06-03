import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();
  const text = "ada";
  return (
    <main>
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

      <section className="">
        <div className="flex grid grid-cols-2 gap-10 pt-40 p-30 ">
          <div className="flex flex-col justify-center items-center box border-2  bg-black-600 w-full h-full ">
            <img src="" alt="espresso" />
            <h4>Espresso</h4>
            <a href="umkm-six.vercel.app">View Details</a>
          </div>
          <div className="flex flex-col justify-center items-center box border-2 w-full h-full bg-black-600 ">
            <img src="" alt="espresso" />
            <h4>Espresso</h4>
            <p>Rich and bold espresso made with the finest beans.</p>
          </div>
          <div className="flex flex-col justify-center items-center box border-2 w-full h-full bg-black-600 ">
            <img src="" alt="espresso" />
            <h4>Espresso</h4>
            <p>Rich and bold espresso made with the finest beans.</p>
          </div>
          <div className="flex flex-col justify-center items-center box border-2 w-full h-full bg-black-600 ">
            <img src="" alt="espresso" />
            <h4>Espresso</h4>
            <p>Rich and bold espresso made with the finest beans.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
