"use client";
import Link from 'next/link'
import { useAtom } from "jotai";
import { loginAtom } from "@/hooks/login";

export function Nav() {
  const avatars = [
    {
      url: "https://cdn.discordapp.com/icons/1102970375731691612/3ad05c21fac033dbbd42e0abc6fd727d.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/302094807046684672/24f8bc7ec317e6eaaa0d8352720a7dfe.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/150074202727251969/cb08c87110c851b1bd68d110ae66c7d5.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/963760374543450182/85faa6e51b13dce982046149967a7320.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/951972846152859699/72092dc992ad18b79ea6f032689898ca.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/257785731072786435/a_529e3c65b6ca2b634a1bd735bef9ad7f.png?size=48",
    },
    {
      url: "https://cdn.discordapp.com/icons/964645662866173972/a_833235c7a3b4b3c9f7337fc2b8475058.png?size=48",
    },
  ];
  return (
    <div className="none-srollbar flex h-screen w-18 shrink-0 flex-col items-center gap-2 overflow-auto bg-gray-100 py-3">
      <Home />
      <div className="none-srollbar flex w-full flex-1 flex-col items-center gap-2 overflow-auto">
        {avatars.map((avatar, index) => {
          return (
            <div key={index}>
              <img src={avatar.url} className="h-10 w-10 rounded-xl" />
            </div>
          );
        })}
      </div>
      <Login />
    </div>
  );
}

function Home() {
  return (
    <Link
      href="/"
      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-indigo-500"
    >
      <svg
        aria-hidden="true"
        role="img"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        className="text-white"
      >
        <path
          fill="currentColor"
          d="M19.73 4.87a18.2 18.2 0 0 0-4.6-1.44c-.21.4-.4.8-.58 1.21-1.69-.25-3.4-.25-5.1 0-.18-.41-.37-.82-.59-1.2-1.6.27-3.14.75-4.6 1.43A19.04 19.04 0 0 0 .96 17.7a18.43 18.43 0 0 0 5.63 2.87c.46-.62.86-1.28 1.2-1.98-.65-.25-1.29-.55-1.9-.92.17-.12.32-.24.47-.37 3.58 1.7 7.7 1.7 11.28 0l.46.37c-.6.36-1.25.67-1.9.92.35.7.75 1.35 1.2 1.98 2.03-.63 3.94-1.6 5.64-2.87.47-4.87-.78-9.09-3.3-12.83ZM8.3 15.12c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.89 2.27-2 2.27Zm7.4 0c-1.1 0-2-1.02-2-2.27 0-1.24.88-2.26 2-2.26s2.02 1.02 2 2.26c0 1.25-.88 2.27-2 2.27Z"
        ></path>
      </svg>
    </Link>
  );
}

function Login() {
  const [show, setShow] = useAtom(loginAtom);
  return (
    <div
      onClick={() => setShow(true)}
      className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl bg-indigo-500 text-sm text-white"
    >
      登录
    </div>
  );
}
