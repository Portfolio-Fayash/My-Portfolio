import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const navigate = useNavigate();
  const text = "ada";

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

      <section className="bg-[url('https://img.freepik.com/free-vector/watercolor-mountains-background_23-2149256619.jpg?t=st=1717055283~exp=1717058883~hmac=ed5c3e0708735496e59fa2737efc011af59f5ce660ad5600f55837a03fa253a0&w=996')] bg-cover bg-center  w-screen h-screen">
        <div className="flex flex-col justify-center items-center ">
          <div className="flex flex-col justify-center items-center pt-40">
            <div className="border-2 border-slate-800 rounded bg-slate-300 pb-96 p-10 w-96 h-96 justify-center ">
              <h2 className="text-5xl font-bold justify-center items-center flex flex-col ">
                Contact Me!
              </h2>
              <div className="flex flex-col justify-center items-center gap-8 pt-10 ">
                <input
                  className="rounded py-2 px-6"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="rounded py-2 px-6 "
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="rounded py-2 px-6"
                  type="number"
                  placeholder="Phone"
                />
                <button className="border-2 border-slate-800 bg-slate-800 text-white  px-4 py-2 hover:bg-slate-600">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
