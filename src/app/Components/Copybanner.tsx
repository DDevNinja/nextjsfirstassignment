type CopyBannerProps = {
  classList?: string[];
};

export default function CopyBanner({ classList = [] }: CopyBannerProps) {
  // ensure clean class string
  const classes = ["copy-banner", ...classList.filter(Boolean)].join(" ");

  return (
    <div className={classes}>
      <div className="container">
        <div className="row">
          <div className="copy col-12">
            {/* <div className="copy-banner-bg" aria-hidden="true">
              <img src="/assets/pictures/bg.png" alt="" />
            </div>

            <div className="copy-image" aria-hidden="true">
              <img src="/assets/pictures/image.png" alt="" />
            </div> */}

            <h1 className="jumbo-text">Connection selection pixel</h1>

            <h1 className="title">The quick brown fox jumps over</h1>

            <p className="sub-title">The quick brown fox jumps over</p>

            <p className="caption">The quick brown fox jumps over</p>

            <div className="btn-wrapper">
              <button type="button" className="left-btn">
                Button
              </button>

              <button type="button" className="right-btn">
                Button
              </button>

              <a href="#" className="learn-anchor">
                Learn More
                <span className="arrow" aria-hidden="true">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="16" cy="16" r="16" fill="#0639A6" />
                    <path
                      d="M9 16H23"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 9L23 16L16 23"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
