import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setDisplay(
        document.body.scrollTop > 20 || document.documentElement.scrollTop > 20,
      );
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleClick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <>
      {display && (
        <div
          className="position-fixed bottom-0 end-0 m-2"
          role="button"
          tabIndex="0"
          title="Scroll to top!"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            className="bi bi-bug-fill"
            viewBox="0 0 16 16"
          >
            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
          </svg>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
