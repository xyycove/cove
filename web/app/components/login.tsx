import { useState, useEffect } from "react";
import { Link } from "react-router";
import { useAtom } from "jotai";
import { loginAtom } from "@/hooks/login";
export function Login() {
  const [show, setShow] = useAtom(loginAtom);
  const [type, setType] = useState("sms");
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  if (!show) return;
  return (
    <>
      <div
        onClick={() => setShow(false)}
        className="fixed top-0 left-0 h-screen w-screen bg-black/50"
      ></div>
      <div className="fixed top-1/2 left-1/2 flex max-h-[90vh] w-sm max-w-[90vw] -translate-x-1/2 -translate-y-1/2 flex-col gap-3 rounded-lg bg-white p-6 select-none">
        <div className="flex items-center justify-between pb-2">
          <div className="text-lg font-bold">加入Discord</div>
          <div
            onClick={() => setShow(false)}
            className="-mr-1 cursor-pointer rounded-lg p-1 hover:bg-gray-100"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>手机号</div>
          <input maxLength={11} type="text" />
        </div>
        {type == "sms" ? (
          <div className="flex flex-col gap-1">
            <div>验证码</div>
            <div className="relative">
              <input maxLength={6} type="text" className="w-full" />
              <button
                onClick={() => setCountdown(60)}
                disabled={countdown > 0}
                className="disabled:cursor-not-allowe absolute top-2 right-3 cursor-pointer text-gray-700 hover:text-gray-900 disabled:cursor-not-allowed disabled:text-gray-500"
              >
                {countdown > 0 ? `${countdown}秒后重试` : "获取验证码"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <div>密码</div>
            <input maxLength={20} type="password" className="w-full" />
          </div>
        )}
        <div className="w-fit cursor-pointer text-sm text-indigo-500">
          {type == "sms" ? (
            <div onClick={() => setType("pwd")}>密码登录</div>
          ) : (
            <div onClick={() => setType("sms")}>验证码登录</div>
          )}
        </div>
        <button className="disabled:bg-indigo-400; flex cursor-pointer items-center justify-center rounded-lg bg-indigo-500 p-2 text-white disabled:cursor-not-allowed">
          登录/注册
        </button>
        <div className="text-center text-sm text-gray-500">
          登录/注册即代表同意
          <Link
            to="/user-agreement"
            target="_blank"
            className="mx-1 hover:underline"
          >
            用户协议
          </Link>
          和
          <Link
            to="/privacy-policy"
            target="_blank"
            className="ml-1 hover:underline"
          >
            隐私协议
          </Link>
        </div>
      </div>
    </>
  );
}
