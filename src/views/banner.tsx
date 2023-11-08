import "video-react/dist/video-react.css";
import "../styles/menu.css";
import { Button } from "antd";
interface props {
  mobile?: boolean;
  desktop?: boolean;
  large?: boolean;
}
const BannerHome: React.FC<props> = ({ mobile, desktop }) => {
  return (
    <article
      className={
        mobile
          ? "col-12 col-ms-12 d-flex flex-column-reverse"
          : "col-md-12 col-lg-12 col-xl-12 col-xxl-12 p-4 d-flex "
      }
    >
      {mobile ? (
        <div className="  col-12 col-sm-12 col-md-12 px-2 ">
          <div
            className="col-12 col-ms-12 col-md-12  d-flex flex-wrap "
            style={desktop ? { fontSize: "2.5em" } : { fontSize: "6em" }}
          >
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              FIND
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              MORE
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              OF
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              THE
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              EVENTS
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              YOU
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              LOVE
            </span>
          </div>
        </div>
      ) : (
        <div className="  col-md-6 col-lg-6 col-xl-7 col-xxl-7  px-4 py-5 d-flex flex-column justify-content-end">
          <div
            className="col-11 col-ms-11 col-md-11 col-lg-11 col-xl-11 col-xxl-11 d-flex flex-wrap "
            style={desktop ? { fontSize: "2.5em" } : { fontSize: "6em" }}
          >
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              FIND
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              MORE
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              OF
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              THE
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              EVENTS
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              YOU
            </span>
            <span
              className={desktop ? "textBannerDesktop mx-1" : "textBanner mx-2"}
            >
              LOVE
            </span>
          </div>

          <p className="col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            Going out makes us feel good. With DICE’s personalised event picks,
            it’s easy to tap into your scene, whatever your taste.
          </p>

          <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <Button
              className=" mx-4  text-white bg-dark border border-dark"
              shape="round"
              icon={<span> DOWNLOA DICE</span>}
            />
          </div>
        </div>
      )}
      <div className="col-lg-1 col-xl-1 col-xxl-1"></div>
      <div
        className={
          mobile
            ? "col-12 col-ms-12 px-2 py-5"
            : " col-md-5 col-lg-4 col-xl-4 col-xxl-4  py-5 "
        }
      >
        <div
          className={
            mobile
              ? "col-12 col-ms-12 col-md-12"
              : "col-md-12 col-lg-12 col-xl-12 col-xxl-12  py-3"
          }
        >
          <video
            autoPlay
            muted
            loop
            controls={false}
            style={{ height: "100%", width: "100%" }}
          >
            <source src="https://player.vimeo.com/progressive_redirect/playback/829847725/rendition/1080p/file.mp4?loc=external&signature=69f95ec043d69f704c7c73bbba070f8af49fb23e114149baa54109baf88f5e0d" />
          </video>
        </div>
      </div>
    </article>
  );
};
export default BannerHome;
