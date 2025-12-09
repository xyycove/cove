import React from "react";
import ReactDOM from "react-dom/client";

// 定义 Toast 组件的 props 类型
interface ToastProps {
  message: string;
}

// 1. Toast UI 组件
const ToastComponent: React.FC<ToastProps> = ({ message }) => {
  return (
    <div
      className={`visible fixed bottom-5 left-1/2 z-9999 -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2 text-white opacity-100 shadow-lg transition-opacity duration-300`}
    >
      {message}
    </div>
  );
};

// 声明一个全局可用的 Root 变量和定时器
let toastRoot: ReactDOM.Root | null = null;
let timer: NodeJS.Timeout | null = null;

/**
 * 确保 Toast 容器存在于 DOM 中。
 */
function ensureToastRoot(): void {
  if (!toastRoot) {
    const div = document.createElement("div");
    div.id = "global-toast-root";
    document.body.appendChild(div);
    toastRoot = ReactDOM.createRoot(div);
  }
}

/**
 * 显示一个 Toast 提示。
 * @param message 要显示的消息内容。
 */
export const showToast = (message: string): void => {
  ensureToastRoot();

  if (timer) clearTimeout(timer);

  if (toastRoot) {
    toastRoot.render(<ToastComponent message={message} />);
  }

  timer = setTimeout(() => {
    if (toastRoot) {
      toastRoot.render(null);
    }
  }, 3000);
};
