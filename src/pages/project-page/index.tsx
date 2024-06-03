import { useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const navigate = useNavigate();
  const text = "ada";
  return (
    <main>
      <nav className="fixed">
        <div className="flex justify-between items-center pl-12  border-2 w-screen p-4 bg-slate-800 text-white border-3">
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

      <div className="bg-cover bg-[url('https://img.freepik.com/free-vector/watercolor-mountains-background_23-2149256619.jpg?t=st=1717055283~exp=1717058883~hmac=ed5c3e0708735496e59fa2737efc011af59f5ce660ad5600f55837a03fa253a0&w=996')]  w-screen h-screen text-slate-800 pt-20 ">
        <div className="flex justify-center items-center ">
          <h1 className="font-bold text-5xl pb-20">My Project</h1>
        </div>
        <div className="flex grid grid-cols-2 gap-10 pl-60 px-20">
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl border-3 text-black w-96 h-52 ">
            <img
              className="w-52 h-auto"
              src="https://cdn.discordapp.com/attachments/887154883512401932/1247070338739867688/image.png?ex=665eb042&is=665d5ec2&hm=37047943819b78a68bc85541bdb0bf8448f53c228a7edffbd0f0a8753aa88f31&"
              alt="img"
            />
            <h2 className="font-bold pt-4"> TO DO LIST</h2>
            <p>Web untuk membuat to do list</p>
            <button>Lihat</button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl border-3 text-black w-96 h-52 ">
            <img
              className="w-52 h-auto"
              src="https://cdn.discordapp.com/attachments/887154883512401932/1247057271138291782/image.png?ex=665ea416&is=665d5296&hm=43bc4d2718efd8d1e16a4b031d0ca73b11610f280beaf69cfe8da6da08f0faeb&"
              alt="img"
            />
            <h2 className="font-bold pt-4"> FayFood Salad</h2>
            <p>Web produk salad</p>
            <button>Lihat</button>
          </div>
          <div className="flex flex-col justify-center items-center bg-white rounded-lg shadow-2xl border-3 text-black w-96 h-52">
            <img
              className="w-52 h-auto"
              src="https://cdn.discordapp.com/attachments/887154883512401932/1247064812333043763/image.png?ex=665eab1c&is=665d599c&hm=a3569277e984bc9567420f5f3141fd6f9feda086b1d5599d3f32952235a41b9c&"
              alt="img"
            />
            <h2 className="font-bold pt-4"> Coffee Shop</h2>
            <p>Web produk kopi</p>
            <a href="https://fayfood-salad.vercel.app">Lihat</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectPage;
