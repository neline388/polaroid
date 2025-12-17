import "./SettingsSection.css";

const SettingsSection = () => {
  return (
    <section id="services" className="page-section">

<div className="background-images">
  <img
    src={`${import.meta.env.BASE_URL}images/3.png`}
    className="bg-img img-3"
    alt="img3"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/2.png`}
    className="bg-img img-2"
    alt="img2"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/1.png`}
    className="bg-img img-1"
    alt="img1"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/4.png`}
    className="bg-img img-4"
    alt="img4"
  />
  <img
    src={`${import.meta.env.BASE_URL}images/5.png`}
    className="bg-img img-5"
    alt="img5"
  />
</div>
      <div className="columns-wrapper">
        <div className="text-columns">
          <p className="quote">
          There have been days when I wished to be separated from my body, but today wasn’t one of those days.
          This space is about exploration without restriction.
          </p>

          <p className="quote">
          The efficiency with which he paired the socks in the drawer was quite admirable.          
          Built to evolve, built to last.
          </p>

          <p className="quote">
          If you really strain your ears, you can just about hear the sound of no one giving a damn.
            The future belongs to those who create it.
          </p>
        </div>
      </div>

    </section>
  );
};

export default SettingsSection;
