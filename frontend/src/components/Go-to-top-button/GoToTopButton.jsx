import arrowUp from "../../assets/arrow-up.png";

export default function GoToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={scrollToTop}
      type="button"
      title="Go to top"
      className="absolute right-0"
    >
      <img
        src={arrowUp}
        alt="arrow to go top"
        className="w-4 h-4 mr-4 mb-4 md:w-6 md:h-6"
      />
    </button>
  );
}
